import { Machine, assign } from "xstate"
import { worldProps, personProps } from "./props"

export function createPerson(id) {
  return Machine(
    {
      id: `person-${id}`,
      context: { x: 0, y: 0 },
      initial: "notInfected",
      states: {
        notInfected: {
          on: {
            INFECT: {
              target: "infected",
            },
          },
        },
        infected: {},
      },
      on: {
        TICK: {
          actions: ["idling"],
        },
      },
    },
    {
      actions: {
        idling: assign({
          x: ({ x }) => {
            const newX = x + Math.random() * 3 * (Math.random() < 0.5 ? -1 : 1)
            return Math.min(Math.max(newX, 0), worldProps.width - personProps.height)
          },
          y: ({ y }) => {
            const newY = y + Math.random() * 3 * (Math.random() < 0.5 ? -1 : 1)
            return Math.min(Math.max(newY, 0), worldProps.height - personProps.height)
          },
        }),
      },
    }
  )
}
