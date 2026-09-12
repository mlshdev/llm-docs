> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiskiometric/cumulativelogicalwrites](https://developer.apple.com/documentation/metrickit/mxdiskiometric/cumulativelogicalwrites)

# cumulativeLogicalWrites (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total amount of data written to disk or other long term storage.

> Use [LogicalDiskWritesMetric](../logicaldiskwritesmetric.md) instead.

## Declaration

```swift
var cumulativeLogicalWrites: Measurement<UnitInformationStorage> { get }
```

# cumulativeLogicalWrites (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total amount of data written to disk or other long term storage.

> Use [LogicalDiskWritesMetric](../logicaldiskwritesmetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * cumulativeLogicalWrites;
```
