> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingbooleanruleresultsv1metricresponse/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingbooleanruleresultsv1metricresponse/data-data.dictionary)

# GameCenterMatchmakingBooleanRuleResultsV1MetricResponse.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The data structure in a response body for Boolean match request results.

## Declaration

```
object GameCenterMatchmakingBooleanRuleResultsV1MetricResponse.Data
```

## Properties

- `dataPoints` — `[GameCenterMatchmakingBooleanRuleResultsV1MetricResponse.Data.DataPoints]`:
- `dimensions` — `GameCenterMatchmakingBooleanRuleResultsV1MetricResponse.Data.Dimensions`:
- `granularity` — `string`: The granularity of the data using the ISO 8601 format for durations.
  **Allowed values:** `P1D`, `PT1H`, `PT15M`

## Topics

### Objects

- [GameCenterMatchmakingBooleanRuleResultsV1MetricResponse.Data.DataPoints](data-data.dictionary/datapoints-data.dictionary.md): The key properties of the data in the response.
- [GameCenterMatchmakingBooleanRuleResultsV1MetricResponse.Data.Dimensions](data-data.dictionary/dimensions-data.dictionary.md): The details of the data in the response.
