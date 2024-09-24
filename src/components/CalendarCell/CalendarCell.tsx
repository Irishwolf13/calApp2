import React from 'react';
import './CalendarCell.css';

interface CalendarCellProps {
  date: Date;
  firstSelectedDate: Date | null;
  secondSelectedDate: Date | null;
  today: Date;
  handleClick: (date: Date) => void;
}

const CalendarCell: React.FC<CalendarCellProps> = ({ date, firstSelectedDate, secondSelectedDate, today, handleClick }) => {
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
      onClick={() => handleClick(date)}
      className={`calendar-cell ${isCurrentDay ? 'current-day' : ''} ${isFirstSelectedDate ? 'first-selected' : ''} ${isSecondSelectedDate ? 'second-selected' : ''} ${isBetweenSelectedDates ? 'between-selected' : ''} ${isCurrentDay && isBetweenSelectedDates ? 'current-day-between' : ''}`}
      style={style}
    >
      <div className='cellDateLocation'>
        {!isNaN(date.getDate()) ? (
          <>
            {date.getDate() === 1 && ` ${date.toLocaleString('default', { month: 'long' })}`}
            {` `}
            {date.getDate()}
          </>
        ) : ''}
      </div>
    </button>
  );
};

export default CalendarCell;