> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/accuracyauthorization](https://developer.apple.com/documentation/corelocation/cllocationmanager/accuracyauthorization)

# accuracyAuthorization (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A value that indicates the level of location accuracy the app has permission to use.

## Declaration

```swift
var accuracyAuthorization: CLAccuracyAuthorization { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [CLAccuracyAuthorization.fullAccuracy](../claccuracyauthorization/fullaccuracy.md), you can set the [desiredAccuracy](desiredaccuracy.md) property to any value. If the value is [CLAccuracyAuthorization.reducedAccuracy](../claccuracyauthorization/reducedaccuracy.md), setting [desiredAccuracy](desiredaccuracy.md) to a value other than [kCLLocationAccuracyReduced](../kcllocationaccuracyreduced.md) has no effect on the location information, and your app can’t use region monitoring or beacon ranging.

> **Note**

>  Because reduced accuracy isn’t available prior to watchOS 7, when the user chooses reduced accuracy on the paired iPhone, watch apps running with this older software don’t receive any location data. This occurs because watchOS apps must adhere to the permissions granted on the paired iPhone.

## See Also

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable()](significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [headingAvailable()](headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [isAuthorizedForWidgetUpdates](isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [isMonitoringAvailable(for:)](ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable()](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled()](locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.

# accuracyAuthorization (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A value that indicates the level of location accuracy the app has permission to use.

## Declaration

```objectivec
@property (nonatomic, readonly) CLAccuracyAuthorization accuracyAuthorization;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [CLAccuracyAuthorizationFullAccuracy](../claccuracyauthorization/fullaccuracy.md), you can set the [desiredAccuracy](desiredaccuracy.md) property to any value. If the value is [CLAccuracyAuthorizationReducedAccuracy](../claccuracyauthorization/reducedaccuracy.md), setting [desiredAccuracy](desiredaccuracy.md) to a value other than [kCLLocationAccuracyReduced](../kcllocationaccuracyreduced.md) has no effect on the location information, and your app can’t use region monitoring or beacon ranging.

> **Note**

>  Because reduced accuracy isn’t available prior to watchOS 7, when the user chooses reduced accuracy on the paired iPhone, watch apps running with this older software don’t receive any location data. This occurs because watchOS apps must adhere to the permissions granted on the paired iPhone.

## See Also

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable](significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [headingAvailable](headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [authorizedForWidgetUpdates](isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [isMonitoringAvailableForClass:](ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled](locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.
