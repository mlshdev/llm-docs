> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/metricsinsight/populations-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/metricsinsight/populations-data.dictionary)

# MetricsInsight.Populations

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The value of a metric for a device type on the latest app version, and its percent change as compared with previous app versions.

## Declaration

```
object MetricsInsight.Populations
```

## Properties

- `device` — `string`: The device type.
- `deltaPercentage` — `number`: The percentage increase between the values of `latestVersionValue` and `referenceAverageValue`.
- `latestVersionValue` — `number`: The value of the metric for the latest version of the app.
- `referenceAverageValue` — `number`: The average value of the metric for all reference app versions.
- `percentile` — `string`: The percentile of users that are affected by this metric value. For example, the 50th percentile represents a typical user experience, and the 90th percentile represents the highest or lowest numbers, depending on the metric.
- `summaryString` — `string`: A human-readable description of the metric and population.
