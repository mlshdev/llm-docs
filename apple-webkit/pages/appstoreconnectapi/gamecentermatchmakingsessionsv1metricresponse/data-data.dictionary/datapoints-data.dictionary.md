> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingsessionsv1metricresponse/data-data.dictionary/datapoints-data.dictionary

# GameCenterMatchmakingSessionsV1MetricResponse.Data.DataPoints

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The time-series data points for the Game Center matchmaking sessions metric.

## Declaration

```
object GameCenterMatchmakingSessionsV1MetricResponse.Data.DataPoints
```

## Properties

- `end` — `date-time`: The time Game Center ends the data collection.
- `start` — `date-time`: The time Game Center starts the data collection.
- `values` — `GameCenterMatchmakingSessionsV1MetricResponse.Data.DataPoints.Values`:

## Topics

### Objects

- [GameCenterMatchmakingSessionsV1MetricResponse.Data.DataPoints.Values](datapoints-data.dictionary/values-data.dictionary.md): The data values in the response per session.
