const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: "xa9fgtwh",
  dataset: "production",
  useCdn: true 
})

module.exports = client;