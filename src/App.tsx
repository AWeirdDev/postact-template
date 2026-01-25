import { state } from "@postact/core";

export function Counter({ initial }: { initial: number }) {
  const count = state<number>(initial);
  console.log(count);

  function callback() {
    count.update((v) => v + 1);
  }

  return <button onclick={callback}>{count}</button>;
}
