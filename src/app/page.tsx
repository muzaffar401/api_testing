import Product from "@/components/product";

export default async function Home() {
  const res = await fetch("http://localhost:3000//api/data");
  const data = await res.json();

  return (
    <>
    <Product data={data}/>
    </>
  );
}
