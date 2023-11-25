
export async function fetchCars() {
  const headers = {
      "X-RapidAPI-Key": "2a9c2ad306mshffa73ba482a4732p120d67jsn91b1051a1ee1",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
  }

  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers: headers,
  });

  const result = await response.json();

  return result;
}
