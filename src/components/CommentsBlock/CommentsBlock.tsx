import { useState, useCallback } from "react";
import { CommentForm } from "../CommentForm/CommentForm";
import { CommentItem } from "../CommentItem/CommentItem";
import styles from "./CommentsBlock.module.css";

interface Comment {
  id: string;
  author: string;
  message: string;
}

export function CommentsBlock() {
  const [comments, setComments] = useState<Comment[]>([]);

  const addComment = useCallback((author: string, message: string) => {
    if (!author.trim() || !message.trim()) {
      return;
    }

    const newComment: Comment = {
      id: crypto.randomUUID(),
      author: author.trim(),
      message: message.trim(),
    };

    setComments((prev) => [...prev, newComment]);
  }, []);

  return (
    <section className={styles.comments}>
      <CommentForm onSubmit={addComment} />

      {comments.length === 0 ? (
        <p className={styles.comments__empty}>
          Комментариев пока нет
        </p>
      ) : (
        <div className={styles.comments__list}>
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </section>
  );
}

