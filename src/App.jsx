import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./styles/global.css";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bruno Domingues"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum libero suscipit rem sunt, excepturi itaque dolorem laudantium vero soluta veniam quidem enim, aliquam qui adipisci saepe, iste ducimus. Aliquam, inventore."
          />
          <Post author="Teste" content="Um novo post" />
        </main>
      </div>
    </>
  );
}
