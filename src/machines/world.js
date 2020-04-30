import { Machine, assign, spawn, send } from "xstate"
import { createPerson } from "./person"
import { worldProps, personProps } from "./props"

export const World = Machine(
  {
    id: "world",
    context: worldProps,
    initial: "startup",
    states: {
      startup: {
        on: {
          "": {
            target: "running",
            actions: ["spawnInhabitants", "infectFiveFirst"],
          },
        },
      },
      running: {
        activities: "tick",
      },
    },
  },
  {
    actions: {
      spawnInhabitants: assign({
        inhabitants: (context) =>
          Array.from({ length: context.numberOfInhabitants }, (_, i) =>
            spawn(
              createPerson(i).withContext({
                x: Math.random() * (context.width - personProps.width),
                y: Math.random() * (context.height - personProps.height),
              })
            )
          ),
      }),
      infectFiveFirst: ({ inhabitants }) => {
        for (let i = 0; i < 5; i++) {
          inhabitants[i].send("INFECT")
        }
      },
    },
    activities: {
      tick: ({ inhabitants }) => {
        const tick = setInterval(
          () => inhabitants.forEach((person) => person.send("TICK")),
          50
        )

        return () => clearInterval(tick)
      },
    },
  }
)
