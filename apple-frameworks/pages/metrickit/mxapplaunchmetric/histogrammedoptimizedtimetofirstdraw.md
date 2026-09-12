> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxapplaunchmetric/histogrammedoptimizedtimetofirstdraw](https://developer.apple.com/documentation/metrickit/mxapplaunchmetric/histogrammedoptimizedtimetofirstdraw)

# histogrammedOptimizedTimeToFirstDraw (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 15.2+ (deprecated in 27.0) · iPadOS 15.2+ (deprecated in 27.0) · Mac Catalyst 15.2+ (deprecated in 27.0) · macOS 12.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A histogram of the different amounts of time associated with prewarmed app launches.

> Use [OptimizedTimeToFirstDrawMetric](../optimizedtimetofirstdrawmetric.md) instead.

## Declaration

```swift
var histogrammedOptimizedTimeToFirstDraw: MXHistogram<UnitDuration> { get }
```

## See Also

### Viewing app launch and resume time

- [histogrammedTimeToFirstDraw](histogrammedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time taken to launch the app.
- [histogrammedApplicationResumeTime](histogrammedapplicationresumetime.md): Deprecated. A histogram of the different amounts of time taken to resume the app from the background.
- [histogrammedExtendedLaunch](histogrammedextendedlaunch.md): Deprecated. A histogram of the different amounts of time taken to launch the app, including the extended launch tasks.

# histogrammedOptimizedTimeToFirstDraw (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 15.2+ (deprecated in 27.0) · iPadOS 15.2+ (deprecated in 27.0) · Mac Catalyst 15.2+ (deprecated in 27.0) · macOS 12.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A histogram of the different amounts of time associated with prewarmed app launches.

> Use [OptimizedTimeToFirstDrawMetric](../optimizedtimetofirstdrawmetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) MXHistogram<NSUnitDuration *> * histogrammedOptimizedTimeToFirstDraw;
```

## See Also

### Viewing app launch and resume time

- [histogrammedTimeToFirstDraw](histogrammedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time taken to launch the app.
- [histogrammedApplicationResumeTime](histogrammedapplicationresumetime.md): Deprecated. A histogram of the different amounts of time taken to resume the app from the background.
- [histogrammedExtendedLaunch](histogrammedextendedlaunch.md): Deprecated. A histogram of the different amounts of time taken to launch the app, including the extended launch tasks.
