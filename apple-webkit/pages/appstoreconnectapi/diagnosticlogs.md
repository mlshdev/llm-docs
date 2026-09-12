> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/diagnosticlogs](https://developer.apple.com/documentation/appstoreconnectapi/diagnosticlogs)

# diagnosticLogs

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A response containing log data for a diagnostic signature.

## Declaration

```
object diagnosticLogs
```

## Properties

- `productData` — `[diagnosticLogs.ProductData]`: An array of log data for a specific diagnostic signature.
- `version` — `string`: The version of the App Store Connect API.

## Topics

### Objects

- [diagnosticLogs.ProductData](diagnosticlogs/productdata-data.dictionary.md): The logs and insights for a diagnostic signature.

## See Also

### Objects and types

- [xcodeMetrics](xcodemetrics.md): A response that contains power and performance measurements for your app.
- [DiagnosticInsight](diagnosticinsight.md): An AI-generated analysis of a recurring performance issue identified in your app’s diagnostic logs, with suggested fixes.
- [DiagnosticSignaturesResponse](diagnosticsignaturesresponse.md): A response containing a list of unique performance issue signatures identified in your app’s diagnostic data.
- [DiagnosticSignature](diagnosticsignature.md): A unique pattern identifying a recurring crash, hang, or disk-write exception in your app’s diagnostic logs.
- [DiagnosticLog](diagnosticlog.md): A raw performance log file associated with a diagnostic signature, downloadable for detailed analysis.
- [DiagnosticLogCallStackNode](diagnosticlogcallstacknode.md): Diagnostic information that describes a single line in a call stack.
- [MetricsInsight](metricsinsight.md): Results of an analysis of metric data for a single metric category for your app.
- [MetricCategory](metriccategory.md): Categories of metric reports for apps that you distribute through the App Store.
- [PerfPowerMetric](perfpowermetric.md): Unused.
- [AppPerfPowerMetricsLinkagesResponse](appperfpowermetricslinkagesresponse.md)
- [DiagnosticSignatureLogsLinkagesResponse](diagnosticsignaturelogslinkagesresponse.md)
