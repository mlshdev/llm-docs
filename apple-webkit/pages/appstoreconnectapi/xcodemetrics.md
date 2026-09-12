> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/xcodemetrics](https://developer.apple.com/documentation/appstoreconnectapi/xcodemetrics)

# xcodeMetrics

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.8+

A response that contains power and performance measurements for your app.

## Declaration

```
object xcodeMetrics
```

## Properties

- `insights` — `xcodeMetrics.Insights`: Analysis of data collected about the power and performance of your app that includes regressions and trends.
- `productData` — `[xcodeMetrics.ProductData]`: An array of metrics data containing power and performance measurements for your app, organized by platform.
- `version` — `string`: The current App Store Connect API version.

## Mentioned In

- [App Store Connect API 2.0 release notes](app-store-connect-api-2-0-release-notes.md)

## Topics

### Objects

- [xcodeMetrics.Insights](xcodemetrics/insights-data.dictionary.md): Analysis of power and performance data collected for your app that includes regressions and trends.
- [xcodeMetrics.ProductData](xcodemetrics/productdata-data.dictionary.md): The metrics information of an app on a specific platform.

## See Also

### Objects and types

- [DiagnosticInsight](diagnosticinsight.md): An AI-generated analysis of a recurring performance issue identified in your app’s diagnostic logs, with suggested fixes.
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
