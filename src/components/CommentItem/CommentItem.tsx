import styles from "./CommentItem.module.css";

interface Comment {
  id: string;
  author: string;
  message: string;
}

interface CommentItemProps {
  comment: Comment;
}

export function CommentItem({ comment }: CommentItemProps) {
  return (
    <article className={styles.comment}>
      <div className={styles.comment__author}>
        {comment.author}
      </div>

      <p className={styles.comment__message}>
        {comment.message}
      </p>
    </article>
  );
}

