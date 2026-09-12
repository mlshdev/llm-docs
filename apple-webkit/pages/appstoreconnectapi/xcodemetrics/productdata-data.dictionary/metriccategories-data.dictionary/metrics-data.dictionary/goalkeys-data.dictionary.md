> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary/goalkeys-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary/metrics-data.dictionary/goalkeys-data.dictionary)

# xcodeMetrics.ProductData.MetricCategories.Metrics.GoalKeys

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A classification of a metrics value and the lower- and upper-bound values that qualify a metrics value for the classification.

## Declaration

```
object xcodeMetrics.ProductData.MetricCategories.Metrics.GoalKeys
```

## Properties

- `goalKey` — `string`: The name of the classification, such as `“good”`, `“fair”`, and `“poor”`.
- `lowerBound` — `integer`: The lower bound value to qualify for the goal key.
- `upperBound` — `integer`: The upper bound value to qualify for the goal key.

## See Also

### Objects

- [xcodeMetrics.ProductData.MetricCategories.Metrics.Datasets](datasets-data.dictionary.md): A set of data containing metric values for each app version, filtered by percentile and device type.
- [xcodeMetrics.ProductData.MetricCategories.Metrics.Unit](unit-data.dictionary.md): A unit of measurement and its display name.
