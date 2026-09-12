> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingsessionsv1metricresponse/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingsessionsv1metricresponse/data-data.dictionary)

# GameCenterMatchmakingSessionsV1MetricResponse.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The data structure for the results of a successful matchmaking session.

## Declaration

```
object GameCenterMatchmakingSessionsV1MetricResponse.Data
```

## Properties

- `dataPoints` — `[GameCenterMatchmakingSessionsV1MetricResponse.Data.DataPoints]`:
- `granularity` — `string`: The granularity of the data using the ISO 8601 format for durations.
  **Allowed values:** `P1D`, `PT1H`, `PT15M`

## Topics

### Objects

- [GameCenterMatchmakingSessionsV1MetricResponse.Data.DataPoints](data-data.dictionary/datapoints-data.dictionary.md): The time-series data points for the Game Center matchmaking sessions metric.
