> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/template](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23delete%20/api/v0/template)
> Canonical documentation: https://docs.vast.ai/api-reference/templates/delete-template

# delete template

`DELETE /api/v0/template`

Deletes an existing template.

Pass the template's numeric `id` (not `hash_id`) in the request body.

For detailed usage, see [Creating and Using Templates with API](https://docs.vast.ai/api-reference/creating-and-using-templates-with-api).

CLI Usage: `vastai delete template --template-id <id>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `template_id` (required; integer): Numeric ID of the template to delete (not hash\_id)
  - Example: `{"template_id":334548}`

**Responses**

- `200`: Template deleted successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
- `401`: Unauthorized - invalid or missing API key
- `404`: Template not found
