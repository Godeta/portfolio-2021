import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: `48fh369m`,
    dataset: `production`,
    useCdn: true,
    apiVersion: `2021-05-24` // use current UTC date - see "specifying API version"!
})