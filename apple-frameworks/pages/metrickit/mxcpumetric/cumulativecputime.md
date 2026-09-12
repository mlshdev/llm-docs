> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxcpumetric/cumulativecputime](https://developer.apple.com/documentation/metrickit/mxcpumetric/cumulativecputime)

# cumulativeCPUTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total amount of CPU the app used.

> Use [CPUTimeMetric](../cputimemetric.md) instead.

## Declaration

```swift
var cumulativeCPUTime: Measurement<UnitDuration> { get }
```

## See Also

### Reading CPU use

- [cumulativeCPUInstructions](cumulativecpuinstructions.md): Deprecated. The total number of CPU instructions the app executed during the reporting period.

# cumulativeCPUTime (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total amount of CPU the app used.

> Use [CPUTimeMetric](../cputimemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitDuration *> * cumulativeCPUTime;
```

## See Also

### Reading CPU use

- [cumulativeCPUInstructions](cumulativecpuinstructions.md): Deprecated. The total number of CPU instructions the app executed during the reporting period.
