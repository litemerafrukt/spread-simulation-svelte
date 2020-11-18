const worldHeight = 500;
const worldWidth = 500;
const numberOfInhabitants = 250;

export const worldProps = {
  height: worldHeight,
  width: worldWidth,
  numberOfInhabitants,
  inhabitants: []
};

export const personProps = {
  width: 6,
  height: 16
};

export const sicknessProps = {
  preContagious: 3000,
  contagious: 3000,
  sick: 7000,
  immune: 9000,
  spreadArea: 15,
  deathrate: 0.003
};

export const colors = {
  contagious: "lightpink",
  sick: "red",
  immune: "lightgreen"
};
