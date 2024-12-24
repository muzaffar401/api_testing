import Product from "@/components/product";

export default async function Home() {
  const res = await fetch("https://api-product-fetch-git-main-muzaffar-ahmeds-projects.vercel.app//api/data");
  const data = await res.json();

  return (
    <>
    <Product data={data}/>
    </>
  );
}
