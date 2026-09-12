> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clauthorizationstatus/authorizedwheninuse](https://developer.apple.com/documentation/corelocation/clauthorizationstatus/authorizedwheninuse)

# CLAuthorizationStatus.authorizedWhenInUse (Swift)

**Framework:** Core Location  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user authorized the app to start location services while it is in use.

## Declaration

```swift
case authorizedWhenInUse
```

<a id="Discussion"></a>

## Discussion

This authorization allows you to use all location services and receive location events only when your app is in use. To continue using location services in the background, enable Continuous Background Location Updates and start the services while the app is in use.

## See Also

### Getting the authorization status

- [CLAuthorizationStatus.notDetermined](notdetermined.md): The user has not chosen whether the app can use location services.
- [CLAuthorizationStatus.restricted](restricted.md): The app is not authorized to use location services.
- [CLAuthorizationStatus.denied](denied.md): The user denied the use of location services for the app or they are disabled globally in Settings.
- [authorized](authorized.md): Deprecated. The user authorized the app to use location services.
- [CLAuthorizationStatus.authorizedAlways](authorizedalways.md): The user authorized the app to start location services at any time.

# kCLAuthorizationStatusAuthorizedWhenInUse (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user authorized the app to start location services while it is in use.

## Declaration

```objectivec
kCLAuthorizationStatusAuthorizedWhenInUse
```

<a id="Discussion"></a>

## Discussion

This authorization allows you to use all location services and receive location events only when your app is in use. To continue using location services in the background, enable Continuous Background Location Updates and start the services while the app is in use.

## See Also

### Getting the authorization status

- [kCLAuthorizationStatusNotDetermined](notdetermined.md): The user has not chosen whether the app can use location services.
- [kCLAuthorizationStatusRestricted](restricted.md): The app is not authorized to use location services.
- [kCLAuthorizationStatusDenied](denied.md): The user denied the use of location services for the app or they are disabled globally in Settings.
- [kCLAuthorizationStatusAuthorized](authorized.md): Deprecated. The user authorized the app to use location services.
- [kCLAuthorizationStatusAuthorizedAlways](authorizedalways.md): The user authorized the app to start location services at any time.
