> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/xcodemetrics/productdata-data.dictionary/metriccategories-data.dictionary)

# xcodeMetrics.ProductData.MetricCategories

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A metric category and its associated array of data and measurements.

## Declaration

```
object xcodeMetrics.ProductData.MetricCategories
```

## Properties

- `identifier` — `MetricCategory`: The category of the metric that this product data is about.
- `metrics` — `[xcodeMetrics.ProductData.MetricCategories.Metrics]`: An array of data and measurements for the metric category specified by the `identifier`.

## Topics

### Objects

- [xcodeMetrics.ProductData.MetricCategories.Metrics](metriccategories-data.dictionary/metrics-data.dictionary.md): Data that relates to power and performance measurements for an app, including its datasets, goal keys, metrics identifier, and unit of measurement.
