> Pinned source for Trigger.dev v4.7.6: [docs/management/webhooks/cancel-waiter.mdx](https://github.com/triggerdotdev/trigger.dev/blob/166db1ca0781345894af115bc877081a9546a44c/docs/management/webhooks/cancel-waiter.mdx)
> Canonical documentation: https://trigger.dev/docs/management/webhooks/cancel-waiter

# Cancel a webhook waiter

`POST /api/v1/webhooks/waiters/{waiterId}/cancel`

**Cancel a webhook waiter**

**Private beta:** [request access](https://trigger.dev/webhooks-beta) to use webhooks.
Cancel a waiter. It stops matching deliveries, frees its slot toward the endpoint's limit, and fails the run's wait. If a delivery already claimed the waiter, the cancel is too late: the response has `cancelled: false` with `reason: "too_late"`, and the run resumes with that delivery's event.

**Authentication:** `secretKey`

**Parameters**

- `waiterId` (path; required; string): The waiter's id, which is also its waitpoint id.
  - Example: `waitpoint_abc123`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `cancelled` (required; boolean)
      - `reason` (string; enum: `too_late`): Present when `cancelled` is `false`. A delivery already claimed the waiter.
      - `deliveryId` (string): With `too_late`, the delivery that resumed the run.
        - Example: `whd_1234`
- `401`: Unauthorized request
- `404`: Waiter not found
