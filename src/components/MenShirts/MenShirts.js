import React, { useEffect, useState } from "react";
import ShirtList from "../Lists/ShirtList/ShirtList";
import SearchBox from "../SearchBox/SearchBox";

function MenShirts({ updateSmall, updateMedium, updateLarge }) {
  const [shirts, setShirts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    updateSmall();
    updateLarge();
    updateMedium();
    fetch(
      "http://ec2-15-206-93-116.ap-south-1.compute.amazonaws.com:5000/men/shirts",
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setShirts(res);
      });
  }, []);
  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} />
      <ShirtList search={search} shirts={shirts} setShirts={setShirts} />
    </div>
  );
}

export default MenShirts;
