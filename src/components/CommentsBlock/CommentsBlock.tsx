import { useState } from "react";
import { CommentForm } from "../CommentForm/CommentForm";
import { CommentItem } from "../CommentItem/CommentItem";
import styles from "./CommentsBlock.module.css";

export function CommentsBlock() {
  const [comments, setComments] = useState<
    { id: string; author: string; message: string }[]
  >([]);

  const addComment = (author: string, message: string) => {
    setComments((prev) => [
      ...prev,
      { id: crypto.randomUUID(), author, message },
    ]);
  };

  return (
    <section className={styles.comments}>
      <CommentForm onSubmit={addComment} />

      <div className={styles.comments__list}>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}
