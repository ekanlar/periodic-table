import React, { useState } from "react";
import elements from "./elements.json";
import OperationWindow from "./OperationWindow";

// function handleElementClick(elem) {
//  ;
// }

function Table() {
  const [selectedElement, setSelectedElement] = useState(null);

  function handleElementClick(elem) {
    setSelectedElement(elem);
  }

  return (
    <div className="wrapper">
      {/* <OperationWindow /> */}

      {selectedElement && <OperationWindow element={selectedElement} />}

      {elements.map((elem) => (
        <>
          <div
            className={`element ${elem.symbol} ${elem.category.replace(
              /\s+/g,
              ""
            )}`}
            style={{
              gridColumn: elem.gridColumn,
              gridRow: elem.gridRow,
            }}
            onClick={() => handleElementClick(elem)}
          >
            {elem.atomicNumber}
            <h1 className="symbol">{elem.symbol}</h1>
            <h2 className="name">{elem.name}</h2>
            <div className={`details ${elem.dposition}`}>
              <p style={{ fontWeight: "700", whiteSpace: "nowrap" }}>
                {elem.name}
              </p>
              <p style={{ whiteSpace: "nowrap" }}>
                Atomic Number: {elem.atomicNumber}
              </p>
              <p style={{ whiteSpace: "nowrap" }}>
                Atomic Mass: {elem.atomicMass}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Table;
