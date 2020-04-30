import { readable } from "svelte/store"

export const readState = interpretedMachine =>
  readable(null, set => {
    interpretedMachine.onTransition(state => {
      set(state)
    })

    return () => {}
  })
