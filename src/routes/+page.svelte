<script>
    export let data;
    const { all } = data;

    function refreshPage() {
        location.reload();
    }
</script>

<div class="h-screen dot">
    <div class="flex flex-col items-center justify-center h-screen">
        <button on:click={refreshPage} class="p-2 px-4 mb-4 text-white bg-blue-500 rounded">click for random issues</button>
        <div class="p-4 bg-indigo-100 rounded w-[1000px] github-data">
            <ul>
                {#if all}
                    {#each all as repo}
                        {#if repo.node.issues.edges.length > 0}
                        <li class="flex items-center p-1">
                            <img class="flex-shrink-0 object-cover w-16 h-16" src="{repo.node.owner.avatarUrl}" alt="avatar">
                            <div class="flex-grow ml-4 text-left">
                              <strong>{repo.node.nameWithOwner}</strong>
                              <ul>
                                    {#each repo.node.issues.edges as issue}
                                    <li class="text-sm"> ✨ {issue.node.title} <a class="text-xs text-sky-600" href={issue.node.url}> (Link)</a></li>
                                    {/each}
                              </ul>
                            </div>
                          </li>
                        {/if}
                    {/each}
                {/if}
            </ul>
        </div>
    </div>
</div>
