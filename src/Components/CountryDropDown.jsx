import React, { useEffect, useState } from "react";

export default function CountryDropDown({
  currencyOptions = [],
  currenciesData = [],
  flagUrl = [],
  selectedCurrency,
  onCurrencyChange,
}) {
  return (
    <div className="flex flex-row h-12 w-60 border-2 border-gray-400 rounded-md px-2  items-center  ">
      <div
        className="h-6 w-6 mx-1 bg-cover bg-center"
        style={{
          backgroundImage:
            selectedCurrency == "EUR"
              ? `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygsiCy1xwayKRJmcgLhH8TkfN8N0pwZVjIw&s"})`
              : !flagUrl.length == 0
              ? `url(${flagUrl[0].flag})`
              : `url(${"./assets/images/loader.jpg"})`,
        }}
      ></div>
      <select
        className="w-44 h-full bg-transparent text-blue-800 
        active:outline-0 active:border-0 hover:cursor-pointer focus:outline-none transition-all duration-300 ease-linear"
        value={selectedCurrency}
        onChange={(e) => {
          onCurrencyChange && onCurrencyChange(e.target.value);
          // thh(e.target.value)
        }}
      >
        {currencyOptions.map((currency) => (
          <>
            <option key={currency.code} value={currency.code}>
              {currency.code}-{currency.name}
            </option>
          </>
        ))}
      </select>
    </div>
  );
}
