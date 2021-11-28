import "./style.css";
import * as BABYLON from "babylonjs";

const canvas = document.querySelector<HTMLCanvasElement>("#renderCanvas")!;
const engine = new BABYLON.Engine(canvas, true);

function createScene() {
  const scene = new BABYLON.Scene(engine);
  const camera = new BABYLON.FreeCamera(
    "camera",
    new BABYLON.Vector3(0, 0, -5),
    scene
  );

  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 5, 3),
    scene
  );

  const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
  box.rotation.x = 7;
  box.rotation.z = 5;

  const sphere = BABYLON.MeshBuilder.CreateSphere("spher", {}, scene);
  sphere.position = new BABYLON.Vector3(2, 0, 0);
  const plane = BABYLON.MeshBuilder.CreatePlane("plane", {}, scene);
  plane.position = new BABYLON.Vector3(-2, 0, 0);

  const material = new BABYLON.StandardMaterial("material", scene);
  material.diffuseColor = new BABYLON.Color3(1, 0, 0);
  box.material = material;

  return scene;
}

const scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});
