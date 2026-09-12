> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/kcllocationaccuracyreduced](https://developer.apple.com/documentation/corelocation/kcllocationaccuracyreduced)

# kCLLocationAccuracyReduced (Swift)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The level of accuracy used when an app isn’t authorized for full accuracy location data.

## Declaration

```swift
let kCLLocationAccuracyReduced: CLLocationAccuracy
```

<a id="Discussion"></a>

## Discussion

The accuracy of location data is reduced in both space and time using approaches like selecting a nearby point of interest and updating the location at most a few times per hour. The approximate location preserves the user’s country or region, typically preserves the city, and is usually within 1–20 kilometers of the actual location.

If your app is authorized to access location information with full accuracy, you can use this constant to access location data as if the app didn’t have that authorization.

## See Also

### Desired Accuracy Constants

- [kCLLocationAccuracyBestForNavigation](kcllocationaccuracybestfornavigation.md): The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
- [kCLLocationAccuracyBest](kcllocationaccuracybest.md): The best level of accuracy available.
- [kCLLocationAccuracyNearestTenMeters](kcllocationaccuracynearesttenmeters.md): Accurate to within ten meters of the desired target.
- [kCLLocationAccuracyHundredMeters](kcllocationaccuracyhundredmeters.md): Accurate to within one hundred meters.
- [kCLLocationAccuracyKilometer](kcllocationaccuracykilometer.md): Accurate to the nearest kilometer.
- [kCLLocationAccuracyThreeKilometers](kcllocationaccuracythreekilometers.md): Accurate to the nearest three kilometers.

# kCLLocationAccuracyReduced (Objective-C)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The level of accuracy used when an app isn’t authorized for full accuracy location data.

## Declaration

```objectivec
extern const CLLocationAccuracy kCLLocationAccuracyReduced;
```

<a id="Discussion"></a>

## Discussion

The accuracy of location data is reduced in both space and time using approaches like selecting a nearby point of interest and updating the location at most a few times per hour. The approximate location preserves the user’s country or region, typically preserves the city, and is usually within 1–20 kilometers of the actual location.

If your app is authorized to access location information with full accuracy, you can use this constant to access location data as if the app didn’t have that authorization.

## See Also

### Desired Accuracy Constants

- [kCLLocationAccuracyBestForNavigation](kcllocationaccuracybestfornavigation.md): The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
- [kCLLocationAccuracyBest](kcllocationaccuracybest.md): The best level of accuracy available.
- [kCLLocationAccuracyNearestTenMeters](kcllocationaccuracynearesttenmeters.md): Accurate to within ten meters of the desired target.
- [kCLLocationAccuracyHundredMeters](kcllocationaccuracyhundredmeters.md): Accurate to within one hundred meters.
- [kCLLocationAccuracyKilometer](kcllocationaccuracykilometer.md): Accurate to the nearest kilometer.
- [kCLLocationAccuracyThreeKilometers](kcllocationaccuracythreekilometers.md): Accurate to the nearest three kilometers.
