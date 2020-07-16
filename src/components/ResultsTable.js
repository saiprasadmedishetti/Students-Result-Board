import React, { useState, useEffect } from "react";
import data from "../data.json";

function ResultsTable() {
  const [results, setResults] = useState(data);

  const transformData = () => {
    let data = results
      .filter((result) => {
        let marks = Object.values(result.marks);
        let isFail = marks.some((mark) => mark < 20);

        return (
          // set pass or fail
          (result["result"] = !isFail ? "Pass" : "Fail"),
          //   add total marks
          (result["totalMarks"] = Object.values(result.marks).reduce(
            (total, current) => parseInt(total) + parseInt(current)
          ))
        );
      })
      //   sort by total marks
      .sort((a, b) => b.totalMarks - a.totalMarks);

    //   set topper
    data[0].result = "Topper";

    //    sort by name
    data.sort((a, b) => a.name.localeCompare(b.name));

    setResults(data);
  };
  useEffect(() => {
    transformData();
  }, []);
  return (
    <table className="table ">
      <thead>
        <tr>
          <th colSpan="4">Students​ ​Result​ ​Board</th>
        </tr>
        <tr className="text-left">
          <th>
            <em>Student Name</em>
          </th>
          <th>
            <em>Roll Number</em>
          </th>
          <th>
            <em>Total Marks</em>
          </th>
          <th>
            <em>Status</em>
          </th>
        </tr>
      </thead>
      <tbody>
        {results.length > 0 &&
          results.map((result) => (
            <tr
              key={result.rollNumber}
              className={
                result.result === "Fail"
                  ? "text-danger"
                  : result.result === "Topper"
                  ? "text-success"
                  : ""
              }
            >
              <td>{result.name[0].toUpperCase() + result.name.slice(1)}</td>
              <td>{result.rollNumber}</td>
              <td>{result.totalMarks}</td>
              <td>{result.result}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ResultsTable;
