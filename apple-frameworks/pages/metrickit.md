> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit](https://developer.apple.com/documentation/metrickit)

# MetricKit (Swift)

**Framework:** MetricKit  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 12.0+ · visionOS 1.0+

Measure your app’s performance using daily metric and diagnostic reports from real users.

<a id="overview"></a>

## Overview

MetricKit provides on-device app diagnostics and power and performance metrics the system captures. The system delivers metric reports about the previous 24 hours to your app at most once per day. Diagnostic reports arrive immediately in iOS 15 and later, and macOS 12 and later. For apps running in visionOS, the framework supports diagnostics for crashes, hangs, high energy use, and disk writes, but doesn’t report performance metrics. This applies to apps built for visionOS and compatible iPhone and iPad apps running in visionOS.

Use this data to improve the performance of your iOS app, macOS app, or Mac Catalyst app.

In iOS 27 and later and macOS 27 and later, [MetricManager](metrickit/metricmanager.md) delivers [MetricReport](metrickit/metricreport.md) and [DiagnosticReport](metrickit/diagnosticreport.md) values through asynchronous sequences. On visionOS 27 and later, [MetricManager](metrickit/metricmanager.md) delivers diagnostic reports only. MetricKit also supports tracking state-based metrics using the [StateReporting](statereporting.md) framework.

## Topics

### Essentials

- [Monitoring app performance with MetricKit](metrickit/monitoring-app-performance-with-metrickit.md): Receive daily performance and diagnostic reports from real device usage.
- [Analyzing app performance with MetricKit](metrickit/analyzing-app-performance-with-metrickit.md): Work with the metric values, diagnostic data, and environments in MetricKit reports.
- [Track performance by app state using MetricKit](metrickit/track-performance-by-app-state-using-metrickit.md): Collect performance metrics, diagnostic reports, and experiment data related to your app’s current state using the MetricKit framework.
- [MetricKit updates](https://developer.apple.com/documentation/updates/metrickit): Learn about important changes to MetricKit.

### Performance improvements

- [Improving your app’s performance](https://developer.apple.com/documentation/xcode/improving-your-app-s-performance): Model, measure, and boost the performance of your app by using a continuous-improvement cycle.

### Metric and diagnostic reports

- [MetricManager](metrickit/metricmanager.md): An object that delivers metric and diagnostic reports to your app.
- [MetricReport](metrickit/metricreport.md): A daily performance report that contains metric values for your app.
- [DiagnosticReport](metrickit/diagnosticreport.md): A report describing a single diagnostic event.

### Result types

- [MetricResult](metrickit/metricresult.md): An enumeration that represents a single metric value from a metric report entry.
- [MetricGroup](metrickit/metricgroup.md): A value that identifies the category a metric belongs to.
- [DiagnosticResult](metrickit/diagnosticresult.md): An enumeration that represents a single diagnostic event from a diagnostic report.

### Time-in-use metrics

- [TotalForegroundTimeMetric](metrickit/totalforegroundtimemetric.md): A metric that measures the total time the app spent in the foreground.
- [TotalBackgroundTimeMetric](metrickit/totalbackgroundtimemetric.md): A metric that measures the total time the app spent active in the background.
- [TotalBackgroundAudioTimeMetric](metrickit/totalbackgroundaudiotimemetric.md): A metric that measures the total time the app spent in the background playing audio.
- [TotalBackgroundLocationTimeMetric](metrickit/totalbackgroundlocationtimemetric.md): A metric that measures the total time the app spent in the background using location services.
- [LocationActivityTimeMetric](metrickit/locationactivitytimemetric.md): A metric that measures time spent using location services at each accuracy level.
- [CellularConditionTimeMetric](metrickit/cellularconditiontimemetric.md): A metric that measures time spent at each cellular signal strength.

### Launch and responsiveness metrics

- [TimeToFirstDrawMetric](metrickit/timetofirstdrawmetric.md): A metric that measures time to first draw durations for app launches.
- [OptimizedTimeToFirstDrawMetric](metrickit/optimizedtimetofirstdrawmetric.md): A metric that measures optimized time to first draw durations for app launches.
- [ApplicationResumeTimeMetric](metrickit/applicationresumetimemetric.md): A metric that measures app resume time durations.
- [ExtendedLaunchMetric](metrickit/extendedlaunchmetric.md): A metric that measures extended launch task durations.
- [HangTimeMetric](metrickit/hangtimemetric.md): A metric that measures app hang time.
- [HitchTimeMetric](metrickit/hitchtimemetric.md): A metric that measures animation hitch time.

### CPU and memory metrics

- [CPUTimeMetric](metrickit/cputimemetric.md): A metric that measures the total CPU time used by the app.
- [CPUInstructionsCountMetric](metrickit/cpuinstructionscountmetric.md): A metric that measures the total number of CPU instructions the app executed.
- [CPUExceptionDiagnostic](metrickit/cpuexceptiondiagnostic.md): A diagnostic for a fatal or nonfatal CPU exception.
- [PeakMemoryMetric](metrickit/peakmemorymetric.md): A metric that measures peak memory footprint.
- [SuspendedMemoryMetric](metrickit/suspendedmemorymetric.md): A metric that measures average suspended memory footprint with statistical data.
- [MemoryExceptionDiagnostic](metrickit/memoryexceptiondiagnostic.md): A diagnostic MetricKit generates when your app or extension terminates because it exceeds the memory limit.

### GPU and display metrics

- [GPUTimeMetric](metrickit/gputimemetric.md): A metric that measures the total GPU time used by the app.
- [MetalFrameRateMetric](metrickit/metalframeratemetric.md): A metric that measures Metal frame rate statistics for a specific `CAMetalLayer`.
- [PixelLuminanceMetric](metrickit/pixelluminancemetric.md): A metric that measures the average luminosity of pixels on an OLED display.
- [AveragePixelLuminance](metrickit/averagepixelluminance.md): A unit for average pixel luminance measurements.

### Network metrics

- [TotalWiFiUploadMetric](metrickit/totalwifiuploadmetric.md): A metric that measures the total data uploaded over WiFi.
- [TotalWiFiDownloadMetric](metrickit/totalwifidownloadmetric.md): A metric that measures the total data downloaded over WiFi.
- [TotalCellularUploadMetric](metrickit/totalcellularuploadmetric.md): A metric that measures the total data uploaded over a cellular connection.
- [TotalCellularDownloadMetric](metrickit/totalcellulardownloadmetric.md): A metric that measures the total data downloaded over a cellular connection.

### Disk metrics

- [LogicalDiskWritesMetric](metrickit/logicaldiskwritesmetric.md): A metric that measures the total data written to disk.
- [DiskWriteExceptionDiagnostic](metrickit/diskwriteexceptiondiagnostic.md): A diagnostic for a disk write exception.
- [TotalDiskSpaceCapacityMetric](metrickit/totaldiskspacecapacitymetric.md): A metric that measures disk capacity and usage on the device.
- [TotalFileCountMetric](metrickit/totalfilecountmetric.md): A metric that measures the number of files attributed to the app.
- [TotalFileSizeMetric](metrickit/totalfilesizemetric.md): A metric that measures the sizes of files attributed to the app.

### Termination metrics

- [ForegroundTerminationMetric](metrickit/foregroundterminationmetric.md): A metric that counts app terminations from the foreground by category.
- [BackgroundTerminationMetric](metrickit/backgroundterminationmetric.md): A metric that counts app terminations from the background by category.

### Signpost and custom metrics

- [SignpostIntervalMetric](metrickit/signpostintervalmetric.md): A metric that measures the duration and count of custom signpost intervals.
- [mxSignpost(\_:dso:log:name:signpostID:\_:\_:)](metrickit/mxsignpost%28__dso_log_name_signpostid_____%29.md): Posts a single custom metric, the start time of a custom metric, or the end time of a custom metric to the log system.
- [mxSignpostAnimationIntervalBegin(dso:log:name:signpostID:\_:\_:)](metrickit/mxsignpostanimationintervalbegin%28dso_log_name_signpostid_____%29.md): Posts the start time of an animation interval to the log system.

### Crash and hang diagnostics

- [CrashDiagnostic](metrickit/crashdiagnostic.md): A diagnostic report that describes a crash that occurred.
- [HangDiagnostic](metrickit/hangdiagnostic.md): A diagnostic for an app that was too busy to handle user input responsively.
- [AppLaunchDiagnostic](metrickit/applaunchdiagnostic.md): A diagnostic report for an app launch.

### App state reporting

- [StateReportingDomain](metrickit/statereportingdomain.md): A value that identifies a reporting scope for segmenting metric data.
- [LaunchTaskID](metrickit/launchtaskid.md): An identifier for a task measured as part of an extended app launch.

### Call stack data

- [CallStackTree](metrickit/callstacktree.md): A tree structure representing a collection of call stacks captured during a diagnostic event.
- [CallStackThread](metrickit/callstackthread.md): A single stack thread within a call stack tree.
- [CallStackFrame](metrickit/callstackframe.md): A single frame within a call stack thread.
- [SignpostRecord](metrickit/signpostrecord.md): A record of a signpost event associated with a diagnostic report.

### Supporting types

- [Histogram](metrickit/histogram.md): A distribution of values organized into buckets.
- [AverageStatistics](metrickit/averagestatistics.md): A value that encapsulates an average measurement with supporting statistical data.
- [SignalBars](metrickit/signalbars.md): A unit for cellular signal strength measurements in bars.
- [HitchTimeRatio](metrickit/hitchtimeratio.md): A unit for animation hitch time ratio measurements.
- [OSVersion](metrickit/osversion.md): The version of the operating system on the device.

### MXMetricManager API

- [MXMetricManager API](metrickit/mxmetricmanager-api.md): Measure app performance and diagnostics using MXMetricManager and related types.

# MetricKit (Objective-C)

**Framework:** MetricKit  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 12.0+ · visionOS 1.0+

Measure your app’s performance using daily metric and diagnostic reports from real users.

<a id="overview"></a>

## Overview

MetricKit provides on-device app diagnostics and power and performance metrics the system captures. The system delivers metric reports about the previous 24 hours to your app at most once per day. Diagnostic reports arrive immediately in iOS 15 and later, and macOS 12 and later. For apps running in visionOS, the framework supports diagnostics for crashes, hangs, high energy use, and disk writes, but doesn’t report performance metrics. This applies to apps built for visionOS and compatible iPhone and iPad apps running in visionOS.

Use this data to improve the performance of your iOS app, macOS app, or Mac Catalyst app.

In iOS 27 and later and macOS 27 and later, [MetricManager](metrickit/metricmanager.md) delivers [MetricReport](metrickit/metricreport.md) and [DiagnosticReport](metrickit/diagnosticreport.md) values through asynchronous sequences. On visionOS 27 and later, [MetricManager](metrickit/metricmanager.md) delivers diagnostic reports only. MetricKit also supports tracking state-based metrics using the [StateReporting](statereporting.md) framework.

## Topics

### Essentials

- [Monitoring app performance with MetricKit](metrickit/monitoring-app-performance-with-metrickit.md): Receive daily performance and diagnostic reports from real device usage.
- [Analyzing app performance with MetricKit](metrickit/analyzing-app-performance-with-metrickit.md): Work with the metric values, diagnostic data, and environments in MetricKit reports.
- [MetricKit updates](https://developer.apple.com/documentation/updates/metrickit): Learn about important changes to MetricKit.

### Performance improvements

- [Improving your app’s performance](https://developer.apple.com/documentation/xcode/improving-your-app-s-performance): Model, measure, and boost the performance of your app by using a continuous-improvement cycle.

### MXMetricManager API

- [MXMetricManager API](metrickit/mxmetricmanager-api.md): Measure app performance and diagnostics using MXMetricManager and related types.
