import React from 'react';

interface CalendarCellProps {
  date: Date;
  key: string;
  firstSelectedDate: Date | null;
  secondSelectedDate: Date | null;
  today: Date;
  handleClick: (date: Date) => void;
}

const CalendarCell: React.FC<CalendarCellProps> = ({ date, key, firstSelectedDate, secondSelectedDate, today, handleClick }) => {
  const dayOfWeek = date.getDay();
  const isCurrentDay =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const isFirstSelectedDate = firstSelectedDate && 
    date.getDate() === firstSelectedDate.getDate() &&
    date.getMonth() === firstSelectedDate.getMonth() &&
    date.getFullYear() === firstSelectedDate.getFullYear();

  const isSecondSelectedDate = secondSelectedDate && 
    date.getDate() === secondSelectedDate.getDate() &&
    date.getMonth() === secondSelectedDate.getMonth() &&
    date.getFullYear() === secondSelectedDate.getFullYear();

  const isBetweenSelectedDates = firstSelectedDate && secondSelectedDate &&
    ((date > firstSelectedDate && date < secondSelectedDate) || (date > secondSelectedDate && date < firstSelectedDate));

  const style = {
    gridColumnStart: dayOfWeek + 1,
  };

  return (
    <button
      id={key}
      className={`calendar-cell ${isCurrentDay ? 'current-day' : ''} ${isFirstSelectedDate ? 'first-selected' : ''} ${isSecondSelectedDate ? 'second-selected' : ''} ${isBetweenSelectedDates ? 'between-selected' : ''} ${isCurrentDay && isBetweenSelectedDates ? 'current-day-between' : ''}`}
      style={style}
      onClick={() => handleClick(date)}
    >
      {!isNaN(date.getDate()) ? date.getDate() : ''}
    </button>
  );
};

export default CalendarCell;