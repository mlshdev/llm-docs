> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/diagnosticlogs/productdata-data.dictionary/diagnosticinsights-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/diagnosticlogs/productdata-data.dictionary/diagnosticinsights-data.dictionary)

# diagnosticLogs.ProductData.DiagnosticInsights

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Information about an insight including a descriptive string, category, and URL.

## Declaration

```
object diagnosticLogs.ProductData.DiagnosticInsights
```

## Properties

- `insightsCategory` — `string`: The insight type.
- `insightsString` — `string`: The human-readable description of the insight.
- `insightsURL` — `string`: A URL to documentation that provides guidance about the insight.

## See Also

### Objects

- [diagnosticLogs.ProductData.DiagnosticLogs](diagnosticlogs-data.dictionary.md): The call stack representation and metadata of the diagnostic log.
- [DiagnosticInsightDirection](../../diagnosticinsightdirection.md): A string that describes the diagnostic insight direction.
- [DiagnosticInsightType](../../diagnosticinsighttype.md): A string that desribes the diagnostic insight type.
