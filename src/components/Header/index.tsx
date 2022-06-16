import IgniteLogo from "../../assets/ignite-logo.png";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logo do Ignite Feed" />
      <strong className={styles.title}>Ignite Feed</strong>
    </header>
  );
}
