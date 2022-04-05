import { useMountedLayoutEffect } from "react-table";

const tablecolumns = [
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Authors",
    accessor: "authors",
  },
  {
    Header: "Source",
    accessor: "source",
  },
  {
    Header: "Pub. Year",
    accessor: "pubyear",
  },
  {
    Header: "DOI",
    accessor: "claim",
  },
  {
    Header: "Level of Evidence",
    accessor: "evidence",
  },
];

useMountedLayoutEffect.exports = tablecolumns;
