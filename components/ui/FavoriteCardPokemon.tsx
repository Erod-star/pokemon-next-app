import React from "react";
import { useRouter } from "next/router";

import { Card } from "@nextui-org/react";

interface FavoriteCardPokemonProps {
  pokemonId: number;
}

export const FavoriteCardPokemon: React.FC<FavoriteCardPokemonProps> = ({
  pokemonId,
}) => {
  const router = useRouter();

  const onFavoirteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Card
      isHoverable
      isPressable
      css={{ padding: 10 }}
      onClick={onFavoirteClicked}
    >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        width={"100%"}
        height={140}
      />
    </Card>
  );
};
