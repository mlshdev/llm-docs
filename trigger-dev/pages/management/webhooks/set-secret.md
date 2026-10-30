> Pinned source for Trigger.dev v4.8.3: [docs/management/webhooks/set-secret.mdx](https://github.com/triggerdotdev/trigger.dev/blob/645cc47dd2eeb99387f604cad2c90ba2ef568680/docs/management/webhooks/set-secret.mdx)
> Canonical documentation: https://trigger.dev/docs/management/webhooks/set-secret

# Set a webhook signing secret

`PUT /api/v1/webhooks/endpoints/{endpointId}/secret`

**Set a webhook signing secret**

Store the signing secret or public key the provider issued for this endpoint, such as the `whsec_` secret Stripe returns when you create a webhook endpoint. It replaces the existing secret. Pass `previousSecretTtlSeconds` to keep accepting the old secret for a while, for example while the provider rolls its secret.

**Authentication:** `secretKey`

**Parameters**

- `endpointId` (path; required; string): The endpoint's declared id (the `id` passed to `webhooks.endpoint.define`) or its `wh_` id. A value starting with `wh_` is always a generated id, since declared ids can't start with `wh_`. A declared id names the endpoint's declared instance in the key's environment.
  - Example: `stripe`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `secret` (required; string; minimum length: `1`; maximum length: `4096`): The signing secret or public key. Leading and trailing whitespace is trimmed.
      - Example: `whsec_5f2b...`
    - `previousSecretTtlSeconds` (integer; minimum: `0`; maximum: `604800`): How long, in seconds, the secret being replaced keeps verifying deliveries (at most 7 days). Omit it or pass 0 to replace the secret immediately, for example when it leaked.
      - Example: `3600`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The endpoint's `wh_` id.
        - Example: `wh_cm1a2b3c4d5e6f`
      - `secretSet` (required; boolean)
      - `previousSecretExpiresAt` (string; format: date-time): When the replaced secret stops verifying deliveries. Absent when it was replaced immediately.
        - Example: `2026-10-21T12:00:00.000Z`
- `400`: Invalid request body
- `401`: Unauthorized request
- `404`: Endpoint not found
