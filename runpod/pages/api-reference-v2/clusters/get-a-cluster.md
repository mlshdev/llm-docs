> Pinned source for Runpod main: [api-reference-v2/clusters/get-a-cluster.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/api-reference-v2/clusters/get-a-cluster.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/clusters/get-a-cluster

# Get A Cluster

Retrieve a Runpod Cluster by ID with its configuration, status, and an aggregate summary of member Pods by status.

`GET /v2/clusters/{id}`

**Get a cluster**

Returns a single cluster by ID. The pods field is an aggregate summary (total + count by status); fetch the member pods themselves from /v2/clusters/{id}/pods.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Cluster identifier
  - Example: `cluster_abc123`

**Responses**

- `200`: OK
  - Media type: `application/json`
    - Schema (object): A cluster. Cluster-level fields describe the identity and homogeneous shape; `pods` is a lightweight summary of the members. Fetch the full member pods — with their container config, mounts, and runtime state — from `GET /v2/clusters/{id}/pods`.
      - `id` (required; string)
      - `name` (required; string)
      - `type` (required; string; enum: `APPLICATION`, `TRAINING`, `SLURM`, `RAY`): Cluster type. TRAINING is the generic distributed-training cluster; SLURM provisions a managed Slurm controller/compute topology; RAY provisions a managed Ray head/worker topology; APPLICATION is a general multi-node application cluster.
      - `compute` (required; object): The homogeneous compute shape of a cluster. Every pod in the cluster is identical: `podCount` pods, each with `gpuCountPerPod` GPUs of type `gpuTypeId`. Total GPUs = `podCount` \* `gpuCountPerPod`.
        - `gpuTypeId` (required; string; minimum length: `1`): GPU type for every pod in the cluster, as returned by GET /v2/catalog/gpus.
        - `gpuCountPerPod` (required; integer; minimum: `1`): Number of GPUs on each pod. Bounded above by the GPU type's per-cloud maximum (GpuType.maxCount); the upstream rejects values beyond it.
        - `podCount` (required; integer; minimum: `2`; maximum: `250`): Number of pods (nodes) in the cluster.
      - `template` (string): ID of the template this cluster's pods were created from; omitted when they were not created from one.
      - `dataCenterId` (string): Data center the cluster is placed in (a cluster is always within a single data center). Derived from the member pods; omitted until at least one pod is placed.
      - `pods` (required; object): A lightweight summary of a cluster's member pods. Use `GET /v2/clusters/{id}/pods` to retrieve the full pod objects.
        - `total` (required; integer): Number of member pods currently provisioned for the cluster.
        - `byStatus` (required; object): Member pod counts keyed by pod status (the same values as `Pod.status`, e.g. RUNNING, PROVISIONING). Statuses with no pods are omitted.
          - Example: `{"RUNNING":3,"PROVISIONING":1}`
          - `additional properties` (integer)
      - `network`: The cluster's overlay network; omitted until the network is provisioned.
        - allOf:
          - `variant 1` (object): The cluster's private VXLAN overlay network (shared by all member pods).
            - `cidr` (required; string): The overlay network's CIDR block.
            - `vxlanId` (integer): VXLAN network identifier; omitted until assigned.
            - `vxlanPort` (integer): UDP port carrying the VXLAN traffic; omitted until assigned.
      - `primary`: The primary (master) node; omitted until a primary pod is placed. Its `sshEndpoint` is omitted until that pod is RUNNING with SSH exposed.
        - allOf:
          - `variant 1` (object): The cluster's primary (master) node, through which the cluster is typically driven. Omitted until a primary pod has been placed.
            - `podId` (required; string): ID of the primary member pod.
            - `status` (required; string; enum: `PROVISIONING`, `STARTING`, `RUNNING`, `EXITED`, `ERROR`, `TERMINATED`): Lifecycle status of a pod. - `PROVISIONING` — pod is being allocated - `STARTING` — container is starting - `RUNNING` — container is healthy - `EXITED` — container exited (stopped) - `ERROR` — container is in an unrecoverable error state - `TERMINATED` — pod has been permanently deleted
            - `sshEndpoint` (string): Public SSH endpoint (`host:port`) for the primary node; omitted when the primary is not yet RUNNING or does not expose SSH (22/tcp).
      - `createdAt` (required; string; format: date-time)
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `missingBearerToken`: `{"title":"Unauthorized","status":401,"detail":"missing bearer token"}`
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `insufficientAccess`: `{"title":"Forbidden","status":403,"detail":"access denied"}`
- `404`: Cluster not found
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
  - Header `Retry-After` (integer): Seconds to wait before retrying, per the exceeded window.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `rateLimited`: `{"title":"Too Many Requests","status":429,"detail":"rate limit exceeded for the minute window"}`
- `default`: Error
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
