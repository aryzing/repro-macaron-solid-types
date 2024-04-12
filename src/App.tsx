import { styled } from "@macaron-css/solid";

const P = styled("p", {
  base: {
    color: "red",
  },
});

export function App() {
  return (
    <>
      <h1>My Title</h1>
      <P>hi</P>
    </>
  );
}
