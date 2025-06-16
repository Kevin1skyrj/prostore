import ProductCard from "./product-card";

// 👇 Inline Product type again
type Product = {
  name: string;
  slug: string;
  images: string[];
};

interface ProductListProps {
  data: Product[];
  title?: string;
  limit?: number;
}

const ProductList = ({ data, title, limit }: ProductListProps) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p>No Products found</p>
      )}
    </div>
  );
};

export default ProductList;
