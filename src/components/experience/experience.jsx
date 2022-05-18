import "./experience.css";

const experience = () => {
  return (
    <div>
      <h1>Experience</h1>
      <h2>Trace my path to becoming a developer</h2>
      <div className="Column">
        <TimeBlock
          title="Master's degree in Computer Science"
          subtitle="SUPINFO"
          start="Sep 2017"
          end="Oct 2022"
        />
        <TimeBlock
          title="Baccalaureat"
          subtitle="Lycée Guy de Maupassant"
          start="Sep 2014"
          end="Jul 2017"
          description="Grade: Mention BienGrade: Mention Bien<br/>Spécialité Informatique et Sciences du Numérique<br/>Section Européenne<br/>Option Sport"
        />
      </div>
    </div>
  );
};

const TimeBlock = ({ title, subtitle, start, end, description }) => {
  return (
    <div className="timeBlock">
      <div className="dates">
        <h6>From </h6>
        <h3>{start}</h3>
        <br />
        <h6>to </h6>
        <h3>{end}</h3>
        <span className="dot"></span>
      </div>
      <div className="infos">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default experience;
