import React, { useEffect, useState } from "react";
import Card from "./card";

function navbar() {
  const [search, setSearch] = useState("india");
  const [searchData, setSearchData] = useState([]);

  const api_key = "e87a9eff039443958be83243ec01d369";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${api_key}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    let dt = jsonData.articles.slice(0, 100);
    setSearchData(dt);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <nav className="bg-blue-300 p-4">
        <div className="flex justify-between items-center gap-4">
          <h1 className="font-semibold text-xl">TreandyNews</h1>

          <div className="flex justify-between items-center gap-6 w-full sm:w-auto">
            <a href="" className="font-semibold hidden sm:block">
              Home
            </a>
            <a href="" className="font-semibold hidden sm:block">
              All News
            </a>

            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search a news"
                className="p-2 border rounded w-32 sm:w-auto"
                onChange={handleInput}
              />
              <button
                onClick={getData}
                className="p-2 bg-blue-500 text-white rounded"
              >
                Search
              </button>
            </div>

            <div className="sm:hidden">
              <button className="text-white font-semibold">Menu</button>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Card data={searchData} />
      </div>
    </div>
  );
}

export default navbar;
