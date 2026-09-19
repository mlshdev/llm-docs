> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxmetricpayload/diskiometrics

# diskIOMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The storage metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [LogicalDiskWritesMetric](../logicaldiskwritesmetric.md) case instead.

## Declaration

```swift
var diskIOMetrics: MXDiskIOMetric? { get }
```

# diskIOMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The storage metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [LogicalDiskWritesMetric](../logicaldiskwritesmetric.md) case instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXDiskIOMetric * diskIOMetrics;
```
