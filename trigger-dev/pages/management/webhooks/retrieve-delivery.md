> Pinned source for Trigger.dev v4.7.6: [docs/management/webhooks/retrieve-delivery.mdx](https://github.com/triggerdotdev/trigger.dev/blob/166db1ca0781345894af115bc877081a9546a44c/docs/management/webhooks/retrieve-delivery.mdx)
> Canonical documentation: https://trigger.dev/docs/management/webhooks/retrieve-delivery

# Retrieve a webhook delivery

`GET /api/v1/webhooks/deliveries/{deliveryId}`

**Retrieve a webhook delivery**

**Private beta:** [request access](https://trigger.dev/webhooks-beta) to use webhooks.
Retrieve one delivery: its status and error, the event body and headers it carried, and a `targets` entry per subscriber with the run or session it started or why its filter skipped the event. When the delivery resumed waiting runs, one more entry summarizes them.

**Authentication:** `secretKey`

**Parameters**

- `deliveryId` (path; required; string): The delivery's id, starts with `whd_`.
  - Example: `whd_1234`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `id` (required; string): The delivery's id.
            - Example: `whd_1234`
          - `endpoint` (required; object; nullable): The endpoint the delivery arrived on, or `null` if it has since been removed.
            - `id` (required; string)
              - Example: `wh_cm1a2b3c4d5e6f`
            - `declaredId` (required; string)
              - Example: `stripe`
          - `status` (required; string; enum: `pending`, `processing`, `succeeded`, `failed`, `filtered`, `unmatched`): `pending` is waiting to be routed (including after a retryable error), `processing` is being routed, `succeeded` reached at least one subscriber or waiting run with nothing failed, `failed` means a subscriber failed after its retries, `filtered` means no subscriber's filter took it, and `unmatched` means runs were waiting on the endpoint but none matched and no subscriber took it.
          - `externalDeliveryId` (required; string): The provider's id for the delivery, such as a Stripe event id or GitHub's `X-GitHub-Delivery` header.
            - Example: `evt_1PqR2s3T4u5V6w`
          - `isTest` (required; boolean): Whether the request carried an `x-trigger-test` header, as test sends from the dashboard do.
          - `createdAt` (required; string; format: date-time)
          - `processedAt` (required; format: date-time; nullable)
        - `variant 2` (object)
          - `idempotencyKey` (required; string): The key the delivery was deduplicated on.
          - `event` (required): The verified event body, capped in size.
          - `headers` (required; nullable): The request headers, with credentials such as signatures removed.
            - `additional properties` (string)
          - `rawBodyHash` (required; nullable): A hash of the raw request body.
          - `error` (required; nullable): For a `failed` delivery, the error and the subscriber it came from.
          - `filterReason` (required; nullable): For a `filtered` delivery, why no subscriber took it.
          - `targets` (required; array): One entry per subscriber, plus a `waiter` entry when the delivery matched waiting runs.
            - `items` (object)
              - `id` (required; string): The subscriber id, or `waiters` for the waiting-runs summary.
                - Example: `process-checkout`
              - `type` (required; string; enum: `task`, `session`, `waiter`)
              - `status` (required; string; enum: `pending`, `succeeded`, `failed`, `filtered`)
              - `reason` (required; nullable): For a `filtered` target, the filter clause that failed and the value it saw.
              - `error` (required; nullable)
              - `runId` (required; nullable): The run the subscriber started.
                - Example: `run_cm1a2b3c4d5e6f`
              - `sessionId` (required; nullable): The session the event was routed into, for a `session` subscriber.
              - `waiters` (required; object; nullable): For the `waiter` summary, how many waiting runs matched, were resumed, and failed to resume.
                - `matched` (required; integer)
                - `resumed` (required; integer)
                - `failed` (required; integer)
          - `updatedAt` (required; string; format: date-time)
- `401`: Unauthorized request
- `404`: Delivery not found
