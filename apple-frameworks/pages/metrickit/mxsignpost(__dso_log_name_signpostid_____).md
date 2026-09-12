> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxsignpost(_:dso:log:name:signpostid:_:_:)](https://developer.apple.com/documentation/metrickit/mxsignpost(_:dso:log:name:signpostid:_:_:))

# mxSignpost(\_:dso:log:name:signpostID:\_:\_:)

**Framework:** MetricKit  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Posts a single custom metric, the start time of a custom metric, or the end time of a custom metric to the log system.

## Declaration

```swift
func mxSignpost(_ type: OSSignpostType, dso: UnsafeRawPointer = #dsohandle, log: OSLog, name: StaticString, signpostID: OSSignpostID = .exclusive, _ format: StaticString = "%{public, signpost:metrics}@", _ arguments: [any CVarArg] = [Unmanaged<NSObject>.fromOpaque(_MXSignpostMetricsSnapshot()).takeUnretainedValue()])
```

## Parameters

- `type`: A value that represents the type of the signpost:

  - **`event`**: A single custom metric.
  - **`begin`**: The start time of a custom metric.
  - **`end`**: The end time of a custom metric.
- `dso`: A parameter for internal system use.
- `log`: A log for the category of the event that was created previously using [makeLogHandle(category:)](mxmetricmanager/makeloghandle%28category_%29.md).
- `name`: A string containing the developer-assigned name of the custom event.
- `signpostID`: A parameter for internal system use.
- `format`: A parameter for internal system use.
- `arguments`: The variable arguments for [os_signpost_event_emit](../os/os_signpost_event_emit.md).

## Mentioned In

- [Monitoring app performance with MetricKit](monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

Call this function to mark a custom metric, custom metric start time, or custom metric end time in the metric kit log. Provide a `log` that you create with [makeLogHandle(category:)](mxmetricmanager/makeloghandle%28category_%29.md), the `type` of the event, a `name` for the event, and variable `arguments` for [os_signpost_event_emit](../os/os_signpost_event_emit.md). Don’t alter the parameters `dso`, `signpostID`, or `format`.

## See Also

### Signpost and custom metrics

- [SignpostIntervalMetric](signpostintervalmetric.md): A metric that measures the duration and count of custom signpost intervals.
- [mxSignpostAnimationIntervalBegin(dso:log:name:signpostID:\_:\_:)](mxsignpostanimationintervalbegin%28dso_log_name_signpostid_____%29.md): Posts the start time of an animation interval to the log system.
