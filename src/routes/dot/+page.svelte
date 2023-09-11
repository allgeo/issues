<script>
    import { onMount } from 'svelte';
    import anime from 'animejs';
    import Typed from 'typed.js';

    let placeholderText = "";
    let placeholderIndex = 0;
    let arrayIndex = 0;
    const verbs = [
            "Achieve", "Aspire", "Believe", "Build",
            "Challenge", "Conquer", "Create", "Dream",
            "Empower", "Endure", "Evolve", "Excel",
            "Explore", "Fight", "Grow", "Hope",
            "Ignite", "Improve", "Inspire", "Lead",
            "Learn", "Love", "Motivate", "Overcome",
            "Persist", "Pursue", "Reinvent", "Rise",
            "Strive", "Succeed", "Transform", "Unite",
            "Uplift", "Visualize", "Win", "Wonder"
        ];
        
    onMount(() => {
      anime({
        targets: '.increment',
        innerHTML: [0, 2023],
        round: 1,
        easing: 'easeInOutExpo'
      });

      var typed = new Typed('.typed', {
            strings: ["build stuff", "learn", "travel", "workout"],
            typeSpeed: 50,
            loop: true,
        });
  
      function typePlaceholder() {
        if (placeholderIndex < verbs[arrayIndex].length) {
          placeholderText += verbs[arrayIndex].charAt(placeholderIndex);
          placeholderIndex++;
          setTimeout(typePlaceholder, 30);
        } else {
          setTimeout(deletePlaceholder, 800);
        }
      }
  
      function deletePlaceholder() {
        if (placeholderIndex >= 0) {
          placeholderText = placeholderText.substring(0, placeholderIndex - 1);
          placeholderIndex--;
          setTimeout(deletePlaceholder, 30);
        } else {
          arrayIndex = (arrayIndex + 1) % verbs.length;
          setTimeout(typePlaceholder, 500);
        }
      }
  
      typePlaceholder();

    });
  </script>
  
  <div class="h-screen dot">
    <div class="flex flex-col justify-center items-center h-[51vh]">
      <input type="text" class="w-auto p-2 text-center bg-gray-200 border border-gray-200 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent" placeholder={placeholderText} value="" />
      <br>
        <p class="increment">0</p>
        <p class="">A developer and student that loves to <span class="underline typed"></span></p>
    </div>
  </div>
  