> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/isauthorizedforwidgetupdates](https://developer.apple.com/documentation/corelocation/cllocationmanager/isauthorizedforwidgetupdates)

# isAuthorizedForWidgetUpdates (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether a widget is eligible to receive location updates.

## Declaration

```swift
var isAuthorizedForWidgetUpdates: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is `true` when either of the following is true:

- The app’s authorization status is [CLAuthorizationStatus.authorizedAlways](../clauthorizationstatus/authorizedalways.md).
- The app’s authorization status is [CLAuthorizationStatus.authorizedWhenInUse](../clauthorizationstatus/authorizedwheninuse.md) and the user agrees to extend the app’s authorization status to widgets.

> **Note**

>  For apps that use [CLAuthorizationStatus.authorizedWhenInUse](../clauthorizationstatus/authorizedwheninuse.md), after the user agrees to extend an app’s authorization status to widgets, the app’s Location Services settings indicate While Using the App or Widgets as the active access level.

For details about using location information in widgets with [CLAuthorizationStatus.authorizedWhenInUse](../clauthorizationstatus/authorizedwheninuse.md), see [Accessing location information in widgets](../../widgetkit/accessing-location-information-in-widgets.md).

## See Also

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable()](significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [headingAvailable()](headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [accuracyAuthorization](accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isMonitoringAvailable(for:)](ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable()](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled()](locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.

# authorizedForWidgetUpdates (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether a widget is eligible to receive location updates.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAuthorizedForWidgetUpdates) BOOL authorizedForWidgetUpdates;
```

<a id="Discussion"></a>

## Discussion

This property is `true` when either of the following is true:

- The app’s authorization status is [kCLAuthorizationStatusAuthorizedAlways](../clauthorizationstatus/authorizedalways.md).
- The app’s authorization status is [kCLAuthorizationStatusAuthorizedWhenInUse](../clauthorizationstatus/authorizedwheninuse.md) and the user agrees to extend the app’s authorization status to widgets.

> **Note**

>  For apps that use [kCLAuthorizationStatusAuthorizedWhenInUse](../clauthorizationstatus/authorizedwheninuse.md), after the user agrees to extend an app’s authorization status to widgets, the app’s Location Services settings indicate While Using the App or Widgets as the active access level.

For details about using location information in widgets with [kCLAuthorizationStatusAuthorizedWhenInUse](../clauthorizationstatus/authorizedwheninuse.md), see [Accessing location information in widgets](../../widgetkit/accessing-location-information-in-widgets.md).

## See Also

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable](significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [headingAvailable](headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [accuracyAuthorization](accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isMonitoringAvailableForClass:](ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable](israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled](locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.
