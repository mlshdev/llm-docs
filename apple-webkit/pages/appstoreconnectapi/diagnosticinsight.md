> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/diagnosticinsight](https://developer.apple.com/documentation/appstoreconnectapi/diagnosticinsight)

# DiagnosticInsight

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.5+

An AI-generated analysis of a recurring performance issue identified in your app’s diagnostic logs, with suggested fixes.

## Declaration

```
object DiagnosticInsight
```

## Properties

- `direction` — `DiagnosticInsightDirection`:
- `insightType` — `DiagnosticInsightType`:
- `referenceVersions` — `[DiagnosticInsight.ReferenceVersions]`:

## Topics

### Objects

- [DiagnosticInsight.ReferenceVersions](diagnosticinsight/referenceversions-data.dictionary.md): A collection of app versions referenced in a diagnostic insight, indicating which versions are affected.

## See Also

### Objects and types

- [xcodeMetrics](xcodemetrics.md): A response that contains power and performance measurements for your app.
- [DiagnosticSignaturesResponse](diagnosticsignaturesresponse.md): A response containing a list of unique performance issue signatures identified in your app’s diagnostic data.
- [DiagnosticSignature](diagnosticsignature.md): A unique pattern identifying a recurring crash, hang, or disk-write exception in your app’s diagnostic logs.
- [diagnosticLogs](diagnosticlogs.md): A response containing log data for a diagnostic signature.
- [DiagnosticLog](diagnosticlog.md): A raw performance log file associated with a diagnostic signature, downloadable for detailed analysis.
- [DiagnosticLogCallStackNode](diagnosticlogcallstacknode.md): Diagnostic information that describes a single line in a call stack.
- [MetricsInsight](metricsinsight.md): Results of an analysis of metric data for a single metric category for your app.
- [MetricCategory](metriccategory.md): Categories of metric reports for apps that you distribute through the App Store.
- [PerfPowerMetric](perfpowermetric.md): Unused.
- [AppPerfPowerMetricsLinkagesResponse](appperfpowermetricslinkagesresponse.md)
- [DiagnosticSignatureLogsLinkagesResponse](diagnosticsignaturelogslinkagesresponse.md)
