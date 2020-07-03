import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const ProductsFilter = ({ products }) => {
  // react hooks
  const context = useContext(ProductContext);
  const {
    handleChange,
    type,
    company,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
  } = context;

  // get unique types
  let types = getUnique(products, "type");
  // add all
  types = ["all", ...types];
  // map to js
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique company
  let companys = getUnique(products, "company");
  // add all
  companys = ["all", ...companys];
  // map to jsx
  companys = companys.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  
  return (
    <section className="filter-container">
      <Title title="productos disponibles" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">tipo de producto</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* consumidor  */}
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <select
            name="company"
            id="company"
            onChange={handleChange}
            className="form-control"
            value={company}
          >
            {companys}
          </select>
        </div>
        {/* end of consumidor */}
        {/* price */}
        <div className="form-group">
          <label htmlFor="price">precio ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">tamaño </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        
      </form>
    </section>
  );
};

export default ProductsFilter;
