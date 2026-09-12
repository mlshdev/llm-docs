> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricpayload/cpumetrics](https://developer.apple.com/documentation/metrickit/mxmetricpayload/cpumetrics)

# cpuMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The CPU metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [CPUTimeMetric](../cputimemetric.md) or [CPUInstructionsCountMetric](../cpuinstructionscountmetric.md) cases instead.

## Declaration

```swift
var cpuMetrics: MXCPUMetric? { get }
```

## See Also

### Reading battery metrics

- [cellularConditionMetrics](cellularconditionmetrics.md): Deprecated. The cellular condition measurements for the reporting period.
- [displayMetrics](displaymetrics.md): Deprecated. The display metrics for the reporting period.
- [gpuMetrics](gpumetrics.md): Deprecated. The GPU metrics for the reporting period.
- [locationActivityMetrics](locationactivitymetrics.md): Deprecated. The location-tracking activity for the reporting period.
- [networkTransferMetrics](networktransfermetrics.md): Deprecated. The network-transfer activity for the reporting period.

# cpuMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The CPU metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [CPUTimeMetric](../cputimemetric.md) or [CPUInstructionsCountMetric](../cpuinstructionscountmetric.md) cases instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXCPUMetric * cpuMetrics;
```

## See Also

### Reading battery metrics

- [cellularConditionMetrics](cellularconditionmetrics.md): Deprecated. The cellular condition measurements for the reporting period.
- [displayMetrics](displaymetrics.md): Deprecated. The display metrics for the reporting period.
- [gpuMetrics](gpumetrics.md): Deprecated. The GPU metrics for the reporting period.
- [locationActivityMetrics](locationactivitymetrics.md): Deprecated. The location-tracking activity for the reporting period.
- [networkTransferMetrics](networktransfermetrics.md): Deprecated. The network-transfer activity for the reporting period.
