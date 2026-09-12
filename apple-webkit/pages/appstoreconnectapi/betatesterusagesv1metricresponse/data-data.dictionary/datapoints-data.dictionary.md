> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betatesterusagesv1metricresponse/data-data.dictionary/datapoints-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betatesterusagesv1metricresponse/data-data.dictionary/datapoints-data.dictionary)

# BetaTesterUsagesV1MetricResponse.Data.DataPoints

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The time-series data points for the beta tester usage metric, each representing a time interval with usage counts.

## Declaration

```
object BetaTesterUsagesV1MetricResponse.Data.DataPoints
```

## Properties

- `end` — `date-time`:
- `start` — `date-time`:
- `values` — `BetaTesterUsagesV1MetricResponse.Data.DataPoints.Values`:

## Topics

### Objects

- [BetaTesterUsagesV1MetricResponse.Data.DataPoints.Values](datapoints-data.dictionary/values-data.dictionary.md): The usage count values within a single data point of the beta tester usage metric.

## See Also

### Objects

- [BetaTesterUsagesV1MetricResponse.Data.Dimensions](dimensions-data.dictionary.md): The dimensional breakdown for the beta tester usage metric, organized by app.
