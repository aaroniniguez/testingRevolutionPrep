import * as React from "react";
import Api from "../api";
import FillbarEmployeeCard from "./Fillbar/components/FillbarEmployeeCard.js";
import EmployeeCard from "./Card/EmployeeCard";

function EmployeeCards(props) {
  const [employeeData, setEmployeeData] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  async function getEmployeeData() {
    let result = await Api.fetch();
    setEmployeeData(result.revenuePerformances);
    setLoaded(true);
  }

  React.useEffect(() => {
    getEmployeeData();
  }, []);

  return loaded ? (
    employeeData.map(employee => (
      <EmployeeCard
        key={employee.id}
        avatar={employee.owner.avatar}
        name={employee.owner.name}
      >
        <FillbarEmployeeCard
          target={employee.revenueTarget}
          actual={employee.revenueActual}
        />
      </EmployeeCard>
    ))
  ) : (
    <div style={{ width: "100%", textAlign: "center" }}>
      <span>Loading...</span>
    </div>
  );
}

export default EmployeeCards;
