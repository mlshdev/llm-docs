> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxmetricpayload/diskspaceusagemetrics

# diskSpaceUsageMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.2) · iPadOS 26.0+ (deprecated in 27.2) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.2) · visionOS 26.0+ (deprecated in 27.2)

An object containing disk space usage metrics for this application.

> Use [MetricResult](../metricresult.md), and read the [TotalFileCountMetric](../totalfilecountmetric.md), [TotalFileSizeMetric](../totalfilesizemetric.md), or [TotalDiskSpaceCapacityMetric](../totaldiskspacecapacitymetric.md) cases instead.

## Declaration

```swift
var diskSpaceUsageMetrics: MXDiskSpaceUsageMetric? { get }
```

# diskSpaceUsageMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.2) · iPadOS 26.0+ (deprecated in 27.2) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.2) · visionOS 26.0+ (deprecated in 27.2)

An object containing disk space usage metrics for this application.

> Use [MetricResult](../metricresult.md), and read the [TotalFileCountMetric](../totalfilecountmetric.md), [TotalFileSizeMetric](../totalfilesizemetric.md), or [TotalDiskSpaceCapacityMetric](../totaldiskspacecapacitymetric.md) cases instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXDiskSpaceUsageMetric * diskSpaceUsageMetrics;
```
