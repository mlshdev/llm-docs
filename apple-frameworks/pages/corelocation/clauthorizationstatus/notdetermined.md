> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clauthorizationstatus/notdetermined](https://developer.apple.com/documentation/corelocation/clauthorizationstatus/notdetermined)

# CLAuthorizationStatus.notDetermined (Swift)

**Framework:** Core Location  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user has not chosen whether the app can use location services.

## Declaration

```swift
case notDetermined
```

## Mentioned In

- [Requesting authorization to use location services](../requesting-authorization-to-use-location-services.md)

<a id="Discussion"></a>

## Discussion

When the authorization status is Not Determined, request authorization causes the location manager to prompt the user for permission if the app is in the foreground. See [requestWhenInUseAuthorization()](../cllocationmanager/requestwheninuseauthorization%28%29.md) and [requestAlwaysAuthorization()](../cllocationmanager/requestalwaysauthorization%28%29.md) for more information.

## See Also

### Getting the authorization status

- [CLAuthorizationStatus.restricted](restricted.md): The app is not authorized to use location services.
- [CLAuthorizationStatus.denied](denied.md): The user denied the use of location services for the app or they are disabled globally in Settings.
- [authorized](authorized.md): Deprecated. The user authorized the app to use location services.
- [CLAuthorizationStatus.authorizedAlways](authorizedalways.md): The user authorized the app to start location services at any time.
- [CLAuthorizationStatus.authorizedWhenInUse](authorizedwheninuse.md): The user authorized the app to start location services while it is in use.

# kCLAuthorizationStatusNotDetermined (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user has not chosen whether the app can use location services.

## Declaration

```objectivec
kCLAuthorizationStatusNotDetermined
```

## Mentioned In

- [Requesting authorization to use location services](../requesting-authorization-to-use-location-services.md)

<a id="Discussion"></a>

## Discussion

When the authorization status is Not Determined, request authorization causes the location manager to prompt the user for permission if the app is in the foreground. See [requestWhenInUseAuthorization](../cllocationmanager/requestwheninuseauthorization%28%29.md) and [requestAlwaysAuthorization](../cllocationmanager/requestalwaysauthorization%28%29.md) for more information.

## See Also

### Getting the authorization status

- [kCLAuthorizationStatusRestricted](restricted.md): The app is not authorized to use location services.
- [kCLAuthorizationStatusDenied](denied.md): The user denied the use of location services for the app or they are disabled globally in Settings.
- [kCLAuthorizationStatusAuthorized](authorized.md): Deprecated. The user authorized the app to use location services.
- [kCLAuthorizationStatusAuthorizedAlways](authorizedalways.md): The user authorized the app to start location services at any time.
- [kCLAuthorizationStatusAuthorizedWhenInUse](authorizedwheninuse.md): The user authorized the app to start location services while it is in use.
