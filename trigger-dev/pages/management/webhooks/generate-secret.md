> Pinned source for Trigger.dev v4.7.7: [docs/management/webhooks/generate-secret.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ffc950ee0d4fb2bdfbc0d368bba8d6e25e8d6e72/docs/management/webhooks/generate-secret.mdx)
> Canonical documentation: https://trigger.dev/docs/management/webhooks/generate-secret

# Generate a webhook signing secret

`POST /api/v1/webhooks/endpoints/{endpointId}/rotate-secret`

**Generate a webhook signing secret**

**Private beta:** [request access](https://trigger.dev/webhooks-beta) to use webhooks.
Generate a new signing secret for the endpoint, store it, and return it once. Use this for providers where you choose the secret, such as GitHub. It replaces any existing secret, so deliveries fail verification until the provider uses the new one. Endpoints whose source verifies with a public key refuse this; set the provider's key with the set secret endpoint instead.

**Authentication:** `secretKey`

**Parameters**

- `endpointId` (path; required; string): The endpoint's declared id (the `id` passed to `webhooks.endpoint.define`) or its `wh_` id. A value starting with `wh_` is always a generated id, since declared ids can't start with `wh_`. A declared id names the endpoint's declared instance in the key's environment.
  - Example: `stripe`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The endpoint's `wh_` id.
        - Example: `wh_cm1a2b3c4d5e6f`
      - `secretSet` (required; boolean)
      - `secret` (required; string): The new signing secret. It is returned only in this response and can't be read again.
        - Example: `whsec_5f2b...`
- `400`: The endpoint's source verifies with a public key, so a secret can't be generated
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `401`: Unauthorized request
- `404`: Endpoint not found
