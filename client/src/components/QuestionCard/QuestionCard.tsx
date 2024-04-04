import React, { useState } from "react";
import Reply from "../Reply/Reply";
import { QuestionType } from "../../Types";
import style from "./QuestionCard.module.css";

export default function QuestionCard({
  Question,
  Index,
}: {
  Question: QuestionType;
  Index: number;
}): JSX.Element {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className={style.question}>
      <h3 className={style.questionHeading}>
        {Index + 1}. {Question.question}
      </h3>
      <div className={style.optionsDiv}>
        {Question.answerOptions.map((el, index) => (
          <Reply
            Option={el}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
