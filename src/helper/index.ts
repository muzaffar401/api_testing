const getData = async () => {
  const res = await fetch("http://localhost:3000//api/data");
  const data = await res.json();
  return data;
;}

export const detail = async (id:number) => {
    const item = await getData();
    const singleItem = await item.find((product:any) => product.id === id);
    return singleItem;
}