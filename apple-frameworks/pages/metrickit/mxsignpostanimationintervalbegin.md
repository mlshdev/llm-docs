> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxsignpostanimationintervalbegin

# MXSignpostAnimationIntervalBegin

**Interface language:** Objective-C

**Framework:** MetricKit  
**Kind:** Macro  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 12.0+ · tvOS · visionOS 1.0+

## Declaration

```objectivec
#define MXSignpostAnimationIntervalBegin(log, event_id, name, ...)
```

## See Also

### Signpost metrics

- [MXSignpostMetric](mxsignpostmetric.md): Deprecated. An object representing a custom metric.
- [MXSignpostIntervalData](mxsignpostintervaldata.md): Deprecated. A data object representing the captured data for a custom metric.
- [MXSignpostEventEmit](mxsignposteventemit.md): Post a custom metric event to a metric kit log.
- [MXSignpostIntervalBegin](mxsignpostintervalbegin.md): Post the start time of a custom metric event to a metric kit log.
- [MXSignpostIntervalEnd](mxsignpostintervalend.md): Post the end time of a custom metric event to a metric kit log.
