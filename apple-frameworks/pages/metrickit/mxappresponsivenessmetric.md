> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxappresponsivenessmetric](https://developer.apple.com/documentation/metrickit/mxappresponsivenessmetric)

# MXAppResponsivenessMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the responsiveness of the app to user interaction.

> Use [MetricResult](metricresult.md), and read the [HangTimeMetric](hangtimemetric.md) case instead.

## Declaration

```swift
class MXAppResponsivenessMetric
```

## Topics

### Viewing application unresponsive durations

- [histogrammedApplicationHangTime](mxappresponsivenessmetric/histogrammedapplicationhangtime.md): Deprecated. A histogram of the different durations of time in which the app is too busy to handle user interaction responsively.

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
- [MXAppLaunchMetric](mxapplaunchmetric.md): Deprecated. An object representing metrics about app launch time.
- [MXLaunchTaskID](mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.

# MXAppResponsivenessMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the responsiveness of the app to user interaction.

> Use [MetricResult](metricresult.md), and read the [HangTimeMetric](hangtimemetric.md) case instead.

## Declaration

```objectivec
@interface MXAppResponsivenessMetric : MXMetric
```

## Topics

### Viewing application unresponsive durations

- [histogrammedApplicationHangTime](mxappresponsivenessmetric/histogrammedapplicationhangtime.md): Deprecated. A histogram of the different durations of time in which the app is too busy to handle user interaction responsively.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### Responsiveness metrics

- [MXAnimationMetric](mxanimationmetric.md): Deprecated. An object representing metrics about the responsiveness of animation in the app.
- [MXAppLaunchMetric](mxapplaunchmetric.md): Deprecated. An object representing metrics about app launch time.
- [MXLaunchTaskID](mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.
