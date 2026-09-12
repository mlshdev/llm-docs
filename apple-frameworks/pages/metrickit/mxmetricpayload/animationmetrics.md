> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricpayload/animationmetrics](https://developer.apple.com/documentation/metrickit/mxmetricpayload/animationmetrics)

# animationMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The metrics for the responsiveness of app animations for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [HitchTimeMetric](../hitchtimemetric.md) case instead.

## Declaration

```swift
var animationMetrics: MXAnimationMetric? { get }
```

## See Also

### Reading responsiveness metrics

- [applicationLaunchMetrics](applicationlaunchmetrics.md): Deprecated. The app launch and resume metrics for the reporting period.
- [applicationResponsivenessMetrics](applicationresponsivenessmetrics.md): Deprecated. The metrics indicating an app’s responsiveness to user interaction for the reporting period.

# animationMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The metrics for the responsiveness of app animations for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [HitchTimeMetric](../hitchtimemetric.md) case instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXAnimationMetric * animationMetrics;
```

## See Also

### Reading responsiveness metrics

- [applicationLaunchMetrics](applicationlaunchmetrics.md): Deprecated. The app launch and resume metrics for the reporting period.
- [applicationResponsivenessMetrics](applicationresponsivenessmetrics.md): Deprecated. The metrics indicating an app’s responsiveness to user interaction for the reporting period.
