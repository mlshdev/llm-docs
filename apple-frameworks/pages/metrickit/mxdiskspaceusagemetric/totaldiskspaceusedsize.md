> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxdiskspaceusagemetric/totaldiskspaceusedsize

# totalDiskSpaceUsedSize (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.2) · iPadOS 26.0+ (deprecated in 27.2) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.2) · visionOS 26.0+ (deprecated in 27.2)

The total amount of used disk storage on the current device.

> Use [TotalDiskSpaceCapacityMetric](../totaldiskspacecapacitymetric.md) instead.

## Declaration

```swift
var totalDiskSpaceUsedSize: Measurement<UnitInformationStorage> { get }
```

## See Also

### Reading disk capacity and space

- [totalDiskSpaceCapacity](totaldiskspacecapacity.md): Deprecated. The total disk space capacity of the current device.

# totalDiskSpaceUsedSize (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.2) · iPadOS 26.0+ (deprecated in 27.2) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.2) · visionOS 26.0+ (deprecated in 27.2)

The total amount of used disk storage on the current device.

> Use [TotalDiskSpaceCapacityMetric](../totaldiskspacecapacitymetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * totalDiskSpaceUsedSize;
```

## See Also

### Reading disk capacity and space

- [totalDiskSpaceCapacity](totaldiskspacecapacity.md): Deprecated. The total disk space capacity of the current device.
