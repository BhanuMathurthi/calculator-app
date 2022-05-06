import React, { useState } from "react";
import "./Calculator.css";
export default function Calculator() {
  const [inputValue, setInputValue] = useState("");
  function display(value) {
    setInputValue(inputValue + value);
  }

  function calculate() {
    let answer = eval(inputValue);
    setInputValue(answer);
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center d-flex align-items-center">
          <div className="col-md-4 shadow-lg p-3 mb-5 mt-5 bg-white rounded">
            <h1 className="fw-bold">React calculator</h1>
            <table className="table ">
              <tr>
                <td colSpan="3">
                  <input
                    onChange={(e) => e.target.value}
                    className="w-100"
                    value={inputValue}
                    type="text"
                    name=""
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      setInputValue("");
                    }}
                  >
                    C
                  </button>
                </td>
              </tr>
              <tr className="space">
                <td className="p-2"></td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      display("1");
                    }}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      display("2");
                    }}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      display("3");
                    }}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      display("/");
                    }}
                  >
                    /
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      display("4");
                    }}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      display("5");
                    }}
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      display("6");
                    }}
                  >
                    6
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      display("-");
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      display("7");
                    }}
                  >
                    7
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      display("8");
                    }}
                  >
                    8
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      display("9");
                    }}
                  >
                    9
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      display("+");
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      display(".");
                    }}
                  >
                    .
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      display("0");
                    }}
                  >
                    0
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      calculate();
                    }}
                  >
                    =
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      display("*");
                    }}
                  >
                    *
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
