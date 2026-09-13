> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/template](https://docs.vast.ai/api-reference/templates/create-template)

# create template

`POST /api/v0/template`

Creates a new template for launching instances.

Templates store default configuration values that can be used when creating instances. When an instance is created with a template reference, template values serve as defaults that can be overridden by request parameters.

For detailed usage, see [Creating and Using Templates with API](/api-reference/creating-and-using-templates-with-api).

CLI Usage: `vastai create template --name <name> --image <image> [options]`

**Request body**

**Responses**

- `200`: Template created or existing template found
- `400`: Bad request - invalid parameters
- `401`: Unauthorized - invalid or missing API key
- `429`: Rate limit exceeded
