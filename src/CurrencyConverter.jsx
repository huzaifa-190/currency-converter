import React, { useState } from "react";

import CountryDropDown from "./Components/CountryDropDown";
import useExchangeRates from "./Hooks/useExchangeRates";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

// import bgImg from "./assets/Images/currency-bg.jpg";

import { TbArrowsExchange2 } from "react-icons/tb";

export default function CurrencyConverter() {
  const [from, setFrom] = useState("USD");
  const [To, setTo] = useState("PKR");
  const [fromAmount, setFromAmount] = useState();
  const [toAmount, setToAmount] = useState(0);

  const { currenciesData } = useCurrencyInfo();
  const { exchangeRates } = useExchangeRates(from.toLowerCase());
  //   const options = Object.keys(exchangeRates);

  //   console.log("fkjadfhjkafhadjkfhadkfh => ", currenciesData);
  const swap = () => {
    setFrom(To);
    setTo(from);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const convertAmount = () => {
    setToAmount(fromAmount * exchangeRates[To.toLowerCase()]);
  };
  return (
    <div
      className="flex flex-col h-screen w-screen items-center justify-center bg-cover bg-center bg-gradient-to-b from-green-200 via-yellow-100  to-blue-200"
      style={
        {
          // backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          // backgroundImage: `url('https://images.pexels.com/photos/101841/pexels-photo-101841.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          // backgroundImage: `url('https://images.pexels.com/photos/268415/pexels-photo-268415.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }
      }
    >
      <div className="flex h-[600px] w-[800px] items-center justify-center  ">
        <div
          className="h-[550px] w-[750px] flex flex-col items-center bg-white rounded-sm pt-8 border border-white 
          hover:-translate-y-2 transition-all duration-300 ease-linear 
                "
        >
          <h1 className="text-4xl text-blue-900  font-extrabold font-ubuntu hover:cursor-pointer">
            Currency CoNverter
          </h1>

          <div className="flex flex-row w-full h-32 mt-4 items-center justify-center">
            <div className="flex flex-col mx-6 ">
              <h4 className="text-gray-600 font-bold m-2">From</h4>
              <CountryDropDown
                currencyOptions={currenciesData}
                currenciesData={currenciesData}
                selectedCurrency={from}
                flagUrl={currenciesData.filter(
                  (country) => country.code == from.toUpperCase()
                )}
                onCurrencyChange={(value) => setFrom(value)}
              />
            </div>

            <button
              className="flex h-10 w-10 mt-10 rounded-full items-center justify-center border border-yellow-300 
                hover:bg-yellow-400 hover:text-white active:opacity-40 transition-all duration-200 ease-linear "
              onClick={() => swap()}
            >
              <TbArrowsExchange2 size={20} />
            </button>

            <div className="flex flex-col mx-6 ">
              <h4 className="text-gray-600 font-bold m-2">To</h4>
              <CountryDropDown
                currencyOptions={currenciesData}
                currenciesData={currenciesData}
                selectedCurrency={To}
                flagUrl={currenciesData.filter(
                  (country) => country.code == To.toUpperCase()
                )}
                onCurrencyChange={(value) => setTo(value)}
              />
            </div>
          </div>

          {/* Inputs container div */}
          <div className="flex flex-row w-full h-32 mt-1 items-center justify-center ">
            <input
              type="number"
              placeholder="Amount"
              className="h-24 w-80 bg-transparent mr-6 text-3xl text-gray-600 font-bold px-4 border-b-2 focus:outline-none "
              value={fromAmount}
              onChange={(v) => setFromAmount(Number(v.target.value))}
            />

            <input
              type="number"
              className="h-24 w-80 bg-transparent m-2 text-3xl text-green-700 pl-8 border-b-2 "
              disabled={true}
              value={toAmount}
              onChange={(v) => setToAmount(v)}
            />
          </div>

          {/* convert button div  */}
          <div className="flex flex-col h-38 w-full  mt-4 p-4 items-center justify-center ">
            <p className="flex items-center justify-center h-8 w-34 bg-blue-900 text-yellow-500 p-3 rounded-sm mb-4">
              Exchange Rate : {exchangeRates[To.toLowerCase()]} / {from}
            </p>
            <button
              className="h-14 w-96 mt-2 rounded-lg text-white text-lg font-bold opacity-85 hover:-translate-y-1 
                    hover:opacity-100 active:opacity-40 transition-all duration-200 ease-linear bg-green-400"
              onClick={() => convertAmount()}
            >
              Convert Currency
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
