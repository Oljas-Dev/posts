import styles from "./styles.module.css";

function Menu() {
  return (
    <menu className={styles.container}>
      <ul>
        <li>
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#">Музыка</a>
        </li>
        <li>
          <a href="#">Сообщества</a>
        </li>
        <li>
          <a href="#">Друзья</a>
        </li>
      </ul>
    </menu>
  );
}

export default Menu;
