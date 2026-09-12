> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxapplaunchmetric/histogrammedextendedlaunch](https://developer.apple.com/documentation/metrickit/mxapplaunchmetric/histogrammedextendedlaunch)

# histogrammedExtendedLaunch (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A histogram of the different amounts of time taken to launch the app, including the extended launch tasks.

> Use [ExtendedLaunchMetric](../extendedlaunchmetric.md) instead.

## Declaration

```swift
var histogrammedExtendedLaunch: MXHistogram<UnitDuration> { get }
```

## See Also

### Viewing app launch and resume time

- [histogrammedOptimizedTimeToFirstDraw](histogrammedoptimizedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time associated with prewarmed app launches.
- [histogrammedTimeToFirstDraw](histogrammedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time taken to launch the app.
- [histogrammedApplicationResumeTime](histogrammedapplicationresumetime.md): Deprecated. A histogram of the different amounts of time taken to resume the app from the background.

# histogrammedExtendedLaunch (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A histogram of the different amounts of time taken to launch the app, including the extended launch tasks.

> Use [ExtendedLaunchMetric](../extendedlaunchmetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) MXHistogram<NSUnitDuration *> * histogrammedExtendedLaunch;
```

## See Also

### Viewing app launch and resume time

- [histogrammedOptimizedTimeToFirstDraw](histogrammedoptimizedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time associated with prewarmed app launches.
- [histogrammedTimeToFirstDraw](histogrammedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time taken to launch the app.
- [histogrammedApplicationResumeTime](histogrammedapplicationresumetime.md): Deprecated. A histogram of the different amounts of time taken to resume the app from the background.
