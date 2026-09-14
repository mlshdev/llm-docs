> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/template](https://docs.vast.ai/api-reference/templates/delete-template)

# delete template

`DELETE /api/v0/template`

Deletes an existing template.

Pass the template's numeric `id` (not `hash_id`) in the request body.

For detailed usage, see [Creating and Using Templates with API](/api-reference/creating-and-using-templates-with-api).

CLI Usage: `vastai delete template --template-id <id>`

**Request body**

**Responses**

- `200`: Template deleted successfully
- `401`: Unauthorized - invalid or missing API key
- `404`: Template not found
