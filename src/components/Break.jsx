import moment from 'moment';
import React from 'react';
import '../estilos/Break.css'

const Break = ({
  breakLength,
  decrementBreakLengthByOneMinute,
  incrementBreakLengthByOneMinute,
}) => {
  const breakLengthInMinutes = moment.duration(breakLength, 's').minutes();
  return (
    <div className="mt-5">
      <p id="break-label" className="col-lg-12  text-center mt-5">Break</p>
      <p id="break-length" className="col-lg-12  text-center">{breakLengthInMinutes}</p>
      <div className="col-lg-12  text-center">
        <button id="break-decrement"className="text-center mx-2 px-3"onClick={decrementBreakLengthByOneMinute}>
            -
        </button>
        <button id="break-increment" className="text-center mx-2" onClick={incrementBreakLengthByOneMinute}>
            +
        </button>
      </div>
      
    </div>
  );
};

export default Break;
