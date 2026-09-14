> Commit-pinned source for Runpod main: [api-reference-v2/serverless/create-a-serverless-endpoint.mdx](https://docs.runpod.io/api-reference-v2/serverless/create-a-serverless-endpoint)

# Create A Serverless Endpoint

Create a Runpod Serverless endpoint with GPU or CPU compute, container or template settings, worker limits, and scaling policies.

`POST /v2/serverless`

**Create a serverless endpoint**

Creates a serverless endpoint. Callers specify exactly one of `gpu` or
`cpu`; neither or both returns 400. Container settings come from the
body, from a serverless template referenced by `templateId` (body
fields override the template's), or both; `image` is required unless
`templateId` is set. See `CreateEndpointRequest` for the full body.

The CUDA constraints live on `gpu` — `gpu.allowedCudaVersions` and
`gpu.minCudaVersion` — so a CPU create cannot express them and the
schema rejects the attempt with a 422. A non-empty set and a floor are
mutually exclusive (400 if both are sent); an explicit empty set states
no constraint and may accompany a floor.

Returns `201` with the created endpoint. The endpoint can accept jobs
immediately, but starts with no active workers unless `workers.min`
is greater than 0. Workers are provisioned on demand and autoscaled
between `workers.min` and `workers.max` according to the `scaling`
policy, so the first request to an idle endpoint may incur cold-start
latency while a worker pulls its image and boots.

## Checking what you can deploy

`gpu.pools` takes serverless GPU **pool** IDs, not the GPU type IDs
used for pods. `gpu.excludedTypes` takes the type IDs — it subtracts
specific cards from the pools you picked. Read both from the catalog
before you create:

- [List GPU types](https://docs.runpod.io/api-reference-v2/catalog/list-gpu-types)
  — the `pool` field carries the pool ID for each GPU type (`null`
  means that type is not in a serverless pool). Add
  `include=AVAILABILITY&product=SERVERLESS` for current serverless
  stock.
- [List data centers](https://docs.runpod.io/api-reference-v2/catalog/list-data-centers)
  — locations to constrain with `dataCenterIds`, with
  `include=GPU_AVAILABILITY` for stock per data center.

Unlike pod creation, you do not need to retry across GPUs yourself:
list every pool you are willing to run on and workers are placed on
whichever one has capacity. Listing more pools — and leaving
`dataCenterIds` unset — gives the scheduler more room and reduces the
chance of workers failing to start when a single pool is exhausted.

If your workload needs a specific card, pick the pool that holds it and
exclude the rest of that pool with `gpu.excludedTypes`. Keep at least
one type in the selection — upstream rejects a selection that leaves
none.

**Request body**

**Responses**

- `201`: Created
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `422`: The request body or parameters were syntactically valid but failed validation.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
