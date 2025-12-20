import { html, state, dependent } from "@ramptix/postact";

export function createCounter() {
  const $count = state(0);
  const $label = dependent($count, (value) =>
    value == 0 ? "Click me!" : value.toString(),
  );

  return html`
    <button onclick=${() => $count.update((v) => v + 1)}>${$label}</button>
  `;
}
