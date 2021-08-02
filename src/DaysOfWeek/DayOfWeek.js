export default function DayOfWeek(props) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return <div>{days[props.day]}</div>
}