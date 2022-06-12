import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        alt="Imagem do usuário"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/brunood07.png" />

        <strong>Bruno Domingues</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
