> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clauthorizationstatus/restricted](https://developer.apple.com/documentation/corelocation/clauthorizationstatus/restricted)

# CLAuthorizationStatus.restricted (Swift)

**Framework:** Core Location  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The app is not authorized to use location services.

## Declaration

```swift
case restricted
```

<a id="Discussion"></a>

## Discussion

The user cannot change this app’s status, possibly due to active restrictions such as parental controls being in place.

## See Also

### Getting the authorization status

- [CLAuthorizationStatus.notDetermined](notdetermined.md): The user has not chosen whether the app can use location services.
- [CLAuthorizationStatus.denied](denied.md): The user denied the use of location services for the app or they are disabled globally in Settings.
- [authorized](authorized.md): Deprecated. The user authorized the app to use location services.
- [CLAuthorizationStatus.authorizedAlways](authorizedalways.md): The user authorized the app to start location services at any time.
- [CLAuthorizationStatus.authorizedWhenInUse](authorizedwheninuse.md): The user authorized the app to start location services while it is in use.

# kCLAuthorizationStatusRestricted (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The app is not authorized to use location services.

## Declaration

```objectivec
kCLAuthorizationStatusRestricted
```

<a id="Discussion"></a>

## Discussion

The user cannot change this app’s status, possibly due to active restrictions such as parental controls being in place.

## See Also

### Getting the authorization status

- [kCLAuthorizationStatusNotDetermined](notdetermined.md): The user has not chosen whether the app can use location services.
- [kCLAuthorizationStatusDenied](denied.md): The user denied the use of location services for the app or they are disabled globally in Settings.
- [kCLAuthorizationStatusAuthorized](authorized.md): Deprecated. The user authorized the app to use location services.
- [kCLAuthorizationStatusAuthorizedAlways](authorizedalways.md): The user authorized the app to start location services at any time.
- [kCLAuthorizationStatusAuthorizedWhenInUse](authorizedwheninuse.md): The user authorized the app to start location services while it is in use.
