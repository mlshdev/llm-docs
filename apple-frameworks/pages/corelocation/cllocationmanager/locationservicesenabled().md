> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/locationservicesenabled()](https://developer.apple.com/documentation/corelocation/cllocationmanager/locationservicesenabled())

# locationServicesEnabled() (Swift)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether location services are enabled on the device.

## Declaration

```swift
class func locationServicesEnabled() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if location services are enabled on the device; [false](https://developer.apple.com/documentation/swift/false) if they are not.

<a id="Discussion"></a>

## Discussion

Users can enable or disable location services by toggling the Location Services switch in Settings \> Privacy.

- When users disable the switch, the system calls your delegate’s [locationManager(\_:didChangeAuthorization:)](../cllocationmanagerdelegate/locationmanager%28__didchangeauthorization_%29.md) method with a denied authorization status ([CLAuthorizationStatus.denied](../clauthorizationstatus/denied.md)).
- When users enable the switch, the system returns your app’s authorization to its previous state and calls your delegate’s [locationManager(\_:didChangeAuthorization:)](../cllocationmanagerdelegate/locationmanager%28__didchangeauthorization_%29.md) method.

You are not required to call [locationServicesEnabled()](locationservicesenabled%28%29.md). However, If you wish to display instructions about enabling location services, you may check the return value of this method to find out if the services are disabled for the entire device, or just for your app.  If the result is `true`, provide instructions for enabling services for your app; otherwise, provide instructions for enabling the Location Services switch in Settings \> Privacy.

If users disable or deny location services and you attempt to start location updates anyway, the location manager reports an error to its delegate. See [locationManager(\_:didFailWithError:)](../cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md) and [locationManager(\_:monitoringDidFailFor:withError:)](../cllocationmanagerdelegate/locationmanager%28__monitoringdidfailfor_witherror_%29.md) for more information.

## Topics

### Related Documentation

- [locationManager(\_:didFailWithError:)](../cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md): Tells the delegate that the location manager was unable to retrieve a location value.
- [locationManager(\_:monitoringDidFailFor:withError:)](../cllocationmanagerdelegate/locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.

## See Also

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable()](significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [headingAvailable()](headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [isAuthorizedForWidgetUpdates](isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [accuracyAuthorization](accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isMonitoringAvailable(for:)](ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable()](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.

# locationServicesEnabled (Objective-C)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether location services are enabled on the device.

## Declaration

```objectivec
+ (BOOL) locationServicesEnabled;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if location services are enabled on the device; [false](https://developer.apple.com/documentation/swift/false) if they are not.

<a id="Discussion"></a>

## Discussion

Users can enable or disable location services by toggling the Location Services switch in Settings \> Privacy.

- When users disable the switch, the system calls your delegate’s [locationManager:didChangeAuthorizationStatus:](../cllocationmanagerdelegate/locationmanager%28__didchangeauthorization_%29.md) method with a denied authorization status ([kCLAuthorizationStatusDenied](../clauthorizationstatus/denied.md)).
- When users enable the switch, the system returns your app’s authorization to its previous state and calls your delegate’s [locationManager:didChangeAuthorizationStatus:](../cllocationmanagerdelegate/locationmanager%28__didchangeauthorization_%29.md) method.

You are not required to call [locationServicesEnabled](locationservicesenabled%28%29.md). However, If you wish to display instructions about enabling location services, you may check the return value of this method to find out if the services are disabled for the entire device, or just for your app.  If the result is `true`, provide instructions for enabling services for your app; otherwise, provide instructions for enabling the Location Services switch in Settings \> Privacy.

If users disable or deny location services and you attempt to start location updates anyway, the location manager reports an error to its delegate. See [locationManager:didFailWithError:](../cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md) and [locationManager:monitoringDidFailForRegion:withError:](../cllocationmanagerdelegate/locationmanager%28__monitoringdidfailfor_witherror_%29.md) for more information.

## Topics

### Related Documentation

- [locationManager:didFailWithError:](../cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md): Tells the delegate that the location manager was unable to retrieve a location value.
- [locationManager:monitoringDidFailForRegion:withError:](../cllocationmanagerdelegate/locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.

## See Also

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable](significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [headingAvailable](headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [authorizedForWidgetUpdates](isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [accuracyAuthorization](accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isMonitoringAvailableForClass:](ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
