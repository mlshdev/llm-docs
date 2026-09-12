> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/significantlocationchangemonitoringavailable()](https://developer.apple.com/documentation/corelocation/cllocationmanager/significantlocationchangemonitoringavailable())

# significantLocationChangeMonitoringAvailable() (Swift)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a Boolean value indicating whether the significant-change location service is available on the device.

## Declaration

```swift
class func significantLocationChangeMonitoringAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if location change monitoring is available; [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

This method indicates whether the device is able to report updates based on significant location changes only. This capability provides tremendous power savings for apps that want to track a user’s approximate location and don’t need highly accurate position information.

## See Also

### Determining the availability of services

- [headingAvailable()](headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [isAuthorizedForWidgetUpdates](isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [accuracyAuthorization](accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isMonitoringAvailable(for:)](ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable()](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled()](locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.

# significantLocationChangeMonitoringAvailable (Objective-C)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a Boolean value indicating whether the significant-change location service is available on the device.

## Declaration

```objectivec
+ (BOOL) significantLocationChangeMonitoringAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if location change monitoring is available; [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

This method indicates whether the device is able to report updates based on significant location changes only. This capability provides tremendous power savings for apps that want to track a user’s approximate location and don’t need highly accurate position information.

## See Also

### Determining the availability of services

- [headingAvailable](headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [authorizedForWidgetUpdates](isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [accuracyAuthorization](accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isMonitoringAvailableForClass:](ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled](locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.
