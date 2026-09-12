> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxapplaunchmetric](https://developer.apple.com/documentation/metrickit/mxapplaunchmetric)

# MXAppLaunchMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about app launch time.

> Use [MetricResult](metricresult.md), and read the [TimeToFirstDrawMetric](timetofirstdrawmetric.md), [OptimizedTimeToFirstDrawMetric](optimizedtimetofirstdrawmetric.md), [ApplicationResumeTimeMetric](applicationresumetimemetric.md), or [ExtendedLaunchMetric](extendedlaunchmetric.md) cases instead.

## Declaration

```swift
class MXAppLaunchMetric
```

## Topics

### Viewing app launch and resume time

- [histogrammedOptimizedTimeToFirstDraw](mxapplaunchmetric/histogrammedoptimizedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time associated with prewarmed app launches.
- [histogrammedTimeToFirstDraw](mxapplaunchmetric/histogrammedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time taken to launch the app.
- [histogrammedApplicationResumeTime](mxapplaunchmetric/histogrammedapplicationresumetime.md): Deprecated. A histogram of the different amounts of time taken to resume the app from the background.
- [histogrammedExtendedLaunch](mxapplaunchmetric/histogrammedextendedlaunch.md): Deprecated. A histogram of the different amounts of time taken to launch the app, including the extended launch tasks.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Responsiveness metrics

- [MXAnimationMetric](mxanimationmetric.md): Deprecated. An object representing metrics about the responsiveness of animation in the app.
- [MXAppResponsivenessMetric](mxappresponsivenessmetric.md): Deprecated. An object representing metrics about the responsiveness of the app to user interaction.
- [MXLaunchTaskID](mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.

# MXAppLaunchMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about app launch time.

> Use [MetricResult](metricresult.md), and read the [TimeToFirstDrawMetric](timetofirstdrawmetric.md), [OptimizedTimeToFirstDrawMetric](optimizedtimetofirstdrawmetric.md), [ApplicationResumeTimeMetric](applicationresumetimemetric.md), or [ExtendedLaunchMetric](extendedlaunchmetric.md) cases instead.

## Declaration

```objectivec
@interface MXAppLaunchMetric : MXMetric
```

## Topics

### Viewing app launch and resume time

- [histogrammedOptimizedTimeToFirstDraw](mxapplaunchmetric/histogrammedoptimizedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time associated with prewarmed app launches.
- [histogrammedTimeToFirstDraw](mxapplaunchmetric/histogrammedtimetofirstdraw.md): Deprecated. A histogram of the different amounts of time taken to launch the app.
- [histogrammedApplicationResumeTime](mxapplaunchmetric/histogrammedapplicationresumetime.md): Deprecated. A histogram of the different amounts of time taken to resume the app from the background.
- [histogrammedExtendedLaunch](mxapplaunchmetric/histogrammedextendedlaunch.md): Deprecated. A histogram of the different amounts of time taken to launch the app, including the extended launch tasks.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### Responsiveness metrics

- [MXAnimationMetric](mxanimationmetric.md): Deprecated. An object representing metrics about the responsiveness of animation in the app.
- [MXAppResponsivenessMetric](mxappresponsivenessmetric.md): Deprecated. An object representing metrics about the responsiveness of the app to user interaction.
- [MXLaunchTaskID](mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.
