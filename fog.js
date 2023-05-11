import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';

export function initOrbitControls(camera, renderer) {
  let controls = new OrbitControls(camera, renderer.domElement);
}
