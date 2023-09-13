<script>
    import { onMount } from 'svelte';
    import anime from 'animejs';

    export let data;
    const { all } = data;

    function refreshPage() {
        location.reload();
    }
</script>

<div class="flex flex-col h-screen mt-44 dot">
    <div class="flex items-center justify-center flex-shrink-0">
        <button on:click={refreshPage} class="p-2 px-4 mb-4 text-white bg-blue-500 rounded">
            click for random issues
        </button>
    </div>
    <div class="flex-grow overflow-y-auto">
        <div class="flex flex-col items-center p-4">
            <div class="max-w-4xl rounded github-data">
                <ul>
                    {#if all}
                        {#each all as repo}
                            {#if repo.node.issues.edges.length > 0}
                            <li class="flex items-center p-4 m-2 bg-gray-200 rounded repo-data">
                                    <img class="flex-shrink-0 object-cover w-16 h-16 rounded" src="{repo.node.owner.avatarUrl}" alt="avatar">
                                    <div class="flex-grow ml-4">
                                      <div class="flex justify-between">
                                          <strong>{repo.node.nameWithOwner}</strong>
                                          <span>✨ {repo.node.stargazers.totalCount}</span>
                                      </div>
                                      <ul>
                                            {#each repo.node.issues.edges as issue}
                                            <li class="text-xs break-words max-w-[600px]"> 👉 {issue.node.title} <a class="text-xs text-sky-600" href={issue.node.url}> 🔗</a></li>
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
</div>
