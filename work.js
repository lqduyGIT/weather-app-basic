export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const city = url.searchParams.get("city");

    if (!city) {
      return new Response("Invalid city name", { status: 400 });
    }

    const apiKey = env.WEATHER_API_KEY; // Lấy API Key từ Cloudflare
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    const response = await fetch(weatherUrl);
    return new Response(response.body, response);
  },
};
