const CalendarYear = ({ styles, currentYear, goToPreviousDecade, goToNextDecade, selectedYear, selectYear }) => {
    const startYear = Math.floor(currentYear / 10) * 10;
    const years = [startYear - 1, ...Array.from({ length: 10 }, (_, i) => startYear + i), startYear + 10];

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <button onClick={goToPreviousDecade} style={styles.headerCta}>
                    {"<"}
                </button>
                <span style={styles.headerCta}>
                    {`${startYear} - ${startYear + 9}`} {/* Display the decade */}
                </span>
                <button onClick={goToNextDecade} style={styles.headerCta}>
                    {">"}
                </button>
            </div>

            <div style={styles.gridYear}>
                {years.map((year, index) => (
                    <button
                        key={index}
                        style={{
                            ...styles.year,
                            ...(year === selectedYear ? styles.yearSelected : {}),
                            ...(year < startYear || year > startYear + 9 ? styles.outOfRangeYear : {}),
                        }}
                        onClick={() => selectYear(year)}
                    >
                        {year}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CalendarYear;
