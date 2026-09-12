> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxsignpostintervaldata/cumulativehitchtimeratio](https://developer.apple.com/documentation/metrickit/mxsignpostintervaldata/cumulativehitchtimeratio)

# cumulativeHitchTimeRatio (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 27.0) · iPadOS 15.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The ratio of the total time spent hitching to the total time spent animating during the logged intervals.

> Use [hitchTimeRatio](../signpostintervalmetric/hitchtimeratio.md) instead.

## Declaration

```swift
var cumulativeHitchTimeRatio: Measurement<Unit>? { get }
```

## See Also

### Reading Power and Performance Information

- [averageMemory](averagememory.md): Deprecated. The average memory used during the logged intervals.
- [cumulativeCPUTime](cumulativecputime.md): Deprecated. The total amount of CPU time used during the logged intervals.
- [cumulativeLogicalWrites](cumulativelogicalwrites.md): Deprecated. The total amount of data written to disk or other long term storage during the logged intervals.

# cumulativeHitchTimeRatio (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 27.0) · iPadOS 15.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The ratio of the total time spent hitching to the total time spent animating during the logged intervals.

> Use [hitchTimeRatio](../signpostintervalmetric/hitchtimeratio.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSMeasurement<NSUnit *> * cumulativeHitchTimeRatio;
```

## See Also

### Reading Power and Performance Information

- [averageMemory](averagememory.md): Deprecated. The average memory used during the logged intervals.
- [cumulativeCPUTime](cumulativecputime.md): Deprecated. The total amount of CPU time used during the logged intervals.
- [cumulativeLogicalWrites](cumulativelogicalwrites.md): Deprecated. The total amount of data written to disk or other long term storage during the logged intervals.
