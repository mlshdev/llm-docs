> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/middlewares/inflightreq.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/middlewares/inflightreq.md)

The `inFlightReq` middleware proactively prevents services from being overwhelmed with high load.

## Configuration Examples

**Structured (YAML)**

```yaml
# Limiting to 10 simultaneous connections
http:
  middlewares:
    test-inflightreq:
      inFlightReq:
        amount: 10
```

**Structured (TOML)**

```toml
# Limiting to 10 simultaneous connections
[http.middlewares]
  [http.middlewares.test-inflightreq.inFlightReq]
    amount = 10
```

**Labels**

```yaml
labels:
  - "traefik.http.middlewares.test-inflightreq.inflightreq.amount=10"
```

**Consul Catalog**

```json
// Limiting to 10 simultaneous connections
{
  "Tags" : [
    "traefik.http.middlewares.test-inflightreq.inflightreq.amount=10"
  ]
}

```

**Kubernetes**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-inflightreq
spec:
  inFlightReq:
    amount: 10
```

## Configuration Options

| Field                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                     | Default | Required |
| :---------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-amount"></a>`amount`                                                                 | The `amount` option defines the maximum amount of allowed simultaneous in-flight request. <br /> The middleware responds with `HTTP 429 Too Many Requests` if there are already `amount` requests in progress (based on the same `sourceCriterion` strategy).                                                                                                                                                                                   | 0       | No       |
| <a id="opt-sourceCriterion-requestHost"></a>`sourceCriterion.requestHost`                       | Whether to consider the request host as the source.<br /> More information about `sourceCriterion`[here](#sourcecriterion).                                                                                                                                                                                                                                                                                                                     | false   | No       |
| <a id="opt-sourceCriterion-requestHeaderName"></a>`sourceCriterion.requestHeaderName`           | Name of the header used to group incoming requests.<br /> More information about `sourceCriterion`[here](#sourcecriterion).                                                                                                                                                                                                                                                                                                                     | ""      | No       |
| <a id="opt-sourceCriterion-ipStrategy-depth"></a>`sourceCriterion.ipStrategy.depth`             | Depth position of the IP to select in the `X-Forwarded-For` header (starting from the right).<br />0 means no depth.<br />If greater than the total number of IPs in `X-Forwarded-For`, then the client IP is empty<br />If higher than 0, the `excludedIPs` options is not evaluated.<br /> More information about [`sourceCriterion`](#sourcecriterion), [`ipStrategy](#ipstrategy), and [`depth\`](#example-of-depth-x-forwarded-for) below. | 0       | No       |
| <a id="opt-sourceCriterion-ipStrategy-excludedIPs"></a>`sourceCriterion.ipStrategy.excludedIPs` | Allows Traefik to scan the `X-Forwarded-For` header and select the first IP not in the list.<br />If `depth` is specified, `excludedIPs` is ignored.<br /> More information about [`sourceCriterion`](#sourcecriterion), [`ipStrategy](#ipstrategy), and [`excludedIPs\`](#example-of-excludedips-x-forwarded-for) below.                                                                                                                       |         | No       |
| <a id="opt-sourceCriterion-ipStrategy-ipv6Subnet"></a>`sourceCriterion.ipStrategy.ipv6Subnet`   | If `ipv6Subnet` is provided and the selected IP is IPv6, the IP is transformed into the first IP of the subnet it belongs to. <br /> More information about [`sourceCriterion`](#sourcecriterion), [`ipStrategy.ipv6Subnet`](#ipstrategyipv6subnet), and [`excludedIPs`](#example-of-excludedips-x-forwarded-for) below.                                                                                                                        |         | No       |

### sourceCriterion

The `sourceCriterion` option defines what criterion is used to group requests as originating from a common source.
If several strategies are defined at the same time, an error will be raised.
If none are set, the default is to use the `requestHost`.

### ipStrategy

The `ipStrategy` option defines three parameters that configures how Traefik determines the client IP: `depth`, `excludedIPs` and `ipv6Subnet`.

As a middleware, `inFlightReq` happens before the actual proxying to the backend takes place.
In addition, the previous network hop only gets appended to `X-Forwarded-For` during the last stages of proxying, that is after it has already passed through the middleware.
Therefore, during InFlightReq, as the previous network hop is not yet present in `X-Forwarded-For`, it cannot be used and/or relied upon.

### `ipStrategy.ipv6Subnet`

This strategy applies to `Depth` and `RemoteAddr` strategy only.
If `ipv6Subnet` is provided and the selected IP is IPv6, the IP is transformed into the first IP of the subnet it belongs to.

This is useful for grouping IPv6 addresses into subnets to prevent bypassing this middleware by obtaining a new IPv6.

- `ipv6Subnet` causes middleware creation to fail if its value is ≤ 0 or > 128.

#### Example of ipv6Subnet

If `ipv6Subnet` is provided, the IP is transformed in the following way.

| IP                                                           | ipv6Subnet | clientIP              |
| ------------------------------------------------------------ | ---------- | --------------------- |
| <a id="opt-abcd111122223333"></a>`"::abcd:1111:2222:3333"`   | `64`       | `"::0:0:0:0"`         |
| <a id="opt-abcd111122223333-2"></a>`"::abcd:1111:2222:3333"` | `80`       | `"::abcd:0:0:0:0"`    |
| <a id="opt-abcd111122223333-3"></a>`"::abcd:1111:2222:3333"` | `96`       | `"::abcd:1111:0:0:0"` |

### Example of Depth & `X-Forwarded-For`

If `depth` is set to 2, and the request `X-Forwarded-For` header is `"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` then the "real" client IP is `"10.0.0.1"` (at depth 4) but the IP used as the criterion is `"12.0.0.1"` (`depth=2`).

| `X-Forwarded-For`                                                                          | depth | clientIP     |
| ------------------------------------------------------------------------------------------ | ----- | ------------ |
| <a id="opt-10-0-0-111-0-0-112-0-0-113-0-0-1"></a>`"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"`   | `1`   | `"13.0.0.1"` |
| <a id="opt-10-0-0-111-0-0-112-0-0-113-0-0-1-2"></a>`"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `3`   | `"11.0.0.1"` |
| <a id="opt-10-0-0-111-0-0-112-0-0-113-0-0-1-3"></a>`"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `5`   | `""`         |

### Example of ExcludedIPs & X-Forwarded-For

| `X-Forwarded-For`                                                                          | excludedIPs           | clientIP     |
| ------------------------------------------------------------------------------------------ | --------------------- | ------------ |
| <a id="opt-10-0-0-111-0-0-112-0-0-113-0-0-1-4"></a>`"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `"12.0.0.1,13.0.0.1"` | `"11.0.0.1"` |
| <a id="opt-10-0-0-111-0-0-112-0-0-113-0-0-1-5"></a>`"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `"15.0.0.1,13.0.0.1"` | `"12.0.0.1"` |
| <a id="opt-10-0-0-111-0-0-112-0-0-113-0-0-1-6"></a>`"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `"10.0.0.1,13.0.0.1"` | `"12.0.0.1"` |
| <a id="opt-10-0-0-111-0-0-112-0-0-113-0-0-1-7"></a>`"10.0.0.1,11.0.0.1,12.0.0.1,13.0.0.1"` | `"15.0.0.1,16.0.0.1"` | `"13.0.0.1"` |
| <a id="opt-10-0-0-111-0-0-1"></a>`"10.0.0.1,11.0.0.1"`                                     | `"10.0.0.1,11.0.0.1"` | `""`         |
