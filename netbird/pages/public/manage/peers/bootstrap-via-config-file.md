> Pinned source for NetBird v0.81.4: [netbirdio/docs@238224712cf7639036ed39fa8873d777b8822273:src/pages/manage/peers/bootstrap-via-config-file.mdx](https://github.com/netbirdio/docs/blob/238224712cf7639036ed39fa8873d777b8822273/src/pages/manage/peers/bootstrap-via-config-file.mdx)

# Bootstrap peers via config file

When you deploy NetBird across golden images, infrastructure-as-code (Terraform, Ansible, cloud-init), Docker, or Kubernetes, you want each peer to come up with the right settings on first start, register against your account, and report success without anyone touching it.

This page covers the three pieces of that workflow: pre-configuring the client with a `default.json` file, passing the setup key at runtime, and verifying that registration succeeded.

For the credentials side — what setup keys are, one-off vs. reusable, ephemeral peers, auto-assign groups — see [Use setup keys to add machines to your network at scale](https://docs.netbird.io/manage/peers/register-machines-using-setup-keys).

> **Warning**
>
> This workflow is for **unattended workloads** — servers, containers, autoscaled VMs, IaC-provisioned infrastructure. **Don't use setup keys to enroll end-user devices.** Zero Trust depends on continuously re-verifying the user behind a peer; a peer registered with a setup key has no associated user identity, so it can't be re-authenticated when a session expires or scoped by user-based policies. Enroll user laptops and phones via the SSO login flow instead — see [Install NetBird](https://docs.netbird.io/get-started/install).

## Pre-configure with `default.json`

The NetBird daemon stores its system default profile in a JSON file. If that file already exists when the daemon starts for the first time, it picks up the values you set instead of starting from a blank state. This lets you bake your management URL, interface settings, and feature toggles into a base image.

### File location

| Platform                               | Path                                                              |
| -------------------------------------- | ----------------------------------------------------------------- |
| Linux / macOS (system default profile) | `/var/lib/netbird/default.json`                                   |
| Windows                                | `C:\ProgramData\Netbird\default.json`                             |
| Docker (`netbirdio/netbird` image)     | inside the `netbird-client` volume mounted at `/var/lib/netbird/` |

### Common keys

A representative `default.json`:

```json
{
  "ManagementURL": { "Scheme": "https", "Host": "api.netbird.io:443" },
  "AdminURL": { "Scheme": "https", "Host": "app.netbird.io:443" },
  "WgIface": "wt0",
  "IFaceBlackList": ["docker", "br-", "veth"],
  "BlockInbound": false,
  "BlockLANAccess": false,
  "RosenpassEnabled": false,
  "PrivateKey": "",
  "PreSharedKey": ""
}
```

> **Warning**
>
> `ManagementURL` and `AdminURL` are objects, not strings. Writing `"ManagementURL": "https://api.netbird.io:443"` stops the daemon from starting at all:
>
> ```shell
> FATL failed to start daemon: failed to get config:
>      json: cannot unmarshal string into Go struct field Config.ManagementURL of type url.URL
> ```
>
> The same applies to every field: a value of the wrong JSON type fails the whole file, not just that key, and the daemon exits instead of falling back to defaults. Start the client after writing the file and confirm it is running.

Notable fields:

- `ManagementURL` and `AdminURL` — only needed when you point at a self-hosted deployment. The cloud defaults are `https://api.netbird.io:443` and `https://app.netbird.io:443`. `Scheme` and `Host` are enough; the client rewrites the object with the remaining URL fields on first start.
- `WgIface` — WireGuard interface name (defaults to `wt0`).
- `IFaceBlackList` — interfaces the client should ignore when listening for connections.
- `BlockInbound`, `BlockLANAccess`, `RosenpassEnabled` — feature toggles that mirror the [`netbird up` flags](https://docs.netbird.io/get-started/cli#up).
- `PrivateKey` — **leave empty.** The daemon generates a unique WireGuard private key on first start. Each peer must end up with its own key, so never ship a populated `PrivateKey` in a base image.
- `PreSharedKey` — **optional.** WireGuard pre-shared keys are not auto-generated. Only set this if your deployment requires PSK authentication; otherwise leave it empty or pass `--preshared-key` at runtime.

> **Note**
>
> The fastest way to derive a working template is to bootstrap one peer manually on the exact NetBird version you plan to deploy, copy its `default.json`, clear `PrivateKey`, and use that as your base. The schema can shift between versions, so re-derive the template after major version bumps rather than reusing an old one.

Values from `default.json` sit at the bottom of the [configuration precedence](https://docs.netbird.io/get-started/cli#configuration-precedence): `NB_*` environment variables and CLI flags both override them.

## Pass the setup key at runtime

The setup key is **not** stored in `default.json`. Pass it per-launch so it can be sourced from a secret manager and rotated without rebuilding images:

- `NB_SETUP_KEY=<key>` environment variable, or
- `--setup-key <key>` / `--setup-key-file <path>` flags on `netbird up` or `netbird login`.

### Docker

Put `default.json` in a directory and mount **the directory**, writable, at `/var/lib/netbird/`. It has to be writable because the daemon keeps its state there: it rewrites `default.json` and creates `active_profile.json` beside it. Inject the setup key from your shell or a secret store:

```shell
mkdir -p netbird-state
cp default.json netbird-state/

docker run -d --name netbird --cap-add=NET_ADMIN \
  -v "$(pwd)/netbird-state:/var/lib/netbird" \
  -e NB_SETUP_KEY="$NB_SETUP_KEY" \
  netbirdio/netbird:latest
```

> **Warning**
>
> Do not bind-mount the single file (`-v "$(pwd)/default.json:/var/lib/netbird/default.json"`). The daemon rewrites `default.json` on first start, because it has a private key and a generated SSH key to add, and it writes it by creating a temporary file and renaming it into place. A rename cannot replace a bind-mounted file, so the daemon exits:
>
> ```shell
> FATL failed to start daemon: failed to get config:
>      move /var/lib/netbird/.1478389823default.json to /var/lib/netbird/default.json:
>      device or resource busy
> ```
>
> Adding `:ro` does not help: it fails at the same point with the same error.

### Kubernetes

A `ConfigMap` is mounted read-only, so it cannot be the state directory: the daemon has to rewrite `default.json` and create `active_profile.json` next to it. Copy the `ConfigMap` into a writable `emptyDir` with an init container, then mount that `emptyDir` at `/var/lib/netbird/`. Source the setup key from a `Secret`. Pair this with the liveness, readiness, and startup probes from [Deploy routing peers to a Kubernetes cluster](https://docs.netbird.io/use-cases/kubernetes/routing-peers-and-kubernetes) for a complete deployment.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: netbird-config
data:
  default.json: |
    {
      "ManagementURL": { "Scheme": "https", "Host": "api.netbird.io:443" },
      "AdminURL": { "Scheme": "https", "Host": "app.netbird.io:443" },
      "WgIface": "wt0",
      "BlockInbound": false,
      "BlockLANAccess": false,
      "RosenpassEnabled": false,
      "PrivateKey": ""
    }
---
apiVersion: v1
kind: Secret
metadata:
  name: netbird-setup-key
type: Opaque
stringData:
  NB_SETUP_KEY: "AAAA-BBB-CCC-DDDDDD"
---
# Pod spec excerpt
spec:
  initContainers:
    - name: seed-config
      image: busybox:1.36
      command: ["sh", "-c", "cp /config/default.json /state/default.json"]
      volumeMounts:
        - name: config
          mountPath: /config
        - name: state
          mountPath: /state
  containers:
    - name: netbird
      image: netbirdio/netbird:latest
      env:
        - name: NB_SETUP_KEY
          valueFrom:
            secretKeyRef:
              name: netbird-setup-key
              key: NB_SETUP_KEY
      volumeMounts:
        - name: state
          mountPath: /var/lib/netbird
  volumes:
    - name: config
      configMap:
        name: netbird-config
    - name: state
      emptyDir: {}
```

> **Note**
>
> An `emptyDir` lives and dies with the pod, so every new pod re-seeds from the `ConfigMap` and registers a fresh peer. That is the right behavior for a stateless workload: create the setup key with [Ephemeral peers](https://docs.netbird.io/manage/peers/register-machines-using-setup-keys#ephemeral-peers) enabled so the old entries are cleaned up. If you need a peer identity to survive restarts, use a `PersistentVolumeClaim` instead of the `emptyDir` and seed it only when `default.json` is absent.

Mounting the `ConfigMap` directly at `/var/lib/netbird/default.json` with `subPath` does not work: that is a read-only single-file mount, and it fails the same way as the Docker case above.

## Backing up `default.json`

> **Warning**
>
> `default.json` contains the peer's WireGuard private key. Restoring it onto a different machine clones the peer identity, and a cloned identity will fail to connect while the original peer is still connected — only one peer per identity can be online at a time. Don't treat this file as a portable backup.

The clean pattern is to treat `default.json` as ephemeral local state: when you need to recreate a peer, re-register it with a setup key and let the daemon generate a fresh private key.

For workloads where peers come and go — containers, autoscaling groups, short-lived VMs — create the setup key with **Ephemeral peers** enabled. The management server automatically removes peers that have been offline for more than 10 minutes, so you don't accumulate stale entries. See [Ephemeral peers](https://docs.netbird.io/manage/peers/register-machines-using-setup-keys#ephemeral-peers) for details.

## Verify registration

### Single-peer health check

`netbird status --check startup` exits `0` once the daemon has connected to management, signal, and (if any are configured) at least one relay; it exits `1` otherwise. Companion checks:

- `--check live` — the daemon process is responsive.
- `--check ready` — the client is not waiting on user authentication.

```shell
netbird status --check startup && echo "registered" || echo "not registered yet"
```

The Kubernetes example in [Deploy routing peers to a Kubernetes cluster](https://docs.netbird.io/use-cases/kubernetes/routing-peers-and-kubernetes#step-4-deploy-the-netbird-agent) wires all three checks into liveness, readiness, and startup probes — a good template for any container-based deployment.

### Parseable output

`netbird status --json` returns the full status block as JSON, suitable for scripts, CI checks, or shipping to a monitoring backend:

```shell
netbird status --json | jq '.management.connected'
```

### Fleet-wide check via the REST API

To verify many peers without logging into each one, query the management API. `GET /api/peers` returns every peer with its `connected` flag and `last_seen` timestamp:

```shell
curl -H "Authorization: Token $NETBIRD_PAT" \
  https://api.netbird.io/api/peers | jq '.[] | {name, connected, last_seen}'
```

This needs a Personal Access Token; the recommended pattern is to issue one to a [service user](https://docs.netbird.io/manage/public-api) rather than a human user, so it survives staff changes. See:

- [List all Peers](https://docs.netbird.io/api/resources/peers) — full endpoint reference and language samples.
- [Public API](https://docs.netbird.io/manage/public-api) — service users, token creation, rate limits.
- [Authentication](https://docs.netbird.io/api/guides/authentication) — how to send the `Authorization: Token` header.
