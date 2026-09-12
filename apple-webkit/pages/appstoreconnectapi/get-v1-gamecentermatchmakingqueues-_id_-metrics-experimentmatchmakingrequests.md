> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecentermatchmakingqueues-_id_-metrics-experimentmatchmakingrequests](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecentermatchmakingqueues-_id_-metrics-experimentmatchmakingrequests)

# Get Experimental Match Request Time in Queue

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Get the match requests that a specific queue processes using its experimental rule set.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingRequests
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the queue.

## Query Parameters

- `filter[gameCenterDetail]` — `string`: The fields of the queues to include in the response.
- `filter[result]` — `string`: The types of match requests to include in the response.
  **Allowed values:** `MATCHED`, `CANCELED`, `EXPIRED`
- `granularity` — `string` (required): The level of information you want in the response, specified as a time interval for the data collection, using the ISO 8601 format for durations.
  **Allowed values:** `P1D`, `PT1H`, `PT15M`
- `groupBy` — `[string]`: Group match requests by result.
  **Allowed values:** `result`, `gameCenterDetail`
- `limit` — `integer`: The maximum number of match requests to include.
  **Maximum:** `200`
- `sort` — `[string]`: Sort sizes by the specified order. For example, `count` sorts the results by decreasing number of players that Game Center finds.
  **Allowed values:** `count`, `-count`, `averageSecondsInQueue`, `-averageSecondsInQueue`, `p50SecondsInQueue`, `-p50SecondsInQueue`, `p95SecondsInQueue`, `-p95SecondsInQueue`

## Response Codes

- `200` OK — `GameCenterMatchmakingQueueRequestsV1MetricResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting queue information

- [Get Queue Size](get-v1-gamecentermatchmakingqueues-_id_-metrics-matchmakingqueuesizes.md): Get the time that match requests are in a specific queue.
- [Get Experimental Queue Size](get-v1-gamecentermatchmakingqueues-_id_-metrics-experimentmatchmakingqueuesizes.md): Get the number of match requests that the queue processes using its experimental rule set.
- [Get Match Request Time in Queue](get-v1-gamecentermatchmakingqueues-_id_-metrics-matchmakingrequests.md): Get the match requests that a specific queue processes.
- [Get Queue Session Information](get-v1-gamecentermatchmakingqueues-_id_-metrics-matchmakingsessions.md): Get session information on a queue.
