import ProductCart from "@/components/product/ProductCart";
import Page from "@/components/template/Page";
import products from "@/data/constants/products"

export default function Home() {
  return (
    <Page>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map(product => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
}
