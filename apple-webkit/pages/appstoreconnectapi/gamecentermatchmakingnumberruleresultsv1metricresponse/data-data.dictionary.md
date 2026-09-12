> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingnumberruleresultsv1metricresponse/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingnumberruleresultsv1metricresponse/data-data.dictionary)

# GameCenterMatchmakingNumberRuleResultsV1MetricResponse.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The data structure in a response body for numeric rule results.

## Declaration

```
object GameCenterMatchmakingNumberRuleResultsV1MetricResponse.Data
```

## Properties

- `dataPoints` — `[GameCenterMatchmakingNumberRuleResultsV1MetricResponse.Data.DataPoints]`:
- `dimensions` — `GameCenterMatchmakingNumberRuleResultsV1MetricResponse.Data.Dimensions`:
- `granularity` — `string`: The granularity of the data using the ISO 8601 format for durations.
  **Allowed values:** `P1D`, `PT1H`, `PT15M`

## Topics

### Objects

- [GameCenterMatchmakingNumberRuleResultsV1MetricResponse.Data.DataPoints](data-data.dictionary/datapoints-data.dictionary.md): The key properties of the data in the response.
- [GameCenterMatchmakingNumberRuleResultsV1MetricResponse.Data.Dimensions](data-data.dictionary/dimensions-data.dictionary.md): The details of the data in the response.
