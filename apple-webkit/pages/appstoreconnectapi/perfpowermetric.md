> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/perfpowermetric

# PerfPowerMetric

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

Unused.

## Declaration

```
object PerfPowerMetric
```

## Properties

- `attributes` — `PerfPowerMetric.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `perfPowerMetrics`

## Topics

### Objects

- [PerfPowerMetric.Attributes](perfpowermetric/attributes-data.dictionary.md): Attributes that describe a Power and Performance Metrics resource.

## See Also

### Objects and types

- [AppPerfPowerMetricsLinkagesResponse](appperfpowermetricslinkagesresponse.md)
- [AppPerformanceOverviewsLinkagesResponse](appperformanceoverviewslinkagesresponse.md)
- [DiagnosticInsight](diagnosticinsight.md): An AI-generated analysis of a recurring performance issue identified in your app’s diagnostic logs, with suggested fixes.
- [DiagnosticLog](diagnosticlog.md): A raw performance log file associated with a diagnostic signature, downloadable for detailed analysis.
- [DiagnosticLogCallStackNode](diagnosticlogcallstacknode.md): Diagnostic information that describes a single line in a call stack.
- [diagnosticLogs](diagnosticlogs.md): A response containing log data for a diagnostic signature.
- [DiagnosticSignature](diagnosticsignature.md): A unique pattern identifying a recurring crash, hang, or disk-write exception in your app’s diagnostic logs.
- [DiagnosticSignatureLogsLinkagesResponse](diagnosticsignaturelogslinkagesresponse.md)
- [DiagnosticSignaturesResponse](diagnosticsignaturesresponse.md): A response containing a list of unique performance issue signatures identified in your app’s diagnostic data.
- [MetricCategory](metriccategory.md): Categories of metric reports for apps that you distribute through the App Store.
- [MetricsInsight](metricsinsight.md): Results of an analysis of metric data for a single metric category for your app.
- [PerformanceOverview](performanceoverview.md): An aggregated performance overview for an app, summarizing the performance data that Xcode reports.
- [PerformanceSignature](performancesignature.md): A performance signature that identifies a recurring performance issue in an app, with its occurrence count and weight.
- [xcodeMetrics](xcodemetrics.md): A response that contains power and performance measurements for your app.
- [xcodeOverview](xcodeoverview.md): The performance overview that Xcode presents for an app, including app metadata, insights, and top performance signatures.
