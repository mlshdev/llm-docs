> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/diagnosticlogs/productdata-data.dictionary

# diagnosticLogs.ProductData

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The logs and insights for a diagnostic signature.

## Declaration

```
object diagnosticLogs.ProductData
```

## Properties

- `signatureId` — `string`: The opaque resource ID that uniquely identifies a diagnostic signature.
- `diagnosticInsights` — `[diagnosticLogs.ProductData.DiagnosticInsights]`: An array of insights for a diagnostic signature.
- `diagnosticLogs` — `[diagnosticLogs.ProductData.DiagnosticLogs]`: An array of logs associated with a diagnostic signature.

## Topics

### Objects

- [diagnosticLogs.ProductData.DiagnosticInsights](productdata-data.dictionary/diagnosticinsights-data.dictionary.md): Information about an insight including a descriptive string, category, and URL.
- [diagnosticLogs.ProductData.DiagnosticLogs](productdata-data.dictionary/diagnosticlogs-data.dictionary.md): The call stack representation and metadata of the diagnostic log.
- [DiagnosticInsightDirection](../diagnosticinsightdirection.md): A string that describes the diagnostic insight direction.
- [DiagnosticInsightType](../diagnosticinsighttype.md): A string that desribes the diagnostic insight type.
