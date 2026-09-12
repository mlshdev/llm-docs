> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appsbetatesterusagesv1metricresponse/data-data.dictionary/datapoints-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appsbetatesterusagesv1metricresponse/data-data.dictionary/datapoints-data.dictionary)

# AppsBetaTesterUsagesV1MetricResponse.Data.DataPoints

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The time-series data points for the app beta tester usage metric, each representing a time interval with usage counts.

## Declaration

```
object AppsBetaTesterUsagesV1MetricResponse.Data.DataPoints
```

## Properties

- `end` — `date-time`:
- `start` — `date-time`:
- `values` — `AppsBetaTesterUsagesV1MetricResponse.Data.DataPoints.Values`:

## Topics

### Objects

- [AppsBetaTesterUsagesV1MetricResponse.Data.DataPoints.Values](datapoints-data.dictionary/values-data.dictionary.md): The usage count values within a single data point of the app beta tester usage metric.

## See Also

### Objects

- [AppsBetaTesterUsagesV1MetricResponse.Data.Dimensions](dimensions-data.dictionary.md): The dimensional breakdown for the app beta tester usage metric, organized by tester.
