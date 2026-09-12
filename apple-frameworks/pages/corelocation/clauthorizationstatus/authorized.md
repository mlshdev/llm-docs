> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clauthorizationstatus/authorized](https://developer.apple.com/documentation/corelocation/clauthorizationstatus/authorized)

# authorized (Swift)

**Framework:** Core Location  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+

The user authorized the app to use location services.

> For iOS, use [CLAuthorizationStatus.authorizedAlways](authorizedalways.md) or [CLAuthorizationStatus.authorizedWhenInUse](authorizedwheninuse.md) instead.

## Declaration

```swift
static var authorized: CLAuthorizationStatus { get }
```

## See Also

### Getting the authorization status

- [CLAuthorizationStatus.notDetermined](notdetermined.md): The user has not chosen whether the app can use location services.
- [CLAuthorizationStatus.restricted](restricted.md): The app is not authorized to use location services.
- [CLAuthorizationStatus.denied](denied.md): The user denied the use of location services for the app or they are disabled globally in Settings.
- [CLAuthorizationStatus.authorizedAlways](authorizedalways.md): The user authorized the app to start location services at any time.
- [CLAuthorizationStatus.authorizedWhenInUse](authorizedwheninuse.md): The user authorized the app to start location services while it is in use.

# kCLAuthorizationStatusAuthorized (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+

The user authorized the app to use location services.

> For iOS, use [kCLAuthorizationStatusAuthorizedAlways](authorizedalways.md) or [kCLAuthorizationStatusAuthorizedWhenInUse](authorizedwheninuse.md) instead.

## Declaration

```objectivec
kCLAuthorizationStatusAuthorized
```

## See Also

### Getting the authorization status

- [kCLAuthorizationStatusNotDetermined](notdetermined.md): The user has not chosen whether the app can use location services.
- [kCLAuthorizationStatusRestricted](restricted.md): The app is not authorized to use location services.
- [kCLAuthorizationStatusDenied](denied.md): The user denied the use of location services for the app or they are disabled globally in Settings.
- [kCLAuthorizationStatusAuthorizedAlways](authorizedalways.md): The user authorized the app to start location services at any time.
- [kCLAuthorizationStatusAuthorizedWhenInUse](authorizedwheninuse.md): The user authorized the app to start location services while it is in use.
