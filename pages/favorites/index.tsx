import { useEffect, useState } from "react";

import { localFavorites } from "../../utils";
import { Layout } from "../../components/layouts";
import { EmptyFavorites, FavoritePokemons } from "../../components/ui";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.favortiesPokemon());
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
