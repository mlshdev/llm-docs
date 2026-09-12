> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecentermatchmakingqueues-_id_-metrics-experimentmatchmakingqueuesizes](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecentermatchmakingqueues-_id_-metrics-experimentmatchmakingqueuesizes)

# Get Experimental Queue Size

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Get the number of match requests that the queue processes using its experimental rule set.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingQueueSizes
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the queue.

## Query Parameters

- `granularity` — `string` (required): The level of information you want in the response, specified as a time interval for the data collection, using the ISO 8601 format for durations.
  **Allowed values:** `P1D`, `PT1H`, `PT15M`
- `limit` — `integer`: The maximum number of queue size metrics to include.
  **Maximum:** `200`
- `sort` — `[string]`: Sort sizes by the specified order. For example, `count` sorts the results by decreasing number of players that Game Center finds.
  **Allowed values:** `count`, `-count`, `averageNumberOfRequests`, `-averageNumberOfRequests`, `p50NumberOfRequests`, `-p50NumberOfRequests`, `p95NumberOfRequests`, `-p95NumberOfRequests`

## Response Codes

- `200` OK — `GameCenterMatchmakingQueueSizesV1MetricResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting queue information

- [Get Queue Size](get-v1-gamecentermatchmakingqueues-_id_-metrics-matchmakingqueuesizes.md): Get the time that match requests are in a specific queue.
- [Get Match Request Time in Queue](get-v1-gamecentermatchmakingqueues-_id_-metrics-matchmakingrequests.md): Get the match requests that a specific queue processes.
- [Get Experimental Match Request Time in Queue](get-v1-gamecentermatchmakingqueues-_id_-metrics-experimentmatchmakingrequests.md): Get the match requests that a specific queue processes using its experimental rule set.
- [Get Queue Session Information](get-v1-gamecentermatchmakingqueues-_id_-metrics-matchmakingsessions.md): Get session information on a queue.
