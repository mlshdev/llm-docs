> Pinned source for Trigger.dev v4.8.1: [docs/management/webhooks/generate-secret.mdx](https://github.com/triggerdotdev/trigger.dev/blob/bd2a14e6ad83fbe056a473b0082ff4110747fa38/docs/management/webhooks/generate-secret.mdx)
> Canonical documentation: https://trigger.dev/docs/management/webhooks/generate-secret

# Generate a webhook signing secret

`POST /api/v1/webhooks/endpoints/{endpointId}/rotate-secret`

**Generate a webhook signing secret**

Generate a new signing secret for the endpoint, store it, and return it once. Use this for providers where you choose the secret, such as GitHub. It replaces the existing secret. Pass `previousSecretTtlSeconds` to keep accepting the old secret while you update the provider; without it, deliveries signed with the old secret fail verification straight away. Endpoints whose source verifies with a public key refuse this; set the provider's key with the set secret endpoint instead.

**Authentication:** `secretKey`

**Parameters**

- `endpointId` (path; required; string): The endpoint's declared id (the `id` passed to `webhooks.endpoint.define`) or its `wh_` id. A value starting with `wh_` is always a generated id, since declared ids can't start with `wh_`. A declared id names the endpoint's declared instance in the key's environment.
  - Example: `stripe`

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `previousSecretTtlSeconds` (integer; minimum: `0`; maximum: `604800`): How long, in seconds, the secret being replaced keeps verifying deliveries (at most 7 days). Omit it or pass 0 to replace the secret immediately, for example when it leaked.
      - Example: `3600`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The endpoint's `wh_` id.
        - Example: `wh_cm1a2b3c4d5e6f`
      - `secretSet` (required; boolean)
      - `secret` (required; string): The new signing secret. It is returned only in this response and can't be read again.
        - Example: `whsec_5f2b...`
      - `previousSecretExpiresAt` (string; format: date-time): When the replaced secret stops verifying deliveries. Absent when it was replaced immediately.
        - Example: `2026-10-21T12:00:00.000Z`
- `400`: The endpoint's source verifies with a public key, so a secret can't be generated, or the body is invalid
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `401`: Unauthorized request
- `404`: Endpoint not found
