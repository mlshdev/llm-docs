> Pinned source for Runpod main: [api-reference-v2/pods/create-a-pod.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/api-reference-v2/pods/create-a-pod.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/pods/create-a-pod

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

| Status | Meaning                                                                                                                                            | Do                                         |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `422`  | The body does not match the contract. `errors` lists each violation.                                                                               | Fix the request. Never retry.              |
| `400`  | The body matches the contract but was rejected — either it breaks a cross-field rule, or this GPU and data center combination could not be placed. | Try your next candidate.                   |
| `402`  | Insufficient balance.                                                                                                                              | Stop; no candidate will succeed.           |
| `403`  | Your account cannot access the requested pool.                                                                                                     | Skip this candidate, keep going.           |
| `429`  | Rate limited.                                                                                                                                      | Back off using `Retry-After`, then resume. |
| `5xx`  | Transient upstream failure.                                                                                                                        | Retry the same candidate with backoff.     |

Requests larger than 102400 bytes receive `413` before authentication
or processing. Reduce the serialized JSON request body and retry.

This limit also applies to the deployment request built from your input
and any referenced template. A small request can therefore receive `413`
if inherited template settings make the combined request too large.
Reduce environment variables or command values in your request or template
and retry.

`400` covers both "your request breaks a rule" and "no capacity",
because capacity exhaustion currently carries no machine-readable code
of its own — only a human-readable `detail`. A rule violation is
deterministic, so it fails identically on every candidate: if *every*
candidate returns `400`, read the last `detail` as a problem with the
request rather than as absent capacity.

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema
    - allOf:
      - `variant 1`: Reusable container configuration shared across templates, pods, and serverless endpoints. Adding a field here automatically propagates to all three resources.
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
          - `variant 2` (object)
            - `registry` (nullable): Container registry credential ID (for private images)
      - `variant 2` (object): Request body for creating a pod. Exactly one of `gpu` or `cpu` must be set — enforced at the handler layer. For CPU pods, memory is derived by the API from the selected flavor's RAM multiplier; clients provide only CPU flavor and vCPU count. CPU pods support container disk and network volumes only; `mounts.persistent` is invalid when `cpu` is set. `image` is required unless `templateId` is set.
        - `name` (required; string; minimum length: `1`)
        - `cloud` (default: `SECURE`): Cloud tier. Defaults to `SECURE` when omitted.
          - allOf:
            - `variant 1` (string; enum: `SECURE`, `COMMUNITY`): Cloud tier. - `SECURE` — Runpod-owned datacenter hardware - `COMMUNITY` — community-hosted hardware
        - `cpu`
          - allOf:
            - `variant 1` (object)
              - `id` (required; string; minimum length: `1`): CPU flavor identifier, as returned by GET /v2/catalog/cpus.
              - `vcpuCount` (required; integer; minimum: `2`): Number of vCPUs. Must be valid for the selected CPU flavor and must be a power of two.
        - `dataCenterIds` (array): Preferred data centers for placement. Omit or pass an empty array to let the scheduler choose.
          - `items` (string)
        - `globalNetworking` (boolean; default: `false`): Enable global networking, giving the pod a private IP reachable across data centers. Requires an NVIDIA GPU and a global-networking-enabled data center (both enforced upstream). See `GET /v2/catalog/datacenters` (`globalNetwork`) for eligible data centers.
        - `gpu`: GPU request for a pod create. Carries the CUDA host constraints, which live here rather than at the body's top level so they are unrepresentable on a CPU pod.
          - allOf:
            - `variant 1` (object)
              - `id` (required; string): GPU type identifier
              - `count` (integer; default: `1`; minimum: `1`): Number of GPUs
            - `variant 2` (object)
              - `allowedCudaVersions` (array): Acceptable CUDA versions for the host machine, as `major.minor`. Omit to accept any version. Matching is exact, so a version no machine reports yields a capacity error rather than a fallback — discover valid values per GPU type via `GET /v2/catalog/gpus?include=AVAILABILITY&product=POD` (`cudaVersions`). A non-empty set is mutually exclusive with minCudaVersion (400 if both are sent). An explicit `[]` states no constraint, so it may accompany a floor.
                - `items` (string; pattern: `^\d+\.\d+$`)
              - `minCudaVersion` (string; pattern: `^\d+\.\d+$`): Lowest acceptable CUDA version for the host machine, as `major.minor`, compared numerically rather than as a decimal — so 12.11 is above 12.2. Use this for an open-ended floor and allowedCudaVersions for an exact set. Mutually exclusive with a non-empty allowedCudaVersions (400 if both are sent); an explicit `[]` there states no constraint and may accompany this floor.
              - `minRamPerGpu` (integer; minimum: `1`): Minimum host system RAM in GB per requested GPU. This is a placement filter, not a resource request. The actual total allocated system RAM may be higher and is returned in gpu.memory.
              - `minVcpuCountPerGpu` (integer; minimum: `1`): Minimum host vCPU count per requested GPU. This is a placement filter, not a resource request. The actual total allocated vCPU count may be higher and is returned in gpu.vcpuCount.
        - `mounts` (object): Storage mounts attached to a pod. At-most-one of `persistent` or `network` may be set today (mutually exclusive, enforced at the handler with 400 if both are present). The `network` field is an array for forward compatibility with eventual multi-network-volume support, but `maxItems` is 1 today. PATCH semantics: - Omitting `mounts` or sending `{}` leaves the existing mount unchanged. - An explicit `network: []` is rejected with 400 (clearing mounts is not supported). - Mount kind is fixed at create — a PATCH that introduces a kind not present at create (persistent on a network pod, network on a persistent pod, or any mount on a previously-mountless pod) is rejected with 400. - The `volumeId` of a network mount is immutable; a PATCH that names a different `volumeId` is rejected with 400. - Partial mounts are not supported — every mount entry must include the full schema (`size` + `path` for persistent, `volumeId` + `path` for network). Missing required fields → 422.
          - `persistent` (object): Host-local persistent storage. Pinned to the pod's host machine — data does not survive a host failure. Disallowed on CPU pods. Mutually exclusive with NetworkMount. Deprecated: prefer NetworkMount for any data you cannot recreate.
            - `size` (required; integer; minimum: `10`): Host-local persistent storage in GB. Upstream enforces a 10 GB floor.
            - `path` (required; string): Mount path inside the container. May be changed via PATCH.
          - `network` (array; maximum items: `1`)
            - `items` (object): Reference to a NetworkVolume. Custom paths are honored at runtime on both GPU and CPU pods. The underlying `volumeId` is immutable post-create; the mount `path` may be changed via PATCH.
              - `volumeId` (required; string): ID of an existing NetworkVolume in the same data center as the pod.
              - `path` (required; string): Mount path inside the container. No default — must be specified explicitly.
        - `startJupyter` (boolean; default: `false`): Create-time flag telling the provisioner to start JupyterLab: injects a generated `JUPYTER_PASSWORD` environment variable, unless the request already sets one. Only images that honor the convention start Jupyter from it (Runpod official images do); expose `8888/http` in `ports` to reach it. Not part of the pod's readable config — never returned by GET and not changeable by PATCH.
        - `startSsh` (boolean; default: `false`): Create-time flag telling the provisioner to set up SSH access: injects a `PUBLIC_KEY` environment variable carrying your account's registered SSH public keys, unless the request already sets one. **Requires registered keys** (`PUT /v2/account/ssh-keys`) — with none registered the flag does nothing and the pod has no SSH access. Only images that honor the convention start sshd from it (all Runpod official images do). Connect using the pod's `ssh` block; the `ssh.direct` variant additionally needs a `22/tcp` entry in `ports`. Not part of the pod's readable config — never returned by GET and not changeable by PATCH.
        - `templateId` (string; minimum length: `1`): ID of a pod template to base this pod on. The template is resolved at create time into the same container settings you could otherwise spread into this body (image, args, disk, ports, env, registry, persistent mount, startSsh, startJupyter, allowedCudaVersions); explicit body fields override the template's, except `env`, which is merged per key with body values winning. Sending either CUDA field (`gpu.allowedCudaVersions` or `gpu.minCudaVersion`) replaces the template's CUDA constraint entirely, and CPU pods ignore it (like the persistent mount). The template is a one-time source of settings: later template edits do not affect the pod, and the created pod does not retain a link to the template (`template` stays null). The template may be one of your own or a public catalog template — see `GET /v2/catalog/templates` (unknown or inaccessible ID → 404) — and must not be a serverless template (→ 422). CPU pods do not inherit a template's persistent mount.
  - Example `gpuPod`: `{"name":"pytorch-training","image":"runpod/pytorch:1.0.2-cu1281-torch280-ubuntu2404","gpu":{"id":"NVIDIA GeForce RTX 4090","count":1,"minRamPerGpu":32,"minVcpuCountPerGpu":8},"disk":50}`

**Responses**

- `201`: Created
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1`: Reusable container configuration shared across templates, pods, and serverless endpoints. Adding a field here automatically propagates to all three resources.
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
            - `variant 2` (object)
              - `registry` (nullable): Container registry credential ID (for private images)
        - `variant 2` (object)
          - `id` (required; string)
          - `name` (required; string)
          - `status` (required; string; enum: `PROVISIONING`, `STARTING`, `RUNNING`, `EXITED`, `ERROR`, `TERMINATED`): Lifecycle status of a pod. - `PROVISIONING` — pod is being allocated - `STARTING` — container is starting - `RUNNING` — container is healthy - `EXITED` — container exited (stopped) - `ERROR` — container is in an unrecoverable error state - `TERMINATED` — pod has been permanently deleted
          - `actions` (required; array): Valid state transitions for the current status.
            - `items` (string; enum: `start`, `stop`, `restart`, `terminate`): State transition to trigger on a pod.
          - `mounts` (required; object): Storage mounts attached to a pod. At-most-one of `persistent` or `network` may be set today (mutually exclusive, enforced at the handler with 400 if both are present). The `network` field is an array for forward compatibility with eventual multi-network-volume support, but `maxItems` is 1 today. PATCH semantics: - Omitting `mounts` or sending `{}` leaves the existing mount unchanged. - An explicit `network: []` is rejected with 400 (clearing mounts is not supported). - Mount kind is fixed at create — a PATCH that introduces a kind not present at create (persistent on a network pod, network on a persistent pod, or any mount on a previously-mountless pod) is rejected with 400. - The `volumeId` of a network mount is immutable; a PATCH that names a different `volumeId` is rejected with 400. - Partial mounts are not supported — every mount entry must include the full schema (`size` + `path` for persistent, `volumeId` + `path` for network). Missing required fields → 422.
            - `persistent` (object): Host-local persistent storage. Pinned to the pod's host machine — data does not survive a host failure. Disallowed on CPU pods. Mutually exclusive with NetworkMount. Deprecated: prefer NetworkMount for any data you cannot recreate.
              - `size` (required; integer; minimum: `10`): Host-local persistent storage in GB. Upstream enforces a 10 GB floor.
              - `path` (required; string): Mount path inside the container. May be changed via PATCH.
            - `network` (array; maximum items: `1`)
              - `items` (object): Reference to a NetworkVolume. Custom paths are honored at runtime on both GPU and CPU pods. The underlying `volumeId` is immutable post-create; the mount `path` may be changed via PATCH.
                - `volumeId` (required; string): ID of an existing NetworkVolume in the same data center as the pod.
                - `path` (required; string): Mount path inside the container. No default — must be specified explicitly.
          - `gpu`: Present for GPU pods; omitted from CPU pods.
            - allOf:
              - `variant 1`
                - allOf:
                  - `variant 1` (object)
                    - `id` (required; string): GPU type identifier
                    - `count` (integer; default: `1`; minimum: `1`): Number of GPUs
                  - `variant 2` (object)
                    - `vcpuCount` (required; number; format: double; minimum: `1`): Total vCPU count allocated to the pod across all requested GPUs.
                    - `memory` (required; number; format: double; minimum: `1`): Total system RAM in GB allocated to the pod across all requested GPUs.
          - `cpu`: Present for CPU pods; omitted from GPU pods.
            - allOf:
              - `variant 1`
                - allOf:
                  - `variant 1` (object)
                    - `id` (required; string; minimum length: `1`): CPU flavor identifier, as returned by GET /v2/catalog/cpus.
                    - `vcpuCount` (required; integer; minimum: `2`): Number of vCPUs. Must be valid for the selected CPU flavor and must be a power of two.
                  - `variant 2` (object)
                    - `memory` (required; integer; minimum: `1`): Memory allocated to the pod in GB.
          - `cloud` (required; string; enum: `SECURE`, `COMMUNITY`): Cloud tier. - `SECURE` — Runpod-owned datacenter hardware - `COMMUNITY` — community-hosted hardware
          - `dataCenterId` (required; nullable): Data center where the pod is running (assigned by scheduler)
          - `cudaVersion` (required; nullable): CUDA version reported by the host machine. Retained while the pod is stopped — a stopped pod keeps its machine assignment and resumes onto the same host. Null means unknown or not applicable (CPU pods, or a host that has not reported one), not that CUDA is absent.
          - `ssh` (required): SSH connection details, via the Runpod proxy or directly to the pod's published `22/tcp` port.
            - allOf:
              - `variant 1` (object): How to connect to this pod over SSH. Both variants authenticate with the account's registered SSH public keys (`PUT /v2/account/ssh-keys`), which reach the pod only if it was created with `startSsh` — a pod created without it has no SSH access regardless of what this block reports.
                - `proxy` (required): Connection through Runpod's SSH proxy. Works without exposing a port and without a public IP, but carries an interactive shell only — SCP, SFTP, rsync, and port forwarding need `direct`. Null until the pod has a machine assignment.
                  - anyOf:
                    - `variant 1` (object): One way to reach the pod over SSH, as both its parts and a ready-to-run invocation.
                      - `host` (required; string): Hostname or IP to connect to.
                      - `port` (required; integer): TCP port to connect to.
                      - `username` (required; string): SSH username. For the proxy this is an opaque routing token, not a user account on the pod.
                      - `command` (required; string): The equivalent `ssh` invocation, ready to run. Add `-i <path>` if the matching private key is not one of your default identities, and `-o StrictHostKeyChecking=no` to skip the host-key prompt on short-lived pods.
                    - `variant 2` (null)
                - `direct` (required): Connection straight to the pod's sshd over its published `22/tcp` mapping. Supports the full SSH feature set. Null unless `22/tcp` is in `ports` and the running pod has been assigned a public port for it — so it is absent while the pod is provisioning or stopped.
                  - anyOf:
                    - `variant 1` (object): One way to reach the pod over SSH, as both its parts and a ready-to-run invocation.
                      - `host` (required; string): Hostname or IP to connect to.
                      - `port` (required; integer): TCP port to connect to.
                      - `username` (required; string): SSH username. For the proxy this is an opaque routing token, not a user account on the pod.
                      - `command` (required; string): The equivalent `ssh` invocation, ready to run. Add `-i <path>` if the matching private key is not one of your default identities, and `-o StrictHostKeyChecking=no` to skip the host-key prompt on short-lived pods.
                    - `variant 2` (null)
          - `cluster`: Cluster membership; omitted from a standalone pod. Member pods are managed through `/v2/clusters/{id}` — they are excluded from `GET /v2/pods` by default (pass `includeClusterPods=true` to include them) and cannot be modified or deleted via the pod endpoints.
            - allOf:
              - `variant 1` (object): A pod's membership in a cluster.
                - `id` (required; string): ID of the cluster this pod belongs to.
                - `rank` (required; nullable): The pod's node rank within the cluster (NODE\_RANK), or null until the index is assigned during provisioning. Rank 0 is the cluster's entry node (`Cluster.primary`); for SLURM it is the controller.
                - `role`: SLURM or RAY role; omitted for TRAINING/APPLICATION clusters, which do not assign roles.
                  - allOf:
                    - `variant 1` (string; enum: `SLURM_CONTROLLER`, `SLURM_COMPUTE`, `RAY_HEAD`, `RAY_WORKER`): A cluster member's role. Assigned for SLURM and RAY clusters; omitted for TRAINING/APPLICATION members.
                - `ip` (string): The pod's address on the cluster's private overlay network; omitted until the address is assigned.
          - `template` (required; nullable): ID of the template this pod was created from
          - `cost` (required; number; format: float): Current cost in USD per hour (0.0 when EXITED or TERMINATED)
          - `locked` (required; boolean): Whether the pod is locked (prevents stopping or resetting)
          - `globalNetworking` (required; object)
            - `enabled` (required; boolean): Whether global networking is enabled, giving the pod a private IP reachable across data centers. Derived from whether the pod has an assigned global-network address.
            - `ip` (string): The pod's assigned global-networking IP. Present only when enabled.
            - `internalDns` (string): Internal DNS name (`<podId>.runpod.internal`), reachable from other globally-networked pods in the same account. Present only when enabled.
          - `runtime` (required): Live utilization metrics. Null when the pod is not RUNNING.
            - anyOf:
              - `variant 1` (object): Live utilization metrics for a running pod.
                - `uptime` (integer): Seconds since the container started
                - `gpus` (array)
                  - `items` (object): Per-GPU utilization metrics.
                    - `util` (integer)
                    - `memoryUtil` (integer)
                - `cpu` (object): Single-value utilization percentage (0–100). Shared by `cpu` and `memory`.
                  - `util` (integer)
                - `memory` (object): Single-value utilization percentage (0–100). Shared by `cpu` and `memory`.
                  - `util` (integer)
                - `ports` (array)
                  - `items` (object): Live port mapping for a running pod.
                    - `private` (integer)
                    - `public` (nullable)
                    - `type` (string)
                    - `ip` (nullable)
              - `variant 2` (null)
          - `createdAt` (required; string; format: date-time)
          - `startedAt` (required; format: date-time; nullable)
    - Example `pod`: `{"id":"7h9k2m4n6p","name":"pytorch-training","image":"runpod/pytorch:1.0.2-cu1281-torch280-ubuntu2404","args":"","disk":50,"ports":["8888/http","22/tcp"],"env":{"MODEL_NAME":"llama-3"},"registry":null,"status":"PROVISIONING","actions":["start","terminate"],"mounts":{"persistent":{"size":20,"path":"/workspace"}},"gpu":{"id":"NVIDIA GeForce RTX 4090","count":1,"vcpuCount":16,"memory":64},"cloud":"SECURE","dataCenterId":"US-KS-2","cudaVersion":"12.8","ssh":{"proxy":{"host":"ssh.runpod.io","port":22,"username":"7h9k2m4n6p-64411eb2","command":"ssh 7h9k2m4n6p-64411eb2@ssh.runpod.io"},"direct":null},"template":"9x4m2p7v","cost":0.44,"locked":false,"globalNetworking":{"enabled":false},"runtime":{},"createdAt":"2026-06-01T12:00:00Z","startedAt":null}`
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
- `404`: The requested resource was not found or is not accessible to the caller.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `notFound`: `{"title":"Not Found","status":404,"detail":"resource not found"}`
- `413`: The incoming request body or expanded upstream request exceeds the 102400 byte limit, or the upstream rejects the request as too large.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
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
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
