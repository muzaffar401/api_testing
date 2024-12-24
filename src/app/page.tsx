import Product from "@/components/product";

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/data`);
  const data = await res.json();

  return (
    <>
    <Product data={data}/>
    </>
  );
}
