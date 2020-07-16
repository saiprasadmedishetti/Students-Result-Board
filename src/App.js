import React, { useState } from "react";
import ResultsTable from "./components/ResultsTable";
import Form from "./components/Form";

function App() {
  const [activeTab, setActiveTab] = useState("results");
  const selectTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="container pt-5">
      <div className="tabs divider">
        <button
          type="button"
          className={`btn ${activeTab === "results" ? "active" : ""}`}
          onClick={() => selectTab("results")}
        >
          Student Results
        </button>
        <button
          type="button"
          className={`btn ${activeTab === "admissions" ? "active" : ""}`}
          onClick={() => selectTab("admissions")}
        >
          New Admission
        </button>
      </div>
      {activeTab === "results" && <ResultsTable />}
      {activeTab === "admissions" && <Form />}
    </div>
  );
}

export default App;
