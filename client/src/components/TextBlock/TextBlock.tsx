import React from "react";
import style from "./TextBlock.module.css";

export default function TextBlock() {
  return (
    <>
      <h1>Ответы на текстовые вопросы</h1>
      <div className={style.textDiv}>
        1. Для реализации был использован React. В данному случае этот вариант
        очень удобен по нескольким причинам:
        <br />
        - опросник удобно раскладывается на несколько компонентов, используемых
        многократно, что позволяет легко масштабировать опросник и в последующем
        использовать мемоизацию
        <br />
        - React позволяет хранить состояния, что удобно для временного хранения
        ответов перед отправкой их на сервер;
        <br />
        2. Скрипты будут исполнены в следующей очередности:
        <br />
        js_scr_2.js
        <br />
        js_scr_5.js
        <br />
        js_scr_6.js
        <br />
        js_scr_1.js
        <br />
        js_scr_3.js
        <br />
        js_scr_4.js
        <br />
        js_scr_7.js
        <br />
        Порядок выполнения будет такой потому что:
        <br />
        - в первую очередь будут выполнены синхронные, так как они сразу попадут
        в callstack + они имеют блокирующий характер (пока они не будут
        выполнены, браузер не продолжит читать код дальше)
        <br />
        - далее будут выполнены асинхронные скрипты, попавшие в eventloop, в той
        очередности, в которой они будут загружаться
        <br />
        - после чего будут выполняться скрипты, подключенные через defer в том
        порядке, в котором они были подключены (особенность поведения defer)
        <br />
        3. Основное назначение шаблонизаторов JavaScript заключается в упрощении
        и структурировании процесса генерации динамического HTML контента на
        веб-страницах. Шаблонизаторы позволяют создавать шаблоны HTML кода с
        фрагментами, которые потом могут быть заполнены данными из JavaScript
        объектов или других источников данных. Это упрощает работу с
        динамическими данными и улучшает читаемость и поддерживаемость кода.
        <br />
        4. Promise - это объект, представляющий результат асинхронной операции.
        Он имеет три состояния: ожидание (pending), выполнение (fulfilled) и
        отклонение (rejected). Мы можем создать Promise, выполнить какую-то
        асинхронную операцию (например, запрос к серверу), и после завершения
        этой операции Promise вернет результат. Мы также можем цеплять
        обработчики с помощью методов .then() и .catch(), чтобы обработать
        успешное выполнение или ошибку.
        <br />
        async/await - это синтаксический сахар над Promise, который позволяет
        писать асинхронный код в более читаемом и линейном стиле. С помощью
        ключевого слова async мы можем объявить функцию, которая будет
        асинхронной, и внутри нее использовать ключевое слово await, которое
        ожидает выполнения Promise. Таким образом мы можем писать асинхронный
        код так, как будто он синхронный.
        <br />
        Основные отличия между ними:
        <br />
        - Синтаксические (в том числе обработка ошибок и задание цепочки
        операций, а так же наличие у Promise таких инструментов как
        Promise.all() и Promise.allSettled())
        <br />
        - Блокирующее поведение async\await (выполнение функции
        приостанавливается до завершение асинхронной операции, чего не
        происходит при использовании Promise)
        <br />
        - Читаемость кода (более высокая при использовании async\await)
        <br />
        Запросы реализованы в компоненте RequestsBlock, а так же на серверной
        части в файле quote.routes.
      </div>
    </>
  );
}