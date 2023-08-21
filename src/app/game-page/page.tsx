import Scene from '@/components/Scene/Scene';
import Scoreboard from '@/components/Scoreboard/Scoreboard';
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <Scoreboard />
      <Scene />
    </>
  );
}

export default Page