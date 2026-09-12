> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appperfpowermetricslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/appperfpowermetricslinkagesresponse)

# AppPerfPowerMetricsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object AppPerfPowerMetricsLinkagesResponse
```

## Properties

- `data` — `[AppPerfPowerMetricsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [AppPerfPowerMetricsLinkagesResponse.Data](appperfpowermetricslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects and types

- [xcodeMetrics](xcodemetrics.md): A response that contains power and performance measurements for your app.
- [DiagnosticInsight](diagnosticinsight.md): An AI-generated analysis of a recurring performance issue identified in your app’s diagnostic logs, with suggested fixes.
- [DiagnosticSignaturesResponse](diagnosticsignaturesresponse.md): A response containing a list of unique performance issue signatures identified in your app’s diagnostic data.
- [DiagnosticSignature](diagnosticsignature.md): A unique pattern identifying a recurring crash, hang, or disk-write exception in your app’s diagnostic logs.
- [diagnosticLogs](diagnosticlogs.md): A response containing log data for a diagnostic signature.
- [DiagnosticLog](diagnosticlog.md): A raw performance log file associated with a diagnostic signature, downloadable for detailed analysis.
- [DiagnosticLogCallStackNode](diagnosticlogcallstacknode.md): Diagnostic information that describes a single line in a call stack.
- [MetricsInsight](metricsinsight.md): Results of an analysis of metric data for a single metric category for your app.
- [MetricCategory](metriccategory.md): Categories of metric reports for apps that you distribute through the App Store.
- [PerfPowerMetric](perfpowermetric.md): Unused.
- [DiagnosticSignatureLogsLinkagesResponse](diagnosticsignaturelogslinkagesresponse.md)
