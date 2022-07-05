import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'en7nvtls',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skxXYv1WGqpiN0dJjzFNkvTulC6GRPbgOVs8Fkl0GN0XngkNkXZqfZzOaLVo0GEzfdaDJkihE8M9MQvLvjVrZNTZ6qPQkaFiKLwxySRiqvfeeaIh4Kro3FyLj2B6sA8hnWtCIbNqLX7PVmrk07OW4hpvRMx1rVA3LOw7KyOO4lVAj5pi8BcY',
    useCdn: false,
})
