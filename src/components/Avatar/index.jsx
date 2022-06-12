import styles from "./Avatar.module.css";

export function Avatar(props) {
  const { src, hasBorder = true } = props;

  return (
    <img
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
