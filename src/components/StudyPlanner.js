
import React, { useState } from 'react';
import StudyInput from './StudyInput';
import ScheduleList from './ScheduleList';
import TimeTracker from './TimeTracker';
import ProgressReport from './ProgressReport';

const StudyPlanner = () => {
  const [schedule, setSchedule] = useState([]);
  const [timeSpent, setTimeSpent] = useState({});

  const addSession = (subject, goal, date) => {
    setSchedule([...schedule, { subject, goal, date }]);
  };

  const logTime = (subject, hours) => {
    setTimeSpent({
      ...timeSpent,
      [subject]: (timeSpent[subject] || 0) + parseFloat(hours),
    });
  };

  return (
    <div>
      <h1>Study Schedule Planner</h1>
      <StudyInput addSession={addSession} />
      <ScheduleList schedule={schedule} />
      <TimeTracker logTime={logTime} schedule={schedule} />
      <ProgressReport timeSpent={timeSpent} schedule={schedule} />
    </div>
  );
};

export default StudyPlanner;
