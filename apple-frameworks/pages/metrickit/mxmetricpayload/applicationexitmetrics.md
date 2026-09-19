> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxmetricpayload/applicationexitmetrics

# applicationExitMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The app foreground and background exit metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [ForegroundTerminationMetric](../foregroundterminationmetric.md) or [BackgroundTerminationMetric](../backgroundterminationmetric.md) cases instead.

## Declaration

```swift
var applicationExitMetrics: MXAppExitMetric? { get }
```

## See Also

### Reading performance metrics

- [applicationTimeMetrics](applicationtimemetrics.md): Deprecated. The app foreground and background time metrics for the reporting period.
- [memoryMetrics](memorymetrics.md): Deprecated. The memory metrics for the reporting period.

# applicationExitMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The app foreground and background exit metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [ForegroundTerminationMetric](../foregroundterminationmetric.md) or [BackgroundTerminationMetric](../backgroundterminationmetric.md) cases instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXAppExitMetric * applicationExitMetrics;
```

## See Also

### Reading performance metrics

- [applicationTimeMetrics](applicationtimemetrics.md): Deprecated. The app foreground and background time metrics for the reporting period.
- [memoryMetrics](memorymetrics.md): Deprecated. The memory metrics for the reporting period.
