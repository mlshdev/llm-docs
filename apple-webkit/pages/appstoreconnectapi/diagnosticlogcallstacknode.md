> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/diagnosticlogcallstacknode](https://developer.apple.com/documentation/appstoreconnectapi/diagnosticlogcallstacknode)

# DiagnosticLogCallStackNode

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Diagnostic information that describes a single line in a call stack.

## Declaration

```
object DiagnosticLogCallStackNode
```

## Properties

- `sampleCount` — `integer`: The number of samples that captured the frame. Samples are taken at consistent intervals, meaning a greater number of samples results in a greater value for the metric.
- `isBlameFrame` — `boolean`: A Boolean value that indicates whether the frame is the responsibility of your app.
- `binaryName` — `string`: The name of the binary responsible for the frame.
- `binaryUUID` — `string`: The unique identifier of the binary image that contains the frame.
- `symbolName` — `string`: The name of the symbol in your code.
- `fileName` — `string`: The file name of the file where the frame is defined.
- `address` — `string`: The memory address of the frame.
- `insightsCategory` — `string`: The insight category that applies to the frame.
- `lineNumber` — `string`: The line number where the function is invoked.
- `offsetIntoBinaryTextSegment` — `string`: The number of bytes the frame is offset from the start of the binary text segment, for unsymbolicated frames.
- `offsetIntoSymbol` — `string`: The number of bytes the frame is offset from the start of the function, for symbolicated frames.
- `rawFrame` — `string`: The unparsed frame from the log.
- `subFrames` — `[DiagnosticLogCallStackNode]`: An array of call stack frames.

## See Also

### Objects and types

- [xcodeMetrics](xcodemetrics.md): A response that contains power and performance measurements for your app.
- [DiagnosticInsight](diagnosticinsight.md): An AI-generated analysis of a recurring performance issue identified in your app’s diagnostic logs, with suggested fixes.
- [DiagnosticSignaturesResponse](diagnosticsignaturesresponse.md): A response containing a list of unique performance issue signatures identified in your app’s diagnostic data.
- [DiagnosticSignature](diagnosticsignature.md): A unique pattern identifying a recurring crash, hang, or disk-write exception in your app’s diagnostic logs.
- [diagnosticLogs](diagnosticlogs.md): A response containing log data for a diagnostic signature.
- [DiagnosticLog](diagnosticlog.md): A raw performance log file associated with a diagnostic signature, downloadable for detailed analysis.
- [MetricsInsight](metricsinsight.md): Results of an analysis of metric data for a single metric category for your app.
- [MetricCategory](metriccategory.md): Categories of metric reports for apps that you distribute through the App Store.
- [PerfPowerMetric](perfpowermetric.md): Unused.
- [AppPerfPowerMetricsLinkagesResponse](appperfpowermetricslinkagesresponse.md)
- [DiagnosticSignatureLogsLinkagesResponse](diagnosticsignaturelogslinkagesresponse.md)
