import GameModes from "@/components/GameModes/GameModes";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";


type Props = {};

const Home = async (props: Props) => {
  const session = await getServerSession(options);
 
 
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }
  return (
    <>
    
      <GameModes
        movieTitle="Last Of Us"
        gameModes={[
          "Guess based on scenes",
          "Guess based on dialogue",
          "Guess based on cast",
        ]}
      />
    </>
  );
};

export default Home;
