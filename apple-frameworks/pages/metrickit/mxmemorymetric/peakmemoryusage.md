> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmemorymetric/peakmemoryusage](https://developer.apple.com/documentation/metrickit/mxmemorymetric/peakmemoryusage)

# peakMemoryUsage (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The largest amount of memory used by the app.

> Use [PeakMemoryMetric](../peakmemorymetric.md) instead.

## Declaration

```swift
var peakMemoryUsage: Measurement<UnitInformationStorage> { get }
```

## See Also

### Measuring memory use

- [averageSuspendedMemory](averagesuspendedmemory.md): Deprecated. The average amount of memory in use by the app when it’s suspended.

# peakMemoryUsage (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The largest amount of memory used by the app.

> Use [PeakMemoryMetric](../peakmemorymetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * peakMemoryUsage;
```

## See Also

### Measuring memory use

- [averageSuspendedMemory](averagesuspendedmemory.md): Deprecated. The average amount of memory in use by the app when it’s suspended.
