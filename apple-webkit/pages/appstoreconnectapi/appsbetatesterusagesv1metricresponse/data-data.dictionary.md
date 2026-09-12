> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appsbetatesterusagesv1metricresponse/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appsbetatesterusagesv1metricresponse/data-data.dictionary)

# AppsBetaTesterUsagesV1MetricResponse.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The request body you use to update an apps beta tester usages v1metric response.

## Declaration

```
object AppsBetaTesterUsagesV1MetricResponse.Data
```

## Properties

- `dataPoints` — `[AppsBetaTesterUsagesV1MetricResponse.Data.DataPoints]`:
- `dimensions` — `AppsBetaTesterUsagesV1MetricResponse.Data.Dimensions`:

## Topics

### Objects

- [AppsBetaTesterUsagesV1MetricResponse.Data.DataPoints](data-data.dictionary/datapoints-data.dictionary.md): The time-series data points for the app beta tester usage metric, each representing a time interval with usage counts.
- [AppsBetaTesterUsagesV1MetricResponse.Data.Dimensions](data-data.dictionary/dimensions-data.dictionary.md): The dimensional breakdown for the app beta tester usage metric, organized by tester.
