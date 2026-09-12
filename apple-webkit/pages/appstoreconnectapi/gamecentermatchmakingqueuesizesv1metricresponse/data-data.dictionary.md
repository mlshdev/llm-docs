> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingqueuesizesv1metricresponse/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingqueuesizesv1metricresponse/data-data.dictionary)

# GameCenterMatchmakingQueueSizesV1MetricResponse.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The data structure in a response body for queue sizes.

## Declaration

```
object GameCenterMatchmakingQueueSizesV1MetricResponse.Data
```

## Properties

- `dataPoints` — `[GameCenterMatchmakingQueueSizesV1MetricResponse.Data.DataPoints]`:
- `granularity` — `string`: The granularity of the data using the ISO 8601 format for durations.
  **Allowed values:** `P1D`, `PT1H`, `PT15M`

## Topics

### Objects

- [GameCenterMatchmakingQueueSizesV1MetricResponse.Data.DataPoints](data-data.dictionary/datapoints-data.dictionary.md): The key properties of the data in the response.
