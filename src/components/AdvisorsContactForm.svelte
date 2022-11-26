<script>
  let name, email, body;
  function handleSubmit() {
    let url = 'https://iiu.directus.app/items/contacts'
    const request = fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        body,
      })
    })
    .then((response => {
      response.json()
    }))
  }
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" on:submit|preventDefault={handleSubmit}>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Your name</label>
          <div class="mt-1">
            <input name="name" id="name" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" bind:value={name} />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Your email address</label>
          <div class="mt-1">
            <input name="email" id="email" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" bind:value={email} />
          </div>
        </div>
        <div>
          <label for="body" class="block text-sm font-medium text-gray-700">How can we help?</label>
          <div class="mt-1">
            <textarea name="name" id="name" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" bind:value={body} />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
