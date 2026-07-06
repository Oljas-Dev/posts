import styles from "./styles.module.css";

import logo from "./../../../public/logo.svg";
import Menu from "../menu";

function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="logo image" />

      <Menu />
    </header>
  );
}

export default Header;
