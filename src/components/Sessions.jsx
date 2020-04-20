import moment from 'moment';
import React from 'react';
import '../estilos/session.css'

const Session = ({
  sessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute,
}) => {
  const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes();
  return (
    <div>
      <p id="session-label" className="col-lg-12  text-center">Session</p>
      <p id="session-length" className="col-lg-12  text-center">{sessionLengthInMinutes}</p>
      <div className="col-lg-12 text-center">
        <button id="session-decrement" className="text-center mx-2 px-3" onClick={decrementSessionLengthByOneMinute}>
            -
        </button>
        <button id="session-increment" className="text-center mx-2" onClick={incrementSessionLengthByOneMinute}>
            +
        </button> 

      </div>
      
    </div>
  );
};

export default Session;