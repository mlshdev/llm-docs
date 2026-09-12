> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clauthorizationstatus/denied](https://developer.apple.com/documentation/corelocation/clauthorizationstatus/denied)

# CLAuthorizationStatus.denied (Swift)

**Framework:** Core Location  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user denied the use of location services for the app or they are disabled globally in Settings.

## Declaration

```swift
case denied
```

<a id="Discussion"></a>

## Discussion

When the authorization status is denied, your app can’t use location services. The status can be denied when:

- The user denied location permissions for your app.
- The user turned off location services for the device in Settings.
- Location services are unavailable because the device is in Airplane mode.

If the user re-enables location services in Settings, your app’s authorization returns to its previous state. The status change is reported to your delegate’s [locationManager(\_:didChangeAuthorization:)](../cllocationmanagerdelegate/locationmanager%28__didchangeauthorization_%29.md) method.

You may call [locationServicesEnabled()](../cllocationmanager/locationservicesenabled%28%29.md) if you wish to determine whether location services are available globally on the device.

## See Also

### Getting the authorization status

- [CLAuthorizationStatus.notDetermined](notdetermined.md): The user has not chosen whether the app can use location services.
- [CLAuthorizationStatus.restricted](restricted.md): The app is not authorized to use location services.
- [authorized](authorized.md): Deprecated. The user authorized the app to use location services.
- [CLAuthorizationStatus.authorizedAlways](authorizedalways.md): The user authorized the app to start location services at any time.
- [CLAuthorizationStatus.authorizedWhenInUse](authorizedwheninuse.md): The user authorized the app to start location services while it is in use.

# kCLAuthorizationStatusDenied (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user denied the use of location services for the app or they are disabled globally in Settings.

## Declaration

```objectivec
kCLAuthorizationStatusDenied
```

<a id="Discussion"></a>

## Discussion

When the authorization status is denied, your app can’t use location services. The status can be denied when:

- The user denied location permissions for your app.
- The user turned off location services for the device in Settings.
- Location services are unavailable because the device is in Airplane mode.

If the user re-enables location services in Settings, your app’s authorization returns to its previous state. The status change is reported to your delegate’s [locationManager:didChangeAuthorizationStatus:](../cllocationmanagerdelegate/locationmanager%28__didchangeauthorization_%29.md) method.

You may call [locationServicesEnabled](../cllocationmanager/locationservicesenabled%28%29.md) if you wish to determine whether location services are available globally on the device.

## See Also

### Getting the authorization status

- [kCLAuthorizationStatusNotDetermined](notdetermined.md): The user has not chosen whether the app can use location services.
- [kCLAuthorizationStatusRestricted](restricted.md): The app is not authorized to use location services.
- [kCLAuthorizationStatusAuthorized](authorized.md): Deprecated. The user authorized the app to use location services.
- [kCLAuthorizationStatusAuthorizedAlways](authorizedalways.md): The user authorized the app to start location services at any time.
- [kCLAuthorizationStatusAuthorizedWhenInUse](authorizedwheninuse.md): The user authorized the app to start location services while it is in use.
