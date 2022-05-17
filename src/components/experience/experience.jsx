import "./experience.css";

const experience = () => {
  return <div>
    <h1>Experience</h1>
    <h2>Trace my path to becoming a developer</h2>
    <div className="Column">
      <TimeBlock title="Master's degree in Computer Science" subtitle="SUPINFO" start="Sep 2017" end="Oct 2022"/>
      <TimeBlock title="Baccalaureat" subtitle="Lycée Guy de Maupassant" start="Sep 2014" end="Jul 2017"/>
    </div>
    
  </div>;
};

const TimeBlock = ({title, titleLink, subtitle, start, end, description}) => {
  return <div className="timeBlock">
    <h3 className="dates">
      <h6>From</h6>{start}<br/><h6>to</h6>{end}
      <span className="dot"></span>
    </h3>
    <div className="infos">
      
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </div>
  </div>;
};

export default experience;
