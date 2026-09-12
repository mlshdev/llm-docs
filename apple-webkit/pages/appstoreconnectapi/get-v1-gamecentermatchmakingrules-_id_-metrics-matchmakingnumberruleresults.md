> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecentermatchmakingrules-_id_-metrics-matchmakingnumberruleresults](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecentermatchmakingrules-_id_-metrics-matchmakingnumberruleresults)

# Get Numeric Rule Results

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.1+

Get the results of a specific matchmaking rule that returns numeric values.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingNumberRuleResults
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the rule.

## Query Parameters

- `filter[gameCenterMatchmakingQueue]` — `string`: The fields of the queues to include in the response.
- `granularity` — `string` (required): The level of information you want in the response, specified as a time interval for the data collection, using the ISO 8601 format for durations.
  **Allowed values:** `P1D`, `PT1H`, `PT15M`
- `groupBy` — `[string]`: Organizes the results by queue.
  **Allowed values:** `gameCenterMatchmakingQueue`
- `limit` — `integer`: The maximum number of results to include.
  **Maximum:** `200`
- `sort` — `[string]`: Sort results by the specified order. For example, `count` sorts the results by decreasing number of players that Game Center finds.
  **Allowed values:** `count`, `-count`, `averageResult`, `-averageResult`, `p50Result`, `-p50Result`, `p95Result`, `-p95Result`

## Response Codes

- `200` OK — `GameCenterMatchmakingNumberRuleResultsV1MetricResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting rule results and errors

- [Get boolean rule results](get-v1-gamecentermatchmakingrules-_id_-metrics-matchmakingbooleanruleresults.md): Get the results of a specific matchmaking rule that returns Boolean values.
- [Get Matchmaking Rule Errors](get-v1-gamecentermatchmakingrules-_id_-metrics-matchmakingruleerrors.md): Get errors that occur for a specific matchmaking rule.
