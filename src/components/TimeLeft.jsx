import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';
import '../timeleft.css'

momentDurationFormatSetup(moment);

const TimeLeft = ({ handleStartStopClick, startStopButtonLabel, timeLeft, timerLabel }) => {
  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
  return (
    <div>
      <p id="timer-label" className="col-lg-12  text-center mt-5">{timerLabel}</p>
      <p id="time-left" className="col-lg-12  text-center">{formattedTimeLeft}</p>
      <div className="col-lg-12  text-center">
      <button id="start_stop" onClick={handleStartStopClick}>
        {startStopButtonLabel}
      </button>
      </div>
    </div>
  );
};

export default TimeLeft;