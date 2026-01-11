import { useState, useCallback } from "react";
import styles from "./CommentForm.module.css";

interface CommentFormProps {
  onSubmit: (author: string, message: string) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid = author.trim().length > 0 && message.trim().length > 0;

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isFormValid) {
        return;
      }

      onSubmit(author.trim(), message.trim());

      setAuthor("");
      setMessage("");
    },
    [author, message, isFormValid, onSubmit]
  );

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit}>
      <input
        className={styles.commentForm__input}
        type="text"
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
        disabled={!isFormValid}
      >
        Отправить
      </button>
    </form>
  );
}
