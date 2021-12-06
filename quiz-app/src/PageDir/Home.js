import React, { useState, useRef } from "react";
import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { useStore } from "../Context/RootContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const quizRef = useRef();
  const {
    questionObjects1,
    questionObjects2,
    totalVisitedQues1,
    totalVisitedQues2,
    updateQuesionsObject1,
    updateQuesionsObject2,
    updateTotalCorrectAnswers1,
    updateTotalCorrectAnswers2,
    updateTotalVisitedQues1,
    updateTotalVisitedQues2,
  } = useStore();
  const navigate = useNavigate();

  function preventBack() {
    window.history.forward();
  }
  setTimeout(preventBack(), 0);
  window.onunload = function () {};

  const [startQuiz1, setStartQuiz1] = useState(false);
  const [startQuiz2, setStartQuiz2] = useState(false);
  const [currentQuesIndex1, setCurrentQuesIndex1] = useState(0);
  const [currentQuesIndex2, setCurrentQuesIndex2] = useState(0);
  const [textInputValue1, setTextInputValue1] = useState("");
  const [textInputValue2, setTextInputValue2] = useState("");

  const executeScroll = () => quizRef.current.scrollIntoView();

  return (
    <div className="mx-auto w-100 text-center mt-14 container">
      <div>
        <h1 className="lg:text-6xl md:text-5xl xs:text-3xl">
          Let's practice Maths
        </h1>
      </div>
      <div className="flex subContainer items-center justify-around mt-28">
        <PlusOutlined style={{ fontSize: 100 }} />

        <MinusOutlined style={{ fontSize: 100 }} />

        <CloseOutlined style={{ fontSize: 100 }} />
      </div>
      <div
        style={{ borderColor: "black", borderWidth: 1 }}
        className="p-4 mt-28 xs:w-1/2 lg:w-2/5 mx-auto"
        onClick={executeScroll}
      >
        <p className="lg:text-3xl md:text-2xl xs:text-xl"> Take a Quiz</p>
      </div>
      <div className="p-4 mt-28 mx-auto w-3/5">
        <p className="lg:text-2xl md:text-xl xs:text-lg text-color-gray-100">
          Without mathematics, there’s nothing you can do. Everything around you
          is mathematics. Everything around you is numbers. <br />— Shakuntala
          Devi
        </p>
      </div>
      <ArrowDownOutlined
        style={{ fontSize: 100 }}
        className="mt-28 p-4"
        onClick={executeScroll}
      />
      <div ref={quizRef} className="my-52">
        <p className="lg:text-6xl md:text-5xl xs:text-3xl">Quiz</p>
        <div className="flex ites-center justify-center">
          {!startQuiz1 && (
            <div
              style={{ borderColor: "black", borderWidth: 1 }}
              className="p-4 mt-28 xs:w-1/2 lg:w-2/5 mx-auto"
              onClick={() => setStartQuiz1(true)}
            >
              <p className="lg:text-3xl md:text-2xl xs:text-xl">Start Quiz 1</p>
            </div>
          )}
          {!startQuiz2 && (
            <div
              style={{ borderColor: "black", borderWidth: 1 }}
              className="p-4 mt-28 xs:w-1/2 lg:w-2/5 mx-auto"
              onClick={() => setStartQuiz2(true)}
            >
              <p className="lg:text-3xl md:text-2xl xs:text-xl">Start Quiz 2</p>
            </div>
          )}
        </div>
        <div className="md:flex mt-10">
          {startQuiz1 && (
            <div className="w-full md:mr-10 xs:mb-10 md:mb-0">
              <p className="lg:text-3xl md:text-2xl xs:text-xl">Quiz 1</p>
              {totalVisitedQues1 !== 9 ? (
                <div
                  className="text-left shadow-xl p-4 rounded-lg
              "
                >
                  <p
                    className="lg:text-3xl md:text-2xl xs:text-xl py-3"
                    style={{ color: "blue" }}
                  >
                    {questionObjects1[currentQuesIndex1]?.question}
                  </p>
                  <input
                    placeholder="Answer"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={textInputValue1}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        if (
                          parseInt(e.target.value) ===
                          questionObjects1[currentQuesIndex1].correctAnswer
                        ) {
                          console.log("correct");
                          updateQuesionsObject1(
                            {
                              question:
                                questionObjects1[currentQuesIndex1]?.question,
                              correctAnswer:
                                questionObjects1[currentQuesIndex1]
                                  .correctAnswer,
                              answer: parseInt(e.target.value),
                              correctBool: true,
                            },
                            currentQuesIndex1
                          );
                          updateTotalCorrectAnswers1();
                        } else {
                          updateQuesionsObject1(
                            {
                              question:
                                questionObjects1[currentQuesIndex1]?.question,
                              correctAnswer:
                                questionObjects1[currentQuesIndex1]
                                  .correctAnswer,
                              answer: parseInt(e.target.value),
                              correctBool: false,
                            },
                            currentQuesIndex1
                          );
                        }
                        setTextInputValue1("");
                        if (currentQuesIndex1 !== 9) {
                          updateTotalVisitedQues1();
                          setCurrentQuesIndex1(currentQuesIndex1 + 1);
                        }
                      }
                    }}
                    onChange={(e) => {
                      setTextInputValue1(parseInt(e.target.value));
                    }}
                  />
                  <div className="flex ites-center justify-center mt-10">
                    <div
                      style={{ borderColor: "black", borderWidth: 1 }}
                      className="p-4 xs:w-1/2 lg:w-2/5 mx-auto"
                      onClick={() => {
                        if (
                          textInputValue1 ===
                          questionObjects1[currentQuesIndex1].correctAnswer
                        ) {
                          updateQuesionsObject1(
                            {
                              question:
                                questionObjects1[currentQuesIndex1]?.question,
                              correctAnswer:
                                questionObjects1[currentQuesIndex1]
                                  .correctAnswer,
                              answer: textInputValue1,
                              correctBool: true,
                            },
                            currentQuesIndex1
                          );
                          updateTotalCorrectAnswers1();
                        } else {
                          updateQuesionsObject1(
                            {
                              question:
                                questionObjects1[currentQuesIndex1]?.question,
                              correctAnswer:
                                questionObjects1[currentQuesIndex1]
                                  .correctAnswer,
                              answer: textInputValue1,
                              correctBool: false,
                            },
                            currentQuesIndex1
                          );
                        }
                        setTextInputValue1("");
                        if (currentQuesIndex1 !== 9) {
                          updateTotalVisitedQues1();
                          setCurrentQuesIndex1(currentQuesIndex1 + 1);
                        }
                      }}
                    >
                      <p className="lg:text-3xl md:text-2xl xs:text-xl text-center">
                        Next
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className=" w-full text-center mt-5">
                    <p className="lg:text-2xl md:text-xl xs:text-lg">
                      Quiz 1 is completed.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          {startQuiz2 && (
            <div className="w-full md:mr-10">
              <p className="lg:text-3xl md:text-2xl xs:text-xl">Quiz 2</p>
              {totalVisitedQues2 !== 9 ? (
                <div className="text-left shadow-xl p-4 rounded-lg">
                  <p
                    className="lg:text-3xl md:text-2xl xs:text-xl py-3"
                    style={{ color: "blue" }}
                  >
                    {questionObjects2[currentQuesIndex2]?.question}
                  </p>
                  <input
                    placeholder="Answer"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={textInputValue2}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        if (
                          parseInt(e.target.value) ===
                          questionObjects2[currentQuesIndex2].correctAnswer
                        ) {
                          updateQuesionsObject2(
                            {
                              question:
                                questionObjects2[currentQuesIndex2]?.question,
                              correctAnswer:
                                questionObjects2[currentQuesIndex2]
                                  .correctAnswer,
                              answer: parseInt(e.target.value),
                              correctBool: true,
                            },
                            currentQuesIndex2
                          );
                          updateTotalCorrectAnswers2();
                        } else {
                          updateQuesionsObject2(
                            {
                              question:
                                questionObjects2[currentQuesIndex2]?.question,
                              correctAnswer:
                                questionObjects2[currentQuesIndex2]
                                  .correctAnswer,
                              answer: parseInt(e.target.value),
                              correctBool: false,
                            },
                            currentQuesIndex2
                          );
                        }
                        setTextInputValue2("");
                        if (currentQuesIndex2 !== 9) {
                          updateTotalVisitedQues2();
                          setCurrentQuesIndex2(currentQuesIndex2 + 1);
                        }
                      }
                    }}
                    onChange={(e) => {
                      setTextInputValue2(parseInt(e.target.value));
                    }}
                  />
                  <div className="flex ites-center justify-center mt-10">
                    <div
                      style={{ borderColor: "black", borderWidth: 1 }}
                      className="p-4 xs:w-1/2 lg:w-2/5 mx-auto"
                      onClick={() => {
                        if (
                          textInputValue2 ===
                          questionObjects2[currentQuesIndex2].correctAnswer
                        ) {
                          updateQuesionsObject2(
                            {
                              question:
                                questionObjects2[currentQuesIndex2]?.question,
                              correctAnswer:
                                questionObjects2[currentQuesIndex2]
                                  .correctAnswer,
                              answer: textInputValue2,
                              correctBool: true,
                            },
                            currentQuesIndex2
                          );
                          updateTotalCorrectAnswers2();
                        } else {
                          updateQuesionsObject2(
                            {
                              question:
                                questionObjects2[currentQuesIndex2]?.question,
                              correctAnswer:
                                questionObjects2[currentQuesIndex2]
                                  .correctAnswer,
                              answer: textInputValue2,
                              correctBool: false,
                            },
                            currentQuesIndex2
                          );
                        }
                        setTextInputValue2("");
                        if (currentQuesIndex2 !== 9) {
                          updateTotalVisitedQues2();
                          setCurrentQuesIndex2(currentQuesIndex2 + 1);
                        }
                      }}
                    >
                      <p className="lg:text-3xl md:text-2xl xs:text-xl text-center">
                        Next
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="w-full text-center mt-5">
                    <p className="lg:text-2xl md:text-xl xs:text-lg">
                      Quiz 2 is completed.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {totalVisitedQues1 === 9 && totalVisitedQues2 === 9 && (
          <div
            style={{ borderColor: "black", borderWidth: 1 }}
            className="p-4 mt-24 xs:w-1/2 lg:w-2/5 mx-auto"
            onClick={() => navigate("/result")}
          >
            <p className="lg:text-3xl md:text-2xl xs:text-xl">See results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
