> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxlocationactivitymetric/cumulativebestaccuracyfornavigationtime](https://developer.apple.com/documentation/metrickit/mxlocationactivitymetric/cumulativebestaccuracyfornavigationtime)

# cumulativeBestAccuracyForNavigationTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total time spent tracking the current location at the best accuracy for navigation.

> Use [bestAccuracyForNavigation](../locationactivitytimemetric/bestaccuracyfornavigation.md) instead.

## Declaration

```swift
var cumulativeBestAccuracyForNavigationTime: Measurement<UnitDuration> { get }
```

## See Also

### Reading location services use

- [cumulativeBestAccuracyTime](cumulativebestaccuracytime.md): Deprecated. The total time spent tracking the current location at the best accuracy.
- [cumulativeNearestTenMetersAccuracyTime](cumulativenearesttenmetersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 10 meters.
- [cumulativeHundredMetersAccuracyTime](cumulativehundredmetersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 100 meters.
- [cumulativeKilometerAccuracyTime](cumulativekilometeraccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 1 kilometer.
- [cumulativeThreeKilometersAccuracyTime](cumulativethreekilometersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 3 kilometers.

# cumulativeBestAccuracyForNavigationTime (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total time spent tracking the current location at the best accuracy for navigation.

> Use [bestAccuracyForNavigation](../locationactivitytimemetric/bestaccuracyfornavigation.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitDuration *> * cumulativeBestAccuracyForNavigationTime;
```

## See Also

### Reading location services use

- [cumulativeBestAccuracyTime](cumulativebestaccuracytime.md): Deprecated. The total time spent tracking the current location at the best accuracy.
- [cumulativeNearestTenMetersAccuracyTime](cumulativenearesttenmetersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 10 meters.
- [cumulativeHundredMetersAccuracyTime](cumulativehundredmetersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 100 meters.
- [cumulativeKilometerAccuracyTime](cumulativekilometeraccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 1 kilometer.
- [cumulativeThreeKilometersAccuracyTime](cumulativethreekilometersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 3 kilometers.
