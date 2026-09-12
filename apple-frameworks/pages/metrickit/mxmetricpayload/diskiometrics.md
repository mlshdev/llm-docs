> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricpayload/diskiometrics](https://developer.apple.com/documentation/metrickit/mxmetricpayload/diskiometrics)

# diskIOMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The storage metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [LogicalDiskWritesMetric](../logicaldiskwritesmetric.md) case instead.

## Declaration

```swift
var diskIOMetrics: MXDiskIOMetric? { get }
```

# diskIOMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The storage metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [LogicalDiskWritesMetric](../logicaldiskwritesmetric.md) case instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXDiskIOMetric * diskIOMetrics;
```
