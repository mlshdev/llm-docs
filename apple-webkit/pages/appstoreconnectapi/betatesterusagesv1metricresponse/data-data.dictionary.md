> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betatesterusagesv1metricresponse/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betatesterusagesv1metricresponse/data-data.dictionary)

# BetaTesterUsagesV1MetricResponse.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The request body you use to update a beta tester usages v1metric response.

## Declaration

```
object BetaTesterUsagesV1MetricResponse.Data
```

## Properties

- `dataPoints` — `[BetaTesterUsagesV1MetricResponse.Data.DataPoints]`:
- `dimensions` — `BetaTesterUsagesV1MetricResponse.Data.Dimensions`:

## Topics

### Objects

- [BetaTesterUsagesV1MetricResponse.Data.DataPoints](data-data.dictionary/datapoints-data.dictionary.md): The time-series data points for the beta tester usage metric, each representing a time interval with usage counts.
- [BetaTesterUsagesV1MetricResponse.Data.Dimensions](data-data.dictionary/dimensions-data.dictionary.md): The dimensional breakdown for the beta tester usage metric, organized by app.
