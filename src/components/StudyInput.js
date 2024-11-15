import React, { useState } from 'react';

const StudyInput = ({ addSession }) => {
  const [subject, setSubject] = useState('');
  const [goal, setGoal] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject && goal && date) {
      addSession(subject, goal, date);
      setSubject('');
      setGoal('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Study Session</h2>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
      />
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Study Goal"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Session</button>
    </form>
  );
};

export default StudyInput;
