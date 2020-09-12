// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
			name: 'page',
			type: 'document',
			title: 'Page',
			fields: [
				{
					name: 'title',
					type: 'string',
					title: 'Title'
				},
				{
					name: 'header',
					type: 'string',
					title: 'Header'
				},
				{
          name: "section_one_image",
          title: "Section One Image",
					type: "image",
					options: {
						hotspot: true
					},
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Description"
            },
          ],
        },
				{
          name: "section_one_content",
          title: "Section One Content",
          type: "array",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
              fields: [
								{
									title: 'Position',
									name: 'position',
									type: 'string',
									options: {
										list: [
											{title: 'Center', value: 'center'},
											{title: 'Left', value: 'left'},
											{title: 'Right', value: 'right'},
										],
										layout: 'radio',
										isHighlighted: true
									}
								},
                {
                  type: "text",
                  name: "alt",
                  title: "Description",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
              options: {
                hotspot: true,
              },
            },
          ],
				},
				{
          name: "section_two_image",
          title: "Section Two Image",
					type: "image",
					options: {
						hotspot: true
					},
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Description"
            },
          ],
        },
				{
          name: "section_two_content",
          title: "Section Two Content",
          type: "array",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
              fields: [
								{
									title: 'Position',
									name: 'position',
									type: 'string',
									options: {
										list: [
											{title: 'Center', value: 'center'},
											{title: 'Left', value: 'left'},
											{title: 'Right', value: 'right'},
										],
										layout: 'radio',
										isHighlighted: true
									}
								},
                {
                  type: "text",
                  name: "alt",
                  title: "Description",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
              options: {
                hotspot: true,
              },
            },
          ],
				},
				{
          name: "section_three_image",
          title: "Section Three Image",
					type: "image",
					options: {
						hotspot: true
					},
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Description"
            },
          ],
        },
				{
          name: "section_three_content",
          title: "Section Three Content",
          type: "array",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
              fields: [
								{
									title: 'Position',
									name: 'position',
									type: 'string',
									options: {
										list: [
											{title: 'Center', value: 'center'},
											{title: 'Left', value: 'left'},
											{title: 'Right', value: 'right'},
										],
										layout: 'radio',
										isHighlighted: true
									}
								},
                {
                  type: "text",
                  name: "alt",
                  title: "Description",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
              options: {
                hotspot: true,
              },
            },
          ],
				},
				{
          name: "section_four_image",
          title: "Section Four Image",
					type: "image",
					options: {
						hotspot: true
					},
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Description"
            },
          ],
        },
				{
          name: "section_four_content",
          title: "Section Four Content",
          type: "array",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
              fields: [
								{
									title: 'Position',
									name: 'position',
									type: 'string',
									options: {
										list: [
											{title: 'Center', value: 'center'},
											{title: 'Left', value: 'left'},
											{title: 'Right', value: 'right'},
										],
										layout: 'radio',
										isHighlighted: true
									}
								},
                {
                  type: "text",
                  name: "alt",
                  title: "Description",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
              options: {
                hotspot: true,
              },
            },
          ],
				},
				{
          name: "section_five_image",
          title: "Section Five Image",
					type: "image",
					options: {
						hotspot: true
					},
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Description"
            },
          ],
        },
				{
          name: "section_Five_content",
          title: "Section Five Content",
          type: "array",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
              fields: [
								{
									title: 'Position',
									name: 'position',
									type: 'string',
									options: {
										list: [
											{title: 'Center', value: 'center'},
											{title: 'Left', value: 'left'},
											{title: 'Right', value: 'right'},
										],
										layout: 'radio',
										isHighlighted: true
									}
								},
                {
                  type: "text",
                  name: "alt",
                  title: "Description",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
              options: {
                hotspot: true,
              },
            },
          ],
				},
			]
		}
  ])
})
