> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/metricsinsight](https://developer.apple.com/documentation/appstoreconnectapi/metricsinsight)

# MetricsInsight

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Results of an analysis of metric data for a single metric category for your app.

## Declaration

```
object MetricsInsight
```

## Properties

- `highImpact` — `boolean`: A Boolean value that indicates whether the insight is high impact, meaning the metrics show that the latest app version has a regression of 100% or more, compared with the average values of the metric from the previous app versions.
- `metricCategory` — `MetricCategory`: The category of the metric that this insight is about.
- `metric` — `string`: The specific measurement within the `metricCategory` that this insight analyzes.
- `subSystemLabel` — `string`: A metric subtype, which provides additional information about the source of the measurement.
- `latestVersion` — `string`: The version number of the most current version of the app.
- `maxLatestVersionValue` — `number`: The maximum value of this metric for the latest app version, from the values in `populations`.
- `populations` — `[MetricsInsight.Populations]`: An array of metrics organized by device type on the latest app version, that includes the percent change of the metric as compared with previous app versions.
- `summaryString` — `string`: A human-readable description of the trend.
- `referenceVersions` — `string`: A list of previous app versions that the system uses to compare the current app version to, when calculating metric value regressions or trends.

## Topics

### Objects

- [MetricsInsight.Populations](metricsinsight/populations-data.dictionary.md): The value of a metric for a device type on the latest app version, and its percent change as compared with previous app versions.

## See Also

### Objects and types

- [xcodeMetrics](xcodemetrics.md): A response that contains power and performance measurements for your app.
- [DiagnosticInsight](diagnosticinsight.md): An AI-generated analysis of a recurring performance issue identified in your app’s diagnostic logs, with suggested fixes.
- [DiagnosticSignaturesResponse](diagnosticsignaturesresponse.md): A response containing a list of unique performance issue signatures identified in your app’s diagnostic data.
- [DiagnosticSignature](diagnosticsignature.md): A unique pattern identifying a recurring crash, hang, or disk-write exception in your app’s diagnostic logs.
- [diagnosticLogs](diagnosticlogs.md): A response containing log data for a diagnostic signature.
- [DiagnosticLog](diagnosticlog.md): A raw performance log file associated with a diagnostic signature, downloadable for detailed analysis.
- [DiagnosticLogCallStackNode](diagnosticlogcallstacknode.md): Diagnostic information that describes a single line in a call stack.
- [MetricCategory](metriccategory.md): Categories of metric reports for apps that you distribute through the App Store.
- [PerfPowerMetric](perfpowermetric.md): Unused.
- [AppPerfPowerMetricsLinkagesResponse](appperfpowermetricslinkagesresponse.md)
- [DiagnosticSignatureLogsLinkagesResponse](diagnosticsignaturelogslinkagesresponse.md)
