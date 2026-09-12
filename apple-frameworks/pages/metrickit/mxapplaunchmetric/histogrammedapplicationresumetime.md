> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxapplaunchmetric/histogrammedapplicationresumetime](https://developer.apple.com/documentation/metrickit/mxapplaunchmetric/histogrammedapplicationresumetime)

# histogrammedApplicationResumeTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A histogram of the different amounts of time taken to resume the app from the background.

> Use [ApplicationResumeTimeMetric](../applicationresumetimemetric.md) instead.

## Declaration

```swift
var histogrammedApplicationResumeTime: MXHistogram<UnitDuration> { get }
```

## See Also

### Viewing app launch and resume time

- [histogrammedOptimizedTimeToFirstDraw](histogrammedoptimizedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time associated with prewarmed app launches.
- [histogrammedTimeToFirstDraw](histogrammedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time taken to launch the app.
- [histogrammedExtendedLaunch](histogrammedextendedlaunch.md): Deprecated. A histogram of the different amounts of time taken to launch the app, including the extended launch tasks.

# histogrammedApplicationResumeTime (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A histogram of the different amounts of time taken to resume the app from the background.

> Use [ApplicationResumeTimeMetric](../applicationresumetimemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) MXHistogram<NSUnitDuration *> * histogrammedApplicationResumeTime;
```

## See Also

### Viewing app launch and resume time

- [histogrammedOptimizedTimeToFirstDraw](histogrammedoptimizedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time associated with prewarmed app launches.
- [histogrammedTimeToFirstDraw](histogrammedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time taken to launch the app.
- [histogrammedExtendedLaunch](histogrammedextendedlaunch.md): Deprecated. A histogram of the different amounts of time taken to launch the app, including the extended launch tasks.
