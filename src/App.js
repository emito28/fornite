import "./App.css";
import React, { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
const App = () => {
  const url = "https://fortniteapi.io/shop?lang=en";

  const [dailyItems, setDailyItems] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [specialFeatured, setSpecialFeatured] = useState([]);
  const [specialDaily, setSpecialDaily] = useState([]);
  const [load, setLoad] = useState(true);

  const getItems = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    });
    const items = await response.json();
    setDailyItems(items.daily);
    setFeaturedItems(items.featured);
    setSpecialFeatured(items.specialFeatured);
    setSpecialDaily(items.specialDaily);
    setLoad(false);
  };
  useEffect(() => {
    getItems();
  }, []);

  if (load) {
    return (
      <>
        <div className="loading">
          <h1>Cargando...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <h1>ITEMS DIARIOS</h1>
      <ItemContainer item={dailyItems} />
      <h1>ITEMS DESTACADOS</h1>
      <ItemContainer item={featuredItems} />
      <h1>ITEMS ESPECIALES</h1>
      <ItemContainer item={specialFeatured} />
      <ItemContainer item={specialDaily} />
    </>
  );
};

export default App;
