> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricpayload/applicationlaunchmetrics](https://developer.apple.com/documentation/metrickit/mxmetricpayload/applicationlaunchmetrics)

# applicationLaunchMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The app launch and resume metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [TimeToFirstDrawMetric](../timetofirstdrawmetric.md), [OptimizedTimeToFirstDrawMetric](../optimizedtimetofirstdrawmetric.md), [ApplicationResumeTimeMetric](../applicationresumetimemetric.md), or [ExtendedLaunchMetric](../extendedlaunchmetric.md) cases instead.

## Declaration

```swift
var applicationLaunchMetrics: MXAppLaunchMetric? { get }
```

## See Also

### Reading responsiveness metrics

- [animationMetrics](animationmetrics.md): Deprecated. The metrics for the responsiveness of app animations for the reporting period.
- [applicationResponsivenessMetrics](applicationresponsivenessmetrics.md): Deprecated. The metrics indicating an app’s responsiveness to user interaction for the reporting period.

# applicationLaunchMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The app launch and resume metrics for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [TimeToFirstDrawMetric](../timetofirstdrawmetric.md), [OptimizedTimeToFirstDrawMetric](../optimizedtimetofirstdrawmetric.md), [ApplicationResumeTimeMetric](../applicationresumetimemetric.md), or [ExtendedLaunchMetric](../extendedlaunchmetric.md) cases instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXAppLaunchMetric * applicationLaunchMetrics;
```

## See Also

### Reading responsiveness metrics

- [animationMetrics](animationmetrics.md): Deprecated. The metrics for the responsiveness of app animations for the reporting period.
- [applicationResponsivenessMetrics](applicationresponsivenessmetrics.md): Deprecated. The metrics indicating an app’s responsiveness to user interaction for the reporting period.
