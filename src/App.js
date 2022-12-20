import React, { useEffect } from "react";
import tmdb from "./tmdb";

export default () => {
  useEffect(()=>{
    const loadAll = async () => {
      //pegando a lista Total
      let list = await tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  }, []);

  return (
    <div>
      Óla mundo!!!!
    </div>
  )
}