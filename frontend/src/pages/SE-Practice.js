import React from "react";
import articles from "../dummydata/articles";
import tablecolumns from "../components/tablecolumns.js";
import Table from "../components/evidencetable";
import Styles from "../components/tablestyle";
import Dropdown from "../components/Dropdown";

const SEPractice = () => {
  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimes benefits</h2>
      <Dropdown />
      <Styles>
        <Table data={articles} columns={tablecolumns} />
      </Styles>
    </div>
  );
};

export default SEPractice;
