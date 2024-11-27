import React, { useEffect, useRef } from "react";

function TenthForm() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let engInputRef = useRef();
  let telInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  let resultParaRef = useRef();

  let firstNameSpanRef = useRef();
  let lastNameSpanRef = useRef();
  let engSpanRef = useRef();
  let telSpanRef = useRef();
  let hindiSpanRef = useRef();
  let mathsSpanRef = useRef();
  let sciSpanRef = useRef();
  let socSpanRef = useRef();

  let nameRegEx = /^[A-Za-z]{2,30}$/;

  
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  let calculateResult = () => {
    let firstName = firstNameInputRef.current.value;
    let lastName = lastNameInputRef.current.value;
    let engMarks = Number(engInputRef.current.value);
    let telMarks = Number(telInputRef.current.value);
    let hindiMarks = Number(hindiInputRef.current.value);
    let mathsMarks = Number(mathsInputRef.current.value);
    let sciMarks = Number(sciInputRef.current.value);
    let socMarks = Number(socInputRef.current.value);

    let totalMarks =
      engMarks + telMarks + hindiMarks + mathsMarks + sciMarks + socMarks;

    let Result;
    if (
      engMarks < 35 ||
      telMarks < 35 ||
      hindiMarks < 35 ||
      mathsMarks < 35 ||
      sciMarks < 35 ||
      socMarks < 35
    ) {
      Result = "Failed";
    } else {
      Result = "Passed";
    }

    let perc = (totalMarks / 600) * 100;

    engSpanRef.current.innerHTML = engMarks >= 35 ? "Pass" : "Fail";
    telSpanRef.current.innerHTML = telMarks >= 35 ? "Pass" : "Fail";
    hindiSpanRef.current.innerHTML = hindiMarks >= 35 ? "Pass" : "Fail";
    mathsSpanRef.current.innerHTML = mathsMarks >= 35 ? "Pass" : "Fail";
    sciSpanRef.current.innerHTML = sciMarks >= 35 ? "Pass" : "Fail";
    socSpanRef.current.innerHTML = socMarks >= 35 ? "Pass" : "Fail";

    resultParaRef.current.innerHTML = `${firstName} ${lastName} ${Result} in Tenth got  totalmarks of ${totalMarks} with percentage of ${perc.toFixed(
      2
    )}%`;
  };

  let onFocus = (inputRef) => {
    inputRef.current.style.backgroundColor = "violet";
  };

  let onChange = (inputRef, spanRef) => {
    if (inputRef.current.value >= 0 && inputRef.current.value <= 100) {
      if (inputRef.current.value >= 35) {
        spanRef.current.innerHTML = "Pass";
        spanRef.current.style.backgroundColor = "green";
      } else {
        spanRef.current.innerHTML = "Fail";
        spanRef.current.style.backgroundColor = "red";
      }
    } else {
      spanRef.current.innerHTML = "Invalid";
      spanRef.current.style.backgroundColor = "yellow";
    }
  };

  let onBlur = (inputRef) => {
    inputRef.current.style.backgroundColor = "";
  };

  let validateName = (inputRef,spanRef) => {
    let result = nameRegEx.text(inputRef.current.value);

    if (result == true) {
      spanRef.current.innerHTML = "Valid";
      spanRef.current.style.backgroundColor = "green";
    } else {
      spanRef.current.innerHTML = "Invalid";
      spanRef.current.style.backgroundColor = "red";
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
            ref={firstNameInputRef}
            onFocus={() => {
              onFocus(firstNameInputRef);
            }}
            onChange={() => {
              validateName(firstNameInputRef, firstNameSpanRef);
            }}
            onBlur={() => {
              onBlur(firstNameInputRef);
            }}
          ></input>
          <span ref={firstNameSpanRef}></span>
        </div>
        <div>
          <label>Last Name</label>
          <input
            ref={lastNameInputRef}
            onFocus={() => {
              onFocus(lastNameInputRef);
            }}
            onChange={() => {
              onChange(engInputRef, engSpanRef);
            }}
            onBlur={() => {
              onBlur(lastNameInputRef);
            }}
          ></input>
          <span ref={lastNameSpanRef}></span>
        </div>
        <div>
          <label>English</label>
          <input
            ref={engInputRef}
            onFocus={() => {
              onFocus(engInputRef);
            }}
            onChange={() => {
              onChange(engInputRef, engSpanRef);
            }}
            onBlur={() => {
              onBlur(engInputRef);
            }}
          ></input>
          <span ref={engSpanRef}></span>
        </div>
        <div>
          <label>Telugu</label>
          <input
            ref={telInputRef}
            onFocus={() => {
              onFocus(telInputRef);
            }}
            onChange={() => {
              onChange(telInputRef, telSpanRef);
            }}
            onBlur={() => {
              onBlur(telInputRef);
            }}
          ></input>
          <span ref={telSpanRef}></span>
        </div>
        <div>
          <label>Hindi</label>
          <input
            ref={hindiInputRef}
            onFocus={() => {
              onFocus(hindiInputRef);
            }}
            onChange={() => {
              onChange(hindiInputRef, hindiSpanRef);
            }}
            onBlur={() => {
              onBlur(hindiInputRef);
            }}
          ></input>
          <span ref={hindiSpanRef}></span>
        </div>
        <div>
          <label>Mathematics</label>
          <input
            ref={mathsInputRef}
            onFocus={() => {
              onFocus(mathsInputRef);
            }}
            onChange={() => {
              onChange(mathsInputRef, mathsSpanRef);
            }}
            onBlur={() => {
              onBlur(mathsInputRef);
            }}
          ></input>
          <span ref={mathsSpanRef}></span>
        </div>
        <div>
          <label>Science</label>
          <input
            ref={sciInputRef}
            onFocus={() => {
              onFocus(sciInputRef);
            }}
            onChange={() => {
              onChange(sciInputRef, sciSpanRef);
            }}
            onBlur={() => {
              onBlur(sciInputRef);
            }}
          ></input>
          <span ref={sciSpanRef}></span>
        </div>
        <div>
          <label>Social</label>
          <input
            ref={socInputRef}
            onFocus={() => {
              onFocus(socInputRef);
            }}
            onChange={() => {
              onChange(socInputRef, socSpanRef);
            }}
            onBlur={() => {
              onBlur(socInputRef);
            }}
          ></input>
          <span ref={socSpanRef}></span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              calculateResult();
            }}
          >
            Calculate Result
          </button>
        </div>
        <div>
          <p ref={resultParaRef}>please enter values</p>
        </div>
      </form>
    </div>
  );
}

export default TenthForm;
