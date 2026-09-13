> Commit-pinned source for Runpod main: [api-reference-v2/pods/create-a-pod.mdx](https://docs.runpod.io/api-reference-v2/pods/create-a-pod)

# Create A Pod

Create a Runpod Pod with GPU or CPU compute, container or template settings, storage, networking, and deployment constraints.

`POST /v2/pods`

**Create a pod**

Creates a new pod. `name` is always required; supply exactly one of
`gpu` or `cpu` to select compute (a GPU or a CPU pod). Container
settings come from the body, from a template referenced by
`templateId` (body fields override the template's), or both; `image`
is required unless `templateId` is set. See `CreatePodRequest` for
the full body.

Returns `201` with the created pod. Provisioning is asynchronous: the
pod starts in `PROVISIONING`, transitions through `STARTING`, and
reaches `RUNNING` once its container is healthy. Poll `getPod` (or
watch the pod's `status`) to observe readiness rather than assuming
the pod is running when this call returns.

## Checking what you can deploy

This endpoint places one specific GPU type. It does not search for
capacity, and it does not fall back to a different GPU. To find out
what is deployable before you call it, read the catalog:

- [List GPU types](https://docs.runpod.io/api-reference-v2/catalog/list-gpu-types)
  — GPU types with pricing, per-cloud ceilings, and, with
  `include=AVAILABILITY&product=POD`, current pod stock.
- [List data centers](https://docs.runpod.io/api-reference-v2/catalog/list-data-centers)
  — locations, with `include=GPU_AVAILABILITY` for stock per data
  center.

Both accept filters that combine, so you can narrow by location and by
compute in one request — for example
`GET /v2/catalog/datacenters?regions=EUROPE&include=GPU_AVAILABILITY`
returns only European data centers, each carrying the GPU types
currently available there.

## Deploying under region and GPU constraints

If you need a particular GPU in a particular geography, the working
pattern is read-then-create: narrow the catalog to an acceptable
(data center, GPU) set, then call this endpoint once per candidate in
your order of preference until one returns `201`. The runnable sample
alongside this operation does exactly that.

Availability can change between the catalog read and the create call,
so treat the catalog as a way to order your candidates, not as a
reservation — a create can still fail for capacity on a GPU the
catalog just reported as available.

Which failures are worth retrying:

| Status | Meaning | Do |
| --- | --- | --- |
| `422` | The body does not match the contract. `errors` lists each violation. | Fix the request. Never retry. |
| `400` | The body matches the contract but was rejected — either it breaks a cross-field rule, or this GPU and data center combination could not be placed. | Try your next candidate. |
| `402` | Insufficient balance. | Stop; no candidate will succeed. |
| `403` | Your account cannot access the requested pool. | Skip this candidate, keep going. |
| `429` | Rate limited. | Back off using `Retry-After`, then resume. |
| `5xx` | Transient upstream failure. | Retry the same candidate with backoff. |

`400` covers both "your request breaks a rule" and "no capacity",
because capacity exhaustion currently carries no machine-readable code
of its own — only a human-readable `detail`. A rule violation is
deterministic, so it fails identically on every candidate: if *every*
candidate returns `400`, read the last `detail` as a problem with the
request rather than as absent capacity.

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
