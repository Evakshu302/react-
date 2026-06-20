import React from "react";
import Card from "./components/Card";
const App = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      salary: "12 LPA",
      experience: "1-3 Years",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Microsoft",
      location: "Hyderabad",
      salary: "15 LPA",
      experience: "2-4 Years",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Amazon",
      location: "Pune",
      salary: "18 LPA",
      experience: "3-5 Years",
    },
    {
      id: 4,
      title: "React Developer",
      company: "Infosys",
      location: "Noida",
      salary: "8 LPA",
      experience: "0-2 Years",
    },
    {
      id: 5,
      title: "Node.js Developer",
      company: "TCS",
      location: "Mumbai",
      salary: "10 LPA",
      experience: "1-3 Years",
    },
  ];
  console.log(jobOpenings);
  return (
    <div className="parent">
      {jobOpenings.map(function (el) {
        return <Card companyname={el.company} post={el.title} place={el.location} sal={el.salary} />
      })}
    </div>
  )
}

export default App;