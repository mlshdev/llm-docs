> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxappruntimemetric/cumulativebackgroundaudiotime

# cumulativeBackgroundAudioTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

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
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

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
