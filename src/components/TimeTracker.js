import React, { useState } from 'react';

const TimeTracker = ({ logTime, schedule }) => {
  const [subject, setSubject] = useState('');
  const [hours, setHours] = useState('');

  const handleLogTime = () => {
    if (subject && hours) {
      logTime(subject, hours);
      setSubject('');
      setHours('');
    }
  };

  return (
    <div>
      <h2>Log Study Time</h2>
      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="">Select Subject</option>
        {schedule.map((session, index) => (
          <option key={index} value={session.subject}>
            {session.subject}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        placeholder="Hours Spent"
      />
      <button onClick={handleLogTime}>Log Time</button>
    </div>
  );
};

export default TimeTracker;
