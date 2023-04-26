import React from "react";

function CategoryFilter({categories, onCategoryChange, selectedCategory}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        const className = category === selectedCategory ? "selected" : null;
        return <button key={category} className={className} onClick={() => onCategoryChange(category)}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
