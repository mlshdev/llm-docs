> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxappruntimemetric/cumulativebackgroundaudiotime](https://developer.apple.com/documentation/metrickit/mxappruntimemetric/cumulativebackgroundaudiotime)

# cumulativeBackgroundAudioTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total time the app is in the background and playing audio.

> Use [TotalBackgroundAudioTimeMetric](../totalbackgroundaudiotimemetric.md) instead.

## Declaration

```swift
var cumulativeBackgroundAudioTime: Measurement<UnitDuration> { get }
```

## See Also

### Reading application run time

- [cumulativeForegroundTime](cumulativeforegroundtime.md): Deprecated. The total time the app is in the foreground.
- [cumulativeBackgroundTime](cumulativebackgroundtime.md): Deprecated. The total time the app is active in the background.
- [cumulativeBackgroundLocationTime](cumulativebackgroundlocationtime.md): Deprecated. The total time the app is in the background and using location services.

# cumulativeBackgroundAudioTime (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total time the app is in the background and playing audio.

> Use [TotalBackgroundAudioTimeMetric](../totalbackgroundaudiotimemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitDuration *> * cumulativeBackgroundAudioTime;
```

## See Also

### Reading application run time

- [cumulativeForegroundTime](cumulativeforegroundtime.md): Deprecated. The total time the app is in the foreground.
- [cumulativeBackgroundTime](cumulativebackgroundtime.md): Deprecated. The total time the app is active in the background.
- [cumulativeBackgroundLocationTime](cumulativebackgroundlocationtime.md): Deprecated. The total time the app is in the background and using location services.
