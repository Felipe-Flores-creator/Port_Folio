// =============================================
// IMPORTS - Three.js ES Modules
// =============================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Ya no mutamos THREE ya que es un módulo de solo lectura.

// =============================================
// DATOS DEL PORTFOLIO - ESFERAS DEL DRAGÓN
// =============================================
const PORTFOLIO_DATA = [
    {
        id: 'inicio',
        stars: '★',
        starCount: 1,
        title: 'INICIO',
        position: { x: 0, y: 2, z: 0 },
        content: `<div style="text-align:center; margin-bottom:15px;"><img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png" style="width:100%; border-radius:12px; margin-bottom:15px;"></div><p>¡Bienvenido a mi universo digital! Soy <strong style="color:var(--primary);">Felipe_Dev</strong>, un desarrollador apasionado por crear experiencias web únicas.</p><p>Este terreno 3D representa mi trayectoria profesional. Cada esfera del dragón contiene un secreto sobre mi carrera.</p><p>Reúne las 7 esferas para descubrir todo mi potencial como desarrollador.</p><p style="font-size:0.8rem; color:var(--text-second); margin-top:20px;"><em>Nota: Las ilustraciones de este proyecto pueden ser obtenidas de repositorios como <a href="https://storyset.com/" target="_blank" style="color:var(--accent);">Storyset</a> o <a href="https://undraw.co/" target="_blank" style="color:var(--accent);">unDraw</a>.</em></p>`,

        hint: '💡 Consejo: Explora el terreno y encontra todas las esferas del Dragón.'
    },
    {
        id: 'experiencia',
        stars: '★★',
        starCount: 2,
        title: 'EXPERIENCIA',
        position: { x: 3, y: 3, z: -2 },
        content: `<div class="timeline"><div class="timeline-item"><h4>Desarrollo de herramientas GIS personalizadas para correción de flujo de trabajo</h4><div class="date">2022 - Presente</div><p>Participación en grupo de investigación multiamenazas de la Universidad de Concepción.</p></div><div class="timeline-item"><h4>Full-Stack Developer</h4><div class="date">2020 - 2022</div><p>Desarrollo de aplicaciones web con React y Node.js.</p></div><div class="timeline-item"><h4>Frontend Developer</h4><div class="date">2018 - 2020</div><p>Curso de más de 300 horas en javasript y lógica de Software.</p></div></div>`,
        hint: '✨ Más de 6 años transformando ideas en código.'
    },
    {
        id: 'habilidades',
        stars: '★★★',
        starCount: 3,
        title: 'HABILIDADES',
        position: { x: -3, y: 2.5, z: 2 },
        content: `<p>Mi arsenal tecnológico:</p><div class="skills-grid"><div class="skill-tag">⚛️ React</div><div class="skill-tag">🌐 Next.js</div><div class="skill-tag">🟢 Node.js</div><div class="skill-tag">📘 TypeScript</div><div class="skill-tag">🐍 Python</div><div class="skill-tag">🎨 Three.js</div><div class="skill-tag">🐳 Docker</div><div class="skill-tag">☸️ Kubernetes</div><div class="skill-tag"> Angular</div><div class="skill-tag">🗄️ GraphQL</div><div class="skill-tag">🎨 Figma</div><div class="skill-tag"> :octocat: GitHub </div><div class="skill-tag"> 🐚 Bash</div></div><div class="panel-hint" style="margin-top:20px;"><span>`,

        hint: '🚀 Siempre aprendiendo nuevas tecnologías e inovación.'
    },
    {
        id: 'proyectos',
        stars: '★★★★',
        starCount: 4,
        title: 'PROYECTOS',
        position: { x: 2, y: 2, z: 3 },
        content: `<div class="project-card"><h4>Desarrollo de herramienta con python, para la corrección de flujos de trabajo en equipo de Arauco</h4><p>Desarrollo de herramienta para la clasificación de la región de Ñuble según su captación de agua, con datos opensource</p></div><div class="project-card"><h4>Plataforma React para visualización de variables espaciales</h4><p>Cálculo de parámetros como costos de bencina con React</p></div><div class="project-card"><h4>🤖 Chatbot IA</h4><p>Asistente virtual con procesamiento de lenguaje natural y machine learning.</p></div>`,
        hint: '💻 Cada proyecto es una nueva aventura.'
    },
    {
        id: 'contacto',
        stars: '★★★★★',
        starCount: 5,
        title: 'CONTACTO',
        position: { x: -2, y: 2, z: -3 },
        content: `<p>¿Quieres trabajar juntos? ¡Me encantaría escucharte!</p><p style="margin-top: 15px;"><strong style="color:#f5c542;">📧 Email:</strong><br>felipe.ignacio.geo@gmail.com</p><p><strong style="color:#f5c542;">💼 LinkedIn:</strong><br>https://www.linkedin.com/in/felipe-flores-dev-geo/</p><p><strong style="color:#f5c542;">🐙 GitHub:</strong><br>https://github.com/Felipe-Flores-creator/Felipe-Flores-creator</p><p><strong style="color:#f5c542;">🌍 Ubicación:</strong><br>Concepción, Chile (Remoto)</p>`,
        hint: '📩 ¡No dudes en escribirme!'
    },
    {
        id: 'educacion',
        stars: '★★★★★★',
        starCount: 6,
        title: 'EDUCACIÓN',
        position: { x: 4, y: 2.5, z: 1 },
        content: `<div class="timeline"><div class="timeline-item"><h4>Geógrafo</h4><div class="date">2028 - 2024</div><p>Universidad de Concepción</p></div><div class="timeline-item"><h4>Curso programación con IA</h4><div class="date">2021</div><p>Especialización en Machine Learning y Deep Learning con python</p></div><div class="timeline-item"><h4>Certificación Data Science</h4><div class="date">2022</div><p>Certificado en Computer vision y procesamiento de imágenes con python</p></div><div class="timeline-item"><h4>Certificación Bootcamp JavaScript</h4><div class="date">2026</div><p>Desarrollo Full-Stack moderno</p></div></div>`,
        hint: '📚 El aprendizaje nunca termina.'
    },
    {
        id: 'logros',
        stars: '★★★★★★★',
        starCount: 7,
        title: 'LOGROS',
        position: { x: -4, y: 3, z: -1 },
        content: `<div class="timeline"><div class="timeline-item"><h4>Participación y colaboración para proyectos de Municipalidad Coelemu.</h4><p>Reconocimiento por desarrollo de soluciones web innovadoras.</p></div><div class="timeline-item"><h4>⭐ Boot camp de 300 horas en JavaScript</h4><p>.</p></div><div class="timeline-item"><h4> Contribuciones Open Source en herramientas ambientales GIS</h4><p>Contribuidor activo en proyectos de la comunidada través de Linkedin.</p></div></div>`,
        hint: '🎯 Cada logro es un escalón hacia nuevas metas.'
    }
];

// =============================================
// VARIABLES GLOBALES
// =============================================
let camera, scene, renderer, controls;
let markers = [];
let discoveredBalls = new Set();
let raycaster, mouse;
let hoveredBall = null;
let isPanelOpen = false;
let terrain;
let isWebGLContextLost = false;

// Registro de animaciones de modelos (centralizado)
let animatedModels = [];

// Animación de cámara de introducción
let cameraIntroAnimation = {
    active: true,
    progress: 0,
    startPos: new THREE.Vector3(-20, 15, 20),
    endPos: new THREE.Vector3(-12, 10, 12),
    duration: 5.0 // segundos (más suave)
};

// =============================================
// GENERADOR DE RUIDO PARA TERRENO
// =============================================
function noise(x, z) {
    return Math.sin(x * 0.5) * Math.cos(z * 0.5) * 2 +
        Math.sin(x * 1.2 + z * 0.8) * Math.cos(z * 1.5 - x * 0.3) * 1.5 +
        Math.sin(x * 2.5) * Math.cos(z * 2.5) * 0.8;
}

function getTerrainHeight(x, z) {
    return Math.max(-0.5, noise(x, z));
}

// =============================================
// INICIALIZACIÓN
// =============================================
init();

function init() {
    // Cámara - Posición inicial para animación de introducción
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(-20, 15, 20); // Posición inicial de la animación

    // Escena
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd9e2ec); // Azul cielo claro
    scene.fog = null; // Niebla desactivada para asegurar visibilidad total

    // Renderizador - Configuración ultra-compatible para evitar fallos de driver
    function createRenderer() {
        const configs = [
            { antialias: false, alpha: false, powerPreference: 'default', stencil: false }, // Fallback máximo
            { antialias: false, alpha: true, powerPreference: 'low-power' },
            { antialias: false, alpha: false }
        ];

        for (let config of configs) {
            try {
                const r = new THREE.WebGLRenderer(config);
                console.log("✅ Renderer creado con configuración:", config);
                return r;
            } catch (e) {
                console.warn("⚠️ Falló intento de renderer:", config, e);
            }
        }
        return null;
    }

    renderer = createRenderer();

    if (!renderer) {
        document.body.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#1a1a1a;color:#fff;text-align:center;padding:20px;font-family:'Outfit',sans-serif;">
                <h1 style="color:#f5c542; font-size:2rem; margin-bottom: 10px;">LÍMITE DE NAVEGADOR ALCANZADO ⚠️</h1>
                <p style="max-width:500px; line-height:1.6; opacity:0.8;">El sistema agotó los contextos WebGL disponibles o la aceleración por hardware está desactivada.</p>
                <div style="margin:25px; padding:20px; background:rgba(255,255,255,0.05); border-radius:12px;">
                    <p><strong>Para solucionar esto:</strong></p>
                    <ol style="text-align:left; display:inline-block; margin-top:10px;">
                        <li>Cierra otras pestañas de este proyecto.</li>
                        <li>Reinicia tu navegador completamente.</li>
                        <li>Verifica "Aceleración por Hardware" en Configuración.</li>
                    </ol>
                </div>
                <button onclick="location.reload()" style="background:#f5c542; border:none; padding:12px 30px; border-radius:30px; color:#000; font-weight:bold; cursor:pointer; transition:0.3s; box-shadow:0 4px 15px rgba(245,197,66,0.3);">REINTENTAR AHORA</button>
            </div>
        `;
        return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = false;
    renderer.toneMapping = THREE.NoToneMapping;

    // Gestión de contexto WebGL
    renderer.domElement.addEventListener('webglcontextlost', (event) => {
        event.preventDefault();
        console.warn('⚠️ Contexto WebGL perdido. Pausando renderizado.');
        isWebGLContextLost = true;
    });

    renderer.domElement.addEventListener('webglcontextrestored', () => {
        console.log('✅ Contexto WebGL restaurado.');
        isWebGLContextLost = false;
    });



    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Controles - Mejorados para vista panorámica
    controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI * 0.48;
    controls.minDistance = 5;
    controls.maxDistance = 40;
    controls.target.set(0, 2, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = true;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.8;
    controls.panSpeed = 0.5;

    // Luces
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(10, 20, 10);
    mainLight.castShadow = false; // Desactivadas las sombras de la luz
    // mainLight.shadow.mapSize.set(1024, 1024); // Reducido (antes: 2048)
    scene.add(mainLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    scene.add(hemiLight);

    // Estrellas de fondo (Opcional en modo día, las haremos blancas sutiles)
    createBackgroundStars();

    // Terreno
    createTerrain();

    // Agua
    createWater();

    // Kame House
    createKameHouse();

    // Planeta Kaioh
    createPlanetKaioh();

    // Goku con Kintoun
    createGokuKintoun();

    // Oolo Temple (sobre montaña) - COMENTADO PORQUE EL ARCHIVO NO EXISTE
    // createOoloTemple();

    // Krillin (sobre montaña)
    createKrillin();

    // Tien Shinhan (sobre montaña)
    createTienShinhan();

    // Árboles
    createTrees();

    // Esferas del Dragón
    createDragonBalls();

    // Terodáctilo (Nuevo)
    createTerodactilo();

    // Chiaotzu (Nuevo)
    createChiaotzu();

    // Yamcha
    createYamcha();

    // Nave de Namek (Nuevo)
    createNamekSpaceship();

    // Arale (Nuevo)
    createArale();

    // Bulma en su vehículo (Nuevo)
    createBulma();

    // Máquina del tiempo de Trunks
    createTimeMachine();

    // Bulma en la montaña (Más grande, mirando las esferas del dragón)
    createBulmaMountain();

    // Maestro Roshi (delante de la Kame House)
    createMasterRoshi();

    // Piccolo Daimaku en las montañas
    createPiccoloDaimaku();

    // Raycaster
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // Event Listeners
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('click', onClick);
    document.getElementById('panelClose').addEventListener('click', closePanel);

    // Ocultar loading
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
        }, 800);
    }, 2500);

    // Ocultar instrucciones
    setTimeout(() => {
        const instr = document.getElementById('instructions');
        if (instr) instr.classList.add('hidden');
    }, 6000);


    requestAnimationFrame(animate);
}

// =============================================
// AMBIENTE Y ESTRELLAS
// =============================================
function createBackgroundStars() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 100; i++) { // Reducido a 100 partículas para máximo rendimiento
        vertices.push(
            THREE.MathUtils.randFloatSpread(100),
            THREE.MathUtils.randFloat(-10, 50),
            THREE.MathUtils.randFloatSpread(100)
        );
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({
        color: 0xf5c542,
        size: 0.05,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
    });
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);
}

// =============================================
// CREACIÓN DEL TERRENO
// =============================================
function createTerrain() {
    const size = 20;
    const segments = 80;
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
    geometry.rotateX(-Math.PI / 2);

    const vertices = geometry.attributes.position.array;
    const colors = [];
    const colorSoil = new THREE.Color('#3d2b1f'); // Tierra base
    const colorGrass = new THREE.Color('#d2b48c'); // Café muy claro
    const colorMoss = new THREE.Color('#1a3a16'); // Verde bosque profundo
    const colorWater = new THREE.Color('#215e7d'); // Agua más natural

    for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const z = vertices[i + 2];
        const height = getTerrainHeight(x, z);
        vertices[i + 1] = height;

        let color;
        if (height < 0) {
            color = colorWater;
        } else if (height < 0.2) {
            color = colorSoil;
        } else if (height < 1.5) {
            color = colorGrass;
        } else {
            color = colorMoss;
        }

        const variation = 0.9 + Math.random() * 0.2;
        colors.push(color.r * variation, color.g * variation, color.b * variation);
    }

    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.8,
        metalness: 0.1
    });

    terrain = new THREE.Mesh(geometry, material);
    terrain.receiveShadow = false;
    terrain.castShadow = false;
    scene.add(terrain);
}

// =============================================
// CREACIÓN DEL AGUA
// =============================================
function createWater() {
    const geometry = new THREE.PlaneGeometry(16, 16);
    geometry.rotateX(-Math.PI / 2);

    const material = new THREE.MeshLambertMaterial({
        color: 0x4db2ff,
        transparent: true,
        opacity: 0.5
    });

    const water = new THREE.Mesh(geometry, material);
    water.position.y = -0.2;
    scene.add(water);
}

// =============================================
// CREACIÓN DE KAME HOUSE
// =============================================
let kameHouse = null;

function createKameHouse() {
    const loader = new GLTFLoader();
    console.log('🏠 Cargando Kame House desde: assets/kamehouse.glb');

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/kamehouse.glb',
        (gltf) => {
            console.log('🏠 Kame House cargada exitosamente!', gltf);
            kameHouse = gltf.scene;

            // Posicionar sobre el agua (como isla en el centro) - Mismos valores exactos
            kameHouse.position.set(5, -0.3, 5);

            // Calcular escala apropiada - HACER MÁS GRANDE
            const box = new THREE.Box3().setFromObject(kameHouse);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 2.5 / maxDim;
            kameHouse.scale.setScalar(targetScale);

            // Agregar luces para la Kame House
            const kameLight = new THREE.PointLight(0xffaa00, 1, 15);
            kameLight.position.set(-3, 2, -3);
            kameLight.name = 'KameHouseLight';
            scene.add(kameLight);

            scene.add(kameHouse);
            console.log('🏠 Kame House agregada. Tamaño:', size, 'Escala:', targetScale);
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🏠 Cargando Kame House: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Kame House:', error);
        }
    );
}

// =============================================
// CREACIÓN DEL PLANETA KAIOH
// =============================================
let planetKaioh = null;

function createPlanetKaioh() {
    const loader = new GLTFLoader();
    console.log('🪐 Cargando Planeta Kaioh desde: assets/planeta_do_sr.kaio.glb');

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/planeta_do_sr.kaio.glb',
        (gltf) => {
            console.log('🪐 Planeta Kaioh cargado exitosamente!', gltf);
            planetKaioh = gltf.scene;

            // Posicionar en el cielo (visible desde la cámara)
            planetKaioh.position.set(8, 5, 8);  // Más abajo en el cielo

            // Calcular escala apropiada
            const box = new THREE.Box3().setFromObject(planetKaioh);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 2 / maxDim;  // Más pequeño
            planetKaioh.scale.setScalar(targetScale);

            // Rotación lenta continua
            planetKaioh.rotation.y = Math.PI / 4;

            scene.add(planetKaioh);
            console.log('🪐 Planeta Kaioh agregado. Tamaño:', size, 'Escala:', targetScale);

            // Registrar animación centralizada
            animatedModels.push({
                type: 'rotation',
                object: planetKaioh,
                speed: 0.002
            });
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🪐 Cargando Planeta Kaioh: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Planeta Kaioh:', error);
        }
    );
}

// =============================================
// CREACIÓN DE ÁRBOLES
// =============================================
function createTrees() {
    const treePositions = [
        { x: -5, z: -4 }, { x: 5, z: -3 }, { x: -3, z: 5 },
        { x: 6, z: 4 }, { x: -6, z: 2 }, { x: 4, z: -5 },
        { x: -4, z: -6 }, { x: 7, z: -1 }, { x: -7, z: -2 },
        { x: 3, z: 6 }, { x: -2, z: -7 }, { x: 5, z: 5 }
    ];

    treePositions.forEach(pos => {
        const height = getTerrainHeight(pos.x, pos.z);
        if (height > 0.2) {
            createTree(pos.x, height, pos.z);
        }
    });
}

function createTree(x, y, z) {
    const group = new THREE.Group();
    group.position.set(x, y, z);

    const trunkGeometry = new THREE.CylinderGeometry(0.08, 0.12, 0.5, 6);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x6B4A2A });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 0.25;
    trunk.castShadow = true;
    group.add(trunk);

    const foliageGeometry = new THREE.ConeGeometry(0.35, 0.7, 8);
    const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x2d6a2d });
    const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
    foliage.position.y = 0.7;
    foliage.castShadow = true;
    group.add(foliage);

    const foliage2 = new THREE.Mesh(
        new THREE.ConeGeometry(0.25, 0.5, 8),
        new THREE.MeshStandardMaterial({ color: 0x3a7a3a })
    );
    foliage2.position.y = 0.9;
    foliage2.castShadow = true;
    group.add(foliage2);

    scene.add(group);
}

// =============================================
// CREACIÓN DE GOKU CON KINTOUN
// =============================================
let gokuKintoun = null;

function createGokuKintoun() {
    const loader = new GLTFLoader();
    console.log('☁️ Cargando Goku con Kintoun desde: assets/son_goku_and_kintoun_nimbus.glb');

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/son_goku_and_kintoun_nimbus.glb',
        (gltf) => {
            console.log('☁️ Goku cargado exitosamente!', gltf);
            gokuKintoun = gltf.scene;

            // Posicionar en el aire, volando cerca del centro
            gokuKintoun.position.set(-4, 5.5, -4);

            // Calcular escala apropiada
            const box = new THREE.Box3().setFromObject(gokuKintoun);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 0.8 / maxDim;
            gokuKintoun.scale.setScalar(targetScale);

            // Rotación inicial
            gokuKintoun.rotation.y = -Math.PI / 4;

            scene.add(gokuKintoun);
            console.log('☁️ Goku agregado. Tamaño:', size, 'Escala:', targetScale);

            // Registrar animación centralizada
            animatedModels.push({
                type: 'circular',
                object: gokuKintoun,
                baseX: -4,
                baseZ: -4,
                baseY: 5.5,
                radius: 2.5,
                speed: 1,
                yOffset: 0.3
            });
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('☁️ Cargando Goku: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Goku:', error);
        }
    );
}

// =============================================
// CREACIÓN DE OOLO (Templo de Piccolo)
// =============================================
let ooloTemple = null;

function createOoloTemple() {
    const loader = new GLTFLoader();
    console.log('🏯 Cargando Oolo Temple desde: assets/wii_-_dragon_ball_revenge_of_king_piccolo_-_oolo.glb');

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/wii_-_dragon_ball_revenge_of_king_piccolo_-_oolo.glb',
        (gltf) => {
            console.log('🏯 Oolo Temple cargado exitosamente!', gltf);
            ooloTemple = gltf.scene;

            // Posicionar sobre una montaña (visible desde la cámara)
            const mountainX = -3;
            const mountainZ = -5;
            const terrainHeight = getTerrainHeight(mountainX, mountainZ);

            ooloTemple.position.set(mountainX, terrainHeight + 0.2, mountainZ);

            // Calcular escala apropiada
            const box = new THREE.Box3().setFromObject(ooloTemple);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 1.2 / maxDim;  // Más grande (antes: 0.6)
            ooloTemple.scale.setScalar(targetScale);

            scene.add(ooloTemple);
            console.log('🏯 Oolo Temple agregado en:', mountainX, terrainHeight, mountainZ, '| Altura final:', terrainHeight + 0.2, '| Escala:', targetScale);
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🏯 Cargando Oolo Temple: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Oolo Temple:', error);
        }
    );
}

// =============================================
// CREACIÓN DE KRILLIN
// =============================================
let krillin = null;

function createKrillin() {
    const loader = new GLTFLoader();
    console.log('🥋 Cargando Krillin desde: assets/krillin.glb');

    // Buscar una posición con altura de montaña (> 2.0 para montaña alta)
    const testPositions = [
        { x: 2, z: 2 }, { x: -2, z: 2 }, { x: 2, z: -2 }, { x: -2, z: -2 },
        { x: 3, z: 3 }, { x: -3, z: 3 }, { x: 3, z: -3 }, { x: -3, z: -3 },
        { x: 4, z: 4 }, { x: -4, z: 4 }, { x: 4, z: -4 }, { x: -4, z: -4 },
        { x: 5, z: 3 }, { x: -5, z: 3 }, { x: 5, z: -3 }, { x: -5, z: -3 }
    ];

    let bestPos = { x: 3, z: 3 };
    let bestHeight = 0;

    testPositions.forEach(pos => {
        const h = getTerrainHeight(pos.x, pos.z);
        console.log(`🗻 Posición (${pos.x}, ${pos.z}): altura = ${h.toFixed(2)}`);
        if (h > bestHeight) {
            bestHeight = h;
            bestPos = pos;
        }
    });

    console.log(`🥋 Mejor posición para Krillin: (${bestPos.x}, ${bestPos.z}) con altura ${bestHeight.toFixed(2)}`);

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/krillin.glb',
        (gltf) => {
            console.log('🥋 Krillin cargado exitosamente!', gltf);
            krillin = gltf.scene;

            // Posicionar sobre la montaña encontrada
            const terrainHeight = getTerrainHeight(bestPos.x, bestPos.z);
            krillin.position.set(bestPos.x, terrainHeight + 0.2, bestPos.z);

            // Calcular escala apropiada (más pequeño)
            const box = new THREE.Box3().setFromObject(krillin);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 0.35 / maxDim;
            krillin.scale.setScalar(targetScale);

            // Rotación para que mire hacia el centro
            krillin.rotation.y = -Math.PI / 4;

            scene.add(krillin);
            console.log('🥋 Krillin agregado en:', bestPos.x, terrainHeight, bestPos.z, '| Escala:', targetScale);
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🥋 Cargando Krillin: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Krillin:', error);
        }
    );
}

// =============================================
// CREACIÓN DE TIEN SHINHAN
// =============================================
let tienShinhan = null;

function createTienShinhan() {
    const loader = new GLTFLoader();
    console.log('🥋 Cargando Tien Shinhan desde: assets/Ten_chin_han.glb');

    // Buscamos el pico exacto de la montaña en la zona noroeste (no tan alejada)
    let shipX = -5;
    let shipZ = 5;
    let hValue = -1;

    for (let x = -6; x <= -4; x += 0.2) {
        for (let z = 4; z <= 6; z += 0.2) {
            let currentH = getTerrainHeight(x, z);
            if (currentH > hValue) {
                hValue = currentH;
                shipX = x;
                shipZ = z;
            }
        }
    }

    console.log(`🥋 Mejor posición encontrada para Tien: (${shipX}, ${shipZ}) h=${hValue}`);

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/Ten_chin_han.glb',
        (gltf) => {
            console.log('🥋 Tien Shinhan cargado exitosamente!', gltf);
            tienShinhan = gltf.scene;

            // Posicionar sobre la montaña encontrada
            tienShinhan.position.set(shipX, hValue, shipZ);

            // Calcular escala apropiada (un poco más grande)
            const box = new THREE.Box3().setFromObject(tienShinhan);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 0.75 / maxDim;
            tienShinhan.scale.setScalar(targetScale);

            // Rotación: mirando hacia el centro (donde están las esferas)
            tienShinhan.lookAt(0, hValue, 0);

            scene.add(tienShinhan);
            console.log('🥋 Tien Shinhan agregado en:', shipX, hValue, shipZ, '| Escala:', targetScale);
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🥋 Cargando Tien Shinhan: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Tien Shinhan:', error);
        }
    );
}

// =============================================
// CREACIÓN DE CHIAOTZU
// =============================================
let chiaotzu = null;

function createChiaotzu() {
    const loader = new GLTFLoader();
    console.log('🥋 Cargando Chiaotzu desde: assets/chiaotzu_-_dragon_ball.glb');

    // Buscamos un pico de montaña en una zona marginal DIFERENTE (Noreste)
    // x: 7 a 10, z: 7 a 10
    let shipX = 8;
    let shipZ = 8;
    let hValue = -1;

    for (let x = 7; x <= 10; x += 0.2) {
        for (let z = 7; z <= 10; z += 0.2) {
            let currentH = getTerrainHeight(x, z);
            if (currentH > hValue) {
                hValue = currentH;
                shipX = x;
                shipZ = z;
            }
        }
    }

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/chiaotzu_-_dragon_ball.glb',
        (gltf) => {
            console.log('🥋 Chiaotzu cargado exitosamente!', gltf);
            chiaotzu = gltf.scene;

            // Situar en la nueva montaña marginal encontrada (un poquito más abajo)
            chiaotzu.position.set(shipX, hValue + 0.05, shipZ);

            // Chiaotzu es muy bajito
            const box = new THREE.Box3().setFromObject(chiaotzu);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 0.3 / maxDim;
            chiaotzu.scale.setScalar(targetScale);

            // Orientación: mirando hacia el centro (donde están las esferas)
            chiaotzu.lookAt(0, hValue, 0);

            scene.add(chiaotzu);
            console.log('🥋 Chiaotzu agregado en:', shipX, hValue, shipZ, '| Escala:', targetScale);

            // Animación: sutil flotación (Chiaotzu suele levitar)
            // ELIMINADA POR PETICIÓN DEL USUARIO (ESTÁTICO)
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🥋 Cargando Chiaotzu: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Chiaotzu:', error);
        }
    );
}

// =============================================
// CREACIÓN DE YAMCHA
// =============================================
let yamcha = null;

function createYamcha() {
    const loader = new GLTFLoader();
    console.log('🥋 Cargando Yamcha desde: assets/yamcha_db.glb');

    // Buscamos un pico un poquitito más adelante que la montaña trasera
    let yamchaX = -7;
    let yamchaZ = -7;
    let hValue = -1;

    // Escanear con un rango muy sutil desde el fondo
    for (let x = -7.5; x <= -4.5; x += 0.3) {
        for (let z = -7.5; z <= -4.5; z += 0.3) {
            let currentH = getTerrainHeight(x, z);
            if (currentH > hValue) {
                hValue = currentH;
                yamchaX = x;
                yamchaZ = z;
            }
        }
    }

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/yamcha_db.glb',
        (gltf) => {
            console.log('🥋 Yamcha cargado exitosamente!', gltf);
            yamcha = gltf.scene;

            const finalY = (hValue > 0) ? hValue : 0.2;

            // Elevación sutil extra, bajada un poquitito a petición
            yamcha.position.set(yamchaX, finalY + 0.15, yamchaZ);

            const box = new THREE.Box3().setFromObject(yamcha);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);

            // Tamaño mucho más pequeño a petición (0.1 en lugar de 0.4)
            const targetScale = (maxDim > 0) ? (0.1 / maxDim) : 0.02;
            yamcha.scale.setScalar(targetScale);

            // Orientación firme hacia el centro
            yamcha.lookAt(0, finalY, 0);

            scene.add(yamcha);
            console.log('🥋 Yamcha colosal estacionado en:', yamchaX, finalY, yamchaZ);

            // SIN ANIMACIÓN (ESTÁTICO)
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🥋 Cargando Yamcha: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Yamcha:', error);
        }
    );
}

// =============================================
// CREACIÓN DE TERODÁCTILO
// =============================================
let terodactilo = null;

function createTerodactilo() {
    const loader = new GLTFLoader();
    console.log('🦖 Cargando Terodáctilo desde: assets/terodactilo_dragon_ball.glb');

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/terodactilo_dragon_ball.glb',
        (gltf) => {
            console.log('🦖 Terodáctilo cargado exitosamente!', gltf);
            terodactilo = gltf.scene;

            // Posicionar más alejado del centro, flotando en los bordes
            terodactilo.position.set(-8, 5, 8);

            // Calcular escala apropiada (más pequeño: 0.8 en lugar de 2.0)
            const box = new THREE.Box3().setFromObject(terodactilo);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 0.8 / maxDim;
            terodactilo.scale.setScalar(targetScale);

            // Orientación fija
            terodactilo.rotation.y = Math.PI / 4;

            scene.add(terodactilo);
            console.log('🦖 Terodáctilo agregado. Tamaño:', size, 'Escala:', targetScale);

            // Registrar animación centralizada
            animatedModels.push({
                type: 'float',
                object: terodactilo,
                baseY: 5,
                amplitude: 0.4,
                speed: 1,
                lateralAmplitude: 0.1,
                lateralSpeed: 0.5
            });
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🦖 Cargando Terodáctilo: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Terodáctilo:', error);
        }
    );
}

// =============================================
// CREACIÓN DE NAVE DE NAMEK
// =============================================
let namekSpaceship = null;

function createNamekSpaceship() {
    const loader = new GLTFLoader();
    console.log('🛸 Cargando Nave de Namek desde: assets/namek_spaceship.glb');

    // Cambiamos a una montaña más alta y visible (cerca de una de las esquinas del terreno)
    const shipX = -7;
    const shipZ = -7;
    const h = getTerrainHeight(shipX, shipZ);

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/namek_spaceship.glb',
        (gltf) => {
            console.log('🛸 Nave de Namek cargada exitosamente!', gltf);
            namekSpaceship = gltf.scene;

            // Posicionar sobre la montaña con un pequeño offset
            namekSpaceship.position.set(shipX, h + 0.2, shipZ);

            // Escala un poco más equilibrada (1.5 en vez de 2.0)
            const box = new THREE.Box3().setFromObject(namekSpaceship);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 1.5 / maxDim;
            namekSpaceship.scale.setScalar(targetScale);

            // Orientación para que se vea bien
            namekSpaceship.rotation.y = Math.PI / 4;

            scene.add(namekSpaceship);
            console.log('🛸 Nave de Namek agregada en:', shipX, h, shipZ, '| Escala:', targetScale);

            // Registrar animación centralizada
            animatedModels.push({
                type: 'float',
                object: namekSpaceship,
                baseY: h + 0.1,
                amplitude: 0.1,
                speed: 1
            });
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🛸 Cargando Nave de Namek: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Nave de Namek:', error);
        }
    );
}

// =============================================
// CREACIÓN DE GREGORY (Planeta Kaioh)
// =============================================
let gregory = null;

function createGregory() {
    const loader = new GLTFLoader();
    console.log('🦗 Cargando Gregory desde: assets/gregory_-_dragon_ball.glb');

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/gregory_-_dragon_ball.glb',
        (gltf) => {
            console.log('🦗 Gregory cargado exitosamente!', gltf);
            gregory = gltf.scene;

            // Situar en el Planeta Kaioh (8, 5, 8)
            // Ponemos a Gregory un poquito al lado del centro del planeta
            gregory.position.set(8.5, 6, 8.5);

            // Gregory es pequeño
            const box = new THREE.Box3().setFromObject(gregory);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 0.2 / maxDim;
            gregory.scale.setScalar(targetScale);

            scene.add(gregory);

            // Registrar animación centralizada
            animatedModels.push({
                type: 'orbit',
                object: gregory,
                planetRef: 'planetKaioh',
                orbitRadius: 0.8,
                speed: 2,
                yOffset: 0.8
            });
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🦗 Cargando Gregory: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Gregory:', error);
        }
    );
}

// =============================================
// CREACIÓN DE ARALE
// =============================================
let arale = null;

function createArale() {
    const loader = new GLTFLoader();
    console.log('🌸 Cargando Arale desde: assets/dragon_ball_arale.glb');

    // Buscamos el pico exacto de la montaña en esa zona alejada
    let shipX = 8;
    let shipZ = -8;
    let h = -1;

    for (let x = 7; x <= 9; x += 0.2) {
        for (let z = -9; z <= -7; z += 0.2) {
            let currentH = getTerrainHeight(x, z);
            if (currentH > h) {
                h = currentH;
                shipX = x;
                shipZ = z;
            }
        }
    }

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/dragon_ball_arale.glb',
        (gltf) => {
            console.log('🌸 Arale cargada exitosamente!', gltf);
            arale = gltf.scene;

            // Situar en la cima encontrada
            arale.position.set(shipX, h + 0.1, shipZ);

            // Escala para que Arale se vea bien
            const box = new THREE.Box3().setFromObject(arale);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 0.6 / maxDim;
            arale.scale.setScalar(targetScale);

            // Orientación para que mire al centro
            arale.rotation.y = -Math.PI / 4;

            scene.add(arale);
            console.log('🌸 Arale agregada en:', shipX, h, shipZ, '| Escala:', targetScale);

            // Registrar animación centralizada
            animatedModels.push({
                type: 'jump',
                object: arale,
                baseY: h + 0.1,
                amplitude: 0.3,
                speed: 5
            });
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🌸 Cargando Arale: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Arale:', error);
        }
    );
}

// =============================================
// CREACIÓN DE BULMA (Vehículo)
// =============================================
let bulmaCar = null;

function createBulma() {
    const loader = new GLTFLoader();
    console.log('🏎️ Cargando Bulma desde: assets/caroo_bulma.glb');

    // Buscamos una zona firme en un cuadrante LIMPIO de áboles (x: 0 a 3, z: -6 a -2)
    let shipX = 1;
    let shipZ = -4;
    let h = 0;

    // Escanear área libre de árboles
    for (let x = 0; x <= 3; x += 0.5) {
        for (let z = -6; z <= -2; z += 0.5) {
            let currentH = getTerrainHeight(x, z);
            if (currentH > 0.3 && currentH < 1.0) {
                h = currentH;
                shipX = x;
                shipZ = z;
                // Verificamos que no esté cerca de un árbol (distancia mínima)
                break;
            }
        }
    }

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/caroo_bulma.glb',
        (gltf) => {
            console.log('🏎️ Bulma cargada exitosamente!', gltf);
            bulmaCar = gltf.scene;

            // Situar en el suelo firme, ligeramente elevado (h + 0.25) para evitar que las ruedas
            // del vehículo se internen en la superficie de la montaña (clipping)
            bulmaCar.position.set(shipX, h + 0.25, shipZ);

            // Escala apropiada
            const box = new THREE.Box3().setFromObject(bulmaCar);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 0.8 / maxDim;
            bulmaCar.scale.setScalar(targetScale);

            // Orientación
            bulmaCar.rotation.y = Math.PI / 4;

            scene.add(bulmaCar);
            console.log('🏎️ Bulma estacionada en:', shipX, h, shipZ, '| Altura:', h);

            // Sin animación de flotación para que parezca estacionada firmemente
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🏎️ Cargando Bulma: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Bulma:', error);
        }
    );
}

// =============================================
// CREACIÓN DE BULMA EN LA MONTAÑA (Más grande, mirando las esferas)
// =============================================
let bulmaMountain = null;

function createBulmaMountain() {
    const loader = new GLTFLoader();
    console.log('🏔️👩 Cargando Bulma de montaña desde: assets/bulma_-_dragon_ball.glb');

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/bulma_-_dragon_ball.glb',
        (gltf) => {
            console.log('🏔️👩 Bulma de montaña cargada exitosamente!', gltf);
            bulmaMountain = gltf.scene;

            // Posicionar en una montaña elevada cerca del templo Oolo
            const mountainX = -5;
            const mountainZ = -6;
            const terrainHeight = getTerrainHeight(mountainX, mountainZ);

            // Subir más arriba sobre la montaña
            bulmaMountain.position.set(mountainX, Math.max(terrainHeight, 1.5) + 1.2, mountainZ);

            // Calcular escala apropiada - BULMA UN POCO MÁS PEQUEÑA
            const box = new THREE.Box3().setFromObject(bulmaMountain);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            // Escala reducida (1.5 en lugar de 2.0)
            const targetScale = 1.5 / maxDim;
            bulmaMountain.scale.setScalar(targetScale);

            // Rotación para que mire hacia el centro donde están las esferas del dragón
            // Calcular ángulo hacia el centro (0, 0)
            const angleToCenter = Math.atan2(-mountainX, -mountainZ);
            bulmaMountain.rotation.y = angleToCenter;

            scene.add(bulmaMountain);
            console.log('🏔️👩 Bulma de montaña agregada en:', mountainX, Math.max(terrainHeight, 2.0) + 0.5, mountainZ, '| Escala (muy grande):', targetScale, '| Altura terreno:', terrainHeight);
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('🏔️👩 Cargando Bulma de montaña: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Bulma de montaña:', error);
        }
    );
}

// =============================================
// CREACIÓN DEL MAESTRO ROSHI
// =============================================
let masterRoshi = null;

function createMasterRoshi() {
    const loader = new GLTFLoader();
    console.log('👴 Cargando Maestro Muten Roshi desde: assets/maestro_muten__master_roshi.glb');

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/maestro_muten__master_roshi.glb',
        (gltf) => {
            console.log('👴 Maestro Muten Roshi cargado exitosamente!', gltf);
            masterRoshi = gltf.scene;

            // Posicionar delante de la Kame House (que está en 5, -0.3, 5)
            masterRoshi.position.set(5, 0.2, 6.5);

            // Calcular escala apropiada
            const box = new THREE.Box3().setFromObject(masterRoshi);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 0.6 / maxDim;
            masterRoshi.scale.setScalar(targetScale);

            // Rotación para que mire hacia la Kame House
            masterRoshi.rotation.y = Math.PI;

            scene.add(masterRoshi);
            console.log('👴 Maestro Muten Roshi agregado en la Kame House. Escala:', targetScale);
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('👴 Cargando Maestro Muten Roshi: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Maestro Muten Roshi:', error);
        }
    );
}

// =============================================
// CREACIÓN DE PICCOLO DAIMAKU EN LAS MONTAÑAS
// =============================================
let piccoloDaimaku = null;

function createPiccoloDaimaku() {
    const loader = new GLTFLoader();
    console.log('👹 Cargando Piccolo Daimaku desde: assets/piccolo_daimaku_-_dragon_ball.glb');

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/piccolo_daimaku_-_dragon_ball.glb',
        (gltf) => {
            console.log('👹 Piccolo Daimaku cargado exitosamente!', gltf);
            piccoloDaimaku = gltf.scene;

            // Posicionar en las montañas (zona opuesta a Bulma)
            const mountainX = 7;
            const mountainZ = -7;
            const terrainHeight = getTerrainHeight(mountainX, mountainZ);

            piccoloDaimaku.position.set(mountainX, Math.max(terrainHeight, 2.0) + 0.5, mountainZ);

            // Calcular escala apropiada
            const box = new THREE.Box3().setFromObject(piccoloDaimaku);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 1.2 / maxDim;
            piccoloDaimaku.scale.setScalar(targetScale);

            // Rotación para que mire hacia el centro
            const angleToCenter = Math.atan2(-mountainX, -mountainZ);
            piccoloDaimaku.rotation.y = angleToCenter;

            scene.add(piccoloDaimaku);
            console.log('👹 Piccolo Daimaku agregado en las montañas:', mountainX, Math.max(terrainHeight, 2.0) + 0.5, mountainZ, '| Escala:', targetScale);
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('👹 Cargando Piccolo Daimaku: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Piccolo Daimaku:', error);
        }
    );
}

// =============================================
// CREACIÓN DE MÁQUINA DEL TIEMPO DE TRUNKS
// =============================================
let timeMachine = null;

function createTimeMachine() {
    const loader = new GLTFLoader();
    console.log('⏰ Cargando Máquina del tiempo desde: assets/maquina_del_tiempo_dragon_ball.glb');

    loader.load(
        'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/maquina_del_tiempo_dragon_ball.glb',
        (gltf) => {
            console.log('⏰ Máquina del tiempo cargada exitosamente!', gltf);
            timeMachine = gltf.scene;

            // Posicionar en la montaña junto a Bulma
            const terrainHeight = getTerrainHeight(-4, -4);
            timeMachine.position.set(-3.5, terrainHeight + 0.1, -3.5);

            // Calcular escala apropiada
            const box = new THREE.Box3().setFromObject(timeMachine);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetScale = 0.6 / maxDim;
            timeMachine.scale.setScalar(targetScale);

            // Rotación para que parezca estacionada
            timeMachine.rotation.y = Math.PI / 2;

            scene.add(timeMachine);
            console.log('⏰ Máquina del tiempo agregada en la montaña. Escala:', targetScale);
        },
        (xhr) => {
            const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
            console.log('⏰ Cargando Máquina del tiempo: ' + percent + '%');
        },
        (error) => {
            console.error('❌ Error cargando Máquina del tiempo:', error);
        }
    );
}

// =============================================
// CREACIÓN DE ESFERAS DEL DRAGÓN
// =============================================
function createDragonBalls() {
    PORTFOLIO_DATA.forEach((data, index) => {
        const group = new THREE.Group();

        const terrainHeight = getTerrainHeight(data.position.x, data.position.z);
        group.position.set(data.position.x, Math.max(data.position.y, terrainHeight + 1.5), data.position.z);

        // Esfera principal naranja brillante (reducido a 24 segmentos para optimizar)
        const sphereGeometry = new THREE.SphereGeometry(0.25, 24, 24);
        const sphereMaterial = new THREE.MeshStandardMaterial({
            color: 0xcc5500,
            emissive: 0x993300,
            emissiveIntensity: 0.5,
            metalness: 0.3,
            roughness: 0.2
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        group.add(sphere);

        // Brillo interno (núcleo dorado) - reducido a 12 segmentos
        const coreGeometry = new THREE.SphereGeometry(0.15, 12, 12);
        const coreMaterial = new THREE.MeshStandardMaterial({
            color: 0xffd700,
            emissive: 0xffd700,
            emissiveIntensity: 0.8,
            metalness: 0.5,
            roughness: 0.3,
            transparent: true,
            opacity: 0.7
        });
        const core = new THREE.Mesh(coreGeometry, coreMaterial);
        group.add(core);

        // Estrellas rojas con forma de estrella
        const starPositions = getStarPositions(data.starCount);
        starPositions.forEach(pos => {
            const starShape = createStarShape();
            const starGeometry = new THREE.ShapeGeometry(starShape);
            const starMaterial = new THREE.MeshStandardMaterial({
                color: 0xcc0000,
                emissive: 0xff0000,
                emissiveIntensity: 0.5,
                side: THREE.DoubleSide
            });
            const star = new THREE.Mesh(starGeometry, starMaterial);

            // Calcular vector normal desde el centro de la esfera hacia la estrella
            const normal = new THREE.Vector3(pos.x, pos.y, 0.22).normalize();

            // Posicionar en la superficie de la esfera
            star.position.copy(normal.clone().multiplyScalar(0.25));

            // Rotar para que mire hacia afuera desde el centro
            star.lookAt(normal.clone().multiplyScalar(2));
            star.scale.set(0.06, 0.06, 1);

            group.add(star);
        });

        // Aura/brillo exterior - reducido a 12 segmentos
        const auraGeometry = new THREE.SphereGeometry(0.4, 12, 12);
        const auraMaterial = new THREE.MeshBasicMaterial({
            color: 0xff8800,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide
        });
        const aura = new THREE.Mesh(auraGeometry, auraMaterial);
        group.add(aura);

        // Partículas orbitando (reducido a 6 partículas)
        const particlesGroup = new THREE.Group();
        for (let i = 0; i < 6; i++) {
            const particleGeometry = new THREE.SphereGeometry(0.02, 4, 4);
            const particleMaterial = new THREE.MeshBasicMaterial({
                color: 0xffd700,
                transparent: true,
                opacity: 0.8
            });
            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            const angle = (i / 6) * Math.PI * 2;
            particle.position.set(Math.cos(angle) * 0.45, 0, Math.sin(angle) * 0.45);
            particlesGroup.add(particle);
        }
        group.add(particlesGroup);

        // Guardar referencias
        group.userData = {
            ...data,
            originalY: group.position.y,
            sphere: sphere,
            core: core,
            aura: aura,
            particles: particlesGroup,
            discovered: false
        };

        markers.push(group);
        scene.add(group);
    });
}

function createStarShape() {
    const shape = new THREE.Shape();
    const outerRadius = 1;
    const innerRadius = 0.5;
    const points = 5;

    for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / points - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        if (i === 0) {
            shape.moveTo(x, y);
        } else {
            shape.lineTo(x, y);
        }
    }

    shape.closePath();
    return shape;
}

function getStarPositions(count) {
    const positions = [];
    if (count === 1) {
        positions.push({ x: 0, y: 0 });
    } else {
        const radius = 0.1;
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
            positions.push({
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
            });
        }
    }
    return positions;
}

// =============================================
// INTERACCIÓN CON ESFERAS
// =============================================
function onPointerMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    let foundBall = null;
    for (const ball of markers) {
        const ballObjects = [ball.userData.sphere, ball.userData.core];
        const intersects = raycaster.intersectObjects(ballObjects, true);
        if (intersects.length > 0) {
            foundBall = ball;
            break;
        }
    }

    if (hoveredBall !== foundBall) {
        if (hoveredBall && !hoveredBall.userData.discovered) {
            hoveredBall.userData.sphere.material.emissiveIntensity = 0.6;
            hoveredBall.userData.sphere.scale.setScalar(1);
        }

        hoveredBall = foundBall;

        if (hoveredBall) {
            hoveredBall.userData.sphere.material.emissiveIntensity = 1.2;
            hoveredBall.userData.sphere.scale.setScalar(1.3);
            document.body.style.cursor = 'pointer';
        } else {
            document.body.style.cursor = 'default';
        }
    }
}

function onClick(event) {
    if (hoveredBall && !isPanelOpen) {
        openPanel(hoveredBall.userData);

        if (!hoveredBall.userData.discovered) {
            hoveredBall.userData.discovered = true;
            discoveredBalls.add(hoveredBall.userData.id);
            updateCounter();
            celebrateBall(hoveredBall);
        }
    }
}

function celebrateBall(ball) {
    // Brillo permanente al ser recolectada
    ball.userData.sphere.material.emissiveIntensity = 2.5;
    ball.userData.sphere.material.color.setHex(0xffd700);
    ball.userData.sphere.material.emissive.setHex(0xffd700);
    ball.userData.core.material.emissiveIntensity = 2;

    const startY = ball.position.y;
    let jumpHeight = 0;
    let rotation = 0;

    const animateDiscovery = () => {
        jumpHeight += 0.02; // Más suave (antes 0.04)
        rotation += 0.1; // Rotación más lenta (antes 0.25)
        ball.position.y = startY + jumpHeight;
        ball.rotation.y = rotation;
        if (jumpHeight < 0.5) { // Menos altura (antes 0.8)
            requestAnimationFrame(animateDiscovery);
        } else {
            animateSettle();
        }
    };

    const animateSettle = () => {
        jumpHeight -= 0.02; // Más suave (antes 0.04)
        rotation += 0.1; // Rotación más lenta (antes 0.25)
        ball.position.y = startY + jumpHeight;
        ball.rotation.y = rotation;
        if (jumpHeight > 0) {
            requestAnimationFrame(animateSettle);
        } else {
            ball.position.y = startY;
            // Mantener brillando
            ball.userData.sphere.material.emissiveIntensity = 2;
        }
    };

    animateDiscovery();
}


// =============================================
// PANEL DE INFORMACIÓN
// =============================================
function openPanel(data) {
    const panel = document.getElementById('infoPanel');
    const starsDisplay = document.getElementById('starsDisplay');
    const title = document.getElementById('panelTitle');
    const type = document.getElementById('panelType');
    const content = document.getElementById('panelContent');

    starsDisplay.textContent = data.stars;
    title.textContent = data.title;
    type.textContent = `Artifact #${data.starCount} Found`;
    content.innerHTML = data.content + `<div class="panel-hint"><span>💡</span><div>${data.hint}</div></div>`;

    panel.classList.add('active');
    isPanelOpen = true;
}


function closePanel() {
    const panel = document.getElementById('infoPanel');
    panel.classList.remove('active');
    isPanelOpen = false;
}

function updateCounter() {
    const counter = document.getElementById('dragonCounter');
    const counterText = document.getElementById('counterText');

    counterText.textContent = `${discoveredBalls.size} / ${markers.length} Spheres Found`;

    if (discoveredBalls.size > 0) {
        counter.style.borderColor = `rgba(245, 197, 66, ${0.2 + (discoveredBalls.size / 7) * 0.8})`;
    }

    if (discoveredBalls.size === markers.length) {
        counterText.textContent = '¡INVOCANDO A SHENLONG!';
        counter.style.background = 'rgba(0, 255, 136, 0.2)';
        counter.style.border = '1px solid #00ff88';
        counter.style.color = '#fff';

        // Secuencia final: unificación de luz
        setTimeout(unifyLightSequence, 500);
    }
}


function unifyLightSequence() {
    const targetPos = new THREE.Vector3(0, 5, 0);

    markers.forEach((ball, i) => {
        const startPos = ball.position.clone();

        // Registrar cada animación de movimiento en el sistema centralizado
        const moveAnim = {
            type: 'shenlongConverge',
            object: ball,
            startPos: startPos,
            targetPos: targetPos,
            progress: 0,
            index: i,
            isLast: (i === markers.length - 1)
        };
        animatedModels.push(moveAnim);
    });
}


function triggerShenlongEffect() {
    console.log('🐉 Iniciando efecto Shenlong...');

    // Ocultar las esferas cuando se transforman
    markers.forEach(ball => {
        ball.visible = false;
    });

    // Efecto de partículas de energía
    const explosionGeo = new THREE.BufferGeometry();
    const particles = [];
    for (let i = 0; i < 500; i++) {
        particles.push(0, 5, 0);
    }
    explosionGeo.setAttribute('position', new THREE.Float32BufferAttribute(particles, 3));
    const explosionMat = new THREE.PointsMaterial({
        color: 0x00ff88,
        size: 0.3,
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending
    });
    const points = new THREE.Points(explosionGeo, explosionMat);
    scene.add(points);

    // Registrar animación de partículas en el sistema centralizado
    const particleAnim = {
        type: 'shenlongParticles',
        object: points,
        expandScale: 1,
        startTime: Date.now(),
        duration: 2000 // 2 segundos
    };
    animatedModels.push(particleAnim);

    // Cambiar ambiente a oscuro/místico (sin error de fog)
    if (!scene.fog) {
        scene.fog = new THREE.FogExp2(0x1a3a16, 0.03);
    }
    scene.fog.color.setHex(0x1a3a16);
    renderer.setClearColor(0x1a3a16);
    scene.background.setHex(0x1a3a16);

    // Crear Shenlong
    function createShenlong(isFallback = false) {
        let shenlong;

        if (isFallback) {
            console.log('🐉 Creando Shenlong fallback (geometría básica)');
            shenlong = new THREE.Group();

            // Cuerpo serpenteante
            for (let i = 0; i < 8; i++) {
                const segmentGeo = new THREE.SphereGeometry(0.3 - i * 0.02, 16, 16);
                const segmentMat = new THREE.MeshStandardMaterial({
                    color: 0x00ff88,
                    emissive: 0x00ff88,
                    emissiveIntensity: 0.5,
                    metalness: 0.8,
                    roughness: 0.2
                });
                const segment = new THREE.Mesh(segmentGeo, segmentMat);
                segment.position.set(
                    Math.sin(i * 0.5) * 0.5,
                    i * 0.25,
                    Math.cos(i * 0.5) * 0.5
                );
                shenlong.add(segment);
            }

            // Cabeza
            const headGeo = new THREE.SphereGeometry(0.4, 16, 16);
            const headMat = new THREE.MeshStandardMaterial({
                color: 0x00ff88,
                emissive: 0x00ff88,
                emissiveIntensity: 0.8
            });
            const head = new THREE.Mesh(headGeo, headMat);
            head.position.y = 2.5;
            shenlong.add(head);

            // Ojos brillantes
            const eyeGeo = new THREE.SphereGeometry(0.08, 8, 8);
            const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
            leftEye.position.set(-0.15, 2.6, 0.3);
            const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
            rightEye.position.set(0.15, 2.6, 0.3);
            shenlong.add(leftEye);
            shenlong.add(rightEye);

            // Cuernos
            const hornGeo = new THREE.ConeGeometry(0.05, 0.4, 8);
            const hornMat = new THREE.MeshStandardMaterial({ color: 0xffd700 });
            const leftHorn = new THREE.Mesh(hornGeo, hornMat);
            leftHorn.position.set(-0.2, 2.9, 0);
            leftHorn.rotation.x = -0.5;
            const rightHorn = new THREE.Mesh(hornGeo, hornMat);
            rightHorn.position.set(0.2, 2.9, 0);
            rightHorn.rotation.x = -0.5;
            shenlong.add(leftHorn);
            shenlong.add(rightHorn);

        } else {
            shenlong = window.shenlongModel;
        }

        shenlong.position.set(0, 5, 8);
        shenlong.rotation.y = Math.PI;
        shenlong.name = 'Shenlong';

        const box = new THREE.Box3().setFromObject(shenlong);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetScale = 3 / maxDim;

        // Luz puntual para el dragón
        const dragonLight = new THREE.PointLight(0x00ff88, 2, 25);
        dragonLight.position.set(0, 6, 5);
        dragonLight.name = 'DragonLight';
        scene.add(dragonLight);

        scene.add(shenlong);
        console.log('🐉 Shenlong agregado. Tamaño:', size, 'Escala:', targetScale);

        // Animación de aparición (sin requestAnimationFrame individual problemático)
        shenlong.visible = false;
        shenlong.scale.setScalar(0.01);

        // Registrar animación centralizada
        let appearProgress = 0;
        const appearAnim = {
            type: 'shenlongAppear',
            object: shenlong,
            targetScale: targetScale,
            progress: 0,
            onComplete: () => {
                shenlong.visible = true;
                console.log('🐉 Shenlong apareció completamente!');
                setTimeout(showShenlongModal, 800);
            }
        };
        animatedModels.push(appearAnim);
    }

    // Intentar cargar modelo GLB
    if (typeof GLTFLoader !== 'undefined') {
        const loader = new GLTFLoader();
        loader.load(
            'https://media.githubusercontent.com/media/Felipe-Flores-creator/Port_Folio/main/assets/dragon_ball_z_shenlong.glb',
            (gltf) => {
                console.log('🐉 Modelo cargado!', gltf);
                window.shenlongModel = gltf.scene;
                createShenlong(false);
            },
            (xhr) => {
                const percent = (xhr.loaded / xhr.total * 100).toFixed(0);
                console.log('🐉 Cargando Shenlong: ' + percent + '%');
            },
            (error) => {
                console.error('❌ Error cargando Shenlong:', error);
                createShenlong(true);
            }
        );
    } else {
        console.error('❌ GLTFLoader no disponible');
        createShenlong(true);
    }
}

function showShenlongModal() {
    const modal = document.getElementById('shenlongModal');
    modal.classList.add('active');
    document.getElementById('closeShenlong').addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

// =============================================
// CONTROL DE MÚSICA
// =============================================
const musicData = {
    'dragon_ball_gt_piano': 'Music/dragon_ball_gt_piano.mp3',
    'dragon_ball_z_funny': 'Music/dragon_ball_z_funny.mp3'
};

let currentAudio = null;
let isPlaying = false;
let currentTrack = null;

function initMusicControl() {
    const musicBtn = document.getElementById('musicBtn');
    const musicOptions = document.getElementById('musicOptions');

    if (!musicBtn || !musicOptions) return;

    // Crear opciones dinámicamente
    Object.keys(musicData).forEach(trackKey => {
        const btn = document.createElement('button');
        btn.className = 'track-btn';
        btn.dataset.track = trackKey;
        btn.textContent = trackKey === 'dragon_ball_gt_piano' ? '🎹 GT Piano' : '🎺 Z Funny';
        btn.addEventListener('click', () => playTrack(trackKey));
        musicOptions.appendChild(btn);
    });

    // Botón principal play/pause
    musicBtn.addEventListener('click', togglePlay);
}

function playTrack(trackKey) {
    const audioPath = musicData[trackKey];

    // Si ya está sonando la misma, pausar
    if (currentTrack === trackKey && isPlaying) {
        pauseMusic();
        return;
    }

    // Detener audio anterior
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Crear nuevo audio
    currentAudio = new Audio(audioPath);
    currentAudio.loop = true;
    currentAudio.volume = 0.5;

    currentAudio.play().then(() => {
        isPlaying = true;
        currentTrack = trackKey;
        updateMusicUI();
    }).catch(err => console.log('Error al reproducir:', err));

    // Actualizar UI
    document.querySelectorAll('.track-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.track === trackKey);
    });
}

function togglePlay() {
    if (!currentAudio) {
        // Reproducir primera track por defecto
        playTrack('dragon_ball_gt_piano');
        return;
    }

    if (isPlaying) {
        pauseMusic();
    } else {
        resumeMusic();
    }
}

function pauseMusic() {
    if (currentAudio) {
        currentAudio.pause();
        isPlaying = false;
        updateMusicUI();
    }
}

function resumeMusic() {
    if (currentAudio) {
        currentAudio.play().then(() => {
            isPlaying = true;
            updateMusicUI();
        });
    }
}

function updateMusicUI() {
    const musicBtn = document.getElementById('musicBtn');
    if (!musicBtn) return;
    musicBtn.textContent = isPlaying ? '🔊' : '🎵';
    musicBtn.classList.toggle('playing', isPlaying);
}

// Inicializar control de música
initMusicControl();

// =============================================
// ANIMACIÓN
// =============================================
// Throttle del loop: renderizar máximo a 30 FPS para ahorrar GPU
const _FPS_LIMIT = 30;
const _MS_PER_FRAME = 1000 / _FPS_LIMIT;
let _lastFrameTime = 0;
let _globalAnimTime = 0;

function animate(timestamp) {
    if (!timestamp) {
        requestAnimationFrame(animate);
        return;
    }

    requestAnimationFrame(animate);

    // Si el contexto WebGL se perdió, no renderizar
    if (isWebGLContextLost) return;

    // Inicializar en el primer frame
    if (!_lastFrameTime) {
        _lastFrameTime = timestamp;
        return;
    }

    const elapsed = timestamp - _lastFrameTime;
    if (elapsed < _MS_PER_FRAME) return;
    _lastFrameTime = timestamp;
    _globalAnimTime += elapsed * 0.001; // Tiempo global en segundos

    // Animación de cámara de introducción
    if (cameraIntroAnimation.active) {
        const delta = elapsed * 0.001;
        cameraIntroAnimation.progress += delta / cameraIntroAnimation.duration;

        if (cameraIntroAnimation.progress >= 1.0) {
            cameraIntroAnimation.progress = 1.0;
            cameraIntroAnimation.active = false;
            camera.position.copy(cameraIntroAnimation.endPos);
        } else {
            const t = cameraIntroAnimation.progress;
            const ease = t * t * (3 - 2 * t);
            camera.position.lerpVectors(
                cameraIntroAnimation.startPos,
                cameraIntroAnimation.endPos,
                ease
            );
        }
    } else {
        controls.update();
    }

    const time = Date.now() * 0.001;

    // Animaciones de modelos centralizados (suavizadas)
    animatedModels.forEach(anim => {
        if (!anim.object) return;

        switch (anim.type) {
            case 'rotation':
                anim.object.rotation.y += anim.speed * 0.5;
                break;

            case 'circular':
                anim.object.position.x = anim.baseX + Math.sin(-_globalAnimTime * anim.speed * 0.5) * anim.radius;
                anim.object.position.z = anim.baseZ + Math.cos(-_globalAnimTime * anim.speed * 0.5) * anim.radius;
                anim.object.position.y = anim.baseY + Math.sin(_globalAnimTime * 0.8) * anim.yOffset;
                anim.object.rotation.y = -Math.PI / 4 - _globalAnimTime * anim.speed * 0.5;
                break;

            case 'float':
                anim.object.position.y = anim.baseY + Math.sin(_globalAnimTime * anim.speed * 0.5) * anim.amplitude;
                if (anim.lateralAmplitude) {
                    anim.object.rotation.z = Math.sin(_globalAnimTime * anim.lateralSpeed * 0.5) * anim.lateralAmplitude;
                }
                break;

            case 'orbit':
                if (anim.planetRef === 'planetKaioh' && planetKaioh) {
                    anim.object.position.x = planetKaioh.position.x + Math.sin(_globalAnimTime * anim.speed * 0.5) * anim.orbitRadius;
                    anim.object.position.z = planetKaioh.position.z + Math.cos(_globalAnimTime * anim.speed * 0.5) * anim.orbitRadius;
                    anim.object.position.y = planetKaioh.position.y + anim.yOffset;
                    anim.object.rotation.y = -_globalAnimTime * anim.speed * 0.5 + Math.PI;
                }
                break;

            case 'jump':
                anim.object.position.y = anim.baseY + Math.abs(Math.sin(_globalAnimTime * anim.speed * 0.5)) * anim.amplitude;
                break;

            case 'shenlongAppear':
                anim.progress += 0.015 * 2; // Velocidad de aparición
                if (anim.progress >= 1.0) {
                    anim.progress = 1.0;
                    anim.object.visible = true;
                    anim.object.scale.setScalar(anim.targetScale);
                    if (anim.onComplete && !anim.completed) {
                        anim.completed = true;
                        anim.onComplete();
                        // Remover del array después de completar
                        const idx = animatedModels.indexOf(anim);
                        if (idx > -1) animatedModels.splice(idx, 1);
                    }
                } else {
                    const scale = THREE.MathUtils.lerp(0.01, anim.targetScale, anim.progress);
                    anim.object.scale.setScalar(scale);
                }
                break;

            case 'shenlongParticles':
                const elapsedParticle = Date.now() - anim.startTime;
                const particleProgress = Math.min(elapsedParticle / anim.duration, 1);
                anim.expandScale = 1 + particleProgress * 15;
                anim.object.scale.setScalar(anim.expandScale);
                anim.object.material.opacity = Math.max(0, 1 - particleProgress * 1.5);
                if (particleProgress >= 1) {
                    scene.remove(anim.object);
                    const idx2 = animatedModels.indexOf(anim);
                    if (idx2 > -1) animatedModels.splice(idx2, 1);
                }
                break;

            case 'shenlongConverge':
                anim.progress += 0.012 * 2;
                if (anim.progress >= 1.0) {
                    anim.progress = 1.0;
                    anim.object.position.copy(anim.targetPos);
                    anim.object.userData.sphere.material.emissiveIntensity = 12;
                    if (anim.isLast) {
                        triggerShenlongEffect();
                    }
                    const idx3 = animatedModels.indexOf(anim);
                    if (idx3 > -1) animatedModels.splice(idx3, 1);
                } else {
                    anim.object.position.lerpVectors(anim.startPos, anim.targetPos, anim.progress);
                    anim.object.userData.sphere.material.emissiveIntensity = 2 + anim.progress * 10;
                }
                break;
        }
    });

    // Animación de esferas del dragón (suavizada)
    markers.forEach((ball, index) => {
        ball.position.y = ball.userData.originalY + Math.sin(time * 0.5 + index * 0.5) * 0.08;
        ball.rotation.y = time * 0.15 + index;

        if (ball.userData.particles) {
            ball.userData.particles.rotation.y = time * 0.3;
            ball.userData.particles.rotation.x = time * 0.15;
        }

        if (!ball.userData.discovered) {
            const pulse = 0.6 + Math.sin(time * 1.5 + index) * 0.2;
            ball.userData.sphere.material.emissiveIntensity = pulse;
            ball.userData.aura.material.opacity = 0.1 + Math.sin(time * 1) * 0.03;
        } else {
            ball.userData.aura.material.opacity = 0.2;
        }
    });

    renderer.render(scene, camera);
}

// =============================================
// REDIMENSIONAMIENTO
// =============================================
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
