> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricresult](https://developer.apple.com/documentation/metrickit/metricresult)

# MetricResult

**Framework:** MetricKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

An enumeration that represents a single metric value from a metric report entry.

## Declaration

```swift
enum MetricResult
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

`MetricResult` unifies all metric types into a single enum. You receive `MetricResult` values by iterating the [values](metricreport/intervalentry/values.md) array on a [MetricReport.IntervalEntry](metricreport/intervalentry.md), or the [values](metricreport/stateentry/values.md) array on a [MetricReport.StateEntry](metricreport/stateentry.md).

```swift
for result in entry.values {
    switch result {
    case .cpuTime(let metric):
        process(metric)
    case .peakMemory(let metric):
        process(metric)
    case .hangTime(let metric):
        process(metric)
    @unknown default:
        break
    }
}
```

Use the [metricGroup](metricresult/metricgroup.md) property to filter or categorize results without exhaustive switching when you only need a subset of metric types.

## Topics

### Metric group

- [metricGroup](metricresult/metricgroup.md): The metric group this metric belongs to.

### Responsiveness and animation

- [MetricResult.hangTime(\_:)](metricresult/hangtime%28__%29.md)
- [MetricResult.hitchTime(\_:)](metricresult/hitchtime%28__%29.md)

### App runtime

- [MetricResult.foregroundTermination(\_:)](metricresult/foregroundtermination%28__%29.md)
- [MetricResult.backgroundTermination(\_:)](metricresult/backgroundtermination%28__%29.md)
- [MetricResult.totalForegroundTime(\_:)](metricresult/totalforegroundtime%28__%29.md)
- [MetricResult.totalBackgroundTime(\_:)](metricresult/totalbackgroundtime%28__%29.md)
- [MetricResult.totalBackgroundAudioTime(\_:)](metricresult/totalbackgroundaudiotime%28__%29.md)
- [MetricResult.totalBackgroundLocationTime(\_:)](metricresult/totalbackgroundlocationtime%28__%29.md)
- [MetricResult.locationActivityTime(\_:)](metricresult/locationactivitytime%28__%29.md)
- [MetricResult.signpostInterval(\_:)](metricresult/signpostinterval%28__%29.md)

### CPU and memory

- [MetricResult.cpuTime(\_:)](metricresult/cputime%28__%29.md)
- [MetricResult.cpuInstructionsCount(\_:)](metricresult/cpuinstructionscount%28__%29.md)
- [MetricResult.peakMemory(\_:)](metricresult/peakmemory%28__%29.md)
- [MetricResult.suspendedMemory(\_:)](metricresult/suspendedmemory%28__%29.md)

### Network

- [MetricResult.totalWiFiUpload(\_:)](metricresult/totalwifiupload%28__%29.md)
- [MetricResult.totalWiFiDownload(\_:)](metricresult/totalwifidownload%28__%29.md)
- [MetricResult.totalCellularUpload(\_:)](metricresult/totalcellularupload%28__%29.md)
- [MetricResult.totalCellularDownload(\_:)](metricresult/totalcellulardownload%28__%29.md)
- [MetricResult.cellularConditionTime(\_:)](metricresult/cellularconditiontime%28__%29.md)

### App launch

- [MetricResult.timeToFirstDraw(\_:)](metricresult/timetofirstdraw%28__%29.md)
- [MetricResult.applicationResumeTime(\_:)](metricresult/applicationresumetime%28__%29.md)
- [MetricResult.optimizedTimeToFirstDraw(\_:)](metricresult/optimizedtimetofirstdraw%28__%29.md)
- [MetricResult.extendedLaunch(\_:)](metricresult/extendedlaunch%28__%29.md)

### Storage

- [MetricResult.logicalDiskWrites(\_:)](metricresult/logicaldiskwrites%28__%29.md)
- [MetricResult.totalFileCount(\_:)](metricresult/totalfilecount%28__%29.md)
- [MetricResult.totalFileSize(\_:)](metricresult/totalfilesize%28__%29.md)
- [MetricResult.totalDiskSpaceCapacity(\_:)](metricresult/totaldiskspacecapacity%28__%29.md)

### Display and GPU

- [MetricResult.pixelLuminance(\_:)](metricresult/pixelluminance%28__%29.md)
- [MetricResult.gpuTime(\_:)](metricresult/gputime%28__%29.md)
- [MetricResult.metalFrameRate(\_:)](metricresult/metalframerate%28__%29.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Result types

- [MetricGroup](metricgroup.md): A value that identifies the category a metric belongs to.
- [DiagnosticResult](diagnosticresult.md): An enumeration that represents a single diagnostic event from a diagnostic report.
