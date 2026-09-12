> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary/datasets-data.dictionary/points-data.dictionary/percentagebreakdown-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary/datasets-data.dictionary/points-data.dictionary/percentagebreakdown-data.dictionary)

# xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.Points.PercentageBreakdown

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A metric subtype and the percentage of the metric value it contributes.

## Declaration

```
object xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.Points.PercentageBreakdown
```

## Properties

- `subSystemLabel` — `string`: A string that describes the metric subtype, which provides more information about the measurement.
- `value` — `number`: The percentage of the metric value the metric subtype contributes. Values are between `0` and `100`.
