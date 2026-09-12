> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/metriccategory](https://developer.apple.com/documentation/appstoreconnectapi/metriccategory)

# MetricCategory

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 2.0+

Categories of metric reports for apps that you distribute through the App Store.

## Declaration

```
string MetricCategory
```

## Possible Values

- `HANG`: The number of seconds per hour that the main thread of the app is unresponsive for more than 250 ms (the maximum time an app can respond to a typical event before a person perceives it as slow).
- `LAUNCH`: The average launch time (the time between a person tapping your app icon and the system drawing a screen other than the launch screen), measured in milliseconds.
- `MEMORY`: The amount of memory the app uses, in megabytes.
- `DISK`: The number of megabytes per day that the app writes to long-term storage.
- `BATTERY`: The amount of battery power the app uses over a 24-hour period when the device is disconnected from power.
- `TERMINATION`: The average number of app terminations that people don’t initiate, including background terminations, per day.
- `ANIMATION`: The hitch rate of your app over time. The hitch rate tracks animation interruptions across all animated interactions, including scrolling, transitions, and other continuous motion.
- `STORAGE`: The data usage and binary size of your app.

## Mentioned In

- [App Store Connect API 4.4 release notes](app-store-connect-api-4-4-release-notes.md)

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
- [PerfPowerMetric](perfpowermetric.md): Unused.
- [AppPerfPowerMetricsLinkagesResponse](appperfpowermetricslinkagesresponse.md)
- [DiagnosticSignatureLogsLinkagesResponse](diagnosticsignaturelogslinkagesresponse.md)
