// backend/data.js

const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom', major: 'S1 - Teknik Informatika' },
  { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 15 Maluku Tengah', major: 'MIPA' }
];

const skills = [
  { name: 'Vue.js', level: 'Pemula' },
  { name: 'JavaScript', level: 'Pemula' },
  { name: 'Tailwind CSS', level: 'Pemula' },
  { name: 'Node.js', level: 'Pemula' },
  { name: 'Express.js', level: 'Pemula' },
  { name: 'PostgreSQL', level: 'Pemula' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Mahir' }
];

const projects = [
  {
    title: 'Website Rental Mobil',
    image: 'website.png',
    description: 'Platform website dengan fitur pesanan mobil secara online.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: 'https://www.figma.com/proto/DUkmA2TphFJMp5xUFusfGd/UAS-FP-PEMROG-WEB?node-id=282-98&p=f&t=HIjOKM11ypvVsuDz-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=282%3A98'
  }
];

module.exports = { educationHistory, skills, projects };
