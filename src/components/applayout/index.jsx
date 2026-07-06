import styles from "./styles.module.css";

import Posts from "../posts";
import Header from "../header";
import PostForm from "../postForm";

function AppLayout() {
  return (
    <main className={styles.container}>
      <Header />
      <Posts />
      <PostForm />
    </main>
  );
}

export default AppLayout;
