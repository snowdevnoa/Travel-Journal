export default function Chronicle(props) {
  return (
    <div className="flex journal">
      <img src={props.journal.imageUrl} />
      <div className="details flex column">
        <h3>{props.journal.location}</h3>
        <h1>{props.journal.title}</h1>
        <div className="dates flex">
          {props.journal.startDate} - {props.journal.endDate}
        </div>
        <p>{props.journal.description}</p>
      </div>
    </div>
  );
}
