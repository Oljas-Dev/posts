import styles from "./styles.module.css";
import { useForm } from "react-hook-form";

import avatar from "./../../../public/avatar.svg";

function PostForm() {
  const { register } = useForm();

  return (
    <div className={styles.container}>
      <h2>Написать пост</h2>
      <form>
        <div className={styles.formContainer}>
          <img src={avatar} alt="avatar" />
          <div>
            <label htmlFor="title">Заголовок</label>
            <input
              type="text"
              placeholder="Заголовок"
              {...register("title", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />

            <label htmlFor="title">Текст поста</label>
            <input
              type="text"
              placeholder="Введите текст..."
              {...register("text", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
          </div>
        </div>

        <button type="submit">Публикация</button>
      </form>
    </div>
  );
}

export default PostForm;
