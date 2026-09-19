> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxmetricpayload/memorymetrics

# memoryMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The memory metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [PeakMemoryMetric](../peakmemorymetric.md) or [SuspendedMemoryMetric](../suspendedmemorymetric.md) cases instead.

## Declaration

```swift
var memoryMetrics: MXMemoryMetric? { get }
```

## See Also

### Reading performance metrics

- [applicationExitMetrics](applicationexitmetrics.md): Deprecated. The app foreground and background exit metrics for the reporting period.
- [applicationTimeMetrics](applicationtimemetrics.md): Deprecated. The app foreground and background time metrics for the reporting period.

# memoryMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The memory metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [PeakMemoryMetric](../peakmemorymetric.md) or [SuspendedMemoryMetric](../suspendedmemorymetric.md) cases instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXMemoryMetric * memoryMetrics;
```

## See Also

### Reading performance metrics

- [applicationExitMetrics](applicationexitmetrics.md): Deprecated. The app foreground and background exit metrics for the reporting period.
- [applicationTimeMetrics](applicationtimemetrics.md): Deprecated. The app foreground and background time metrics for the reporting period.
