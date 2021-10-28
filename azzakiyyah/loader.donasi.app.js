var headTagElement = document.getElementsByTagName('head')[0];

const modulePreload = document.createElement('link');
modulePreload.rel = 'modulepreload';
modulePreload.href = 'https://cdn.jsdelivr.net/gh/WildanYR/marisembuh-dir-tes@azm-1.0/azzakiyyah/vendor.donasi.app.js';

const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdn.jsdelivr.net/gh/WildanYR/marisembuh-dir-tes@azm-1.0/azzakiyyah/donasi.app.css';

headTagElement.appendChild(modulePreload);
headTagElement.appendChild(styleLink);