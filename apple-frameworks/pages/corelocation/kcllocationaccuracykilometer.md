> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/kcllocationaccuracykilometer](https://developer.apple.com/documentation/corelocation/kcllocationaccuracykilometer)

# kCLLocationAccuracyKilometer (Swift)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accurate to the nearest kilometer.

## Declaration

```swift
let kCLLocationAccuracyKilometer: CLLocationAccuracy
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
- [kCLLocationAccuracyThreeKilometers](kcllocationaccuracythreekilometers.md): Accurate to the nearest three kilometers.
- [kCLLocationAccuracyReduced](kcllocationaccuracyreduced.md): The level of accuracy used when an app isn’t authorized for full accuracy location data.

# kCLLocationAccuracyKilometer (Objective-C)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accurate to the nearest kilometer.

## Declaration

```objectivec
extern const CLLocationAccuracy kCLLocationAccuracyKilometer;
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
- [kCLLocationAccuracyThreeKilometers](kcllocationaccuracythreekilometers.md): Accurate to the nearest three kilometers.
- [kCLLocationAccuracyReduced](kcllocationaccuracyreduced.md): The level of accuracy used when an app isn’t authorized for full accuracy location data.
