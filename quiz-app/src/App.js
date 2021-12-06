import "./App.css";
import AppRoutes from "./Routes/Routes";
import { MainContextProvider } from "./Context/RootContext";
import { useEffect, useState } from "react";

function App() {
  const [questionObjects1, setQuesionsObject1] = useState([
    {
      question: "",
      correctAnswer: null,
      answer: null,
      correctBool: null,
    },
  ]);
  const [questionObjects2, setQuesionsObject2] = useState([
    {
      question: "",
      correctAnswer: null,
      answer: null,
      correctBool: null,
    },
  ]);

  const [totalCorrectAnswers1, setTotalCorrectAnswers1] = useState(0);
  const [totalCorrectAnswers2, setTotalCorrectAnswers2] = useState(0);

  const [totalVisitedQues1, setTotalVisitedQues1] = useState(0);
  const [totalVisitedQues2, setTotalVisitedQues2] = useState(0);

  useEffect(() => {
    createQuestions1();
    createQuestions2();
  }, []);

  //operands ["*", "/", "+", "-"];

  //Function to find random number
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //Function to create custom questions
  const createQuestions1 = () => {
    let questionArray = [];
    for (let i = 0; i < 10; i++) {
      const index = randomNumber(0, 3);
      if (index === 0) {
        const num1 = randomNumber(1, 10);
        const num2 = randomNumber(1, 10);
        questionArray.push({
          question: `${num1} * ${num2} = ?`,
          correctAnswer: num1 * num2,
          answer: null,
          correctBool: null,
        });
      } else if (index === 1) {
        const num1 = randomNumber(1, 10);
        const num2 = randomNumber(1, 10);
        questionArray.push({
          question: `${num1} / ${num2} = ?`,
          correctAnswer: Math.round(num1 / num2),
          answer: null,
          correctBool: null,
        });
      } else if (index === 2) {
        const num1 = randomNumber(1, 10);
        const num2 = randomNumber(1, 10);
        questionArray.push({
          question: `${num1} + ${num2} = ?`,
          correctAnswer: num1 + num2,
          answer: null,
          correctBool: null,
        });
      } else {
        const num1 = randomNumber(1, 10);
        const num2 = randomNumber(1, 10);
        questionArray.push({
          question: `${num1} - ${num2} = ?`,
          correctAnswer: num1 - num2,
          answer: null,
          correctBool: null,
        });
      }
    }
    setQuesionsObject1(questionArray);
  };

  //Function to create custom questions
  const createQuestions2 = () => {
    let questionArray = [];
    for (let i = 0; i < 10; i++) {
      const index = randomNumber(0, 3);
      if (index === 0) {
        const num1 = randomNumber(1, 10);
        const num2 = randomNumber(1, 10);
        questionArray.push({
          question: `${num1} * ${num2} = ?`,
          correctAnswer: num1 * num2,
          answer: null,
          correctBool: null,
        });
      } else if (index === 1) {
        const num1 = randomNumber(1, 10);
        const num2 = randomNumber(1, 10);
        questionArray.push({
          question: `${num1} / ${num2} = ?`,
          correctAnswer: Math.round(num1 / num2),
          answer: null,
          correctBool: null,
        });
      } else if (index === 2) {
        const num1 = randomNumber(1, 10);
        const num2 = randomNumber(1, 10);
        questionArray.push({
          question: `${num1} + ${num2} = ?`,
          correctAnswer: num1 + num2,
          answer: null,
          correctBool: null,
        });
      } else {
        const num1 = randomNumber(1, 10);
        const num2 = randomNumber(1, 10);
        questionArray.push({
          question: `${num1} - ${num2} = ?`,
          correctAnswer: num1 - num2,
          answer: null,
          correctBool: null,
        });
      }
    }
    setQuesionsObject2(questionArray);
  };

  //Function to reset states
  const clearState = () => {
    setQuesionsObject1([
      {
        question: "",
        correctAnswer: null,
        answer: null,
        correctBool: null,
      },
    ]);
    setQuesionsObject2([
      {
        question: "",
        correctAnswer: null,
        answer: null,
        correctBool: null,
      },
    ]);

    setTotalCorrectAnswers1(0);
    setTotalCorrectAnswers2(0);

    setTotalVisitedQues1(0);
    setTotalVisitedQues2(0);
  };

  return (
    <MainContextProvider
      questionObjects1={questionObjects1}
      questionObjects2={questionObjects2}
      totalCorrectAnswers1={totalCorrectAnswers1}
      totalCorrectAnswers2={totalCorrectAnswers2}
      totalVisitedQues1={totalVisitedQues1}
      totalVisitedQues2={totalVisitedQues2}
      updateQuesionsObject1={(value, index) => {
        let newArr = questionObjects1;
        newArr[index] = value;
        setQuesionsObject1(newArr);
      }}
      updateQuesionsObject2={(value, index) => {
        let newArr = questionObjects2;
        newArr[index] = value;
        setQuesionsObject2(newArr);
      }}
      updateTotalCorrectAnswers1={() => {
        setTotalCorrectAnswers1(totalCorrectAnswers1 + 1);
      }}
      updateTotalCorrectAnswers2={() => {
        setTotalCorrectAnswers2(totalCorrectAnswers2 + 1);
      }}
      updateTotalVisitedQues1={() => {
        setTotalVisitedQues1(totalVisitedQues1 + 1);
      }}
      updateTotalVisitedQues2={() => {
        setTotalVisitedQues2(totalVisitedQues2 + 1);
      }}
      clearState={clearState}
    >
      <AppRoutes />
    </MainContextProvider>
  );
}

export default App;
