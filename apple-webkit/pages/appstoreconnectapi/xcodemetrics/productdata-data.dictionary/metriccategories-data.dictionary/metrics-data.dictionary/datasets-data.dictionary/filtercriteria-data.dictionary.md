> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary/datasets-data.dictionary/filtercriteria-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary/datasets-data.dictionary/filtercriteria-data.dictionary)

# xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.FilterCriteria

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The device and percentile criteria by which the system filters a metrics dataset.

## Declaration

```
object xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.FilterCriteria
```

## Properties

- `device` — `string`: The device type that the measurement is collected on.
- `deviceMarketingName` — `string`: The human-readable string containing the device name.
- `percentile` — `string`: A percentile of users affected by the metric value. The 50th percentile represents a typical user experience. The 90th percentile represents the user experience when the metric value is the highest or lowest, depending on the metric.

## See Also

### Objects

- [xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.Points](points-data.dictionary.md): A metric value of a goal for a specific app version, with a breakdown by metric subtypes.
