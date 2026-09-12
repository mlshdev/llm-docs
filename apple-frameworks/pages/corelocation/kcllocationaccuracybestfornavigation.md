> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/kcllocationaccuracybestfornavigation](https://developer.apple.com/documentation/corelocation/kcllocationaccuracybestfornavigation)

# kCLLocationAccuracyBestForNavigation (Swift)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The highest possible accuracy that uses additional sensor data to facilitate navigation apps.

## Declaration

```swift
let kCLLocationAccuracyBestForNavigation: CLLocationAccuracy
```

<a id="Discussion"></a>

## Discussion

This level of accuracy is intended for use in navigation apps that require precise position information at all times. Because of the extra power requirements, use this level of accuracy only while the device is plugged in.

This level of accurate is available only if `isAuthorizedForPreciseLocation` is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Desired Accuracy Constants

- [kCLLocationAccuracyBest](kcllocationaccuracybest.md): The best level of accuracy available.
- [kCLLocationAccuracyNearestTenMeters](kcllocationaccuracynearesttenmeters.md): Accurate to within ten meters of the desired target.
- [kCLLocationAccuracyHundredMeters](kcllocationaccuracyhundredmeters.md): Accurate to within one hundred meters.
- [kCLLocationAccuracyKilometer](kcllocationaccuracykilometer.md): Accurate to the nearest kilometer.
- [kCLLocationAccuracyThreeKilometers](kcllocationaccuracythreekilometers.md): Accurate to the nearest three kilometers.
- [kCLLocationAccuracyReduced](kcllocationaccuracyreduced.md): The level of accuracy used when an app isn’t authorized for full accuracy location data.

# kCLLocationAccuracyBestForNavigation (Objective-C)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The highest possible accuracy that uses additional sensor data to facilitate navigation apps.

## Declaration

```objectivec
extern const CLLocationAccuracy kCLLocationAccuracyBestForNavigation;
```

<a id="Discussion"></a>

## Discussion

This level of accuracy is intended for use in navigation apps that require precise position information at all times. Because of the extra power requirements, use this level of accuracy only while the device is plugged in.

This level of accurate is available only if `isAuthorizedForPreciseLocation` is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Desired Accuracy Constants

- [kCLLocationAccuracyBest](kcllocationaccuracybest.md): The best level of accuracy available.
- [kCLLocationAccuracyNearestTenMeters](kcllocationaccuracynearesttenmeters.md): Accurate to within ten meters of the desired target.
- [kCLLocationAccuracyHundredMeters](kcllocationaccuracyhundredmeters.md): Accurate to within one hundred meters.
- [kCLLocationAccuracyKilometer](kcllocationaccuracykilometer.md): Accurate to the nearest kilometer.
- [kCLLocationAccuracyThreeKilometers](kcllocationaccuracythreekilometers.md): Accurate to the nearest three kilometers.
- [kCLLocationAccuracyReduced](kcllocationaccuracyreduced.md): The level of accuracy used when an app isn’t authorized for full accuracy location data.
