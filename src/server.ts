const fs = require('fs');
const mapFolder = require('map-folder');

const path =
  'C:\\Users\\Pedro\\Downloads\\Planilhas para subir\\Imagens BlueBag\\Imagens Mini Box-Jaguaruana (ID 8)';

// Criar files.txt em branco
fs.writeFileSync(`${path}\\files.txt`, '');

const result = mapFolder(path);

// Map in objects
Object.keys(result.entries).map((key, index) => {
  const entry = result.entries[key];
  // Verifica se tem '(1).' no nome do arquivo
  if (entry.name.includes('(1).')) {
    // Apaga o arquivo
    fs.unlinkSync(entry.path);
  }

  // Escrevendo o nome do arquivo no files.txt
  if (entry.name != 'files.txt' && entry.name != 'desktop.ini') {
    fs.appendFileSync(`${path}\\files.txt`, `${entry.name}\n`);
  }
});
