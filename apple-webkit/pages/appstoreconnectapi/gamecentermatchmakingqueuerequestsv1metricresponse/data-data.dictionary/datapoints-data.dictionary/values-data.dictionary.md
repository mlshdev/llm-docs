> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingqueuerequestsv1metricresponse/data-data.dictionary/datapoints-data.dictionary/values-data.dictionary

# GameCenterMatchmakingQueueRequestsV1MetricResponse.Data.DataPoints.Values

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The values of the data points.

## Declaration

```
object GameCenterMatchmakingQueueRequestsV1MetricResponse.Data.DataPoints.Values
```

## Properties

- `averageSecondsInQueue` — `number`: The average seconds that match requests are in the queue.
- `count` — `integer`: The number of match requests in the queue.
- `p50SecondsInQueue` — `number`: The number of seconds the 50th percentile of the match requests are in the queue.
- `p95SecondsInQueue` — `number`: The number of seconds that the 95th percentile of the match requests are in the queue.
