import React, { useState, createContext, useEffect, useMemo } from "react";
import { Children } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ Children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3],
      }}
    >
      {Children}
    </RestaurantsContext.Provider>
  );
};
