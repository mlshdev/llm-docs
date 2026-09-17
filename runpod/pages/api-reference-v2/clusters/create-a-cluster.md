> Pinned source for Runpod main: [api-reference-v2/clusters/create-a-cluster.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/api-reference-v2/clusters/create-a-cluster.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/clusters/create-a-cluster

# Create A Cluster

Create a multi-node Runpod Cluster with a consistent compute shape and container configuration across every member Pod.

`POST /v2/clusters`

**Create a cluster**

Creates a multi-node cluster. `compute` sets the homogeneous
pod shape; the container configuration applies to every pod and can be spread
from a template response.

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema
    - allOf:
      - `variant 1` (object): Container configuration universal to every containerized resource. Compose ContainerConfig instead unless the resource cannot support a direct registry credential (clusters — there the registry credential arrives via a pod template, see CreateClusterRequest.templateId).
        - `args` (string): The container's command, as a single raw string. This is the field `entrypoint` and `cmd` encode into, exposed in its stored form. Two shapes are accepted. A bare shell string is treated as CMD and split into arguments, which is what the console's "Container start command" field writes. A JSON object of the form `{"entrypoint":[...],"cmd":[...]}` sets either or both explicitly. Responses always return both representations: `args` exactly as stored, plus the deconstructed `entrypoint` and `cmd`. Supplying `args` together with `entrypoint` or `cmd` is allowed only when they describe the same command, so a read-modify-write client can send back everything it received. Send `""` to clear, omit to leave unchanged.
        - `cmd` (array): Container CMD in exec form. When the image defines an ENTRYPOINT, this is the argument list passed to it. Encoded into the `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged.
          - `items` (string)
        - `entrypoint` (array): Container ENTRYPOINT in exec form, overriding the image's own. Encoded into `args` field; supplying both is allowed only when they describe the same command. Send `[]` to clear, omit to leave unchanged.
          - `items` (string)
        - `disk` (integer; minimum: `1`): Container disk in GB (ephemeral, wiped on restart)
        - `env` (object): Environment variables as key-value pairs
          - `additional properties` (string)
        - `image` (string): Docker image reference
        - `ports` (array): Exposed ports, formatted as port/protocol
          - `items` (string)
      - `variant 2` (object): Request body for creating a cluster. `compute` defines the homogeneous pod shape; the container configuration (image, env, ports, …) applies to every pod. Pass `templateId` to provision every member pod from a pod template instead of inline container fields — the template also supplies the container registry credential, the only private-image path for clusters (a bare `registry` property on this body is rejected).
        - `compute` (required; object): The homogeneous compute shape of a cluster. Every pod in the cluster is identical: `podCount` pods, each with `gpuCountPerPod` GPUs of type `gpuTypeId`. Total GPUs = `podCount` \* `gpuCountPerPod`.
          - `gpuTypeId` (required; string; minimum length: `1`): GPU type for every pod in the cluster, as returned by GET /v2/catalog/gpus.
          - `gpuCountPerPod` (required; integer; minimum: `1`): Number of GPUs on each pod. Bounded above by the GPU type's per-cloud maximum (GpuType.maxCount); the upstream rejects values beyond it.
          - `podCount` (required; integer; minimum: `2`; maximum: `250`): Number of pods (nodes) in the cluster.
        - `name` (required; string; minimum length: `1`)
        - `type` (required; string; enum: `APPLICATION`, `TRAINING`, `SLURM`, `RAY`): Cluster type. TRAINING is the generic distributed-training cluster; SLURM provisions a managed Slurm controller/compute topology; RAY provisions a managed Ray head/worker topology; APPLICATION is a general multi-node application cluster.
        - `templateId` (string; minimum length: `1`): ID of a pod template to provision every member pod from. The template supplies the container settings (image, args, disk, env, ports) and the container registry credential for private images — the only private-image path for clusters. Mutually exclusive with `image`, `args`, `entrypoint`, `cmd`, `disk`, `env`, `ports`, and `mounts` (rejected with 400). The cluster retains the link: the `template` response field is set. Must be a non-serverless pod template accessible to the caller.
        - `dataCenterIds` (array): Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose. A cluster is always placed within a single data center.
          - Example: `["US-TX-3"]`
          - `items` (string)
        - `mounts` (object): Storage mounts attached to a pod. At-most-one of `persistent` or `network` may be set today (mutually exclusive, enforced at the handler with 400 if both are present). The `network` field is an array for forward compatibility with eventual multi-network-volume support, but `maxItems` is 1 today. PATCH semantics: - Omitting `mounts` or sending `{}` leaves the existing mount unchanged. - An explicit `network: []` is rejected with 400 (clearing mounts is not supported). - Mount kind is fixed at create — a PATCH that introduces a kind not present at create (persistent on a network pod, network on a persistent pod, or any mount on a previously-mountless pod) is rejected with 400. - The `volumeId` of a network mount is immutable; a PATCH that names a different `volumeId` is rejected with 400. - Partial mounts are not supported — every mount entry must include the full schema (`size` + `path` for persistent, `volumeId` + `path` for network). Missing required fields → 422.
          - `persistent` (object): Host-local persistent storage. Pinned to the pod's host machine — data does not survive a host failure. Disallowed on CPU pods. Mutually exclusive with NetworkMount. Deprecated: prefer NetworkMount for any data you cannot recreate.
            - `size` (required; integer; minimum: `10`): Host-local persistent storage in GB. Upstream enforces a 10 GB floor.
            - `path` (required; string): Mount path inside the container. May be changed via PATCH.
          - `network` (array; maximum items: `1`)
            - `items` (object): Reference to a NetworkVolume. Custom paths are honored at runtime on both GPU and CPU pods. The underlying `volumeId` is immutable post-create; the mount `path` may be changed via PATCH.
              - `volumeId` (required; string): ID of an existing NetworkVolume in the same data center as the pod.
              - `path` (required; string): Mount path inside the container. No default — must be specified explicitly.
        - `startJupyter` (boolean; default: `false`): Start Jupyter on every member pod, as on pod create.
        - `startSsh` (boolean; default: `false`): Provision SSH access on every member pod: injects a PUBLIC\_KEY environment variable carrying your account's registered SSH public key. Same semantics as the pod create flag.

**Responses**

- `201`: Created
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
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `badRequest`: `{"title":"Bad Request","status":400,"detail":"request could not be processed"}`
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
- `422`: The request body or parameters were syntactically valid but failed validation.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `validationFailed`: `{"title":"Unprocessable Entity","status":422,"detail":"Request validation failed."}`
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
