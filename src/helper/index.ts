const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`);
  const data = await res.json();
  return data;
  ;
}

export const detail = async (id: number) => {
  const item = await getData();
  const singleItem = await item.find((product: any) => product.id === id);
  return singleItem;
}