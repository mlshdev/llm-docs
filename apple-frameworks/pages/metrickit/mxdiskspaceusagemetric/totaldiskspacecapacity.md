> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxdiskspaceusagemetric/totaldiskspacecapacity

# totalDiskSpaceCapacity (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.2) · iPadOS 26.0+ (deprecated in 27.2) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.2) · visionOS 26.0+ (deprecated in 27.2)

The total disk space capacity of the current device.

> Use [TotalDiskSpaceCapacityMetric](../totaldiskspacecapacitymetric.md) instead.

## Declaration

```swift
var totalDiskSpaceCapacity: Measurement<UnitInformationStorage> { get }
```

<a id="discussion"></a>

## Discussion

Calculate the amount of free space on this device by subtracting [totalDiskSpaceUsedSize](totaldiskspaceusedsize.md) from this value.

## See Also

### Reading disk capacity and space

- [totalDiskSpaceUsedSize](totaldiskspaceusedsize.md): Deprecated. The total amount of used disk storage on the current device.

# totalDiskSpaceCapacity (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.2) · iPadOS 26.0+ (deprecated in 27.2) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.2) · visionOS 26.0+ (deprecated in 27.2)

The total disk space capacity of the current device.

> Use [TotalDiskSpaceCapacityMetric](../totaldiskspacecapacitymetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * totalDiskSpaceCapacity;
```

<a id="discussion"></a>

## Discussion

Calculate the amount of free space on this device by subtracting [totalDiskSpaceUsedSize](totaldiskspaceusedsize.md) from this value.

## See Also

### Reading disk capacity and space

- [totalDiskSpaceUsedSize](totaldiskspaceusedsize.md): Deprecated. The total amount of used disk storage on the current device.
