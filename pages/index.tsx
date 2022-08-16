import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";

import { pokeApi } from "../api";
import { PokemonListResults, SmallPokemon } from "../interfaces";
import { Layout } from "../components/layouts/";
import PokemonCard from "../components/pokemon/PokemonCard";

interface HomePageProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <Layout>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResults>("/pokemon?limit=51");
  const pokemons: SmallPokemon[] = data.results.map((p, i) => ({
    ...p,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
