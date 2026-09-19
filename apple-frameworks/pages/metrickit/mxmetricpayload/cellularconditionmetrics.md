> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxmetricpayload/cellularconditionmetrics

# cellularConditionMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The cellular condition measurements for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [CellularConditionTimeMetric](../cellularconditiontimemetric.md) case instead.

## Declaration

```swift
var cellularConditionMetrics: MXCellularConditionMetric? { get }
```

## See Also

### Reading battery metrics

- [cpuMetrics](cpumetrics.md): Deprecated. The CPU metrics for the reporting period.
- [displayMetrics](displaymetrics.md): Deprecated. The display metrics for the reporting period.
- [gpuMetrics](gpumetrics.md): Deprecated. The GPU metrics for the reporting period.
- [locationActivityMetrics](locationactivitymetrics.md): Deprecated. The location-tracking activity for the reporting period.
- [networkTransferMetrics](networktransfermetrics.md): Deprecated. The network-transfer activity for the reporting period.

# cellularConditionMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The cellular condition measurements for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [CellularConditionTimeMetric](../cellularconditiontimemetric.md) case instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXCellularConditionMetric * cellularConditionMetrics;
```

## See Also

### Reading battery metrics

- [cpuMetrics](cpumetrics.md): Deprecated. The CPU metrics for the reporting period.
- [displayMetrics](displaymetrics.md): Deprecated. The display metrics for the reporting period.
- [gpuMetrics](gpumetrics.md): Deprecated. The GPU metrics for the reporting period.
- [locationActivityMetrics](locationactivitymetrics.md): Deprecated. The location-tracking activity for the reporting period.
- [networkTransferMetrics](networktransfermetrics.md): Deprecated. The network-transfer activity for the reporting period.
