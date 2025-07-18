import { buildConfig } from 'payload';
import path from 'path';
import { defineConfig } from 'payload';

export default defineConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SITE_URL,
  admin: {
    user: 'users',
    meta: {
      favicon: '/favicon.ico',
      icon: '/favicon.ico',
    },
    path: '/admin',
  },
  collections: [
    {
      slug: 'tours',
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'gallery',
          type: 'upload',
          relationTo: 'media',
          hasMany: true,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
        },
        {
          name: 'duration',
          type: 'number',
          required: true,
        },
        {
          name: 'itinerary',
          type: 'array',
          fields: [
            {
              name: 'day',
              type: 'number',
              required: true,
            },
            {
              name: 'description',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      slug: 'destinations',
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'location',
          type: 'group',
          fields: [
            {
              name: 'latitude',
              type: 'number',
            },
            {
              name: 'longitude',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      slug: 'media',
      upload: {
        staticDir: 'public/media',
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'centre',
          },
        ],
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
