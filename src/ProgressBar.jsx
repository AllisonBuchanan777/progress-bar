
export default function ProgressBar(props) {
  return (
    <div className="progress-bar-container">
      <h1>Progress Bar</h1>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${props.progress}%` }}
        ></div>
      </div>
      <p className="progress-text">{props.progress}% Complete</p>
    </div>
  );
}
