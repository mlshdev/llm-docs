> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/install-configuration/observability/healthcheck.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/install-configuration/observability/healthcheck.md)

# CLI & Ping

Checking the Health of your Traefik Instances

## CLI

The CLI can be used to make a request to the `/ping` endpoint to check the health of Traefik. Its exit status is `0` if Traefik is healthy and `1` otherwise.

This can be used with [HEALTHCHECK](https://docs.docker.com/engine/reference/builder/#healthcheck) instruction or any other health check orchestration mechanism.

### Usage

```sh
traefik healthcheck [command] [flags] [arguments]
```

Example:

```sh
$ traefik healthcheck
OK: http://:8082/ping
```

## Ping

The `/ping` health-check URL is enabled with the command-line `--ping` or config file option `[ping]`.

The entryPoint where the `/ping` is active can be customized with the `entryPoint` option,
whose default value is `traefik` (port `8080`).

| Path                         | Method        | Description                                                                                   |
| ---------------------------- | ------------- | --------------------------------------------------------------------------------------------- |
| <a id="opt-ping"></a>`/ping` | `GET`, `HEAD` | An endpoint to check for Traefik process liveness. Return a code `200` with the content: `OK` |

### Configuration Example

To enable the API handler:

**File (YAML)**

```yaml
ping: {}
```

**File (TOML)**

```toml
[ping]
```

**CLI**

```bash
--ping=true
```

### Configuration Options

| Field                                                                   | Description                                                                                                                              | Default | Required |
| :---------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-ping-entryPoint"></a>`ping.entryPoint`                       | Enables `/ping` on a dedicated EntryPoint.                                                                                               | traefik | No       |
| <a id="opt-ping-manualRouting"></a>`ping.manualRouting`                 | Disables the default internal router in order to allow one to create a custom router for the `ping@internal` service when set to `true`. | false   | No       |
| <a id="opt-ping-terminatingStatusCode"></a>`ping.terminatingStatusCode` | Defines the status code for the ping handler during a graceful shut down. See more information [here](#terminatingstatuscode)            | 503     | No       |

#### `terminatingStatusCode`

During the period in which Traefik is gracefully shutting down, the ping handler
returns a `503` status code by default.
If Traefik is behind, for example a load-balancer
doing health checks (such as the Kubernetes LivenessProbe), another code might
be expected as the signal for graceful termination.
In that case, the terminatingStatusCode can be used to set the code returned by the ping
handler during termination.

**File (YAML)**

```yaml
ping:
  terminatingStatusCode: 204
```

**File (TOML)**

```toml
[ping]
  terminatingStatusCode = 204
```

**CLI**

```bash
--ping.terminatingStatusCode=204
```
