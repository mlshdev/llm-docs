> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingqueuerequestsv1metricresponse/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingqueuerequestsv1metricresponse/data-data.dictionary)

# GameCenterMatchmakingQueueRequestsV1MetricResponse.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The data structure in a response body for the match requests in a queue.

## Declaration

```
object GameCenterMatchmakingQueueRequestsV1MetricResponse.Data
```

## Properties

- `dataPoints` — `[GameCenterMatchmakingQueueRequestsV1MetricResponse.Data.DataPoints]`:
- `dimensions` — `GameCenterMatchmakingQueueRequestsV1MetricResponse.Data.Dimensions`:
- `granularity` — `string`: The granularity of the data using the ISO 8601 format for durations.
  **Allowed values:** `P1D`, `PT1H`, `PT15M`

## Topics

### Objects

- [GameCenterMatchmakingQueueRequestsV1MetricResponse.Data.DataPoints](data-data.dictionary/datapoints-data.dictionary.md): The key properties of the data in the response.
- [GameCenterMatchmakingQueueRequestsV1MetricResponse.Data.Dimensions](data-data.dictionary/dimensions-data.dictionary.md): The details of the data in the response.
