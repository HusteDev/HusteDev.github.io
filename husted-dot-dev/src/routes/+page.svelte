<script>
  import { onMount } from 'svelte';

  let showNav = false;

  onMount(() => {
    setTimeout(() => {
      showNav = true;
    }, 2000);
  });
</script>

{#if !showNav}
  <div class="splash">
    <h1>Welcome to Husted.dev</h1>
  </div>
{:else}
  <nav>
    <ul>
      <li><a href="/resume">Resume</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/games">Games</a></li>
      <li><a href="/reviews">Reviews</a></li>
    </ul>
  </nav>
{/if}

<style>
  .splash {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
    font-size: 2rem;
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
  }
</style>
