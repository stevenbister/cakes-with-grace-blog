import mainImage from '../objects/mainImage'

export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{type: 'mainImage'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'imageGallery'
    }
  }
}
