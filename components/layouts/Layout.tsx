import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  pokemonImage?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title, pokemonImage }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Edson Govea" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`{${title}, pokemon, pokedex}`} />
        <meta property="og:title" content={`Información sbore ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar pokemonImage={pokemonImage} />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
