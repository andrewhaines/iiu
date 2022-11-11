// Home page card data
export const directusData = async function() {
  const request = await fetch('https://iiu.directus.app/items/home_page');
  const response = await request.json();
  const data = await response.data.cards
  return data;
}
