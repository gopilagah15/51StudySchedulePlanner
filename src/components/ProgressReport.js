import React from 'react';

const ProgressReport = ({ timeSpent, schedule }) => {
  const totalSubjects = schedule.length;
  const totalHours = Object.values(timeSpent).reduce((sum, hours) => sum + hours, 0);

  return (
    <div>
      <h2>Progress Report</h2>
      <p>Total Subjects: {totalSubjects}</p>
      <p>Total Hours Spent: {totalHours.toFixed(2)} hours</p>
      <h3>Time Spent Per Subject:</h3>
      <ul>
        {Object.entries(timeSpent).map(([subject, hours]) => (
          <li key={subject}>
            {subject}: {hours.toFixed(2)} hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressReport;
