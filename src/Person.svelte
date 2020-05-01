<script>
  export let personService
  import { worldProps, personProps, colors } from "./machines/props"
  import { readState } from "./readMachine";

  let x = 20
  let y = 20
  let fill = "#000"

  let state = readState(personService)

  $: if ($state) {
    x = $state.context.x
    y = $state.context.y
    fill = colors[$state.value] || "#aaa"
  }
</script>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="{x}" y="{y}"
  width="{personProps.width}" height="{personProps.height}" viewBox="0, 0, 40, 95">
  <g id="Layer_1">
    <g>
      <path
        d="M31.3,30.9 L8.7,30.9 C3.9,30.9 -0,34.8 -0,39.6 L-0,59.5 C-0,63.7 3.4,67.2 7.7,67.2 L7.7,87 C7.7,91.5 11.3,95.1 15.8,95.1 L24.2,95.1 C28.7,95.1 32.3,91.5 32.3,87 L32.3,67.2 C36.5,67.2 40,63.7 40,59.5 L40,39.5 C39.9,34.7 36,30.9 31.3,30.9 z"
        fill="{fill}" />
      <path
        d="M33.5,13.5 C33.5,20.956 27.456,27 20,27 C12.544,27 6.5,20.956 6.5,13.5 C6.5,6.044 12.544,-0 20,-0 C27.456,-0 33.5,6.044 33.5,13.5 z"
        fill="{fill}" />
    </g>
  </g>
</svg>
