> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/kcllocationaccuracythreekilometers

# kCLLocationAccuracyThreeKilometers (Swift)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accurate to the nearest three kilometers.

## Declaration

```swift
let kCLLocationAccuracyThreeKilometers: CLLocationAccuracy
```

<a id="Discussion"></a>

## Discussion

This level of accurate is available only if `isAuthorizedForPreciseLocation` is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Desired Accuracy Constants

- [kCLLocationAccuracyBestForNavigation](kcllocationaccuracybestfornavigation.md): The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
- [kCLLocationAccuracyBest](kcllocationaccuracybest.md): The best level of accuracy available.
- [kCLLocationAccuracyNearestTenMeters](kcllocationaccuracynearesttenmeters.md): Accurate to within ten meters of the desired target.
- [kCLLocationAccuracyHundredMeters](kcllocationaccuracyhundredmeters.md): Accurate to within one hundred meters.
- [kCLLocationAccuracyKilometer](kcllocationaccuracykilometer.md): Accurate to the nearest kilometer.
- [kCLLocationAccuracyReduced](kcllocationaccuracyreduced.md): The level of accuracy used when an app isn’t authorized for full accuracy location data.

# kCLLocationAccuracyThreeKilometers (Objective-C)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accurate to the nearest three kilometers.

## Declaration

```objectivec
extern const CLLocationAccuracy kCLLocationAccuracyThreeKilometers;
```

<a id="Discussion"></a>

## Discussion

This level of accurate is available only if `isAuthorizedForPreciseLocation` is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Desired Accuracy Constants

- [kCLLocationAccuracyBestForNavigation](kcllocationaccuracybestfornavigation.md): The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
- [kCLLocationAccuracyBest](kcllocationaccuracybest.md): The best level of accuracy available.
- [kCLLocationAccuracyNearestTenMeters](kcllocationaccuracynearesttenmeters.md): Accurate to within ten meters of the desired target.
- [kCLLocationAccuracyHundredMeters](kcllocationaccuracyhundredmeters.md): Accurate to within one hundred meters.
- [kCLLocationAccuracyKilometer](kcllocationaccuracykilometer.md): Accurate to the nearest kilometer.
- [kCLLocationAccuracyReduced](kcllocationaccuracyreduced.md): The level of accuracy used when an app isn’t authorized for full accuracy location data.
