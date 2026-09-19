> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxlocationactivitymetric/cumulativehundredmetersaccuracytime

# cumulativeHundredMetersAccuracyTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The total time spent tracking the current location to an accuracy of 100 meters.

> Use [oneHundredMeter](../locationactivitytimemetric/onehundredmeter.md) instead.

## Declaration

```swift
var cumulativeHundredMetersAccuracyTime: Measurement<UnitDuration> { get }
```

## See Also

### Reading location services use

- [cumulativeBestAccuracyForNavigationTime](cumulativebestaccuracyfornavigationtime.md): Deprecated. The total time spent tracking the current location at the best accuracy for navigation.
- [cumulativeBestAccuracyTime](cumulativebestaccuracytime.md): Deprecated. The total time spent tracking the current location at the best accuracy.
- [cumulativeNearestTenMetersAccuracyTime](cumulativenearesttenmetersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 10 meters.
- [cumulativeKilometerAccuracyTime](cumulativekilometeraccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 1 kilometer.
- [cumulativeThreeKilometersAccuracyTime](cumulativethreekilometersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 3 kilometers.

# cumulativeHundredMetersAccuracyTime (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The total time spent tracking the current location to an accuracy of 100 meters.

> Use [oneHundredMeter](../locationactivitytimemetric/onehundredmeter.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitDuration *> * cumulativeHundredMetersAccuracyTime;
```

## See Also

### Reading location services use

- [cumulativeBestAccuracyForNavigationTime](cumulativebestaccuracyfornavigationtime.md): Deprecated. The total time spent tracking the current location at the best accuracy for navigation.
- [cumulativeBestAccuracyTime](cumulativebestaccuracytime.md): Deprecated. The total time spent tracking the current location at the best accuracy.
- [cumulativeNearestTenMetersAccuracyTime](cumulativenearesttenmetersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 10 meters.
- [cumulativeKilometerAccuracyTime](cumulativekilometeraccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 1 kilometer.
- [cumulativeThreeKilometersAccuracyTime](cumulativethreekilometersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 3 kilometers.
