import { CommentsBlock } from "./../components/CommentsBlock/CommentsBlock";

export default function App() {
  return (
    <main
      style={{
        maxWidth: "var(--container-max-width)",
        margin: "0 auto",
        padding: "var(--space-8)",
      }}
    >
      <h1>Комментарии</h1>
      <CommentsBlock />
    </main>
  );
}
