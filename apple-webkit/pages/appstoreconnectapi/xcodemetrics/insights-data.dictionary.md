> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/xcodemetrics/insights-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/xcodemetrics/insights-data.dictionary)

# xcodeMetrics.Insights

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Analysis of power and performance data collected for your app that includes regressions and trends.

## Declaration

```
object xcodeMetrics.Insights
```

## Properties

- `regressions` — `[MetricsInsight]`: An array of metrics that have significantly increased between app versions.
- `trendingUp` — `[MetricsInsight]`: An array of metrics that have moderately increased between app versions.

## See Also

### Objects

- [xcodeMetrics.ProductData](productdata-data.dictionary.md): The metrics information of an app on a specific platform.
