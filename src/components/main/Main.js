import React, { useEffect, useState } from "react";

// styles
import style from "../../styles/main.module.css";

// services
import getCoinsData from "../../services/api";

// components
import Coin from "../shared/Coin";
import Loading from "../Loading/Loading";

const Main = () => {
    const [coins, setCoins] = useState([]);
    const [searchedPhrase, setSearchedPhrase] = useState("");

    useEffect(() => {
        const fetchCoinApi = async () => {
            setCoins(await getCoinsData());
        };

        fetchCoinApi();
    }, []);


    const searchChangeHandler = (e) => {
        setSearchedPhrase(e.target.value);
    };

    return (
        <div className={style.mainContainer}>
            <section className={style.innerMain}>
                <section className={style.searchBox}>
                    <input
                        type="text"
                        placeholder="Search Coin"
                        onChange={searchChangeHandler}
                    />
                </section>
                <section className={style.showCoins}>
                    {coins.length ? (
                        coins.map(
                            (coin, index) =>
                                coin.name
                                    .toLowerCase()
                                    .includes(searchedPhrase.toLowerCase()) && (
                                    <Coin
                                        key={index}
                                        image={coin.image}
                                        name={coin.name}
                                        symbol={coin.symbol}
                                        percent={
                                            coin[
                                                "market_cap_change_percentage_24h"
                                            ]
                                        }
                                        price={coin["current_price"]}
                                        marketCap={coin["market_cap"]}
                                    />
                                )
                        )
                    ) : (
                        <Loading />
                    )}
                </section>
            </section>
        </div>
    );
};

export default Main;
