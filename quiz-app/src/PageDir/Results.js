import React from "react";
import { useStore } from "../Context/RootContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const {
    questionObjects1,
    questionObjects2,
    totalCorrectAnswers1,
    totalCorrectAnswers2,
    clearState,
  } = useStore();

  const navigate = useNavigate();

  window.onbeforeunload = function (event) {
    clearState();
    navigate("/");
    return window.confirm("Your data will be lost!");
  };

  return (
    <div className="">
      <p className="lg:text-4xl md:text-3xl xs:text-2xl text-center mt-5">
        Results
      </p>
      <div
        style={{ borderColor: "black", borderWidth: 1 }}
        className="p-4 mt-8 xs:w-1/2 lg:w-1/5 mx-auto text-center"
        onClick={() => {
          clearState();
          navigate("/");
        }}
      >
        <p className="lg:text-3xl md:text-2xl xs:text-xl">Restart Quiz </p>
      </div>
      <div className="md:flex mt-10">
        <div className="xs:mb-10 md:mb-0 w-full mx-4">
          <p className="lg:text-3xl md:text-2xl xs:text-xl text-center">
            Quiz 1
          </p>
          <div>
            <div className="flex w-full text-center mt-5">
              <p className="lg:text-2xl md:text-xl xs:text-lg">
                Your total score in Quiz 1 is
              </p>
              <p className="text-blue-500 lg:text-2xl md:text-xl xs:text-l ml-1">
                {totalCorrectAnswers1}/10.
              </p>
              <p className="lg:text-2xl md:text-xl xs:text-lg ml-1">
                List of questions is below:
              </p>
            </div>
            <ul>
              {questionObjects1.map((ques) => (
                <li
                  className={` ${
                    ques.correctBool ? "correctLi" : "wrongLi"
                  } text-left my-2 p-2`}
                >
                  <p>Question: {ques.question}</p>
                  <p>Your Answer: {ques.answer}</p>
                  <p>Correct Answer: {ques.correctAnswer}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 xs:w-1/2 lg:w-2/5 mx-auto text-center">
            <p className="lg:text-3xl md:text-2xl xs:text-xl">
              Score: {totalCorrectAnswers1}/10
            </p>
          </div>
        </div>

        <div className="w-full mx-4">
          <p className="lg:text-3xl md:text-2xl xs:text-xl text-center">
            Quiz 2
          </p>
          <div>
            <div className="flex w-full text-center mt-5">
              <p className="lg:text-2xl md:text-xl xs:text-lg">
                Your total score in Quiz 2 is
              </p>
              <p className="text-blue-500 lg:text-2xl md:text-xl xs:text-l ml-1">
                {totalCorrectAnswers2}/10.
              </p>
              <p className="lg:text-2xl md:text-xl xs:text-lg ml-1">
                List of questions is below:
              </p>
            </div>
            <ul>
              {questionObjects2.map((ques) => (
                <li
                  className={` ${
                    ques.correctBool ? " correctLi border-green-300" : "wrongLi"
                  } text-left my-2 p-2`}
                >
                  <p>Question: {ques.question}</p>
                  <p>Your Answer: {ques.answer}</p>
                  <p>Correct Answer: {ques.correctAnswer}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 xs:w-1/2 lg:w-2/5 mx-auto text-center">
            <p className="lg:text-3xl md:text-2xl xs:text-xl">
              Score: {totalCorrectAnswers2}/10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
