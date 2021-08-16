module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'newworldbr',
        api_key: '194435611633735',
        api_secret: 'ubCOANCY4fq6FIecO4ZcpWOhfD0',
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
  });
  