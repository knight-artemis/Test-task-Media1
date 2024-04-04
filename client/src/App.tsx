import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { QuestionType } from "./Types";
import RequestsBlock from "./components/RequestsBlock/RequestsBlock";
import TextBlock from "./components/TextBlock/TextBlock";

function App() {
  const questions: QuestionType[] = [
    {
      question: "Какого типа данных нет в JavaScript?",
      answerOptions: ["Number", "BigInt", "Integer", "Symbol"],
      correctAnswer: "Integer",
    },
    {
      question:
        "Какой хук React позволяет ссылаться на значение, не используемое при рендеринге?",
      answerOptions: ["useEffect", "useRef", "useCallback", "useState"],
      correctAnswer: "useRef",
    },
    {
      question:
        "Какого принцип ООП гласит, что новые абстрации могут быть созданы на основе существующих?",
      answerOptions: [
        "Инкапсуляция",
        "Наследование",
        "Абстракция",
        "Полиморфизм",
      ],
      correctAnswer: "Наследование",
    },
    {
      question: "Какой тег используется для создания ссылок в HTML",
      answerOptions: ["a", "href", "link", "src"],
      correctAnswer: "a",
    },
    {
      question: "Какого Utility Type не существует в TypeScript?",
      answerOptions: ["Partial", "Exclude", "ThisType", "Optional"],
      correctAnswer: "Optional",
    },
  ];

  return (
    <>
      {questions.map((el, index) => (
        <QuestionCard Question={el} Index={index} key={index} />
      ))}
      <button className="button"> Завершить тестирование </button>
      <RequestsBlock />
      <TextBlock />
    </>
  );
}

export default App;
