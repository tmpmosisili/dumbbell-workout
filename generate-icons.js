// Run with: node generate-icons.js
// Generates SVG-based PNG icons for the PWA
const fs = require('fs');
const path = require('path');

function makeSvg(size) {
  const r = size * 0.15;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" fill="#0f0f0f"/>
  <rect width="${size}" height="${size}" rx="${r}" fill="#e63946" opacity="0.12"/>
  <text x="50%" y="54%" font-size="${size * 0.52}" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif">🏋️</text>
</svg>`;
}

const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir);

fs.writeFileSync(path.join(iconsDir, 'icon-192.svg'), makeSvg(192));
fs.writeFileSync(path.join(iconsDir, 'icon-512.svg'), makeSvg(512));

console.log('SVG icons generated. For PNG, open the SVGs in a browser and save as PNG, or use a tool like sharp/canvas.');
