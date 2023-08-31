module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("CF_ACCESS_KEY_ID"),
        secretAccessKey: env("CF_ACCESS_SECRET"),
        /**
         * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
         */
        endpoint: "https://3f583493856086da2ca89b5df85aab98.r2.cloudflarestorage.com",
        params: {
          Bucket: "maensri-cms",
        },
        /**
         * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
         * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PULIC_BUCKET_ID>.r2.dev
         * This option is required to upload files larger than 5MB, and is highly recommended to be set.
         * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
         */
        cloudflarePublicAccessUrl: "https://pub-e5aac3e5e25d4e2388fed3401de461ed.r2.dev",
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
