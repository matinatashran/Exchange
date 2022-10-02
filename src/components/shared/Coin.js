import React from "react";

// styles
import style from "../../styles/coin.module.css";

const Coin = ({ image, name, symbol, price, percent, marketCap }) => {
    marketCap = marketCap.toString();

    const marketCapLength = marketCap.length;
    const setUnitPrice = () => {
        if (marketCapLength > 9 && marketCapLength <= 12)
            return "BD";
        else if (marketCapLength > 6 && marketCapLength <= 9)
            return "MD";
        else if (marketCapLength > 3 && marketCapLength <= 6)
            return "TD";
    };

    // example: 405.7
    marketCap = `${marketCap.substring(0, 3)}.${marketCap.substring(3, 4)}`;

    return (
        <section className={style.coinContainer}>
            <div className={style.coinImage}>
                <img src={image} alt={name} />
            </div>
            <div className={style.coinName}>{name}</div>
            <div className={style.coinSymbol}>{symbol.toUpperCase()}</div>
            <div className={style.coinPrice}>$ {price.toLocaleString()}</div>
            <div className={style.coinPercent}>% {percent.toFixed(2)}</div>
            <div className={style.coinMarketCap}>
                $ {marketCap}
                <span className={style.unitPrice}>{setUnitPrice()}</span>
            </div>
        </section>
    );
};

export default Coin;
