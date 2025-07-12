import React, { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  function updateProgress() {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Progress Bar</h1>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "#007bff",
            height: "24px",
            borderRadius: "4px",
          }}
        ></div>
      </div>
      <p>{progress}% Complete</p>
      <button
        onClick={updateProgress}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Increase Progress
      </button>
    </div>
  );
}

export default App;
