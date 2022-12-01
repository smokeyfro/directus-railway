
module.exports = function (env) {
    return {
        // Railway inputs
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'pg',
        DB_HOST: env.PGHOST,
        DB_PORT: env.PGPORT,
        DB_DATABASE: env.PGDATABASE,
        DB_USER: env.PGUSER,
        DB_PASSWORD: env.PGPASSWORD,
        API_KEY_PEXELS: env.API_KEY_PEXELS,
        API_KEY_PIXABAY: env.API_KEY_PIXABAY,
        CONTENT_SECURITY_POLICY_DIRECTIVES__IMG_SRC: env.CONTENT_SECURITY_POLICY_DIRECTIVES__IMG_SRC,
        RIS_DEFAULT_PROVIDER: env.RIS_DEFAULT_PROVIDER
    };
};