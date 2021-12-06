import React from "react";
import { Route, Routes } from "react-router";
import { useStore } from "../Context/RootContext";
import Home from "../PageDir/Home";
import Result from "../PageDir/Results";

export default function AppRoutes() {
  const { totalVisitedQues1, totalVisitedQues2 } = useStore();
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {totalVisitedQues1 === 9 && totalVisitedQues2 === 9 && (
        <Route exact path="/result" element={<Result />} />
      )}
    </Routes>
  );
}
