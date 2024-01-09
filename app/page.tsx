import { products } from "@/utils/products";
import Container from "./components/Container";
import HomeBaner from "./components/HomeBaner";
import { truncateText } from "@/utils/truncateText";
import ProductCard from "./components/products/ProductCard";

export default function Home() {
  return (
    <main className="p-8">
      <Container>
        <div>
          <HomeBaner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap:8">
          {products.map((product: any) => {
            return <ProductCard data={product} key={product.id} />
          })}
        </div>
      </Container>
    </main>
  )
}