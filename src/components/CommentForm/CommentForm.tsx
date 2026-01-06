import { useState } from "react";
import styles from "./CommentForm.module.css";

type Props = {
  onSubmit: (author: string, message: string) => void;
};

export function CommentForm({ onSubmit }: Props) {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    onSubmit(author.trim(), message.trim());
    setAuthor("");
    setMessage("");
  };

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit}>
      <input
        className={styles.commentForm__input}
        placeholder="Ваше имя"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <textarea
        className={styles.commentForm__textarea}
        placeholder="Комментарий"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        className={styles.commentForm__submit}
        type="submit"
        disabled={!author || !message}
      >
        Отправить
      </button>
    </form>
  );
}
