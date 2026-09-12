> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary)

# xcodeMetrics.ProductData.MetricCategories.Metrics

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Data that relates to power and performance measurements for an app, including its datasets, goal keys, metrics identifier, and unit of measurement.

## Declaration

```
object xcodeMetrics.ProductData.MetricCategories.Metrics
```

## Properties

- `datasets` — `[xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets]`: An array of datasets containing metric values by app version filtered by percentile and device type.
- `goalKeys` — `[xcodeMetrics.ProductData.MetricCategories.Metrics.GoalKeys]`: This property is deprecated. An array of terms used to classify a metric value, and the range of values for each classification.
- `identifier` — `string`: The identifier of the specific metric within the contained metric category.
- `unit` — `xcodeMetrics.ProductData.MetricCategories.Metrics.Unit`: The metric’s unit of measurement.

## Mentioned In

- [App Store Connect API 4.4 release notes](../../../app-store-connect-api-4-4-release-notes.md)

## Topics

### Objects

- [xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets](metrics-data.dictionary/datasets-data.dictionary.md): A set of data containing metric values for each app version, filtered by percentile and device type.
- [xcodeMetrics.ProductData.MetricCategories.Metrics.GoalKeys](metrics-data.dictionary/goalkeys-data.dictionary.md): A classification of a metrics value and the lower- and upper-bound values that qualify a metrics value for the classification.
- [xcodeMetrics.ProductData.MetricCategories.Metrics.Unit](metrics-data.dictionary/unit-data.dictionary.md): A unit of measurement and its display name.
