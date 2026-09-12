> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary/datasets-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary/datasets-data.dictionary)

# xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A set of data containing metric values for each app version, filtered by percentile and device type.

## Declaration

```
object xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets
```

## Properties

- `filterCriteria` — `xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.FilterCriteria`: The device and percentile criteria by which the dataset is filtered.
- `points` — `[xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.Points]`: An array containing metric values for each app version.
- `recommendedMetricGoal` — `xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.RecommendedMetricGoal`: The recommended metric goal for this dataset.

## Topics

### Objects

- [xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.FilterCriteria](datasets-data.dictionary/filtercriteria-data.dictionary.md): The device and percentile criteria by which the system filters a metrics dataset.
- [xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.Points](datasets-data.dictionary/points-data.dictionary.md): A metric value of a goal for a specific app version, with a breakdown by metric subtypes.

### Dictionaries

- [xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.RecommendedMetricGoal](datasets-data.dictionary/recommendedmetricgoal-data.dictionary.md): A recommeded value of a goal for a specific app metric.

## See Also

### Objects

- [xcodeMetrics.ProductData.MetricCategories.Metrics.GoalKeys](goalkeys-data.dictionary.md): A classification of a metrics value and the lower- and upper-bound values that qualify a metrics value for the classification.
- [xcodeMetrics.ProductData.MetricCategories.Metrics.Unit](unit-data.dictionary.md): A unit of measurement and its display name.
