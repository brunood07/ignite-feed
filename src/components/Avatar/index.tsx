import { ImgHTMLAttributes } from "react";

import styles from "./Avatar.module.css";

interface IAvatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar(avatarProps: IAvatar) {
  const { hasBorder = true, ...props } = avatarProps;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
