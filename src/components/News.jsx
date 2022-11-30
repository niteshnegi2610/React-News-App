import React, { useState, useEffect } from "react";
import axios from "axios";

import NewsGrid from "./NewsGrid";

function News() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newsURL = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=021baff830cb4c8fa2c688eefdd78b46`
      );
      setItems(response.data.articles);
    };
    newsURL();
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>The Latest News</h1>
      </div>
      <NewsGrid items={items} />
    </div>
  );
}

export default News;
