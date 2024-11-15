import { useState } from "react";

const ConditionalRendering = () => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <div>
        <h1>Show My Name</h1> {showContent && <p>My name is Jay.</p>}
      </div>

      <button onClick={handleShowContent}>
        {!showContent ? "Show" : "Hide"}
      </button>
      <br />
      <hr />
    </div>
  );
};
export default ConditionalRendering;
