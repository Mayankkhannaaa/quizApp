import React, { useContext } from "react";

const MainContext = React.createContext();

export const MainContextProvider = ({
  children,
  questionObjects1,
  questionObjects2,
  totalCorrectAnswers1,
  totalCorrectAnswers2,
  totalVisitedQues1,
  totalVisitedQues2,
  updateTotalCorrectAnswers1,
  updateTotalCorrectAnswers2,
  updateQuesionsObject1,
  updateQuesionsObject2,
  updateTotalVisitedQues1,
  updateTotalVisitedQues2,
  clearState,
}) => {
  return (
    <MainContext.Provider
      value={{
        children,
        questionObjects1,
        questionObjects2,
        totalCorrectAnswers1,
        totalCorrectAnswers2,
        totalVisitedQues1,
        totalVisitedQues2,
        updateTotalCorrectAnswers1,
        updateTotalCorrectAnswers2,
        updateQuesionsObject1,
        updateQuesionsObject2,
        updateTotalVisitedQues1,
        updateTotalVisitedQues2,
        clearState,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;

export const useStore = () => useContext(MainContext);
