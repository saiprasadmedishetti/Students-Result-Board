import React, { useState } from "react";

function Form() {
  const initialValue = {
    firstname: "",
    lastname: "",
    class: "",
    year: "",
    percentage: "",
  };

  const patternRegex = {
    firstname: /[^a-z]/gi,
    lastname: /[^a-z]/gi,
    class: /[^a-z0-9]/gi,
    year: /[^0-9]/gi,
    percentage: /[^0-9]/gi,
  };

  const [form, setForm] = useState(initialValue);
  const [submittedForm, setSubmittedForm] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [patterns] = useState(patternRegex);

  const handleChange = (e) => {
    let ele = e.target;
    setForm({
      ...form,
      [ele.name]: ele.value.replace(patterns[ele.name], ""),
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setSubmittedForm(form);
    setIsSubmitted(true);
    setForm(initialValue);
  };

  return (
    <>
      {isSubmitted ? (
        <div className="card result">
          <h3 className="text-success text-center mb-2">
            Submitted Successfully
          </h3>
          <div className="form-group">
            <label className="w-50">First Name</label>
            <strong className="w-50">{submittedForm.firstname}</strong>
          </div>
          <div className="form-group">
            <label className="w-50">Last Name</label>
            <strong className="w-50">{submittedForm.lastname}</strong>
          </div>
          <div className="form-group">
            <label className="w-50">Class</label>
            <strong className="w-50">{submittedForm.class}</strong>
          </div>
          <div className="form-group">
            <label className="w-50">Year of passing</label>
            <strong className="w-50">{submittedForm.year} </strong>
          </div>
          <div className="form-group">
            <label className="w-50">Percentage</label>
            <strong className="w-50">{submittedForm.percentage} %</strong>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="card ">
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              maxLength="20"
              required
              value={form.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              maxLength="20"
              required
              value={form.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="class">Class</label>
            <input
              type="text"
              className="form-control"
              name="class"
              maxLength="3"
              required
              value={form.class}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year of passing</label>
            <input
              type="number"
              className="form-control"
              name="year"
              min="2017"
              max="2020"
              required
              value={form.year}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="percentage">Percentage</label>
            <input
              type="number"
              className="form-control"
              name="percentage"
              min="0"
              max="100"
              required
              value={form.percentage}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-center mt-3">
            <button
              type="submit"
              className="btn btn-primary min-w-120"
              disabled={Object.values(form).includes("")}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
