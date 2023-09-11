<script>
    export let data;
    const { all } = data;
</script>

<div class="h-screen dot">
    <div class="flex flex-col items-center justify-center h-screen">
        <h1>Data</h1>
        <div class="p-4 bg-indigo-100 rounded w-[700px] github-data">
            <ul>
                {#if all}
                    {#each all as repo}
                    <li class="flex items-center p-1">
                        <img class="flex-shrink-0 object-cover w-16 h-16" src="{repo.node.owner.avatarUrl}" alt="avatar">
                        <div class="flex-grow ml-4 text-left">
                          <strong>{repo.node.nameWithOwner}</strong>
                          <ul>
                            {#each repo.node.issues.edges as issue}
                              <li> ✨ {issue.node.title} (<a class="text-sky-600" href={issue.node.url}>Link</a>)</li>
                            {/each}
                          </ul>
                        </div>
                      </li>
                    {/each}
                {/if}
            </ul>
        </div>
    </div>
</div>
