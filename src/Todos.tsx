import { For, ref, state } from "@postact/core";

export function Todos() {
  const $todos = state<string[]>([]);
  const $inputRef = ref<HTMLInputElement>();

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    $todos.update((v) => [...v, $inputRef.value!.value]);
    $inputRef.value!.value = "";
  }

  return (
    <div>
      <form onsubmit={handleSubmit}>
        <input type="text" ref={$inputRef} placeholder="Add todos..." />
        <button type="submit">+ Add</button>
      </form>

      <ul>
        <For each={$todos}>
          {(todo) => <li style={{ textAlign: "start" }}>{todo}</li>}
        </For>
      </ul>
    </div>
  );
}
