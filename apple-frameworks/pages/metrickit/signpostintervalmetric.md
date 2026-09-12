> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/signpostintervalmetric](https://developer.apple.com/documentation/metrickit/signpostintervalmetric)

# SignpostIntervalMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that measures the duration and count of custom signpost intervals.

## Declaration

```swift
struct SignpostIntervalMetric
```

## Mentioned In

- [Monitoring app performance with MetricKit](monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.signpostInterval(\_:)](metricresult/signpostinterval%28__%29.md) case. This metric appears in both [intervalEntries](metricreport/intervalentries.md) and [stateEntries](metricreport/stateentries.md) when you enable state reporting.

Create signpost log handles with [logHandle(category:)](metricmanager/loghandle%28category_%29.md) and wrap each custom operation with [mxSignpost(\_:dso:log:name:signpostID:\_:\_:)](mxsignpost%28__dso_log_name_signpostid_____%29.md):

```swift
let networkLog = MetricManager.logHandle(category: "NetworkRequests")

func loadProfile() async {
    mxSignpost(.begin, log: networkLog, name: "fetchUserProfile")
    await fetchUserProfile()
    mxSignpost(.end, log: networkLog, name: "fetchUserProfile")
}
```

Signpost intervals measure the duration and frequency of specific code operations, such as network requests, database queries, or image processing. State reporting complements this by segmenting MetricKit metrics by user-visible app state.

## Topics

### Signpost details

- [signpostName](signpostintervalmetric/signpostname.md): The developer-specified name of the custom metric represented by the object.
- [signpostCategory](signpostintervalmetric/signpostcategory.md): The developer-specified category of the custom metric represented by the object.

### Counts and timing

- [totalCount](signpostintervalmetric/totalcount.md): The total number of occurrences of the captured custom metric.
- [signpostDuration](signpostintervalmetric/signpostduration.md): A histogram of the different time intervals of a custom metric event.

### Additional measurements

- [averageMemory](signpostintervalmetric/averagememory.md): The average memory used during the logged intervals.
- [cpuTime](signpostintervalmetric/cputime.md): The total amount of CPU time used during the logged intervals.
- [logicalWrites](signpostintervalmetric/logicalwrites.md): The total amount of data written to disk or other long term storage during the logged intervals.
- [hitchTimeRatio](signpostintervalmetric/hitchtimeratio.md): The ratio of the total time spent hitching to the total time spent animating during the logged intervals.
- [totalHitchTime](signpostintervalmetric/totalhitchtime.md): The total time spent hitching during the logged intervals.
- [totalAnimationTime](signpostintervalmetric/totalanimationtime.md): The total time spent animating during the logged intervals.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Signpost and custom metrics

- [mxSignpost(\_:dso:log:name:signpostID:\_:\_:)](mxsignpost%28__dso_log_name_signpostid_____%29.md): Posts a single custom metric, the start time of a custom metric, or the end time of a custom metric to the log system.
- [mxSignpostAnimationIntervalBegin(dso:log:name:signpostID:\_:\_:)](mxsignpostanimationintervalbegin%28dso_log_name_signpostid_____%29.md): Posts the start time of an animation interval to the log system.
