import { useState } from "react";
import styles from "./Categories.module.css";

const Categories = ({ categories, filterItems }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleClick = (category) => {
    setActiveCategory(category);
    filterItems(category);
  };

  return (
    <div className={styles.btnContainer}>
      {categories.map((category, index) => (
        <button
          type="button"
          className={`${styles.categoriesBtn} ${
            activeCategory === category ? styles.active : ""
          }`}
          key={index}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
