> Pinned source for Traefik Proxy v3.8.0: [docs/content/reference/routing-configuration/http/middlewares/tap.md](https://github.com/traefik/traefik/blob/644b1f19cf031ec079cca10fad0c86e5ab7181b7/docs/content/reference/routing-configuration/http/middlewares/tap.md)

The `tap` middleware sends a copy of the requests and responses going through it to Traefik services, as JSON records.

Because the destinations are ordinary Traefik services, they benefit from load balancing, health checks, retries and
`serversTransport` options like any other service, and they can be anything reachable over HTTP: a message queue
gateway, an audit store, or a sidecar of your own.

Requests and responses are sent as two separate records, each to its own service, so that both streams can be
consumed and scaled independently. Set only one of the two to capture a single side.

> **Sensitive data**
> Records carry the headers as they go through Traefik, `Authorization` and `Cookie` included,
> and the bodies too once `recordBody` is enabled.
> Restrict what is captured with `recordBody` and `maxRecordBodySize`,
> and treat the tap services and their storage as holding production secrets.
> **Difference with the Mirroring service**
> The [Mirroring](https://doc.traefik.io/traefik/v3.8/reference/routing-configuration/http/load-balancing/service) service replays
> requests to another service, and the replayed requests are handled as real traffic.
> The `tap` middleware sends a description of the exchange, response included, and never replays anything.
> **Position in the middleware chain**
> The records describe the request and the response as they are at the position of the `tap` middleware in the chain.
>
> - Placed first, it records the request as received from the client, and the response as sent to the client.
> - Placed last, it records the request as sent to the backend, and the response as received from the backend.
>
> To get both, use two `tap` middlewares, one first and one last in the chain.
> Their records can be matched with the `traceId`, or with a correlation header listed in `requestHeaders`.

## Configuration Examples

**Structured (YAML)**

```yaml
http:
  middlewares:
    test-tap:
      tap:
        request:
          service: audit-requests
          path: /records/requests
          recordBody: true
          maxRecordBodySize: 4096
          rejectOnRecordError: true
          timeout: 5s
        response:
          service: audit-responses
          path: /records/responses
          recordBody: true
          maxRecordBodySize: 4096
          requestHeaders:
            - X-Request-Id
          rejectOnRecordError: false
          timeout: 5s
```

**Structured (TOML)**

```toml
[http.middlewares]
  [http.middlewares.test-tap.tap]
    [http.middlewares.test-tap.tap.request]
      service = "audit-requests"
      path = "/records/requests"
      recordBody = true
      maxRecordBodySize = 4096
      rejectOnRecordError = true
      timeout = "5s"
    [http.middlewares.test-tap.tap.response]
      service = "audit-responses"
      path = "/records/responses"
      recordBody = true
      maxRecordBodySize = 4096
      requestHeaders = ["X-Request-Id"]
      rejectOnRecordError = false
      timeout = "5s"
```

**Labels**

```yaml
labels:
  - "traefik.http.middlewares.test-tap.tap.request.service=audit-requests"
  - "traefik.http.middlewares.test-tap.tap.request.path=/records/requests"
  - "traefik.http.middlewares.test-tap.tap.request.recordBody=true"
  - "traefik.http.middlewares.test-tap.tap.request.maxRecordBodySize=4096"
  - "traefik.http.middlewares.test-tap.tap.request.rejectOnRecordError=true"
  - "traefik.http.middlewares.test-tap.tap.request.timeout=5s"
  - "traefik.http.middlewares.test-tap.tap.response.service=audit-responses"
  - "traefik.http.middlewares.test-tap.tap.response.path=/records/responses"
  - "traefik.http.middlewares.test-tap.tap.response.recordBody=true"
  - "traefik.http.middlewares.test-tap.tap.response.maxRecordBodySize=4096"
  - "traefik.http.middlewares.test-tap.tap.response.requestHeaders=X-Request-Id"
  - "traefik.http.middlewares.test-tap.tap.response.rejectOnRecordError=false"
  - "traefik.http.middlewares.test-tap.tap.response.timeout=5s"
```

**Tags**

```json
{
  //...
  "Tags" : [
    "traefik.http.middlewares.test-tap.tap.request.service=audit-requests",
    "traefik.http.middlewares.test-tap.tap.request.path=/records/requests",
    "traefik.http.middlewares.test-tap.tap.request.recordBody=true",
    "traefik.http.middlewares.test-tap.tap.request.maxRecordBodySize=4096",
    "traefik.http.middlewares.test-tap.tap.request.rejectOnRecordError=true",
    "traefik.http.middlewares.test-tap.tap.request.timeout=5s",
    "traefik.http.middlewares.test-tap.tap.response.service=audit-responses",
    "traefik.http.middlewares.test-tap.tap.response.path=/records/responses",
    "traefik.http.middlewares.test-tap.tap.response.recordBody=true",
    "traefik.http.middlewares.test-tap.tap.response.maxRecordBodySize=4096",
    "traefik.http.middlewares.test-tap.tap.response.requestHeaders=X-Request-Id",
    "traefik.http.middlewares.test-tap.tap.response.rejectOnRecordError=false",
    "traefik.http.middlewares.test-tap.tap.response.timeout=5s"
  ]
}
```

**Kubernetes**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-tap
spec:
  tap:
    request:
      service:
        name: audit-requests
        port: 80
      path: /records/requests
      recordBody: true
      maxRecordBodySize: 4096
      rejectOnRecordError: true
      timeout: 5s
    response:
      service:
        name: audit-responses
        port: 80
      path: /records/responses
      recordBody: true
      maxRecordBodySize: 4096
      requestHeaders:
        - X-Request-Id
      rejectOnRecordError: false
      timeout: 5s
```

## Configuration Options

| Field                               | Description                                                                                                                | Default | Required |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-request"></a>`request`   | Where and how the request records are sent. When omitted, requests are not recorded. More information [here](#request).    |         | No       |
| <a id="opt-response"></a>`response` | Where and how the response records are sent. When omitted, responses are not recorded. More information [here](#response). |         | No       |

At least one of `request` and `response` must be set.

### request

| Field                                                     | Description                                                                                                     | Default | Required          |
| :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- | :------ | :---------------- |
| <a id="opt-service"></a>`service`                         | Name of the service the records are sent to.                                                                    |         | Yes               |
| <a id="opt-path"></a>`path`                               | Path of the requests sending the records to the service.                                                        | /       | No                |
| <a id="opt-recordBody"></a>`recordBody`                   | Whether the body is part of the records.                                                                        | false   | No                |
| <a id="opt-maxRecordBodySize"></a>`maxRecordBodySize`     | Maximum number of body bytes in a record, and held in memory. More information [here](#maxrecordbodysize).      |         | With `recordBody` |
| <a id="opt-rejectOnRecordError"></a>`rejectOnRecordError` | Rejects the request with a `500` when the record cannot be sent. More information [here](#rejectonrecorderror). | false   | No                |
| <a id="opt-timeout"></a>`timeout`                         | Maximum duration allowed to send a record. A value of `0` means no limit.                                       | 10s     | No                |

### response

| Field                                                       | Description                                                                                                      | Default | Required          |
| :---------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- | :------ | :---------------- |
| <a id="opt-service-2"></a>`service`                         | Name of the service the records are sent to.                                                                     |         | Yes               |
| <a id="opt-path-2"></a>`path`                               | Path of the requests sending the records to the service.                                                         | /       | No                |
| <a id="opt-recordBody-2"></a>`recordBody`                   | Whether the body is part of the records.                                                                         | false   | No                |
| <a id="opt-maxRecordBodySize-2"></a>`maxRecordBodySize`     | Maximum number of body bytes in a record, and held in memory. More information [here](#maxrecordbodysize).       |         | With `recordBody` |
| <a id="opt-requestHeaders"></a>`requestHeaders`             | Request headers described in the records, along with the request line. More information [here](#requestheaders). |         | No                |
| <a id="opt-rejectOnRecordError-2"></a>`rejectOnRecordError` | Rejects the request with a `500` when the record cannot be sent. More information [here](#rejectonrecorderror).  | false   | No                |
| <a id="opt-timeout-2"></a>`timeout`                         | Maximum duration allowed to send a record. A value of `0` means no limit.                                        | 10s     | No                |

### rejectOnRecordError

When the record cannot be sent:

- With `false`, the error is logged, and the request is served.
- With `true`, the request is rejected with a `500 Internal Server Error`.

With `true`, the record is sent first:
the request record before the request reaches the backend,
and the response record before the response reaches the client.
Nothing is served unrecorded.
The `request` and `response` settings are independent.

On `response`, `true` also means:

- The response is held until its record is complete, then the rest of it is streamed.
  The record is complete once the status is known, or with `recordBody`,
  once the first `maxRecordBodySize` bytes of the body are captured, or the response ends.
  WebSocket upgrades are served as usual, and their record is sent as with `false`.
- Informational responses, such as `103 Early Hints`, are dropped.

In both cases, records are sent inline, within `timeout`:
the time taken by the tap service adds to the latency of every request.
Keep `timeout` short, and the tap service close to Traefik.

### requestHeaders

A response record describes the response alone, which is enough to store it, but not to tell which exchange it
belongs to without fetching the matching request record. `requestHeaders` adds a `request` object to the response
records, holding the request line and the listed headers, and nothing else: the body of a request is never part of a
response record.

It is typically used to carry a correlation identifier set by a middleware standing before the tap in the chain.

Headers absent from the request are absent from the record.
The option does not exist on the `request` records, which already describe the whole request.

### maxRecordBodySize

`maxRecordBodySize` is the maximum number of body bytes in a record.
A larger body is cut in the record, which sets `bodyTruncated` to `true`.
The backend and the client still get the whole body.

It also bounds the memory used for the body:
only the recorded bytes are held, and the rest of the body is streamed.
It has no default, as no limit fits every route, and must be set with `recordBody`.
A value of `-1` means no limit, and holds the whole body in memory.

## Records

A record is sent as a `POST` request to the configured service and path, with a JSON body:

```json
{
  "id": "9f8b1c8a3d4e5f60718293a4b5c6d7e8",
  "kind": "response",
  "time": "2026-08-28T14:02:11.123456789Z",
  "traceId": "4bf92f3577b34da6a3ce929d0e0e4736",
  "response": {
    "status": 201,
    "headers": {
      "Content-Type": ["application/json"]
    },
    "body": "eyJpZCI6MX0=",
    "duration": 14234000
  }
}
```

| Field                                 | Description                                                                                                                                                                |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="opt-id"></a>`id`               | Identifier of the exchange. The request record and the response record of the same exchange share it.                                                                      |
| <a id="opt-kind"></a>`kind`           | Either `request` or `response`.                                                                                                                                            |
| <a id="opt-time"></a>`time`           | Time at which the request was received.                                                                                                                                    |
| <a id="opt-traceId"></a>`traceId`     | Trace the request belongs to, when tracing is enabled.                                                                                                                     |
| <a id="opt-request-2"></a>`request`   | Method, URL, host, protocol, remote address, headers and body. Set on `request` records, and on `response` records when `requestHeaders` is set.                           |
| <a id="opt-response-2"></a>`response` | Status, headers, body, and duration in nanoseconds. The duration ends with the response, or when the record is sent with `rejectOnRecordError`. Set on `response` records. |

Bodies are part of the records only when `recordBody` is enabled.
They are base64-encoded, as they are not necessarily valid UTF-8, and carry a `bodyTruncated` flag when they exceed `maxRecordBodySize`.

The same information is also carried by two headers, so that a service handling both kinds of records can dispatch
them without parsing the payload:

| Header                                      | Description        |
| :------------------------------------------ | :----------------- |
| <a id="opt-X-Tap-Id"></a>`X-Tap-Id`         | The record `id`.   |
| <a id="opt-X-Tap-Record"></a>`X-Tap-Record` | The record `kind`. |

A tap service is expected to answer with a status below `400`.
Anything else is treated as a failure to record.
