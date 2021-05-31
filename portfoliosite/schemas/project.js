export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "place",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          {value: "personal", title: "Personal"},
          {value: "client", title: "Client"},
          {value: "other", title: "Other"},
        ]
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        }
      ],
      options: {
        layout: "tags",
      }
    }
  ]
}