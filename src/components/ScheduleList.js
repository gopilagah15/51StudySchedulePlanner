import React from 'react';

const ScheduleList = ({ schedule }) => {
  return (
    <div>
      <h2>Study Schedule</h2>
      <ul>
        {schedule.map((session, index) => (
          <li key={index}>
            {session.date}: {session.subject} - Goal: {session.goal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
