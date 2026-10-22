> Pinned source for Trigger.dev v4.7.7: [docs/management/webhooks/set-secret.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ffc950ee0d4fb2bdfbc0d368bba8d6e25e8d6e72/docs/management/webhooks/set-secret.mdx)
> Canonical documentation: https://trigger.dev/docs/management/webhooks/set-secret

# Set a webhook signing secret

`PUT /api/v1/webhooks/endpoints/{endpointId}/secret`

**Set a webhook signing secret**

**Private beta:** [request access](https://trigger.dev/webhooks-beta) to use webhooks.
Store the signing secret or public key the provider issued for this endpoint, such as the `whsec_` secret Stripe returns when you create a webhook endpoint. It replaces any existing secret.

**Authentication:** `secretKey`

**Parameters**

- `endpointId` (path; required; string): The endpoint's declared id (the `id` passed to `webhooks.endpoint.define`) or its `wh_` id. A value starting with `wh_` is always a generated id, since declared ids can't start with `wh_`. A declared id names the endpoint's declared instance in the key's environment.
  - Example: `stripe`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `secret` (required; string; minimum length: `1`; maximum length: `4096`): The signing secret or public key. Leading and trailing whitespace is trimmed.
      - Example: `whsec_5f2b...`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The endpoint's `wh_` id.
        - Example: `wh_cm1a2b3c4d5e6f`
      - `secretSet` (required; boolean)
- `400`: Invalid request body
- `401`: Unauthorized request
- `404`: Endpoint not found
