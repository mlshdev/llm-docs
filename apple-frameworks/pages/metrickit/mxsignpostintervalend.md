> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxsignpostintervalend](https://developer.apple.com/documentation/metrickit/mxsignpostintervalend)

# MXSignpostIntervalEnd

**Interface language:** Objective-C

**Framework:** MetricKit  
**Kind:** Macro  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 12.0+ · tvOS · visionOS 1.0+

Post the end time of a custom metric event to a metric kit log.

## Declaration

```objectivec
#define MXSignpostIntervalEnd(log, event_id, name, ...)
```

## Parameters

- `log`: A log for the category of the event that was created previously using [makeLogHandleWithCategory:](mxmetricmanager/makeloghandle%28category_%29.md).
- `event_id  `: An [OSSignpostID](../os/ossignpostid.md) for the underlyng `os_signpost`.
- `name`: A string containing developer assigned name of the custom event.
- `…`: The variable arguments for [os_signpost_event_emit](../os/os_signpost_event_emit.md).

## See Also

### Signpost metrics

- [MXSignpostMetric](mxsignpostmetric.md): Deprecated. An object representing a custom metric.
- [MXSignpostIntervalData](mxsignpostintervaldata.md): Deprecated. A data object representing the captured data for a custom metric.
- [MXSignpostEventEmit](mxsignposteventemit.md): Post a custom metric event to a metric kit log.
- [MXSignpostAnimationIntervalBegin](mxsignpostanimationintervalbegin.md)
- [MXSignpostIntervalBegin](mxsignpostintervalbegin.md): Post the start time of a custom metric event to a metric kit log.
