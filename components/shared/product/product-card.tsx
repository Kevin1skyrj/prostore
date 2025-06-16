import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// 👇 Inline Product type
type ProductProps = {
  product: {
    name: string;
    slug: string;
    images: string[];
  };
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images?.[0] || "/placeholder.jpg"}
            alt={product.name}
            width={300}
            height={400}
            priority
          />
        </Link>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;
