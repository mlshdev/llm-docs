> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxanimationmetric](https://developer.apple.com/documentation/metrickit/mxanimationmetric)

# MXAnimationMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the responsiveness of animation in the app.

> Use [MetricResult](metricresult.md), and read the [HitchTimeMetric](hitchtimemetric.md) case instead.

## Declaration

```swift
class MXAnimationMetric
```

## Topics

### Reading the ratio of scrolling hitch time

- [scrollHitchTimeRatio](mxanimationmetric/scrollhitchtimeratio.md): Deprecated. The ratio of the time spent hitching while scrolling.

### Reading the ratio of hitch time

- [hitchTimeRatio](mxanimationmetric/hitchtimeratio.md): Deprecated. The ratio of time spent hitching during tracked animations.

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

- [MXAppLaunchMetric](mxapplaunchmetric.md): Deprecated. An object representing metrics about app launch time.
- [MXAppResponsivenessMetric](mxappresponsivenessmetric.md): Deprecated. An object representing metrics about the responsiveness of the app to user interaction.
- [MXLaunchTaskID](mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.

# MXAnimationMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the responsiveness of animation in the app.

> Use [MetricResult](metricresult.md), and read the [HitchTimeMetric](hitchtimemetric.md) case instead.

## Declaration

```objectivec
@interface MXAnimationMetric : MXMetric
```

## Topics

### Reading the ratio of scrolling hitch time

- [scrollHitchTimeRatio](mxanimationmetric/scrollhitchtimeratio.md): Deprecated. The ratio of the time spent hitching while scrolling.

### Reading the ratio of hitch time

- [hitchTimeRatio](mxanimationmetric/hitchtimeratio.md): Deprecated. The ratio of time spent hitching during tracked animations.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### Responsiveness metrics

- [MXAppLaunchMetric](mxapplaunchmetric.md): Deprecated. An object representing metrics about app launch time.
- [MXAppResponsivenessMetric](mxappresponsivenessmetric.md): Deprecated. An object representing metrics about the responsiveness of the app to user interaction.
- [MXLaunchTaskID](mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.
