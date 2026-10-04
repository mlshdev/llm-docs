> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/xcodeoverview

# xcodeOverview

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The performance overview that Xcode presents for an app, including app metadata, insights, and top performance signatures.

## Declaration

```
object xcodeOverview
```

## Properties

- `version` — `string`: The app version that the performance overview describes.
- `appMetadata` — `xcodeOverview.AppMetadata`: Metadata that identifies the app the overview describes.
- `insights` — `xcodeOverview.Insights`: The performance insights for the app, grouped into regressions and improving trends.
- `categories` — `[xcodeOverview.Categories]`: The metric categories included in the overview.
- `signatures` — `xcodeOverview.Signatures`: The most significant performance signatures for the app, grouped by type.
- `telemetryIdentifier` — `string`: A unique identifier for correlating the overview with telemetry data.

## Topics

### Objects

- [xcodeOverview.AppMetadata](xcodeoverview/appmetadata-data.dictionary.md): Metadata about the app that a performance overview describes.
- [xcodeOverview.Insights](xcodeoverview/insights-data.dictionary.md): Performance insights for an app, including regressions and metrics that are trending up.
- [xcodeOverview.Signatures](xcodeoverview/signatures-data.dictionary.md): The top performance signatures for an app, such as its top hang, launch, and disk-write points.

### Dictionaries

- [xcodeOverview.Categories](xcodeoverview/categories-data.dictionary.md)

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
- [PerfPowerMetric](perfpowermetric.md): Unused.
- [xcodeMetrics](xcodemetrics.md): A response that contains power and performance measurements for your app.
