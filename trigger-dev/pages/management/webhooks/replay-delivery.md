> Pinned source for Trigger.dev v4.7.6: [docs/management/webhooks/replay-delivery.mdx](https://github.com/triggerdotdev/trigger.dev/blob/166db1ca0781345894af115bc877081a9546a44c/docs/management/webhooks/replay-delivery.mdx)
> Canonical documentation: https://trigger.dev/docs/management/webhooks/replay-delivery

# Replay a webhook delivery

`POST /api/v1/webhooks/deliveries/{deliveryId}/replay`

**Replay a webhook delivery**

**Private beta:** [request access](https://trigger.dev/webhooks-beta) to use webhooks.
Route a delivery's stored event again as a new delivery. Without `targetId` every current subscriber is checked against its filter again. With `targetId` the event goes to that one subscriber, even if its filter skipped it. A replay never resumes waiting runs. Replays start real runs, so the key needs permission to trigger every task the replay runs, and to write sessions if it reaches an agent's subscriber.

**Authentication:** `secretKey`

**Parameters**

- `deliveryId` (path; required; string): The delivery's id, starts with `whd_`.
  - Example: `whd_1234`
- `targetId` (query; string): The subscriber to replay to: a `webhook()` task's id, or `agentId:eventId` for an agent's `chat.event` or channel. Listed in the endpoint's `subscribers`.

**Responses**

- `200`: Replay created
  - Media type: `application/json`
    - Schema (object)
      - `deliveryId` (required; string): The new delivery. Retrieve it once it's processed to see the runs it started.
        - Example: `whd_5678`
      - `replayedFrom` (required; string): The delivery that was replayed.
        - Example: `whd_1234`
- `401`: Unauthorized request
- `403`: The key can't trigger a task (or write sessions for an agent) that the replay would run
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `404`: The delivery, its endpoint, or the `targetId` subscriber doesn't exist
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
