import styles from "./CommentItem.module.css";

type Props = {
  comment: {
    id: string;
    author: string;
    message: string;
  };
};

export function CommentItem({ comment }: Props) {
  return (
    <article className={styles.comment}>
      <div className={styles.comment__author}>{comment.author}</div>
      <p className={styles.comment__message}>{comment.message}</p>
    </article>
  );
}
