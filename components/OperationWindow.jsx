import "./OperationWindow.css";

function OperationWindow(element) {
  return (
    <div
      className="operation-window"
      style={{
        gridColumn: "3 / 13",
        gridRow: "1 / 4",
        border: "2px solid blue",
        margin: "10px",
        zIndex: "-1",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1 className="op-window-name">Lelu: {element.element.name}</h1>
      <h1>Atomic Number: {element.element.atomicNumber}</h1>
      <h1>Atomic Mass: {element.element.atomicMass}</h1>
      <h1>Other details</h1>
    </div>
  );
}

export default OperationWindow;
