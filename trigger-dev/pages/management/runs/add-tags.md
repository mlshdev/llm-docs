> Pinned source for Trigger.dev v4.6.4: [docs/management/runs/add-tags.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/runs/add-tags.mdx)
> Canonical documentation: https://trigger.dev/docs/management/runs/add-tags

# Add tags to a run

`POST /api/v1/runs/{runId}/tags`

**Add tags to a run**

Adds one or more tags to a run. Runs can have a maximum of 10 tags. Duplicate tags are ignored.

**Authentication:** `secretKey`

**Parameters**

- `runId` (path; required; string): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.
  - Example: `run_1234`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `tags` (required): One or more tags to attach to a run. Runs can have a maximum of 10 tags.
      - oneOf:
        - `variant 1` (string; maximum length: `128`): A single run tag. Must be less than 128 characters.
          - Example: `user_123456`
        - `variant 2` (array; maximum items: `10`; unique items)
          - Example: `["user_123456","product_4629101"]`
          - `items` (string; maximum length: `128`): A single run tag. Must be less than 128 characters.
            - Example: `user_123456`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `message` (string)
        - Example: `Successfully set 2 new tags.`
- `400`: Invalid request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
- `401`: Unauthorized request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Invalid or Missing API Key`)
- `422`: Too many tags
  - Media type: `application/json`
    - Schema (object)
      - `error` (string): Runs can only have 10 tags.
