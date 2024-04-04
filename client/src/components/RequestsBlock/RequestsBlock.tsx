import axios from "axios";
import React, { useState } from "react";
import style from "./RequestsBlock.module.css";

export default function RequestsBlock() {
  const [movieQuote, setMovieQuote] = useState("");

  const movieQuoteHandler = async (): Promise<void> => {
    try {
      const response = await axios.get("http://localhost:3003/api/v1/quote", {
        withCredentials: true,
      });
      setMovieQuote(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button className={style.button} onClick={movieQuoteHandler}>
        Получить цитату из фильма
      </button>
      <div className={style.quote}>{movieQuote}</div>
    </div>
  );
}
