export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5e29a8598fe1f33397dc1f',
                  title: 'Sanity Studio',
                  name: 'cakes-with-grace-blog-studio',
                  apiId: 'b27b61f9-d8c7-401a-8e6a-447bdfbbf5a6'
                },
                {
                  buildHookId: '5f5e29a8da13e3419dccbc4f',
                  title: 'Blog Website',
                  name: 'cakes-with-grace-blog',
                  apiId: '300e33e1-c2d6-41f9-bcaa-e1c1b41ca77e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevenbister/cakes-with-grace-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://cakes-with-grace-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
