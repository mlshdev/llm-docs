> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/middlewares/buffering.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/middlewares/buffering.md)

The `buffering` middleware limits the size of requests that can be forwarded to services.

With buffering, Traefik reads the entire request into memory (possibly buffering large requests into disk), and rejects requests that are over a specified size limit.

This can help services avoid large amounts of data (`multipart/form-data` for example), and can minimize the time spent sending data to a Service

> **Info**
> When the middleware is attached, Traefik buffers the request body before forwarding it.
> As a result, Traefik can send the request upstream with a fixed `Content-Length` instead of streaming the original chunked body.

## Configuration Examples

**Structured (YAML)**

```yaml
# Sets the maximum request body to 2MB
http:
  middlewares:
    limit:
      buffering:
        maxRequestBodyBytes: 2000000
```

**Structured (TOML)**

```toml
# Sets the maximum request body to 2MB
[http.middlewares]
  [http.middlewares.limit.buffering]
    maxRequestBodyBytes = 2000000
```

**Labels**

```yaml
# Sets the maximum request body to 2MB
labels:
  - "traefik.http.middlewares.limit.buffering.maxRequestBodyBytes=2000000"
```

**Tags**

```json
// Sets the maximum request body to 2MB
{
  // ...
  "Tags": [
    "traefik.http.middlewares.limit.buffering.maxRequestBodyBytes=2000000"
  ]
}
```

**Kubernetes**

```yaml
# Sets the maximum request body to 2MB
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: limit
spec:
  buffering:
    maxRequestBodyBytes: 2000000
```

## Configuration Options

| Field                                                       | Description                                                                                                                                                                                                                                  | Default | Required |
| :---------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-maxRequestBodyBytes"></a>`maxRequestBodyBytes`   | Maximum allowed body size for the request (in bytes). <br /> If the request exceeds the allowed size, it is not forwarded to the Service, and the client gets a `413` (Request Entity Too Large) response. <br /> `0` means unlimited.       | 0       | No       |
| <a id="opt-memRequestBodyBytes"></a>`memRequestBodyBytes`   | Threshold (in bytes) from which the request will be buffered on disk instead of in memory.                                                                                                                                                   | 1048576 | No       |
| <a id="opt-maxResponseBodyBytes"></a>`maxResponseBodyBytes` | Maximum allowed response size from the Service (in bytes). <br /> If the response exceeds the allowed size, it is not forwarded to the client. The client gets a `500` (Internal Server Error) response instead. <br /> `0` means unlimited. | 0       | No       |
| <a id="opt-memResponseBodyBytes"></a>`memResponseBodyBytes` | Threshold (in bytes) from which the response will be buffered on disk instead of in memory.                                                                                                                                                  | 1048576 | No       |
| <a id="opt-retryExpression"></a>`retryExpression`           | Replay the request using `retryExpression`.<br /> More information [here](#retryexpression).                                                                                                                                                 | ""      | No       |

### retryExpression

The retry expression is defined as a logical combination of the functions below with the operators AND (`&&`) and OR (`||`).
At least one function is required:

- `Attempts()` number of attempts (the first one counts).
- `ResponseCode()` response code of the Service.
- `IsNetworkError()` whether the response code is related to networking error.
