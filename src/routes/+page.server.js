import { SECRET_GITHUB_TOKEN } from '$env/static/private';

const parameter = {
    stars_start: '10000',
    stars_end: '100000',
    language: 'c',
    first_repo: '5',
    first_issue: '3',
}

const query = `{
    search(query: "stars:${parameter.stars_start}..${parameter.stars_end} language:${parameter.language}", type: REPOSITORY, first: ${parameter.first_repo}) {
        edges {
          node {
            ... on Repository {
              nameWithOwner
              issues(states: OPEN, first: ${parameter.first_issue}) {
                edges {
                  node {
                    title
                    url
                  }
                }
              }
              owner {
                avatarUrl
              }
            }
          }
        }
      }
}`;

export const load = async ( {fetch}) => {
    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `bearer ${SECRET_GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query })
    });
    const data = await res.json();

    const all = data.data.search.edges;
    const repository = data.data.search.edges[2].node.nameWithOwner;
    const issues_title = data.data.search.edges[2].node.issues.edges[0].node.title;
    const issues_url = data.data.search.edges[2].node.issues.edges[0].node.url;

    // console.log(all)
    // console.log(repository)
    // console.log(issues_title)
    // console.log(issues_url)

    console.log(data.data.search.edges[2].node.owner.avatarUrl)

    return {
        all
    };
};
