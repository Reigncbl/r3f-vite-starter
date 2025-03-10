import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export const Experience = () => {
  const texture = useTexture("textures/bg.jpg");
  const { scene } = useThree();

  useEffect(() => {
    scene.background = texture;
  }, [scene, texture]);

  return (
    <>
      <OrbitControls />
      <Avatar position={[0, -2.5, 0]} scale={2} rotation={[0, Math.PI, 0]} />
      <Environment preset="studio" />
    </>
  );
};
