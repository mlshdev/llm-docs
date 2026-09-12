> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary/datasets-data.dictionary/recommendedmetricgoal-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary/datasets-data.dictionary/recommendedmetricgoal-data.dictionary)

# xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.RecommendedMetricGoal

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A recommeded value of a goal for a specific app metric.

## Declaration

```
object xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets.RecommendedMetricGoal
```

## Properties

- `detail` — `string`: A human-readable description of the recommended metric goal.
- `value` — `number`: The recommended metric value.

<a id="Overview"></a>

### Overview

Xcode compares your app’s metrics against two types of goals: *similar-app goals*, which are based on metrics from apps with functional and technical similarities to yours, and *historical performance goals*, which are based on your app’s own historical data.

When Xcode has enough information to determine a goal for a metric, it is available in this resource. Use this information to plan and prioritize performance-engineering work.
