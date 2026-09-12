> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricpayload/applicationtimemetrics](https://developer.apple.com/documentation/metrickit/mxmetricpayload/applicationtimemetrics)

# applicationTimeMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The app foreground and background time metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [TotalForegroundTimeMetric](../totalforegroundtimemetric.md), [TotalBackgroundTimeMetric](../totalbackgroundtimemetric.md), [TotalBackgroundAudioTimeMetric](../totalbackgroundaudiotimemetric.md), or [TotalBackgroundLocationTimeMetric](../totalbackgroundlocationtimemetric.md) cases instead.

## Declaration

```swift
var applicationTimeMetrics: MXAppRunTimeMetric? { get }
```

## See Also

### Reading performance metrics

- [applicationExitMetrics](applicationexitmetrics.md): Deprecated. The app foreground and background exit metrics for the reporting period.
- [memoryMetrics](memorymetrics.md): Deprecated. The memory metrics for the reporting period.

# applicationTimeMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The app foreground and background time metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [TotalForegroundTimeMetric](../totalforegroundtimemetric.md), [TotalBackgroundTimeMetric](../totalbackgroundtimemetric.md), [TotalBackgroundAudioTimeMetric](../totalbackgroundaudiotimemetric.md), or [TotalBackgroundLocationTimeMetric](../totalbackgroundlocationtimemetric.md) cases instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXAppRunTimeMetric * applicationTimeMetrics;
```

## See Also

### Reading performance metrics

- [applicationExitMetrics](applicationexitmetrics.md): Deprecated. The app foreground and background exit metrics for the reporting period.
- [memoryMetrics](memorymetrics.md): Deprecated. The memory metrics for the reporting period.
