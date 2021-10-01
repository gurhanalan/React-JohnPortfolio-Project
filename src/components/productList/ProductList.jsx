import React from "react";
import Product from "../product/Product";
import styles from "./productList.module.scss";
import { products } from "../../data";
const ProductList = () => {
    return (
        <div className={styles.pl}>
            <div className={styles.pl__texts}>
                <h1>Create & inspire. </h1>
                <p>
                    This is a creative portfolio that your work has been waiting
                    for. Beautiful homes, stunning portfolio styles & a whole
                    lot more awaits inside.
                </p>
            </div>
            <div className={styles.pl__list}>
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
