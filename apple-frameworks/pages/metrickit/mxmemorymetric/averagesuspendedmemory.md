> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmemorymetric/averagesuspendedmemory](https://developer.apple.com/documentation/metrickit/mxmemorymetric/averagesuspendedmemory)

# averageSuspendedMemory (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The average amount of memory in use by the app when it’s suspended.

> Use [SuspendedMemoryMetric](../suspendedmemorymetric.md) instead.

## Declaration

```swift
var averageSuspendedMemory: MXAverage<UnitInformationStorage> { get }
```

## See Also

### Measuring memory use

- [peakMemoryUsage](peakmemoryusage.md): Deprecated. The largest amount of memory used by the app.

# averageSuspendedMemory (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The average amount of memory in use by the app when it’s suspended.

> Use [SuspendedMemoryMetric](../suspendedmemorymetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) MXAverage<NSUnitInformationStorage *> * averageSuspendedMemory;
```

## See Also

### Measuring memory use

- [peakMemoryUsage](peakmemoryusage.md): Deprecated. The largest amount of memory used by the app.
