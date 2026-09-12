> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingapprequestsv1metricresponse/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingapprequestsv1metricresponse/data-data.dictionary)

# GameCenterMatchmakingAppRequestsV1MetricResponse.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The data structure in a response body for a match request.

## Declaration

```
object GameCenterMatchmakingAppRequestsV1MetricResponse.Data
```

## Properties

- `dataPoints` — `[GameCenterMatchmakingAppRequestsV1MetricResponse.Data.DataPoints]`:
- `dimensions` — `GameCenterMatchmakingAppRequestsV1MetricResponse.Data.Dimensions`:
- `granularity` — `string`: The granularity of the data using the ISO 8601 format for durations.
  **Allowed values:** `P1D`, `PT1H`, `PT15M`

## Topics

### Objects

- [GameCenterMatchmakingAppRequestsV1MetricResponse.Data.DataPoints](data-data.dictionary/datapoints-data.dictionary.md): The data properties in the response.
- [GameCenterMatchmakingAppRequestsV1MetricResponse.Data.Dimensions](data-data.dictionary/dimensions-data.dictionary.md): The details of the data in the response.
