export function setupCounter(element: HTMLButtonElement) {
  console.log(import.meta.env.VITE_FCM);
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
