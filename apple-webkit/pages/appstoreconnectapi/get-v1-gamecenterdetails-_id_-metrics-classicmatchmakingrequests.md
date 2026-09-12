> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-metrics-classicmatchmakingrequests](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-metrics-classicmatchmakingrequests)

# Get Classic Match Requests

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Get match requests that don’t use matchmaking rules.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/metrics/classicMatchmakingRequests
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the [GameCenterDetail](gamecenterdetail.md) resource object. You can obtain this resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `filter[result]` — `string`: The types of the match requests to include in the response.
  **Allowed values:** `MATCHED`, `CANCELED`, `EXPIRED`
- `granularity` — `string` (required): The level of information you want in the response, specified as a time interval for the data collection, using the ISO 8601 format for durations.
  **Allowed values:** `P1D`, `PT1H`, `PT15M`
- `groupBy` — `[string]`: If `result`, organizes the match requests by outcome (matched, canceled, and expired).
  **Allowed values:** `result`
- `limit` — `integer`: The maximum number of match requests to fetch.
  **Maximum:** `200`
- `sort` — `[string]`: Sort results by the specified order. For example, `count` sorts the results by decreasing number of players that Game Center finds.
  **Allowed values:** `count`, `-count`, `averageSecondsInQueue`, `-averageSecondsInQueue`, `p50SecondsInQueue`, `-p50SecondsInQueue`, `p95SecondsInQueue`, `-p95SecondsInQueue`

## Response Codes

- `200` OK — `GameCenterMatchmakingAppRequestsV1MetricResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting match request metrics

- [Get Rule-Based Match Requests](get-v1-gamecenterdetails-_id_-metrics-rulebasedmatchmakingrequests.md): Get match requests that use matchmaking rules.
