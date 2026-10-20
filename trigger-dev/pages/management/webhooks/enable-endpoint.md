> Pinned source for Trigger.dev v4.7.6: [docs/management/webhooks/enable-endpoint.mdx](https://github.com/triggerdotdev/trigger.dev/blob/166db1ca0781345894af115bc877081a9546a44c/docs/management/webhooks/enable-endpoint.mdx)
> Canonical documentation: https://trigger.dev/docs/management/webhooks/enable-endpoint

# Enable a webhook endpoint

`POST /api/v1/webhooks/endpoints/{endpointId}/enable`

**Enable a webhook endpoint**

**Private beta:** [request access](https://trigger.dev/webhooks-beta) to use webhooks.
Resume a disabled endpoint so its URL accepts deliveries again. Returns the updated endpoint.

**Authentication:** `secretKey`

**Parameters**

- `endpointId` (path; required; string): The endpoint's declared id (the `id` passed to `webhooks.endpoint.define`) or its `wh_` id. A value starting with `wh_` is always a generated id, since declared ids can't start with `wh_`. A declared id names the endpoint's declared instance in the key's environment.
  - Example: `stripe`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object)
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
        - `variant 2` (object)
          - `subscribers` (required; array): The tasks and agents that receive the endpoint's deliveries.
            - `items` (object)
              - `id` (required; string): The subscriber id, used as `targetId` when replaying: a `webhook()` task's id, or `agentId:eventId` for an agent's `chat.event` or channel.
                - Example: `process-checkout`
              - `type` (required; string; enum: `task`, `session`): `task` triggers a run. `session` routes the event into an agent's session.
              - `taskId` (required; string): The subscribing task, or the agent for a `session` subscriber.
                - Example: `process-checkout`
              - `filter` (required; nullable): The filter that decides which events the subscriber takes. `null` takes every event.
                - Example: `event.type == 'checkout.session.completed'`
          - `setupPrompt` (required; string): Instructions for an AI coding agent to register the endpoint with its provider and set up the signing secret.
- `401`: Unauthorized request
- `404`: Endpoint not found
