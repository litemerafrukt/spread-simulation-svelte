<script>
  import { interpret } from "xstate"
  import { World } from "./machines/world";
  import { worldProps } from "./machines/props";
  import Person from "./Person.svelte"

  const worldHeight = worldProps.height
  const worldWidth = worldProps.width

  let personServices = []

  interpret(World)
    .onTransition(state => {
      console.log(state.value)
      personServices = state.context.inhabitants
    })
    .start()
</script>

<main>
  <svg viewBox="0 0 {worldWidth} {worldHeight}" width="{worldWidth}" height="{worldHeight}"
    xmlns="http://www.w3.org/2000/svg" stroke="#777" fill="#aaa">
    {#each personServices as personService, i}
      <Person personService={personService}  />
    {/each}
  </svg>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  svg {
    border: 1px solid #aaa;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
