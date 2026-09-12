> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricmanager-api](https://developer.apple.com/documentation/metrickit/mxmetricmanager-api)

# MXMetricManager API (Swift)

**Framework:** MetricKit  
**Kind:** API Collection

Measure app performance and diagnostics using MXMetricManager and related types.

## Topics

### Metric and diagnostic reports

- [MXMetricManager](mxmetricmanager.md): Deprecated. The shared object that registers you to receive metrics, creates logs for custom metrics, and gives access to past reports.
- [MXMetricPayload](mxmetricpayload.md): Deprecated. An object that encapsulates a daily metrics report.
- [MXDiagnosticPayload](mxdiagnosticpayload.md): Deprecated. An object that encapsulates a diagnostic report.
- [MXMetricManagerSubscriber](mxmetricmanagersubscriber.md): Deprecated. A protocol defining a method for receiving a daily metrics report.

### Battery and resource metrics

- [MXCellularConditionMetric](mxcellularconditionmetric.md): Deprecated. An object representing metrics about the condition of the cellular network.
- [MXCPUMetric](mxcpumetric.md): Deprecated. An object representing metrics about the use of the CPU.
- [MXDisplayMetric](mxdisplaymetric.md): Deprecated. An object representing metrics about the power used to display the app on the screen.
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXLocationActivityMetric](mxlocationactivitymetric.md): Deprecated. An object representing metrics about the use of location-tracking features of a device.
- [MXNetworkTransferMetric](mxnetworktransfermetric.md): Deprecated. An object representing metrics about network transfers.

### App performance metrics

- [MXAppRunTimeMetric](mxappruntimemetric.md): Deprecated. An object representing metrics about the amount of time the app is active.
- [MXAppExitMetric](mxappexitmetric.md): Deprecated. An object representing metrics about the types of foreground and background app exits.
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.
- [MXMemoryMetric](mxmemorymetric.md): Deprecated. An object representing metrics about the app’s memory use.

### Responsiveness metrics

- [MXAnimationMetric](mxanimationmetric.md): Deprecated. An object representing metrics about the responsiveness of animation in the app.
- [MXAppLaunchMetric](mxapplaunchmetric.md): Deprecated. An object representing metrics about app launch time.
- [MXAppResponsivenessMetric](mxappresponsivenessmetric.md): Deprecated. An object representing metrics about the responsiveness of the app to user interaction.
- [MXLaunchTaskID](mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.

### Disk metrics

- [MXDiskIOMetric](mxdiskiometric.md): Deprecated. An object representing metrics about disk usage.
- [MXDiskSpaceUsageMetric](mxdiskspaceusagemetric.md): Deprecated. An object representing metrics about your app’s disk space usage.

### Performance diagnostics

- [MXAppLaunchDiagnostic](mxapplaunchdiagnostic.md): Deprecated. A diagnostic subclass that encapsulates app launch diagnostic reports.
- [MXCPUExceptionDiagnostic](mxcpuexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a fatal or nonfatal CPU exception.
- [MXCrashDiagnostic](mxcrashdiagnostic.md): Deprecated. An object representing a diagnostic report for an app crash.
- [MXHangDiagnostic](mxhangdiagnostic.md): Deprecated. An object representing a diagnostic report for an app that is too busy to handle user input responsively.
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a disk write exception.

### Signpost metrics

- [MXSignpostMetric](mxsignpostmetric.md): Deprecated. An object representing a custom metric.
- [MXSignpostIntervalData](mxsignpostintervaldata.md): Deprecated. A data object representing the captured data for a custom metric.
- [mxSignpost(\_:dso:log:name:signpostID:\_:\_:)](mxsignpost%28__dso_log_name_signpostid_____%29.md): Posts a single custom metric, the start time of a custom metric, or the end time of a custom metric to the log system.
- [mxSignpostAnimationIntervalBegin(dso:log:name:signpostID:\_:\_:)](mxsignpostanimationintervalbegin%28dso_log_name_signpostid_____%29.md): Posts the start time of an animation interval to the log system.

### Supporting types

- [MXCallStackTree](mxcallstacktree.md): Deprecated. An object representing the call stack for an exception.
- [MXMetaData](mxmetadata.md): Deprecated. An object containing system-level information about the device.
- [MXAverage](mxaverage.md): Deprecated. A unit of measure for an average.
- [MXHistogram](mxhistogram.md): Deprecated. An object representing a histogram of data values of the same type of unit.
- [MXHistogramBucket](mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.
- [MXDiagnostic](mxdiagnostic.md): Deprecated. An abstract data class for a diagnostic.
- [MXMetric](mxmetric.md): Deprecated. An abstract data class for a metric.
- [MXError](mxerror.md): Deprecated. Error domain for error handling of app metrics.
- [MXError.Code](mxerror/code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.

# MXMetricManager API (Objective-C)

**Framework:** MetricKit  
**Kind:** API Collection

Measure app performance and diagnostics using MXMetricManager and related types.

## Topics

### Metric and diagnostic reports

- [MXMetricManager](mxmetricmanager.md): Deprecated. The shared object that registers you to receive metrics, creates logs for custom metrics, and gives access to past reports.
- [MXMetricPayload](mxmetricpayload.md): Deprecated. An object that encapsulates a daily metrics report.
- [MXDiagnosticPayload](mxdiagnosticpayload.md): Deprecated. An object that encapsulates a diagnostic report.
- [MXMetricManagerSubscriber](mxmetricmanagersubscriber.md): Deprecated. A protocol defining a method for receiving a daily metrics report.

### Battery and resource metrics

- [MXCellularConditionMetric](mxcellularconditionmetric.md): Deprecated. An object representing metrics about the condition of the cellular network.
- [MXCPUMetric](mxcpumetric.md): Deprecated. An object representing metrics about the use of the CPU.
- [MXDisplayMetric](mxdisplaymetric.md): Deprecated. An object representing metrics about the power used to display the app on the screen.
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXLocationActivityMetric](mxlocationactivitymetric.md): Deprecated. An object representing metrics about the use of location-tracking features of a device.
- [MXNetworkTransferMetric](mxnetworktransfermetric.md): Deprecated. An object representing metrics about network transfers.

### App performance metrics

- [MXAppRunTimeMetric](mxappruntimemetric.md): Deprecated. An object representing metrics about the amount of time the app is active.
- [MXAppExitMetric](mxappexitmetric.md): Deprecated. An object representing metrics about the types of foreground and background app exits.
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.
- [MXMemoryMetric](mxmemorymetric.md): Deprecated. An object representing metrics about the app’s memory use.

### Responsiveness metrics

- [MXAnimationMetric](mxanimationmetric.md): Deprecated. An object representing metrics about the responsiveness of animation in the app.
- [MXAppLaunchMetric](mxapplaunchmetric.md): Deprecated. An object representing metrics about app launch time.
- [MXAppResponsivenessMetric](mxappresponsivenessmetric.md): Deprecated. An object representing metrics about the responsiveness of the app to user interaction.
- [MXLaunchTaskID](mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.

### Disk metrics

- [MXDiskIOMetric](mxdiskiometric.md): Deprecated. An object representing metrics about disk usage.
- [MXDiskSpaceUsageMetric](mxdiskspaceusagemetric.md): Deprecated. An object representing metrics about your app’s disk space usage.

### Performance diagnostics

- [MXAppLaunchDiagnostic](mxapplaunchdiagnostic.md): Deprecated. A diagnostic subclass that encapsulates app launch diagnostic reports.
- [MXCPUExceptionDiagnostic](mxcpuexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a fatal or nonfatal CPU exception.
- [MXCrashDiagnostic](mxcrashdiagnostic.md): Deprecated. An object representing a diagnostic report for an app crash.
- [MXHangDiagnostic](mxhangdiagnostic.md): Deprecated. An object representing a diagnostic report for an app that is too busy to handle user input responsively.
- [MXDiskWriteExceptionDiagnostic](mxdiskwriteexceptiondiagnostic.md): Deprecated. An object representing a diagnostic report for a disk write exception.

### Signpost metrics

- [MXSignpostMetric](mxsignpostmetric.md): Deprecated. An object representing a custom metric.
- [MXSignpostIntervalData](mxsignpostintervaldata.md): Deprecated. A data object representing the captured data for a custom metric.
- [MXSignpostEventEmit](mxsignposteventemit.md): Post a custom metric event to a metric kit log.
- [MXSignpostAnimationIntervalBegin](mxsignpostanimationintervalbegin.md)
- [MXSignpostIntervalBegin](mxsignpostintervalbegin.md): Post the start time of a custom metric event to a metric kit log.
- [MXSignpostIntervalEnd](mxsignpostintervalend.md): Post the end time of a custom metric event to a metric kit log.

### Supporting types

- [MXCallStackTree](mxcallstacktree.md): Deprecated. An object representing the call stack for an exception.
- [MXMetaData](mxmetadata.md): Deprecated. An object containing system-level information about the device.
- [MXAverage](mxaverage.md): Deprecated. A unit of measure for an average.
- [MXHistogram](mxhistogram.md): Deprecated. An object representing a histogram of data values of the same type of unit.
- [MXHistogramBucket](mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.
- [MXDiagnostic](mxdiagnostic.md): Deprecated. An abstract data class for a diagnostic.
- [MXMetric](mxmetric.md): Deprecated. An abstract data class for a metric.
- [MXErrorCode](mxerror/code.md): Deprecated. Error codes for error values from app metrics.
- [MXErrorDomain](mxerrordomain.md): Deprecated. Error domain for error values from app metrics.
- [MXCrashDiagnosticObjectiveCExceptionReason](mxcrashdiagnosticobjectivecexceptionreason.md): Deprecated. An object that represents the exception reason for an uncaught ObjC exception.
- [MXSignpostRecord](mxsignpostrecord.md): Deprecated. An object representing the record for a signpost interval or event.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.
