> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary)

# xcodeMetrics.ProductData

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The metrics information of an app on a specific platform.

## Declaration

```
object xcodeMetrics.ProductData
```

## Properties

- `metricCategories` — `[xcodeMetrics.ProductData.MetricCategories]`: An array of metrics by category.
- `platform` — `string`: The Apple platform on which the system gathered the metrics about your app.

## Topics

### Objects

- [xcodeMetrics.ProductData.MetricCategories](productdata-data.dictionary/metriccategories-data.dictionary.md): A metric category and its associated array of data and measurements.

## See Also

### Objects

- [xcodeMetrics.Insights](insights-data.dictionary.md): Analysis of power and performance data collected for your app that includes regressions and trends.
