> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/manage/peers/bootstrap-via-config-file.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/manage/peers/bootstrap-via-config-file.mdx)

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
  "ManagementURL": "https://api.netbird.io:443",
  "AdminURL": "https://app.netbird.io:443",
  "WgIface": "wt0",
  "IFaceBlackList": ["docker", "br-", "veth"],
  "BlockInbound": false,
  "BlockLANAccess": false,
  "RosenpassEnabled": false,
  "PrivateKey": "",
  "PreSharedKey": ""
}
```

Notable fields:

- `ManagementURL` and `AdminURL` — only needed when you point at a self-hosted deployment. The cloud defaults are `https://api.netbird.io:443` and `https://app.netbird.io:443`.
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

Mount a pre-baked `default.json` into the volume the daemon reads from, and inject the setup key from your shell or a secret store:

```shell
docker run -d --name netbird --cap-add=NET_ADMIN \
  -v "$(pwd)/default.json:/var/lib/netbird/default.json:ro" \
  -e NB_SETUP_KEY="$NB_SETUP_KEY" \
  netbirdio/netbird:latest
```

### Kubernetes

Bake the config into a `ConfigMap`, source the setup key from a `Secret`, and mount both into the pod. Pair this with the liveness, readiness, and startup probes from [Deploy routing peers to a Kubernetes cluster](https://docs.netbird.io/use-cases/kubernetes/routing-peers-and-kubernetes) for a complete deployment.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: netbird-config
data:
  default.json: |
    {
      "ManagementURL": "https://api.netbird.io:443",
      "AdminURL": "https://app.netbird.io:443",
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
        - name: config
          mountPath: /var/lib/netbird/default.json
          subPath: default.json
  volumes:
    - name: config
      configMap:
        name: netbird-config
```

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
