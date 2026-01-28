import { dependent, state } from "@postact/core";

export function Counter({ initial }: { initial: number }) {
  const $count = state<number>(initial);

  function callback() {
    $count.update((v) => v + 1);
  }

  return (
    <button
      onclick={callback}
      style={{
        transition: "all 100ms ease",
        scale: dependent($count, (count) => (count > 0 ? "3" : "1")),
        fontWeight: dependent($count, (count) =>
          count > 0 ? "bold" : "normal",
        ),
      }}
    >
      {$count}
    </button>
  );
}
