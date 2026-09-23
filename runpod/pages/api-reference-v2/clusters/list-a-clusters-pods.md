> Pinned source for Runpod main: [api-reference-v2/clusters/list-a-clusters-pods.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/api-reference-v2/clusters/list-a-clusters-pods.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/clusters/list-a-clusters-pods

# List A Clusters Pods

List every Pod in a Runpod Cluster with each member's complete configuration and status, beyond the aggregate counts in the Cluster summary.

`GET /v2/clusters/{id}/pods`

**List a cluster's pods**

Returns the full member pods of a cluster. The cluster summary (`GET /v2/clusters/{id}`) carries only aggregate pod counts; this endpoint returns each member as a complete Pod object.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Cluster identifier
  - Example: `cluster_abc123`

**Responses**

- `200`: OK
  - Media type: `application/json`
    - Schema (object): A bare list of pods. `GET /v2/clusters/{id}/pods` returns it as-is (a cluster's members are a small, complete set); `GET /v2/pods` composes it with the pagination block via ListPodsResponse.
      - `pods` (required; array)
        - `items`
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
