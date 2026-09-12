> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/diagnosticlogs/productdata-data.dictionary/diagnosticlogs-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/diagnosticlogs/productdata-data.dictionary/diagnosticlogs-data.dictionary)

# diagnosticLogs.ProductData.DiagnosticLogs

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The call stack representation and metadata of the diagnostic log.

## Declaration

```
object diagnosticLogs.ProductData.DiagnosticLogs
```

## Properties

- `callStackTree` — `[diagnosticLogs.ProductData.DiagnosticLogs.CallStackTree]`: The call stack representation of the diagnostic log.
- `diagnosticMetaData` — `diagnosticLogs.ProductData.DiagnosticLogs.DiagnosticMetaData`: Information about the diagnostic log the system captured.

## Topics

### Objects

- [diagnosticLogs.ProductData.DiagnosticLogs.CallStackTree](diagnosticlogs-data.dictionary/callstacktree-data.dictionary.md): The call stack representation of the diagnostic logs for single or multiple threads.
- [diagnosticLogs.ProductData.DiagnosticLogs.DiagnosticMetaData](diagnosticlogs-data.dictionary/diagnosticmetadata-data.dictionary.md): Information about the diagnostic log including app version and build information, event details, OS, device type, and platform, and disk writes.

## See Also

### Objects

- [diagnosticLogs.ProductData.DiagnosticInsights](diagnosticinsights-data.dictionary.md): Information about an insight including a descriptive string, category, and URL.
- [DiagnosticInsightDirection](../../diagnosticinsightdirection.md): A string that describes the diagnostic insight direction.
- [DiagnosticInsightType](../../diagnosticinsighttype.md): A string that desribes the diagnostic insight type.
