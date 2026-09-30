/* =========================================================
   EDITAR LOS PERFUMES, IMÁGENES Y PRECIO
   ========================================================= */
const PERFUMES = [
  {
    id: "odyssey-mega",
    nombre: "ODYSSEY MEGA",
    marca: "Odyssey",
    tag: "EAU DE PARFUM · LIMITED EDITION",
    imagen: "img/odyssey.jpg",
    descripcion: "Una fragancia intensa y envolvente con apertura especiada y un fondo cálido y amaderado. Ideal para la noche, deja una estela potente y elegante.",
    notas: ["Bergamota", "Canela", "Cuero", "Ámbar", "Vainilla"],
    precios: { "10ml": 250, "5ml": 150, "3ml": 100 }
  },
  {
    id: "bharara-king",
    nombre: "BHARARA KING",
    marca: "Bharara",
    tag: "EAU DE PARFUM · 100ML",
    imagen: "img/bharara.jpg",
    descripcion: "Fragancia masculina de carácter fuerte y sofisticado. Notas frutales al inicio que evolucionan hacia un corazón especiado y un fondo dulce con maderas nobles.",
    notas: ["Piña", "Bergamota", "Cardamomo", "Cuero", "Vainilla"],
    precios: { "10ml": 300, "5ml": 180, "3ml": 120 }
  },
  {
    id: "le-male",
    nombre: "LE MALE LE PARFUM",
    marca: "Jean Paul Gaultier",
    tag: "LE PARFUM · INTENSE",
    imagen: "img/lemale.jpg",
    descripcion: "Una versión intensa y magnética del clásico. Combina lavanda fresca con vainilla bourbon y maderas cremosas, dejando una huella inolvidable.",
    notas: ["Lavanda", "Menta", "Vainilla", "Haba Tonka", "Madera de Sándalo"],
    precios: { "10ml": 350, "5ml": 200, "3ml": 130 }
  },
  {
    id: "phantom",
    nombre: "PHANTOM",
    marca: "Paco Rabanne",
    tag: "EAU DE PARFUM · INTENSE",
    imagen: "img/phantom.jpg",
    descripcion: "Una fragancia futurista y magnética con apertura cítrica y un corazón de lavanda. Su fondo de vainilla y haba tonka la vuelven adictiva y moderna.",
    notas: ["Limón", "Lavanda", "Pachulí", "Vainilla", "Haba Tonka"],
    precios: { "10ml": 320, "5ml": 170, "3ml": 130 }
  },
  {
    id: "invictus",
    nombre: "INVICTUS VICTORY ELIXIR",
    marca: "Paco Rabanne",
    tag: "EAU DE PARFUM · TROPHY",
    imagen: "img/invictus.jpg",
    descripcion: "Inspirada en el espíritu del ganador. Fresca y amaderada, con notas marinas que se mezclan con laurel y un fondo de ámbar gris y madera de guayaco.",
    notas: ["Toronja", "Notas Marinas", "Laurel", "Ámbar Gris", "Madera de Guayaco"],
    precios: { "10ml": 280, "5ml": 180, "3ml": 120 }
  },
  {
    id: "armaf-club",
    nombre: "CLUB DE NUIT INTENS",
    marca: "Armaf",
    tag: "EAU DE PARFUM · MAN",
    imagen: "img/armaf.jpg",
    descripcion: "Una fragancia intensa y elegante con notas frutales al inicio, un corazón de abedul y jazmín, y un fondo ahumado de almizcle y vainilla. Icónica y seductora.",
    notas: ["Limón", "Manzana Negra", "Abedul", "Jazmín", "Vainilla"],
    precios: { "10ml": 200, "5ml": 100, "3ml": 70 }
  },
  {
    id: "hawas",
    nombre: "HAWAS MALIBU",
    marca: "Rasasi",
    tag: "EAU DE PARFUM · FRESH",
    imagen: "img/hawas.jpg",
    descripcion: "Una explosión de frescura con notas acuáticas y cítricas. Su corazón de bergamota y canela se equilibra con un fondo amaderado y almizclado. Perfecta para el día.",
    notas: ["Manzana", "Bergamota", "Canela", "Ambarwood", "Almizcle"],
    precios: { "10ml": 160, "5ml": 110, "3ml": 75 }
  },
  {
    id: "azzaro",
    nombre: "PHANTOM INTENS",
    marca: "  Paco Rabanne",
    tag: "EAU DE PARFUM · INTENSE",
    imagen: "img/azzaro.jpg",
    descripcion: "Una fragancia especiada y amaderada con un toque dulce y adictivo. Cardamomo y lavanda se mezclan con un fondo de vainilla y ámbar para una estela magnética.",
    notas: ["Cardamomo", "Lavanda", "Vainilla", "Ámbar", "Madera de Cedro"],
    precios: { "10ml": 280, "5ml": 140, "3ml": 100 }
  }
];

/* =========================================================
   NO TOCAR
   ========================================================= */

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro').classList.add('hide');
  }, 2600);
});

const grid = document.getElementById('grid');

function renderCatalogo(){
  grid.innerHTML = "";
  PERFUMES.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = (i * 0.12) + 's';
    card.innerHTML = `
      <div class="card-img" style="background-image:url('${p.imagen}')"></div>
      <div class="card-info">
        <div>
          <h3>${p.nombre}</h3>
          <div class="sub">${p.marca}</div>
        </div>
      </div>
    `;
    card.addEventListener('click', () => abrirDetalle(p.id));
    grid.appendChild(card);
  });
}

function mostrarPagina(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

function volverAlCatalogo(){
  mostrarPagina('page-catalogo');
}

function abrirDetalle(idPerfume){
  const p = PERFUMES.find(x => x.id === idPerfume);
  if(!p) return;

  document.getElementById('d-img').src = p.imagen;
  document.getElementById('d-nombre').textContent = p.nombre;
  document.getElementById('d-tag').textContent = p.tag;
  document.getElementById('d-desc').textContent = p.descripcion;

  const notasDiv = document.getElementById('d-notas');
  notasDiv.innerHTML = "";
  p.notas.forEach(n => {
    const s = document.createElement('span');
    s.textContent = n;
    notasDiv.appendChild(s);
  });

  const mlDiv = document.getElementById('d-ml');
  mlDiv.innerHTML = "";
  const tamanos = ["10ml","5ml","3ml"];
  tamanos.forEach((ml, idx) => {
    const btn = document.createElement('button');
    btn.className = 'ml-btn' + (idx === 0 ? ' active' : '');
    btn.textContent = ml;
    btn.addEventListener('click', () => {
      mlDiv.querySelectorAll('.ml-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('d-precio').textContent = '$' + p.precios[ml].toFixed(2);
    });
    mlDiv.appendChild(btn);
  });

  document.getElementById('d-precio').textContent = '$' + p.precios["10ml"].toFixed(2);
  mostrarPagina('page-detalle');
}

renderCatalogo();