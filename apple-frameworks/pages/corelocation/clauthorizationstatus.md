> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clauthorizationstatus](https://developer.apple.com/documentation/corelocation/clauthorizationstatus)

# CLAuthorizationStatus (Swift)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the app’s authorization to use location services.

## Declaration

```swift
enum CLAuthorizationStatus
```

<a id="overview"></a>

## Overview

Handle changes to authorization status in your location manager’s delegate method, [locationManager(\_:didChangeAuthorization:)](cllocationmanagerdelegate/locationmanager%28__didchangeauthorization_%29.md).

## Topics

### Getting the authorization status

- [CLAuthorizationStatus.notDetermined](clauthorizationstatus/notdetermined.md): The user has not chosen whether the app can use location services.
- [CLAuthorizationStatus.restricted](clauthorizationstatus/restricted.md): The app is not authorized to use location services.
- [CLAuthorizationStatus.denied](clauthorizationstatus/denied.md): The user denied the use of location services for the app or they are disabled globally in Settings.
- [authorized](clauthorizationstatus/authorized.md): Deprecated. The user authorized the app to use location services.
- [CLAuthorizationStatus.authorizedAlways](clauthorizationstatus/authorizedalways.md): The user authorized the app to start location services at any time.
- [CLAuthorizationStatus.authorizedWhenInUse](clauthorizationstatus/authorizedwheninuse.md): The user authorized the app to start location services while it is in use.

### Initializers

- [init(rawValue:)](clauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authorization

- [Requesting authorization to use location services](requesting-authorization-to-use-location-services.md): Obtain authorization to use location services and manage changes to your app’s authorization status.
- [Suspending authorization requests](suspending-authorization-requests.md): Defer the system’s authorization request dialog until your app is ready.
- [CLAccuracyAuthorization](claccuracyauthorization.md): Constants that indicate the level of location accuracy the app has authorization to use.
- [NSLocationAlwaysAndWhenInUseUsageDescription](../bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.
- [NSLocationWhenInUseUsageDescription](../bundleresources/information-property-list/nslocationwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information while the app is running in the foreground.
- [NSLocationUsageDescription](../bundleresources/information-property-list/nslocationusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location information.
- [NSLocationDefaultAccuracyReduced](../bundleresources/information-property-list/nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
- [NSLocationAlwaysUsageDescription](../bundleresources/information-property-list/nslocationalwaysusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location at all times.

# CLAuthorizationStatus (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the app’s authorization to use location services.

## Declaration

```objectivec
enum CLAuthorizationStatus : int;
```

<a id="overview"></a>

## Overview

Handle changes to authorization status in your location manager’s delegate method, [locationManager:didChangeAuthorizationStatus:](cllocationmanagerdelegate/locationmanager%28__didchangeauthorization_%29.md).

## Topics

### Getting the authorization status

- [kCLAuthorizationStatusNotDetermined](clauthorizationstatus/notdetermined.md): The user has not chosen whether the app can use location services.
- [kCLAuthorizationStatusRestricted](clauthorizationstatus/restricted.md): The app is not authorized to use location services.
- [kCLAuthorizationStatusDenied](clauthorizationstatus/denied.md): The user denied the use of location services for the app or they are disabled globally in Settings.
- [kCLAuthorizationStatusAuthorized](clauthorizationstatus/authorized.md): Deprecated. The user authorized the app to use location services.
- [kCLAuthorizationStatusAuthorizedAlways](clauthorizationstatus/authorizedalways.md): The user authorized the app to start location services at any time.
- [kCLAuthorizationStatusAuthorizedWhenInUse](clauthorizationstatus/authorizedwheninuse.md): The user authorized the app to start location services while it is in use.

## See Also

### Authorization

- [Requesting authorization to use location services](requesting-authorization-to-use-location-services.md): Obtain authorization to use location services and manage changes to your app’s authorization status.
- [Suspending authorization requests](suspending-authorization-requests.md): Defer the system’s authorization request dialog until your app is ready.
- [CLAccuracyAuthorization](claccuracyauthorization.md): Constants that indicate the level of location accuracy the app has authorization to use.
- [NSLocationAlwaysAndWhenInUseUsageDescription](../bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.
- [NSLocationWhenInUseUsageDescription](../bundleresources/information-property-list/nslocationwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information while the app is running in the foreground.
- [NSLocationUsageDescription](../bundleresources/information-property-list/nslocationusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location information.
- [NSLocationDefaultAccuracyReduced](../bundleresources/information-property-list/nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
- [NSLocationAlwaysUsageDescription](../bundleresources/information-property-list/nslocationalwaysusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location at all times.
