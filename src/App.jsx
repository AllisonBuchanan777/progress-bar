
import { useState } from "react";
import ProgressBar from "./ProgressBar.jsx";

export default function App() {
  const [progress, setProgress] = useState(0);

  function updateProgress() {
    setProgress(prev => (prev + 10 <= 100 ? prev + 10 : 100));
  }

  return (
    <div>
      <ProgressBar progress={progress} />
      <button onClick={updateProgress} style={{ marginTop: "20px" }}>
        Increase Progress
      </button>
    </div>
  );
}
