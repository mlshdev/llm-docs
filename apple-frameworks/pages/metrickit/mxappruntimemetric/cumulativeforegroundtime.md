> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxappruntimemetric/cumulativeforegroundtime](https://developer.apple.com/documentation/metrickit/mxappruntimemetric/cumulativeforegroundtime)

# cumulativeForegroundTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total time the app is in the foreground.

> Use [TotalForegroundTimeMetric](../totalforegroundtimemetric.md) instead.

## Declaration

```swift
var cumulativeForegroundTime: Measurement<UnitDuration> { get }
```

## See Also

### Reading application run time

- [cumulativeBackgroundTime](cumulativebackgroundtime.md): Deprecated. The total time the app is active in the background.
- [cumulativeBackgroundAudioTime](cumulativebackgroundaudiotime.md): Deprecated. The total time the app is in the background and playing audio.
- [cumulativeBackgroundLocationTime](cumulativebackgroundlocationtime.md): Deprecated. The total time the app is in the background and using location services.

# cumulativeForegroundTime (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total time the app is in the foreground.

> Use [TotalForegroundTimeMetric](../totalforegroundtimemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitDuration *> * cumulativeForegroundTime;
```

## See Also

### Reading application run time

- [cumulativeBackgroundTime](cumulativebackgroundtime.md): Deprecated. The total time the app is active in the background.
- [cumulativeBackgroundAudioTime](cumulativebackgroundaudiotime.md): Deprecated. The total time the app is in the background and playing audio.
- [cumulativeBackgroundLocationTime](cumulativebackgroundlocationtime.md): Deprecated. The total time the app is in the background and using location services.
