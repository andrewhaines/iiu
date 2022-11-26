// Template for ingesting data via Directus API

// assets/data/someData.js
export const directusData = async function() {
  const request = await fetch('https://iiu.directus.app/items/home_page');
  const response = await request.json();
  const data = await response.data.cards
  return data;
}

// components/Page.astro
---
import { directusData } from '@assets/data/advisorsPage'
const DataCardData = await directusData()
---

<section
  class="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
  aria-labelledby="contact-heading"
>
  <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
    {DataCardData.map(card => (
      <DataCard heading={card.heading} description={card.description}, linkText={card.linkText} link={card.link} />
    ))}
  </div>
</section>
