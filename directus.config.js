
module.exports = function (env) {
    return {
        
        // Railway inputs
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Cloudinary
        STORAGE_LOCATIONS: 'cloudinary',
        STORAGE_CLOUDINARY_CLOUD_NAME: env.STORAGE_CLOUDINARY_CLOUD_NAME,
        STORAGE_CLOUDINARY_API_KEY: env.STORAGE_CLOUDINARY_API_KEY,
        STORAGE_CLOUDINARY_API_SECRET: env.STORAGE_CLOUDINARY_API_SECRET,
        STORAGE_CLOUDINARY_ACCESS_MODE: 'authenticated',
        
        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `https://${env.RAILWAY_STATIC_URL}`,
        
        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'pg',
        DB_HOST: env.PGHOST,
        DB_PORT: env.PGPORT,
        DB_DATABASE: env.PGDATABASE,
        DB_USER: env.PGUSER,
        DB_PASSWORD: env.PGPASSWORD,

        CONTENT_SECURITY_POLICY_DIRECTIVES__IMG_SRC: env.CONTENT_SECURITY_POLICY_DIRECTIVES__IMG_SRC,
        
        // Redis cache
        RIS_DEFAULT_PROVIDER: env.RIS_DEFAULT_PROVIDER,
        MESSENGER_STORE: 'redis',
        SYNCHRONIZATION_STORE: 'redis',
        REDIS_HOST: env.REDISHOST,
        REDIS_PORT: env.REDISPORT,
        CACHE_ENABLED: env.CACHE_ENABLED,
        CACHE_STORE: 'redis',
        REDIS_USERNAME: env.REDISUSER,
        REDIS_PASSWORD: env.REDISPASSWORD,
    };
};