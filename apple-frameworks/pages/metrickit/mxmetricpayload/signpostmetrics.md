> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricpayload/signpostmetrics](https://developer.apple.com/documentation/metrickit/mxmetricpayload/signpostmetrics)

# signpostMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An array of the custom metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [SignpostIntervalMetric](../signpostintervalmetric.md) case instead.

## Declaration

```swift
var signpostMetrics: [MXSignpostMetric]? { get }
```

# signpostMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An array of the custom metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [SignpostIntervalMetric](../signpostintervalmetric.md) case instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSArray<MXSignpostMetric *> * signpostMetrics;
```
