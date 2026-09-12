> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/headingavailable()](https://developer.apple.com/documentation/corelocation/cllocationmanager/headingavailable())

# headingAvailable() (Swift)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the location manager is able to generate heading-related events.

## Declaration

```swift
class func headingAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if heading data is available; [false](https://developer.apple.com/documentation/swift/false) if it is not.

## Mentioned In

- [Configuring your app to use location services](../configuring-your-app-to-use-location-services.md)

<a id="Discussion"></a>

## Discussion

Heading data may not be available on all iOS-based devices. You should check the value returned by this method before asking the location manager to deliver heading-related events.

## See Also

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable()](significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [isAuthorizedForWidgetUpdates](isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [accuracyAuthorization](accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isMonitoringAvailable(for:)](ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable()](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled()](locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.

# headingAvailable (Objective-C)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the location manager is able to generate heading-related events.

## Declaration

```objectivec
+ (BOOL) headingAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if heading data is available; [false](https://developer.apple.com/documentation/swift/false) if it is not.

## Mentioned In

- [Configuring your app to use location services](../configuring-your-app-to-use-location-services.md)

<a id="Discussion"></a>

## Discussion

Heading data may not be available on all iOS-based devices. You should check the value returned by this method before asking the location manager to deliver heading-related events.

## See Also

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable](significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [authorizedForWidgetUpdates](isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [accuracyAuthorization](accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isMonitoringAvailableForClass:](ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled](locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.
