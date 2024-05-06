export const getFullMonthDays = (month, year) => {
    const days = [];
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    const previousMonthTotalDays = new Date(year, month, 0).getDate();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        days.push({
            date: new Date(year, month - 1, previousMonthTotalDays - i),
            isInCurrentMonth: false,
        });
    }

    for (let i = 1; i <= totalDaysInMonth; i++) {
        days.push({
            date: new Date(year, month, i),
            isInCurrentMonth: true,
        });
    }

    const remainingCells = 42 - days.length;
    for (let i = 1; i <= remainingCells; i++) {
        days.push({
            date: new Date(year, month + 1, i),
            isInCurrentMonth: false,
        });
    }

    return days;
};