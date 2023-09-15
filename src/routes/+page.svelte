<script>
    import { onMount } from 'svelte';
    import Open from './Open.svelte';

    export let data;
    const { all } = data;

    function refreshPage() {
        location.reload();
    }

    onMount(() => {
      document.body.style.overflow = 'hidden';
    });
</script>

<div class="flex flex-col h-screen mt-36">

    <div class="flex items-center justify-center flex-shrink-0 mb-6">
        <button on:click={refreshPage} class="p-2 px-4 text-black rounded-full ">click <span class="text-green-500 underline underline-offset-4">here</span> to show me random</button>
        <Open on:click={refreshPage}/>
        <button on:click={refreshPage} class="p-2 px-4 text-black rounded-full ">issues</button>
    </div>
    <div class="flex-grow overflow-y-auto">
        <div class="flex flex-col items-center p-4">
        <h5 class="text-xs opacity-25">🚧 still under construction 🚧</h5> <br><br>

            <div class="max-w-full rounded github-data">
                
                <ul class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {#if all}
                        {#each all as repo}
                            {#if repo.node.issues.edges.length > 0}
                            <li class="flex items-center p-4 bg-gray-200 rounded repo-data max-w-[600px]">
                                    <img class="flex-shrink-0 object-cover w-16 h-16 rounded" src="{repo.node.owner.avatarUrl}" alt="avatar">
                                    <div class="flex-grow ml-4">
                                        <div class="flex justify-between">
                                            <strong class="text-sm break-words max-w-[600px]">{repo.node.nameWithOwner}</strong>
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
