> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxsignpostintervaldata/cumulativecputime](https://developer.apple.com/documentation/metrickit/mxsignpostintervaldata/cumulativecputime)

# cumulativeCPUTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total amount of CPU time used during the logged intervals.

> Use [cpuTime](../signpostintervalmetric/cputime.md) instead.

## Declaration

```swift
var cumulativeCPUTime: Measurement<UnitDuration>? { get }
```

## See Also

### Reading Power and Performance Information

- [averageMemory](averagememory.md): Deprecated. The average memory used during the logged intervals.
- [cumulativeLogicalWrites](cumulativelogicalwrites.md): Deprecated. The total amount of data written to disk or other long term storage during the logged intervals.
- [cumulativeHitchTimeRatio](cumulativehitchtimeratio.md): Deprecated. The ratio of the total time spent hitching to the total time spent animating during the logged intervals.

# cumulativeCPUTime (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total amount of CPU time used during the logged intervals.

> Use [cpuTime](../signpostintervalmetric/cputime.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSMeasurement<NSUnitDuration *> * cumulativeCPUTime;
```

## See Also

### Reading Power and Performance Information

- [averageMemory](averagememory.md): Deprecated. The average memory used during the logged intervals.
- [cumulativeLogicalWrites](cumulativelogicalwrites.md): Deprecated. The total amount of data written to disk or other long term storage during the logged intervals.
- [cumulativeHitchTimeRatio](cumulativehitchtimeratio.md): Deprecated. The ratio of the total time spent hitching to the total time spent animating during the logged intervals.
