export function helloWorld(name: string) {
  console.log(`Hello, ${name}`);

  return;
}

export function goodBye(name: string) {
  console.log(`Bye, ${name}`);

  return;
}

export function APlusB(a: number, b: number) {
  console.log(`${a} + ${b} = ${a + b}`);

  return;
}

export default {
  helloWorld,
  goodBye,
  APlusB,
};
