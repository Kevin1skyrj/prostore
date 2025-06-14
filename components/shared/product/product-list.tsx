const ProductList = ({ data, title, limit }: { data: any; title?: string ;limit?:number}) => {
    const limtedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limtedData.map((product: any) => (
            <div key={product.id || product.name}>{product.name}</div>
          ))}
        </div>
      ) : (
        <div>
          <p>No Products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
