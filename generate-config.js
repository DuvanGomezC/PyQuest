// generate-config.js
const fs = require('fs');

const config = `
window.SUPABASE_CONFIG = {
    url: '${process.env.SUPABASE_URL}',
    anonKey: '${process.env.SUPABASE_ANON_KEY}',
    functionsBase: '${process.env.SUPABASE_FUNCTIONS_BASE}'
};
`;

fs.writeFileSync('config.js', config);