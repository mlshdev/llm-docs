> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxmetricpayload/applicationresponsivenessmetrics

# applicationResponsivenessMetrics (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The metrics indicating an app’s responsiveness to user interaction for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [HangTimeMetric](../hangtimemetric.md) case instead.

## Declaration

```swift
var applicationResponsivenessMetrics: MXAppResponsivenessMetric? { get }
```

## See Also

### Reading responsiveness metrics

- [applicationLaunchMetrics](applicationlaunchmetrics.md): Deprecated. The app launch and resume metrics for the reporting period.
- [animationMetrics](animationmetrics.md): Deprecated. The metrics for the responsiveness of app animations for the reporting period.

# applicationResponsivenessMetrics (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The metrics indicating an app’s responsiveness to user interaction for the reporting period.

> Use [MetricResult](../metricresult.md), and read the [HangTimeMetric](../hangtimemetric.md) case instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXAppResponsivenessMetric * applicationResponsivenessMetrics;
```

## See Also

### Reading responsiveness metrics

- [applicationLaunchMetrics](applicationlaunchmetrics.md): Deprecated. The app launch and resume metrics for the reporting period.
- [animationMetrics](animationmetrics.md): Deprecated. The metrics for the responsiveness of app animations for the reporting period.
