import { SECRET_GITHUB_TOKEN } from '$env/static/private';

const parameter = {
    stars_start: '5000',
    stars_end: '100000',
    language: 'python',
    first_repo: '50',
    first_issue: '3',
    label: "good first commit"
}

// const queryIndividualRepo = `{
//     repository(owner: "kubernetes", name: "kubernetes") {
//       nameWithOwner
//       issues(states: OPEN, labels: ["bug"], first: ${parameter.first_issue}) {
//         edges {
//           node {
//             title
//             url
//           }
//         }
//       }
//       owner {
//         avatarUrl
//       }
//     }
//   }`;


const queryAllRepos = `{
    search(query: "language:${parameter.language}", type: REPOSITORY, first: ${parameter.first_repo}) {
        edges {
          node {
            ... on Repository {
              nameWithOwner
              stargazers {
                totalCount
              }
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
        body: JSON.stringify({ query: queryAllRepos })
    });
    const data = await res.json();

    const all = data.data.search.edges;
    // const allTest = data.data.search.edges[0].node.issues;
    // const repository = data.data.search.edges[2].node.nameWithOwner;
    // const issues_title = data.data.search.edges[2].node.issues.edges[0].node.title;
    // const issues_url = data.data.search.edges[2].node.issues.edges[0].node.url;

    // console.log(allTest)
    // console.log(repository)
    // console.log(issues_title)
    // console.log(issues_url)

    // console.log(data.data.search.edges[2].node.owner.avatarUrl)

    return {
        all
    };
};