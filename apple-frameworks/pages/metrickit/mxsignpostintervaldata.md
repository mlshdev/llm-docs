> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxsignpostintervaldata](https://developer.apple.com/documentation/metrickit/mxsignpostintervaldata)

# MXSignpostIntervalData (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A data object representing the captured data for a custom metric.

> Use [SignpostIntervalMetric](signpostintervalmetric.md) instead.

## Declaration

```swift
class MXSignpostIntervalData
```

## Topics

### Reading Histogrammed Custom Metric Durations

- [histogrammedSignpostDuration](mxsignpostintervaldata/histogrammedsignpostduration.md): Deprecated. A histogram of the different time intervals of a custom metric event.

### Reading Power and Performance Information

- [averageMemory](mxsignpostintervaldata/averagememory.md): Deprecated. The average memory used during the logged intervals.
- [cumulativeCPUTime](mxsignpostintervaldata/cumulativecputime.md): Deprecated. The total amount of CPU time used during the logged intervals.
- [cumulativeLogicalWrites](mxsignpostintervaldata/cumulativelogicalwrites.md): Deprecated. The total amount of data written to disk or other long term storage during the logged intervals.
- [cumulativeHitchTimeRatio](mxsignpostintervaldata/cumulativehitchtimeratio.md): Deprecated. The ratio of the total time spent hitching to the total time spent animating during the logged intervals.

### Initializers

- [init(coder:)](mxsignpostintervaldata/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Signpost metrics

- [MXSignpostMetric](mxsignpostmetric.md): Deprecated. An object representing a custom metric.
- [mxSignpost(\_:dso:log:name:signpostID:\_:\_:)](mxsignpost%28__dso_log_name_signpostid_____%29.md): Posts a single custom metric, the start time of a custom metric, or the end time of a custom metric to the log system.
- [mxSignpostAnimationIntervalBegin(dso:log:name:signpostID:\_:\_:)](mxsignpostanimationintervalbegin%28dso_log_name_signpostid_____%29.md): Posts the start time of an animation interval to the log system.

# MXSignpostIntervalData (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A data object representing the captured data for a custom metric.

> Use [SignpostIntervalMetric](signpostintervalmetric.md) instead.

## Declaration

```objectivec
@interface MXSignpostIntervalData : NSObject
```

## Topics

### Reading Histogrammed Custom Metric Durations

- [histogrammedSignpostDuration](mxsignpostintervaldata/histogrammedsignpostduration.md): Deprecated. A histogram of the different time intervals of a custom metric event.

### Reading Power and Performance Information

- [averageMemory](mxsignpostintervaldata/averagememory.md): Deprecated. The average memory used during the logged intervals.
- [cumulativeCPUTime](mxsignpostintervaldata/cumulativecputime.md): Deprecated. The total amount of CPU time used during the logged intervals.
- [cumulativeLogicalWrites](mxsignpostintervaldata/cumulativelogicalwrites.md): Deprecated. The total amount of data written to disk or other long term storage during the logged intervals.
- [cumulativeHitchTimeRatio](mxsignpostintervaldata/cumulativehitchtimeratio.md): Deprecated. The ratio of the total time spent hitching to the total time spent animating during the logged intervals.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Signpost metrics

- [MXSignpostMetric](mxsignpostmetric.md): Deprecated. An object representing a custom metric.
- [MXSignpostEventEmit](mxsignposteventemit.md): Post a custom metric event to a metric kit log.
- [MXSignpostAnimationIntervalBegin](mxsignpostanimationintervalbegin.md)
- [MXSignpostIntervalBegin](mxsignpostintervalbegin.md): Post the start time of a custom metric event to a metric kit log.
- [MXSignpostIntervalEnd](mxsignpostintervalend.md): Post the end time of a custom metric event to a metric kit log.
