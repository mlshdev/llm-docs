> Pinned source for Traefik Proxy v3.8.0: [docs/content/reference/routing-configuration/http/middlewares/buffering.md](https://github.com/traefik/traefik/blob/644b1f19cf031ec079cca10fad0c86e5ab7181b7/docs/content/reference/routing-configuration/http/middlewares/buffering.md)

The `buffering` middleware limits the size of requests that can be forwarded to services.

With buffering, Traefik reads the entire request into memory (possibly buffering large requests into disk), and rejects requests that are over a specified size limit.

This can help services avoid large amounts of data (`multipart/form-data` for example), and can minimize the time spent sending data to a Service

> **Info**
> When the middleware is attached, Traefik buffers the request body before forwarding it.
> As a result, Traefik can send the request upstream with a fixed `Content-Length` instead of streaming the original chunked body.

## Configuration Examples

**Structured (YAML)**

```yaml
# Sets the maximum request body to 2MB and the maximum response body to 10MB,
# and buffers bodies larger than 1MB on disk.
http:
  middlewares:
    limit:
      buffering:
        maxRequestBodyBytes: 2000000
        memRequestBodyBytes: 1000000
        maxResponseBodyBytes: 10000000
        memResponseBodyBytes: 1000000
```

**Structured (TOML)**

```toml
# Sets the maximum request body to 2MB and the maximum response body to 10MB,
# and buffers bodies larger than 1MB on disk.
[http.middlewares]
  [http.middlewares.limit.buffering]
    maxRequestBodyBytes = 2000000
    memRequestBodyBytes = 1000000
    maxResponseBodyBytes = 10000000
    memResponseBodyBytes = 1000000
```

**Labels**

```yaml
# Sets the maximum request body to 2MB and the maximum response body to 10MB,
# and buffers bodies larger than 1MB on disk.
labels:
  - "traefik.http.middlewares.limit.buffering.maxRequestBodyBytes=2000000"
  - "traefik.http.middlewares.limit.buffering.memRequestBodyBytes=1000000"
  - "traefik.http.middlewares.limit.buffering.maxResponseBodyBytes=10000000"
  - "traefik.http.middlewares.limit.buffering.memResponseBodyBytes=1000000"
```

**Tags**

```json
// Sets the maximum request body to 2MB and the maximum response body to 10MB,
// and buffers bodies larger than 1MB on disk.
{
  // ...
  "Tags": [
    "traefik.http.middlewares.limit.buffering.maxRequestBodyBytes=2000000",
    "traefik.http.middlewares.limit.buffering.memRequestBodyBytes=1000000",
    "traefik.http.middlewares.limit.buffering.maxResponseBodyBytes=10000000",
    "traefik.http.middlewares.limit.buffering.memResponseBodyBytes=1000000"
  ]
}
```

**Kubernetes**

```yaml
# Sets the maximum request body to 2MB and the maximum response body to 10MB,
# and buffers bodies larger than 1MB on disk.
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: limit
spec:
  buffering:
    maxRequestBodyBytes: 2000000
    memRequestBodyBytes: 1000000
    maxResponseBodyBytes: 10000000
    memResponseBodyBytes: 1000000
```

## Configuration Options

| Field                                                         | Description                                                                                                                                                                                                                                                                                                  | Default | Required |
| :------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-maxRequestBodyBytes"></a>`maxRequestBodyBytes`     | Maximum allowed body size for the request (in bytes). <br /> If the request exceeds the allowed size, it is not forwarded to the Service, and the client gets a `413` (Request Entity Too Large) response. <br /> `0` means unlimited.                                                                       | 0       | No       |
| <a id="opt-memRequestBodyBytes"></a>`memRequestBodyBytes`     | Threshold (in bytes) from which the request will be buffered on disk instead of in memory.                                                                                                                                                                                                                   | 1048576 | No       |
| <a id="opt-maxResponseBodyBytes"></a>`maxResponseBodyBytes`   | Maximum allowed response size from the Service (in bytes). <br /> If the response exceeds the allowed size, it is not forwarded to the client. The client gets a `500` (Internal Server Error) response instead. <br /> `0` means unlimited.                                                                 | 0       | No       |
| <a id="opt-memResponseBodyBytes"></a>`memResponseBodyBytes`   | Threshold (in bytes) from which the response will be buffered on disk instead of in memory.                                                                                                                                                                                                                  | 1048576 | No       |
| <a id="opt-retryExpression"></a>`retryExpression`             | Replay the request using `retryExpression`.<br /> More information [here](#retryexpression).                                                                                                                                                                                                                 | ""      | No       |
| <a id="opt-disableRequestBuffer"></a>`disableRequestBuffer`   | Disables request body buffering so the request body is streamed directly to the backend.<br />When `true`, `maxRequestBodyBytes` is not enforced. More information [here](#streaming).                                                                                                                       | false   | No       |
| <a id="opt-disableResponseBuffer"></a>`disableResponseBuffer` | Disables response body buffering so the response is streamed directly to the client.<br />Required to forward streaming responses such as Server-Sent Events, gRPC streaming, or long-poll `watch` endpoints.<br />When `true`, `maxResponseBodyBytes` is not enforced. More information [here](#streaming). | false   | No       |

### Streaming

By default, the buffering middleware reads the complete request body and the complete response body into an in-memory or on-disk buffer before forwarding them.
This is incompatible with streaming responses such as Server-Sent Events, gRPC streaming, and Kubernetes `watch` endpoints, where chunks must reach the client as they are produced.

For streaming responses, set `disableResponseBuffer` to `true`.
This preserves the `maxRequestBodyBytes` enforcement on uploads while passing streaming responses through untouched.

WebSocket connections are not affected by this option because the buffering middleware already steps aside when the downstream connection is hijacked.

> **Limitations**
> Disabling a buffer also disables the size limit on the matching body:
> `maxRequestBodyBytes` is not enforced when `disableRequestBuffer` is `true`,
> and `maxResponseBodyBytes` is not enforced when `disableResponseBuffer` is `true`.
>
> `retryExpression` cannot be used when `disableRequestBuffer` or `disableResponseBuffer` is `true`,
> as replaying the request needs the buffered request body, and evaluating the expression needs the buffered response.
>
> When both options are `true`, the middleware forwards requests and responses untouched.

### retryExpression

The retry expression is defined as a logical combination of the functions below with the operators AND (`&&`) and OR (`||`).
At least one function is required:

- `Attempts()` number of attempts (the first one counts).
- `ResponseCode()` response code of the Service.
- `IsNetworkError()` whether the response code is related to networking error.
