> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/allowsbackgroundlocationupdates](https://developer.apple.com/documentation/corelocation/cllocationmanager/allowsbackgroundlocationupdates)

# allowsBackgroundLocationUpdates (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 4.0+

A Boolean value that indicates whether the app receives location updates when running in the background.

## Declaration

```swift
var allowsBackgroundLocationUpdates: Bool { get set }
```

## Mentioned In

- [Getting the current location of a device](../getting-the-current-location-of-a-device.md)

<a id="Discussion"></a>

## Discussion

Apps that receive location updates when running in the background must include the [UIBackgroundModes](../../bundleresources/information-property-list/uibackgroundmodes.md) key (with the `location` value) in their app’s `Info.plist` file. After including the [UIBackgroundModes](../../bundleresources/information-property-list/uibackgroundmodes.md) key, set the value of [allowsBackgroundLocationUpdates](allowsbackgroundlocationupdates.md) to [true](https://developer.apple.com/documentation/swift/true). Use this property to enable and disable background updates programmatically. For example, you might set this property to [true](https://developer.apple.com/documentation/swift/true) only after the user enables features in your app that require background location updates.

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and you start location updates while the app is in the foreground, Core Location configures the system to keep the app running to receive continuous background location updates, and arranges to show the background location indicator (blue bar or pill) if needed. Updates continue even if the app subsequently enters the background.

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), location updates may or may not continue in the background depending on other factors, including other background modes. In this configuration Core Location doesn’t configure the system to keep the app running for delivery, or display the background location indicator to extend the effectiveness of the [CLAuthorizationStatus.authorizedWhenInUse](../clauthorizationstatus/authorizedwheninuse.md) authorization while the app is running in the background.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  Setting the value to [true](https://developer.apple.com/documentation/swift/true) but omitting the `UIBackgroundModes` key and `location` value in your app’s `Info.plist` file is a fatal error that terminates the app.

## See Also

### Running the standard location service

- [startUpdatingLocation()](startupdatinglocation%28%29.md): Starts the generation of updates that report the user’s current location.
- [stopUpdatingLocation()](stopupdatinglocation%28%29.md): Stops the generation of location updates.
- [requestLocation()](requestlocation%28%29.md): Requests the one-time delivery of the user’s current location.
- [pausesLocationUpdatesAutomatically](pauseslocationupdatesautomatically.md): A Boolean value that indicates whether the location-manager object may pause location updates.
- [showsBackgroundLocationIndicator](showsbackgroundlocationindicator.md): A Boolean value that indicates whether the status bar changes its appearance when an app uses location services in the background.
- [activityType](activitytype.md): The type of activity the app expects the user to typically perform while in the app’s location session.
- [CLActivityType](../clactivitytype.md): Constants that indicate the type of activity associated with location updates.

# allowsBackgroundLocationUpdates (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 4.0+

A Boolean value that indicates whether the app receives location updates when running in the background.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsBackgroundLocationUpdates;
```

## Mentioned In

- [Getting the current location of a device](../getting-the-current-location-of-a-device.md)

<a id="Discussion"></a>

## Discussion

Apps that receive location updates when running in the background must include the [UIBackgroundModes](../../bundleresources/information-property-list/uibackgroundmodes.md) key (with the `location` value) in their app’s `Info.plist` file. After including the [UIBackgroundModes](../../bundleresources/information-property-list/uibackgroundmodes.md) key, set the value of [allowsBackgroundLocationUpdates](allowsbackgroundlocationupdates.md) to [true](https://developer.apple.com/documentation/swift/true). Use this property to enable and disable background updates programmatically. For example, you might set this property to [true](https://developer.apple.com/documentation/swift/true) only after the user enables features in your app that require background location updates.

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and you start location updates while the app is in the foreground, Core Location configures the system to keep the app running to receive continuous background location updates, and arranges to show the background location indicator (blue bar or pill) if needed. Updates continue even if the app subsequently enters the background.

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), location updates may or may not continue in the background depending on other factors, including other background modes. In this configuration Core Location doesn’t configure the system to keep the app running for delivery, or display the background location indicator to extend the effectiveness of the [kCLAuthorizationStatusAuthorizedWhenInUse](../clauthorizationstatus/authorizedwheninuse.md) authorization while the app is running in the background.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  Setting the value to [true](https://developer.apple.com/documentation/swift/true) but omitting the `UIBackgroundModes` key and `location` value in your app’s `Info.plist` file is a fatal error that terminates the app.

## See Also

### Running the standard location service

- [startUpdatingLocation](startupdatinglocation%28%29.md): Starts the generation of updates that report the user’s current location.
- [stopUpdatingLocation](stopupdatinglocation%28%29.md): Stops the generation of location updates.
- [requestLocation](requestlocation%28%29.md): Requests the one-time delivery of the user’s current location.
- [pausesLocationUpdatesAutomatically](pauseslocationupdatesautomatically.md): A Boolean value that indicates whether the location-manager object may pause location updates.
- [showsBackgroundLocationIndicator](showsbackgroundlocationindicator.md): A Boolean value that indicates whether the status bar changes its appearance when an app uses location services in the background.
- [activityType](activitytype.md): The type of activity the app expects the user to typically perform while in the app’s location session.
- [CLActivityType](../clactivitytype.md): Constants that indicate the type of activity associated with location updates.
