import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';

export function initOrbitControls(camera, renderer) {
  let controls = new OrbitControls(camera, renderer.domElement);
}

export function initFog(scene, near, far, color, torus, camera) {
  scene.fog = new THREE.Fog(color, near, far);

  torus.addEventListener("change", () => {
    scene.fog.near = torus.position.distanceTo(camera.position) + near;
    scene.fog.far = torus.position.distanceTo(camera.position) + far;
  });
}
