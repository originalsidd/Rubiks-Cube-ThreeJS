import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as dat from 'lil-gui';

/**
 * Constants
 */
const parameters = {};

/**
 * Debug
 */
const gui = new dat.GUI();
gui.hide();

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Model
 */

const geometry = new THREE.BoxBufferGeometry(0.97, 0.97, 0.97);
const cornermat1 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'white' }),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'red' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const corner1 = new THREE.Mesh(geometry, cornermat1);
corner1.position.set(-1, 1, 1);
scene.add(corner1);

const cornermat2 = [
    new THREE.MeshBasicMaterial({ color: 'yellow' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'red' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const corner2 = new THREE.Mesh(geometry, cornermat2);
corner2.position.set(1, 1, 1);
scene.add(corner2);

const cornermat3 = [
    new THREE.MeshBasicMaterial({ color: 'yellow' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'green' }),
    new THREE.MeshBasicMaterial({ color: 'red' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const corner3 = new THREE.Mesh(geometry, cornermat3);
corner3.position.set(1, -1, 1);
scene.add(corner3);

const cornermat4 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'white' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'green' }),
    new THREE.MeshBasicMaterial({ color: 'red' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const corner4 = new THREE.Mesh(geometry, cornermat4);
corner4.position.set(-1, -1, 1);
scene.add(corner4);

const cornermat5 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'white' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'green' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'orange' }),
];
const corner5 = new THREE.Mesh(geometry, cornermat5);
corner5.position.set(-1, -1, -1);
scene.add(corner5);

const cornermat6 = [
    new THREE.MeshBasicMaterial({ color: 'yellow' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'green' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'orange' }),
];
const corner6 = new THREE.Mesh(geometry, cornermat6);
corner6.position.set(1, -1, -1);
scene.add(corner6);

const cornermat7 = [
    new THREE.MeshBasicMaterial({ color: 'yellow' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'orange' }),
];
const corner7 = new THREE.Mesh(geometry, cornermat7);
corner7.position.set(1, 1, -1);
scene.add(corner7);

const cornermat8 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'white' }),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'orange' }),
];
const corner8 = new THREE.Mesh(geometry, cornermat8);
corner8.position.set(-1, 1, -1);
scene.add(corner8);

const edgemat1 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'red' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const edge1 = new THREE.Mesh(geometry, edgemat1);
edge1.position.set(0, 1, 1);
scene.add(edge1);

const edgemat2 = [
    new THREE.MeshBasicMaterial({ color: 'yellow' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'red' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const edge2 = new THREE.Mesh(geometry, edgemat2);
edge2.position.set(1, 0, 1);
scene.add(edge2);

const edgemat3 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'green' }),
    new THREE.MeshBasicMaterial({ color: 'red' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const edge3 = new THREE.Mesh(geometry, edgemat3);
edge3.position.set(0, -1, 1);
scene.add(edge3);

const edgemat4 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'white' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'red' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const edge4 = new THREE.Mesh(geometry, edgemat4);
edge4.position.set(-1, 0, 1);
scene.add(edge4);

const edgemat5 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'orange' }),
];
const edge5 = new THREE.Mesh(geometry, edgemat5);
edge5.position.set(0, 1, -1);
scene.add(edge5);

const edgemat6 = [
    new THREE.MeshBasicMaterial({ color: 'yellow' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'orange' }),
];
const edge6 = new THREE.Mesh(geometry, edgemat6);
edge6.position.set(1, 0, -1);
scene.add(edge6);

const edgemat7 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'green' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'orange' }),
];
const edge7 = new THREE.Mesh(geometry, edgemat7);
edge7.position.set(0, -1, -1);
scene.add(edge7);

const edgemat8 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'white' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'orange' }),
];
const edge8 = new THREE.Mesh(geometry, edgemat8);
edge8.position.set(-1, 0, -1);
scene.add(edge8);

const edgemat9 = [
    new THREE.MeshBasicMaterial({ color: 'yellow' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const edge9 = new THREE.Mesh(geometry, edgemat9);
edge9.position.set(1, 1, 0);
scene.add(edge9);

const edgemat10 = [
    new THREE.MeshBasicMaterial({ color: 'yellow' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'green' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const edge10 = new THREE.Mesh(geometry, edgemat10);
edge10.position.set(1, -1, 0);
scene.add(edge10);

const edgemat11 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'white' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'green' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const edge11 = new THREE.Mesh(geometry, edgemat11);
edge11.position.set(-1, -1, 0);
scene.add(edge11);

const edgemat12 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'white' }),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const edge12 = new THREE.Mesh(geometry, edgemat12);
edge12.position.set(-1, 1, 0);
scene.add(edge12);

const cenmat1 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'red' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const cen1 = new THREE.Mesh(geometry, cenmat1);
cen1.position.set(0, 0, 1);
scene.add(cen1);

const cenmat2 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const cen2 = new THREE.Mesh(geometry, cenmat2);
cen2.position.set(0, 1, 0);
scene.add(cen2);

const cenmat3 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'orange' }),
];
const cen3 = new THREE.Mesh(geometry, cenmat3);
cen3.position.set(0, 0, -1);
scene.add(cen3);

const cenmat4 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'green' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const cen4 = new THREE.Mesh(geometry, cenmat4);
cen4.position.set(0, -1, 0);
scene.add(cen4);

const cenmat5 = [
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'white' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const cen5 = new THREE.Mesh(geometry, cenmat5);
cen5.position.set(-1, 0, 0);
scene.add(cen5);

const cenmat6 = [
    new THREE.MeshBasicMaterial({ color: 'yellow' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
    new THREE.MeshBasicMaterial({ color: 'black' }),
];
const cen6 = new THREE.Mesh(geometry, cenmat6);
cen6.position.set(1, 0, 0);
scene.add(cen6);

const temp = [];

/**
 * Array
 */
const meshes = [
    corner1,
    corner2,
    corner3,
    corner4,
    corner5,
    corner6,
    corner7,
    corner8,
    edge1,
    edge2,
    edge3,
    edge4,
    edge5,
    edge6,
    edge7,
    edge8,
    edge9,
    edge10,
    edge11,
    edge12,
    cen1,
    cen2,
    cen3,
    cen4,
    cen5,
    cen6,
];

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// window.addEventListener('dblclick', () => {
//     const fullscreenElement =
//         document.fullscreenElement || document.webkitFullscreenElement;

//     if (!fullscreenElement) {
//         if (canvas.requestFullscreen) {
//             canvas.requestFullscreen();
//         } else if (canvas.webkitRequestFullscreen) {
//             canvas.webkitRequestFullscreen();
//         }
//     } else {
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         } else if (document.webkitExitFullscreen) {
//             document.webkitExitFullscreen();
//         }
//     }
// });

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
    55,
    sizes.width / sizes.height,
    0.1,
    50
);
camera.position.set(6, 4, 6);
scene.add(camera);

// // Controls
let controls;
controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor('#123');

let status1 = {};
let status2 = {};
let status3 = {};
let status4 = {};
let status5 = {};
let status6 = {};
let status7 = {};
let status8 = {};
let status9 = {};
let tempflag = false;

let intersectsPlane1 = (mesh) => {
    const target = new THREE.Vector3();
    mesh.getWorldPosition(target);
    if (Math.abs(target.x - 1) < 0.01) {
        // console.log(target);
        return true;
    }
    return false;
};

let intersectsPlane2 = (mesh) => {
    const target = new THREE.Vector3();
    mesh.getWorldPosition(target);
    if (Math.abs(target.z - 1) < 0.01) {
        return true;
    }
    return false;
};
let intersectsPlane3 = (mesh) => {
    const target = new THREE.Vector3();
    mesh.getWorldPosition(target);
    if (Math.abs(target.y - 1) < 0.01) {
        return true;
    }
    return false;
};
let intersectsPlane4 = (mesh) => {
    const target = new THREE.Vector3();
    mesh.getWorldPosition(target);
    if (Math.abs(target.x + 1) < 0.01) {
        return true;
    }
    return false;
};
let intersectsPlane5 = (mesh) => {
    const target = new THREE.Vector3();
    mesh.getWorldPosition(target);
    if (Math.abs(target.z + 1) < 0.01) {
        return true;
    }
    return false;
};
let intersectsPlane6 = (mesh) => {
    const target = new THREE.Vector3();
    mesh.getWorldPosition(target);
    if (Math.abs(target.y + 1) < 0.01) {
        return true;
    }
    return false;
};
let intersectsPlane7 = (mesh) => {
    const target = new THREE.Vector3();
    mesh.getWorldPosition(target);
    if (Math.abs(target.y) < 0.01) {
        return true;
    }
    return false;
};
let intersectsPlane8 = (mesh) => {
    const target = new THREE.Vector3();
    mesh.getWorldPosition(target);
    if (Math.abs(target.z) < 0.01) {
        return true;
    }
    return false;
};
let intersectsPlane9 = (mesh) => {
    const target = new THREE.Vector3();
    mesh.getWorldPosition(target);
    if (Math.abs(target.x) < 0.01) {
        return true;
    }
    return false;
};

/**
 * Cube Rotation
 */

const gapTime = 200;

const moveR = () => {
    gap1[0] = true;
    temp.length = 0;
    Object.keys(status1).forEach((key, index) => {
        if (status1[key]) temp.push(meshes[index]);
    });
    flag1 = true;
};
parameters.R = () => {
    moveR();
};

const moveF = () => {
    gap1[1] = true;
    temp.length = 0;
    Object.keys(status2).forEach((key, index) => {
        if (status2[key]) temp.push(meshes[index]);
    });
    flag2 = true;
};

parameters.F = () => {
    moveF();
};

const moveU = () => {
    gap1[2] = true;
    temp.length = 0;
    Object.keys(status3).forEach((key, index) => {
        if (status3[key]) temp.push(meshes[index]);
    });
    flag3 = true;
};

parameters.U = () => {
    moveU();
};

const moveL = () => {
    gap1[3] = true;
    temp.length = 0;
    Object.keys(status4).forEach((key, index) => {
        if (status4[key]) temp.push(meshes[index]);
    });
    flag4 = true;
};

parameters.L = () => {
    moveL();
};

const moveB = () => {
    gap1[4] = true;
    temp.length = 0;
    Object.keys(status5).forEach((key, index) => {
        if (status5[key]) temp.push(meshes[index]);
    });
    flag5 = true;
};

parameters.B = () => {
    moveB();
};

const moveD = () => {
    gap1[5] = true;
    temp.length = 0;
    Object.keys(status6).forEach((key, index) => {
        if (status6[key]) temp.push(meshes[index]);
    });
    flag6 = true;
};

parameters.D = () => {
    moveD();
};

const moveE = () => {
    gap1[6] = true;
    temp.length = 0;
    Object.keys(status7).forEach((key, index) => {
        if (status7[key]) temp.push(meshes[index]);
    });
    flag7 = true;
};

parameters.E = () => {
    moveE();
};

const moveM = () => {
    gap1[7] = true;
    temp.length = 0;
    Object.keys(status9).forEach((key, index) => {
        if (status9[key]) temp.push(meshes[index]);
    });
    flag9 = true;
};

parameters.M = () => {
    moveM();
};

const moveS = () => {
    gap1[8] = true;
    temp.length = 0;
    Object.keys(status8).forEach((key, index) => {
        if (status8[key]) temp.push(meshes[index]);
    });
    flag8 = true;
};

parameters.S = () => {
    moveS();
};

const moveR1 = () => {
    gap2[0] = true;
    temp.length = 0;
    Object.keys(status1).forEach((key, index) => {
        if (status1[key]) temp.push(meshes[index]);
    });
    flag11 = true;
};
parameters.R1 = () => {
    moveR1();
};

const moveF1 = () => {
    gap2[1] = true;
    temp.length = 0;
    Object.keys(status2).forEach((key, index) => {
        if (status2[key]) temp.push(meshes[index]);
    });
    flag22 = true;
};

parameters.F1 = () => {
    moveF1();
};

const moveU1 = () => {
    gap2[2] = true;
    temp.length = 0;
    Object.keys(status3).forEach((key, index) => {
        if (status3[key]) temp.push(meshes[index]);
    });
    flag33 = true;
};

parameters.U1 = () => {
    moveU1();
};

const moveL1 = () => {
    gap2[3] = true;
    temp.length = 0;
    Object.keys(status4).forEach((key, index) => {
        if (status4[key]) temp.push(meshes[index]);
    });
    flag44 = true;
};

parameters.L1 = () => {
    moveL1();
};

const moveB1 = () => {
    gap2[4] = true;
    temp.length = 0;
    Object.keys(status5).forEach((key, index) => {
        if (status5[key]) temp.push(meshes[index]);
    });
    flag55 = true;
};

parameters.B1 = () => {
    moveB1();
};

const moveD1 = () => {
    gap2[5] = true;
    temp.length = 0;
    Object.keys(status6).forEach((key, index) => {
        if (status6[key]) temp.push(meshes[index]);
    });
    flag66 = true;
};

parameters.D1 = () => {
    moveD1();
};

const moveE1 = () => {
    gap2[6] = true;
    temp.length = 0;
    Object.keys(status7).forEach((key, index) => {
        if (status7[key]) temp.push(meshes[index]);
    });
    flag77 = true;
};

parameters.E1 = () => {
    moveE1();
};

const moveM1 = () => {
    gap2[7] = true;
    temp.length = 0;
    Object.keys(status9).forEach((key, index) => {
        if (status9[key]) temp.push(meshes[index]);
    });
    flag99 = true;
};

parameters.M1 = () => {
    moveM1();
};

const moveS1 = () => {
    gap2[8] = true;
    temp.length = 0;
    Object.keys(status8).forEach((key, index) => {
        if (status8[key]) temp.push(meshes[index]);
    });
    flag88 = true;
};

parameters.S1 = () => {
    moveS1();
};

const moveX = () => {
    tempflag = true;
    moveL1();
    setTimeout(() => moveM1(), 1000);
    setTimeout(() => moveR(), 2000);
    setTimeout(() => {
        tempflag = false;
    }, 2000 + gapTime);
};

parameters.X = () => {
    moveX();
};

const moveY = () => {
    tempflag = true;
    moveU();
    setTimeout(() => moveE1(), 1000);
    setTimeout(() => moveD1(), 2000);
    setTimeout(() => {
        tempflag = false;
    }, 2000 + gapTime);
};

parameters.Y = () => {
    moveY();
};

const moveZ = () => {
    tempflag = true;
    moveF();
    setTimeout(() => moveS(), 1000);
    setTimeout(() => moveB1(), 2000);
    setTimeout(() => {
        tempflag = false;
    }, 2000 + gapTime);
};

parameters.Z = () => {
    moveZ();
};

const moveX1 = () => {
    tempflag = true;
    moveL();
    setTimeout(() => moveM(), 1000);
    setTimeout(() => moveR1(), 2000);
    setTimeout(() => {
        tempflag = false;
    }, 2000 + gapTime);
};

parameters.X1 = () => {
    moveX1();
};

const moveY1 = () => {
    tempflag = true;
    moveU1();
    setTimeout(() => moveE(), 1000);
    setTimeout(() => moveD(), 2000);
    setTimeout(() => {
        tempflag = false;
    }, 2000 + gapTime);
};

parameters.Y1 = () => {
    moveY1();
};

const moveZ1 = () => {
    tempflag = true;
    moveF1();
    setTimeout(() => moveS1(), 1000);
    setTimeout(() => moveB(), 2000);
    setTimeout(() => {
        tempflag = false;
    }, 2000 + gapTime);
};

parameters.Z1 = () => {
    moveZ1();
};

let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;
let flag5 = false;
let flag6 = false;
let flag7 = false;
let flag8 = false;
let flag9 = false;

let flag11 = false;
let flag22 = false;
let flag33 = false;
let flag44 = false;
let flag55 = false;
let flag66 = false;
let flag77 = false;
let flag88 = false;
let flag99 = false;

const gap1 = [false, false, false, false, false, false, false, false, false];
const gap2 = [false, false, false, false, false, false, false, false, false];

let flagValue = false;

let shuffleFlag = false;

const moves = {
    0: () => moveR(),
    1: () => moveL(),
    2: () => moveF(),
    3: () => moveB(),
    4: () => moveU(),
    5: () => moveD(),
    6: () => moveM(),
    7: () => moveE(),
    8: () => moveS(),
    9: () => moveF(),
};

document.getElementById('R').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveR();
});
document.getElementById('L').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveL();
});
document.getElementById('U').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveU();
});
document.getElementById('D').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveD();
});
document.getElementById('F').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveF();
});
document.getElementById('B').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveB();
});
document.getElementById('M').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveM();
});
document.getElementById('E').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveE();
});
document.getElementById('S').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveS();
});
document.getElementById('X').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveX();
});
document.getElementById('Y').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveY();
});
document.getElementById('Z').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveZ();
});
document.getElementById('R1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveR1();
});
document.getElementById('L1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveL1();
});
document.getElementById('U1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveU1();
});
document.getElementById('D1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveD1();
});
document.getElementById('F1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveF1();
});
document.getElementById('B1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveB1();
});
document.getElementById('M1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveM1();
});
document.getElementById('E1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveE1();
});
document.getElementById('S1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveS1();
});
document.getElementById('X1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveX1();
});
document.getElementById('Y1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveY1();
});
document.getElementById('Z1').addEventListener('click', () => {
    if (
        !flagValue &&
        !shuffleFlag &&
        gap1.every((x) => !x) &&
        gap2.every((x) => !x)
    )
        moveZ1();
});

document.getElementById('RC').addEventListener('click', () => {
    camera.position.set(6, 4, 6);
});

document.getElementById('SH').addEventListener('click', () => {
    if (!shuffleFlag && !flagValue) {
        shuffleFlag = true;
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                moves[parseInt(10 * Math.random()).toString()]();
            }, i * 1000);
        }
        setTimeout(() => {
            shuffleFlag = false;
        }, 10500);
    }
});

gui.add(parameters, 'R');
gui.add(parameters, 'F');
gui.add(parameters, 'U');
gui.add(parameters, 'L');
gui.add(parameters, 'B');
gui.add(parameters, 'D');
gui.add(parameters, 'M');
gui.add(parameters, 'E');
gui.add(parameters, 'S');
gui.add(parameters, 'X');
gui.add(parameters, 'Y');
gui.add(parameters, 'Z');
gui.add(parameters, 'R1');
gui.add(parameters, 'F1');
gui.add(parameters, 'U1');
gui.add(parameters, 'L1');
gui.add(parameters, 'B1');
gui.add(parameters, 'D1');
gui.add(parameters, 'M1');
gui.add(parameters, 'E1');
gui.add(parameters, 'S1');
gui.add(parameters, 'X1');
gui.add(parameters, 'Y1');
gui.add(parameters, 'Z1');

/**
 * Animate
 */

let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angle5 = 0;
let angle6 = 0;
let angle7 = 0;
let angle8 = 0;
let angle9 = 0;

let speed = 3;

const clock = new THREE.Clock();
let oldElapsedTime = 0;

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - oldElapsedTime;
    oldElapsedTime = elapsedTime;

    status1 = {
        corner1: intersectsPlane1(corner1),
        corner2: intersectsPlane1(corner2),
        corner3: intersectsPlane1(corner3),
        corner4: intersectsPlane1(corner4),
        corner5: intersectsPlane1(corner5),
        corner6: intersectsPlane1(corner6),
        corner7: intersectsPlane1(corner7),
        corner8: intersectsPlane1(corner8),
        edge1: intersectsPlane1(edge1),
        edge2: intersectsPlane1(edge2),
        edge3: intersectsPlane1(edge3),
        edge4: intersectsPlane1(edge4),
        edge5: intersectsPlane1(edge5),
        edge6: intersectsPlane1(edge6),
        edge7: intersectsPlane1(edge7),
        edge8: intersectsPlane1(edge8),
        edge9: intersectsPlane1(edge9),
        edge10: intersectsPlane1(edge10),
        edge11: intersectsPlane1(edge11),
        edge12: intersectsPlane1(edge12),
        cen1: intersectsPlane1(cen1),
        cen2: intersectsPlane1(cen2),
        cen3: intersectsPlane1(cen3),
        cen4: intersectsPlane1(cen4),
        cen5: intersectsPlane1(cen5),
        cen6: intersectsPlane1(cen6),
    };

    status2 = {
        corner1: intersectsPlane2(corner1),
        corner2: intersectsPlane2(corner2),
        corner3: intersectsPlane2(corner3),
        corner4: intersectsPlane2(corner4),
        corner5: intersectsPlane2(corner5),
        corner6: intersectsPlane2(corner6),
        corner7: intersectsPlane2(corner7),
        corner8: intersectsPlane2(corner8),
        edge1: intersectsPlane2(edge1),
        edge2: intersectsPlane2(edge2),
        edge3: intersectsPlane2(edge3),
        edge4: intersectsPlane2(edge4),
        edge5: intersectsPlane2(edge5),
        edge6: intersectsPlane2(edge6),
        edge7: intersectsPlane2(edge7),
        edge8: intersectsPlane2(edge8),
        edge9: intersectsPlane2(edge9),
        edge10: intersectsPlane2(edge10),
        edge11: intersectsPlane2(edge11),
        edge12: intersectsPlane2(edge12),
        cen1: intersectsPlane2(cen1),
        cen2: intersectsPlane2(cen2),
        cen3: intersectsPlane2(cen3),
        cen4: intersectsPlane2(cen4),
        cen5: intersectsPlane2(cen5),
        cen6: intersectsPlane2(cen6),
    };

    status3 = {
        corner1: intersectsPlane3(corner1),
        corner2: intersectsPlane3(corner2),
        corner3: intersectsPlane3(corner3),
        corner4: intersectsPlane3(corner4),
        corner5: intersectsPlane3(corner5),
        corner6: intersectsPlane3(corner6),
        corner7: intersectsPlane3(corner7),
        corner8: intersectsPlane3(corner8),
        edge1: intersectsPlane3(edge1),
        edge2: intersectsPlane3(edge2),
        edge3: intersectsPlane3(edge3),
        edge4: intersectsPlane3(edge4),
        edge5: intersectsPlane3(edge5),
        edge6: intersectsPlane3(edge6),
        edge7: intersectsPlane3(edge7),
        edge8: intersectsPlane3(edge8),
        edge9: intersectsPlane3(edge9),
        edge10: intersectsPlane3(edge10),
        edge11: intersectsPlane3(edge11),
        edge12: intersectsPlane3(edge12),
        cen1: intersectsPlane3(cen1),
        cen2: intersectsPlane3(cen2),
        cen3: intersectsPlane3(cen3),
        cen4: intersectsPlane3(cen4),
        cen5: intersectsPlane3(cen5),
        cen6: intersectsPlane3(cen6),
    };

    status4 = {
        corner1: intersectsPlane4(corner1),
        corner2: intersectsPlane4(corner2),
        corner3: intersectsPlane4(corner3),
        corner4: intersectsPlane4(corner4),
        corner5: intersectsPlane4(corner5),
        corner6: intersectsPlane4(corner6),
        corner7: intersectsPlane4(corner7),
        corner8: intersectsPlane4(corner8),
        edge1: intersectsPlane4(edge1),
        edge2: intersectsPlane4(edge2),
        edge3: intersectsPlane4(edge3),
        edge4: intersectsPlane4(edge4),
        edge5: intersectsPlane4(edge5),
        edge6: intersectsPlane4(edge6),
        edge7: intersectsPlane4(edge7),
        edge8: intersectsPlane4(edge8),
        edge9: intersectsPlane4(edge9),
        edge10: intersectsPlane4(edge10),
        edge11: intersectsPlane4(edge11),
        edge12: intersectsPlane4(edge12),
        cen1: intersectsPlane4(cen1),
        cen2: intersectsPlane4(cen2),
        cen3: intersectsPlane4(cen3),
        cen4: intersectsPlane4(cen4),
        cen5: intersectsPlane4(cen5),
        cen6: intersectsPlane4(cen6),
    };

    status5 = {
        corner1: intersectsPlane5(corner1),
        corner2: intersectsPlane5(corner2),
        corner3: intersectsPlane5(corner3),
        corner4: intersectsPlane5(corner4),
        corner5: intersectsPlane5(corner5),
        corner6: intersectsPlane5(corner6),
        corner7: intersectsPlane5(corner7),
        corner8: intersectsPlane5(corner8),
        edge1: intersectsPlane5(edge1),
        edge2: intersectsPlane5(edge2),
        edge3: intersectsPlane5(edge3),
        edge4: intersectsPlane5(edge4),
        edge5: intersectsPlane5(edge5),
        edge6: intersectsPlane5(edge6),
        edge7: intersectsPlane5(edge7),
        edge8: intersectsPlane5(edge8),
        edge9: intersectsPlane5(edge9),
        edge10: intersectsPlane5(edge10),
        edge11: intersectsPlane5(edge11),
        edge12: intersectsPlane5(edge12),
        cen1: intersectsPlane5(cen1),
        cen2: intersectsPlane5(cen2),
        cen3: intersectsPlane5(cen3),
        cen4: intersectsPlane5(cen4),
        cen5: intersectsPlane5(cen5),
        cen6: intersectsPlane5(cen6),
    };

    status6 = {
        corner1: intersectsPlane6(corner1),
        corner2: intersectsPlane6(corner2),
        corner3: intersectsPlane6(corner3),
        corner4: intersectsPlane6(corner4),
        corner5: intersectsPlane6(corner5),
        corner6: intersectsPlane6(corner6),
        corner7: intersectsPlane6(corner7),
        corner8: intersectsPlane6(corner8),
        edge1: intersectsPlane6(edge1),
        edge2: intersectsPlane6(edge2),
        edge3: intersectsPlane6(edge3),
        edge4: intersectsPlane6(edge4),
        edge5: intersectsPlane6(edge5),
        edge6: intersectsPlane6(edge6),
        edge7: intersectsPlane6(edge7),
        edge8: intersectsPlane6(edge8),
        edge9: intersectsPlane6(edge9),
        edge10: intersectsPlane6(edge10),
        edge11: intersectsPlane6(edge11),
        edge12: intersectsPlane6(edge12),
        cen1: intersectsPlane6(cen1),
        cen2: intersectsPlane6(cen2),
        cen3: intersectsPlane6(cen3),
        cen4: intersectsPlane6(cen4),
        cen5: intersectsPlane6(cen5),
        cen6: intersectsPlane6(cen6),
    };

    status7 = {
        corner1: intersectsPlane7(corner1),
        corner2: intersectsPlane7(corner2),
        corner3: intersectsPlane7(corner3),
        corner4: intersectsPlane7(corner4),
        corner5: intersectsPlane7(corner5),
        corner6: intersectsPlane7(corner6),
        corner7: intersectsPlane7(corner7),
        corner8: intersectsPlane7(corner8),
        edge1: intersectsPlane7(edge1),
        edge2: intersectsPlane7(edge2),
        edge3: intersectsPlane7(edge3),
        edge4: intersectsPlane7(edge4),
        edge5: intersectsPlane7(edge5),
        edge6: intersectsPlane7(edge6),
        edge7: intersectsPlane7(edge7),
        edge8: intersectsPlane7(edge8),
        edge9: intersectsPlane7(edge9),
        edge10: intersectsPlane7(edge10),
        edge11: intersectsPlane7(edge11),
        edge12: intersectsPlane7(edge12),
        cen1: intersectsPlane7(cen1),
        cen2: intersectsPlane7(cen2),
        cen3: intersectsPlane7(cen3),
        cen4: intersectsPlane7(cen4),
        cen5: intersectsPlane7(cen5),
        cen6: intersectsPlane7(cen6),
    };

    status8 = {
        corner1: intersectsPlane8(corner1),
        corner2: intersectsPlane8(corner2),
        corner3: intersectsPlane8(corner3),
        corner4: intersectsPlane8(corner4),
        corner5: intersectsPlane8(corner5),
        corner6: intersectsPlane8(corner6),
        corner7: intersectsPlane8(corner7),
        corner8: intersectsPlane8(corner8),
        edge1: intersectsPlane8(edge1),
        edge2: intersectsPlane8(edge2),
        edge3: intersectsPlane8(edge3),
        edge4: intersectsPlane8(edge4),
        edge5: intersectsPlane8(edge5),
        edge6: intersectsPlane8(edge6),
        edge7: intersectsPlane8(edge7),
        edge8: intersectsPlane8(edge8),
        edge9: intersectsPlane8(edge9),
        edge10: intersectsPlane8(edge10),
        edge11: intersectsPlane8(edge11),
        edge12: intersectsPlane8(edge12),
        cen1: intersectsPlane8(cen1),
        cen2: intersectsPlane8(cen2),
        cen3: intersectsPlane8(cen3),
        cen4: intersectsPlane8(cen4),
        cen5: intersectsPlane8(cen5),
        cen6: intersectsPlane8(cen6),
    };

    status9 = {
        corner1: intersectsPlane9(corner1),
        corner2: intersectsPlane9(corner2),
        corner3: intersectsPlane9(corner3),
        corner4: intersectsPlane9(corner4),
        corner5: intersectsPlane9(corner5),
        corner6: intersectsPlane9(corner6),
        corner7: intersectsPlane9(corner7),
        corner8: intersectsPlane9(corner8),
        edge1: intersectsPlane9(edge1),
        edge2: intersectsPlane9(edge2),
        edge3: intersectsPlane9(edge3),
        edge4: intersectsPlane9(edge4),
        edge5: intersectsPlane9(edge5),
        edge6: intersectsPlane9(edge6),
        edge7: intersectsPlane9(edge7),
        edge8: intersectsPlane9(edge8),
        edge9: intersectsPlane9(edge9),
        edge10: intersectsPlane9(edge10),
        edge11: intersectsPlane9(edge11),
        edge12: intersectsPlane9(edge12),
        cen1: intersectsPlane9(cen1),
        cen2: intersectsPlane9(cen2),
        cen3: intersectsPlane9(cen3),
        cen4: intersectsPlane9(cen4),
        cen5: intersectsPlane9(cen5),
        cen6: intersectsPlane9(cen6),
    };

    if (flag1) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationX(
                -THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle1 += speed;
        if (angle1 % 90.0 == 0) {
            flag1 = false;
            setTimeout(() => {
                gap1[0] = false;
            }, gapTime);
        }
    }

    if (flag2) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationZ(
                -THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle2 += speed;
        if (angle2 % 90.0 == 0) {
            flag2 = false;
            setTimeout(() => {
                gap1[1] = false;
            }, gapTime);
        }
    }

    if (flag3) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationY(
                -THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle3 += speed;
        if (angle3 % 90.0 == 0) {
            flag3 = false;
            setTimeout(() => {
                gap1[2] = false;
            }, gapTime);
        }
    }

    if (flag4) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationX(
                THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle4 += speed;
        if (angle4 % 90.0 == 0) {
            flag4 = false;
            setTimeout(() => {
                gap1[3] = false;
            }, gapTime);
        }
    }

    if (flag5) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationZ(
                THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle5 += speed;
        if (angle5 % 90.0 == 0) {
            flag5 = false;
            setTimeout(() => {
                gap1[4] = false;
            }, gapTime);
        }
    }

    if (flag6) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationY(
                THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle6 += speed;
        if (angle6 % 90.0 == 0) {
            flag6 = false;
            setTimeout(() => {
                gap1[5] = false;
            }, gapTime);
        }
    }

    if (flag7) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationY(
                THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle7 += speed;
        if (angle7 % 90.0 == 0) {
            flag7 = false;
            setTimeout(() => {
                gap1[6] = false;
            }, gapTime);
        }
    }

    if (flag8) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationZ(
                -THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle8 += speed;
        if (angle8 % 90.0 == 0) {
            flag8 = false;
            setTimeout(() => {
                gap1[8] = false;
            }, gapTime);
        }
    }

    if (flag9) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationX(
                THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle9 += speed;
        if (angle9 % 90.0 == 0) {
            flag9 = false;
            setTimeout(() => {
                gap1[7] = false;
            }, gapTime);
        }
    }

    if (flag11) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationX(
                THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle1 += speed;
        if (angle1 % 90.0 == 0) {
            flag11 = false;
            setTimeout(() => {
                gap2[0] = false;
            }, gapTime);
        }
    }

    if (flag22) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationZ(
                THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle2 += speed;
        if (angle2 % 90.0 == 0) {
            flag22 = false;
            setTimeout(() => {
                gap2[1] = false;
            }, gapTime);
        }
    }

    if (flag33) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationY(
                THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle3 += speed;
        if (angle3 % 90.0 == 0) {
            flag33 = false;
            setTimeout(() => {
                gap2[2] = false;
            }, gapTime);
        }
    }

    if (flag44) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationX(
                -THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle4 += speed;
        if (angle4 % 90.0 == 0) {
            flag44 = false;
            setTimeout(() => {
                gap2[3] = false;
            }, gapTime);
        }
    }

    if (flag55) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationZ(
                -THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle5 += speed;
        if (angle5 % 90.0 == 0) {
            flag55 = false;
            setTimeout(() => {
                gap2[4] = false;
            }, gapTime);
        }
    }

    if (flag66) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationY(
                -THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle6 += speed;
        if (angle6 % 90.0 == 0) {
            flag66 = false;
            setTimeout(() => {
                gap2[5] = false;
            }, gapTime);
        }
    }

    if (flag77) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationY(
                -THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle7 += speed;
        if (angle7 % 90.0 == 0) {
            flag77 = false;
            setTimeout(() => {
                gap2[6] = false;
            }, gapTime);
        }
    }

    if (flag88) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationZ(
                THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle8 += speed;
        if (angle8 % 90.0 == 0) {
            flag88 = false;
            setTimeout(() => {
                gap2[8] = false;
            }, gapTime);
        }
    }

    if (flag99) {
        temp.forEach((mesh) => {
            const matrix = new THREE.Matrix4().makeRotationX(
                -THREE.Math.degToRad(speed)
            );
            mesh.applyMatrix4(matrix);
        });
        angle9 += speed;
        if (angle9 % 90.0 == 0) {
            flag99 = false;
            setTimeout(() => {
                gap2[7] = false;
            }, gapTime);
        }
    }

    flagValue =
        flag1 ||
        flag2 ||
        flag3 ||
        flag4 ||
        flag5 ||
        flag6 ||
        flag7 ||
        flag8 ||
        flag9 ||
        flag11 ||
        flag22 ||
        flag33 ||
        flag44 ||
        flag55 ||
        flag66 ||
        flag77 ||
        flag88 ||
        flag99 ||
        tempflag;

    // Update controls
    if (controls) controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();
