import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Table } from "react-bootstrap";
import DataTable from "./DataTable";

const App = () => {

  return (
      <div className="App">
        <h2>Pagination Assignment</h2>
        <DataTable />
      </div>
  );
};
export default App;
