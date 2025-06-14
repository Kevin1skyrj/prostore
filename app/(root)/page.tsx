import React from "react";
import sampleData from "@/db/sample-data";

import ProductList from "@/components/shared/product/product-list";
// const delay=(ms) => new Promise((resolve) => setTimeout(resolve, ms));
// export const metadata = {
//   title: 'Home'
// }
const Homepage = () => {
  console.log(sampleData);
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals"
      limit={4} />
    </>
  );
};

export default Homepage;
