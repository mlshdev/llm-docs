> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/claccuracyauthorization](https://developer.apple.com/documentation/corelocation/claccuracyauthorization)

# CLAccuracyAuthorization (Swift)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the level of location accuracy the app has authorization to use.

## Declaration

```swift
enum CLAccuracyAuthorization
```

## Topics

### Getting the location accuracy

- [CLAccuracyAuthorization.fullAccuracy](claccuracyauthorization/fullaccuracy.md): The user authorized the app to access location data with full accuracy.
- [CLAccuracyAuthorization.reducedAccuracy](claccuracyauthorization/reducedaccuracy.md): The user authorized the app to access location data with reduced accuracy.

### Initializers

- [init(rawValue:)](claccuracyauthorization/init%28rawvalue_%29.md)

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
- [CLAuthorizationStatus](clauthorizationstatus.md): Constants that indicate the app’s authorization to use location services.
- [NSLocationAlwaysAndWhenInUseUsageDescription](../bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.
- [NSLocationWhenInUseUsageDescription](../bundleresources/information-property-list/nslocationwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information while the app is running in the foreground.
- [NSLocationUsageDescription](../bundleresources/information-property-list/nslocationusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location information.
- [NSLocationDefaultAccuracyReduced](../bundleresources/information-property-list/nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
- [NSLocationAlwaysUsageDescription](../bundleresources/information-property-list/nslocationalwaysusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location at all times.

# CLAccuracyAuthorization (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the level of location accuracy the app has authorization to use.

## Declaration

```objectivec
enum CLAccuracyAuthorization : NSInteger;
```

## Topics

### Getting the location accuracy

- [CLAccuracyAuthorizationFullAccuracy](claccuracyauthorization/fullaccuracy.md): The user authorized the app to access location data with full accuracy.
- [CLAccuracyAuthorizationReducedAccuracy](claccuracyauthorization/reducedaccuracy.md): The user authorized the app to access location data with reduced accuracy.

## See Also

### Authorization

- [Requesting authorization to use location services](requesting-authorization-to-use-location-services.md): Obtain authorization to use location services and manage changes to your app’s authorization status.
- [Suspending authorization requests](suspending-authorization-requests.md): Defer the system’s authorization request dialog until your app is ready.
- [CLAuthorizationStatus](clauthorizationstatus.md): Constants that indicate the app’s authorization to use location services.
- [NSLocationAlwaysAndWhenInUseUsageDescription](../bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.
- [NSLocationWhenInUseUsageDescription](../bundleresources/information-property-list/nslocationwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information while the app is running in the foreground.
- [NSLocationUsageDescription](../bundleresources/information-property-list/nslocationusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location information.
- [NSLocationDefaultAccuracyReduced](../bundleresources/information-property-list/nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
- [NSLocationAlwaysUsageDescription](../bundleresources/information-property-list/nslocationalwaysusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location at all times.
