const toggleFavorite = (id: number) => {
  console.log("Guardando en favoritos");
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): Boolean => {
  // ? Validate the existance of the localStorage on the client side
  if (typeof window === "undefined") return false;
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const favortiesPokemon = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default {
  toggleFavorite,
  existInFavorites,
  favortiesPokemon,
};
