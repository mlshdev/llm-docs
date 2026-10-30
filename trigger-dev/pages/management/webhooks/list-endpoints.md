> Pinned source for Trigger.dev v4.8.3: [docs/management/webhooks/list-endpoints.mdx](https://github.com/triggerdotdev/trigger.dev/blob/645cc47dd2eeb99387f604cad2c90ba2ef568680/docs/management/webhooks/list-endpoints.mdx)
> Canonical documentation: https://trigger.dev/docs/management/webhooks/list-endpoints

# List webhook endpoints

`GET /api/v1/webhooks/endpoints`

**List webhook endpoints**

List the hosted webhook endpoints in the environment, ordered by declared id. Each endpoint includes its webhook URL and whether its signing secret is set. The secret itself is never returned.

**Authentication:** `secretKey`

**Parameters**

- `filter[webhook]` (query; string): Comma-separated declared endpoint ids to return.
  - Example: `stripe,github`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `data` (required; array)
        - `items` (object)
          - `id` (required; string): The endpoint's id.
            - Example: `wh_cm1a2b3c4d5e6f`
          - `declaredId` (required; string): The `id` the endpoint is declared with in code (`webhooks.endpoint.define({ id })`).
            - Example: `stripe`
          - `source` (required; string): The provider source that verifies and types the endpoint's events.
            - Example: `stripe`
          - `status` (required; string; enum: `active`, `inactive`, `deleting`): `active` accepts deliveries. `inactive` was disabled, or is no longer in the current deployment, and its URL responds with `404`.
          - `secretProvisioning` (required; string; enum: `provider`, `integrator`, `either`): Who supplies the signing secret: `provider` issues it (store it with the set secret endpoint), `integrator` means you choose it (generate one), and `either` accepts both.
          - `secretSet` (required; boolean): Whether a signing secret or public key is set. Every delivery is rejected until it is.
          - `tenantId` (required; nullable): Reserved for dynamic endpoints. `null` for a declared endpoint.
          - `externalRef` (required; nullable): Reserved for dynamic endpoints. `null` for a declared endpoint.
          - `url` (required; string): The webhook URL to register with the provider.
            - Example: `https://api.trigger.dev/webhooks/v1/ingest/q3Xb7k2LmP9sT4vW1yZ0aQ`
          - `createdAt` (required; string; format: date-time)
          - `updatedAt` (required; string; format: date-time)
- `401`: Unauthorized request
