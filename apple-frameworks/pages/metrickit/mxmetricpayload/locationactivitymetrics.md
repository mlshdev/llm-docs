> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricpayload/locationactivitymetrics](https://developer.apple.com/documentation/metrickit/mxmetricpayload/locationactivitymetrics)

# locationActivityMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The location-tracking activity for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [LocationActivityTimeMetric](../locationactivitytimemetric.md) case instead.

## Declaration

```swift
var locationActivityMetrics: MXLocationActivityMetric? { get }
```

## See Also

### Reading battery metrics

- [cellularConditionMetrics](cellularconditionmetrics.md): Deprecated. The cellular condition measurements for the reporting period.
- [cpuMetrics](cpumetrics.md): Deprecated. The CPU metrics for the reporting period.
- [displayMetrics](displaymetrics.md): Deprecated. The display metrics for the reporting period.
- [gpuMetrics](gpumetrics.md): Deprecated. The GPU metrics for the reporting period.
- [networkTransferMetrics](networktransfermetrics.md): Deprecated. The network-transfer activity for the reporting period.

# locationActivityMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The location-tracking activity for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [LocationActivityTimeMetric](../locationactivitytimemetric.md) case instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXLocationActivityMetric * locationActivityMetrics;
```

## See Also

### Reading battery metrics

- [cellularConditionMetrics](cellularconditionmetrics.md): Deprecated. The cellular condition measurements for the reporting period.
- [cpuMetrics](cpumetrics.md): Deprecated. The CPU metrics for the reporting period.
- [displayMetrics](displaymetrics.md): Deprecated. The display metrics for the reporting period.
- [gpuMetrics](gpumetrics.md): Deprecated. The GPU metrics for the reporting period.
- [networkTransferMetrics](networktransfermetrics.md): Deprecated. The network-transfer activity for the reporting period.
