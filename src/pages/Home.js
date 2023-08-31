import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import data from "../components/data";

export default function Home(props) {
  //   return (
  //     <div className="Home">
  //       Home Page
  //       {stocks.map((el) => {
  //         const { name, symbol } = el;
  //         return (
  //           <Link to={`/stocks`}>
  //             <h2>{name}</h2>
  //           </Link>
  //         );
  //       })}
  //     </div>
  //   );
  // }

  return <div className="HomePage">Home Page</div>;
}
