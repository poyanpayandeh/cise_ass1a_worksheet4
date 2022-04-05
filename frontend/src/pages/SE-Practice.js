import React from "react";
import articles from "../dummydata/articles";
import tablecolumns from "../components/tablecolumns";
import Table from "../components/evidencetable";
import Styles from "../components/tablestyle";

const SEPractice = () => {
  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimes benefits</h2>
      <Styles>
        <Table data={articles} colums={tablecolumns} />
      </Styles>
    </div>
  );
};

export default SEPractice;
