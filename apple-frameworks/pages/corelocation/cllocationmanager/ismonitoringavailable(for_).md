> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/ismonitoringavailable(for:)](https://developer.apple.com/documentation/corelocation/cllocationmanager/ismonitoringavailable(for:))

# isMonitoringAvailable(for:) (Swift)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns a Boolean value indicating whether the device supports region monitoring using the specified class.

## Declaration

```swift
class func isMonitoringAvailable(for regionClass: AnyClass) -> Bool
```

## Parameters

- `regionClass`: A region monitoring class from the MapKit framework. This class must descend from the [CLRegion](../clregion.md) class.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device is capable of monitoring regions using the specified class or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

The availability of region monitoring support is dependent on the hardware present on the device. This method does not take into account the availability of location services or the fact that the user might have disabled them for the app or system; you must determine your app’s authorization status separately.

## See Also

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable()](significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [headingAvailable()](headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [isAuthorizedForWidgetUpdates](isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [accuracyAuthorization](accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isRangingAvailable()](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled()](locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.

# isMonitoringAvailableForClass: (Objective-C)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns a Boolean value indicating whether the device supports region monitoring using the specified class.

## Declaration

```objectivec
+ (BOOL) isMonitoringAvailableForClass:(Class) regionClass;
```

## Parameters

- `regionClass`: A region monitoring class from the MapKit framework. This class must descend from the [CLRegion](../clregion.md) class.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device is capable of monitoring regions using the specified class or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

The availability of region monitoring support is dependent on the hardware present on the device. This method does not take into account the availability of location services or the fact that the user might have disabled them for the app or system; you must determine your app’s authorization status separately.

## See Also

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable](significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [headingAvailable](headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [authorizedForWidgetUpdates](isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [accuracyAuthorization](accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isRangingAvailable](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled](locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.
