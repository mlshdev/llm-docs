> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationaccuracy](https://developer.apple.com/documentation/corelocation/cllocationaccuracy)

# CLLocationAccuracy (Swift)

**Framework:** Core Location  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The accuracy of a geographical coordinate.

## Declaration

```swift
typealias CLLocationAccuracy = Double
```

<a id="Discussion"></a>

## Discussion

When reported in a [CLLocation](cllocation.md) object, accuracy values are the number of meters from the original geographic coordinate that could yield the user’s actual location. When specifying values for the [desiredAccuracy](cllocationmanager/desiredaccuracy.md) property of your [CLLocationManager](cllocationmanager.md) object, use one of the appropriate constants.

## Topics

### Desired Accuracy Constants

- [kCLLocationAccuracyBestForNavigation](kcllocationaccuracybestfornavigation.md): The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
- [kCLLocationAccuracyBest](kcllocationaccuracybest.md): The best level of accuracy available.
- [kCLLocationAccuracyNearestTenMeters](kcllocationaccuracynearesttenmeters.md): Accurate to within ten meters of the desired target.
- [kCLLocationAccuracyHundredMeters](kcllocationaccuracyhundredmeters.md): Accurate to within one hundred meters.
- [kCLLocationAccuracyKilometer](kcllocationaccuracykilometer.md): Accurate to the nearest kilometer.
- [kCLLocationAccuracyThreeKilometers](kcllocationaccuracythreekilometers.md): Accurate to the nearest three kilometers.
- [kCLLocationAccuracyReduced](kcllocationaccuracyreduced.md): The level of accuracy used when an app isn’t authorized for full accuracy location data.

## See Also

### Getting the location accuracy

- [horizontalAccuracy](cllocation/horizontalaccuracy.md): The radius of uncertainty for the location, measured in meters.
- [verticalAccuracy](cllocation/verticalaccuracy.md): The validity of the altitude values, and their estimated uncertainty, measured in meters.

# CLLocationAccuracy (Objective-C)

**Framework:** Core Location  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The accuracy of a geographical coordinate.

## Declaration

```objectivec
typedef double CLLocationAccuracy;
```

<a id="Discussion"></a>

## Discussion

When reported in a [CLLocation](cllocation.md) object, accuracy values are the number of meters from the original geographic coordinate that could yield the user’s actual location. When specifying values for the [desiredAccuracy](cllocationmanager/desiredaccuracy.md) property of your [CLLocationManager](cllocationmanager.md) object, use one of the appropriate constants.

## Topics

### Desired Accuracy Constants

- [kCLLocationAccuracyBestForNavigation](kcllocationaccuracybestfornavigation.md): The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
- [kCLLocationAccuracyBest](kcllocationaccuracybest.md): The best level of accuracy available.
- [kCLLocationAccuracyNearestTenMeters](kcllocationaccuracynearesttenmeters.md): Accurate to within ten meters of the desired target.
- [kCLLocationAccuracyHundredMeters](kcllocationaccuracyhundredmeters.md): Accurate to within one hundred meters.
- [kCLLocationAccuracyKilometer](kcllocationaccuracykilometer.md): Accurate to the nearest kilometer.
- [kCLLocationAccuracyThreeKilometers](kcllocationaccuracythreekilometers.md): Accurate to the nearest three kilometers.
- [kCLLocationAccuracyReduced](kcllocationaccuracyreduced.md): The level of accuracy used when an app isn’t authorized for full accuracy location data.

## See Also

### Getting the location accuracy

- [horizontalAccuracy](cllocation/horizontalaccuracy.md): The radius of uncertainty for the location, measured in meters.
- [verticalAccuracy](cllocation/verticalaccuracy.md): The validity of the altitude values, and their estimated uncertainty, measured in meters.
