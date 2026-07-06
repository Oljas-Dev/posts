import styles from "./styles.module.css";
import { useForm } from "react-hook-form";

import avatar from "./../../../public/avatar.svg";
import axios from "axios";
import { BASE_URL } from "../posts";

function PostForm() {
  const { register, handleSubmit } = useForm();

  function createPost(data) {
    axios.post(`${BASE_URL}/posts`, data);
  }

  return (
    <div className={styles.container}>
      <h2>Написать пост</h2>
      <form onSubmit={handleSubmit(createPost)}>
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
