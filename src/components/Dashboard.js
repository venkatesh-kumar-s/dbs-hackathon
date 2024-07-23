import React from "react";
import { CreditCard } from "./CreditCard";
import { creditCardsList } from "../data/dummyCreditCards";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  return (
    <>
      <SearchBar />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {creditCardsList
          .sort(() => Math.random() - 0.5)
          .map((cc) => (
            <CreditCard key={cc.Credit_Card_Number} data={cc} />
          ))}
      </div>
    </>
  );
};

export default Dashboard;
