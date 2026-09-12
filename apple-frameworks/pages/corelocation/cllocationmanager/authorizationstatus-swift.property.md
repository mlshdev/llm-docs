> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/authorizationstatus-swift.property](https://developer.apple.com/documentation/corelocation/cllocationmanager/authorizationstatus-swift.property)

# authorizationStatus (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The current authorization status for the app.

## Declaration

```swift
var authorizationStatus: CLAuthorizationStatus { get }
```

<a id="return-value"></a>

## Return Value

A value indicating whether the app is authorized to use location services.

## Mentioned In

- [Requesting authorization to use location services](../requesting-authorization-to-use-location-services.md)

<a id="Discussion"></a>

## Discussion

Check this value when the [locationManagerDidChangeAuthorization(\_:)](../cllocationmanagerdelegate/locationmanagerdidchangeauthorization%28__%29.md) delegate callback indicates that the authorization status has changed.

The system is guaranteed to call the delegate method with the app’s initial authorization state and all authorization status changes.

The system manages the authorization status of a given app according to several factors. Users must authorize the app to use location services explicitly, and location services must be enabled in Settings \> Privacy. See [Choosing the  Location Services Authorization to Request](../../bundleresources/choosing-the-location-services-authorization-to-request.md) for more information.

## See Also

### Requesting authorization for location services

- [requestWhenInUseAuthorization()](requestwheninuseauthorization%28%29.md): Requests the user’s permission to use location services while the app is in use.
- [requestAlwaysAuthorization()](requestalwaysauthorization%28%29.md): Requests the user’s permission to use location services regardless of whether the app is in use.
- [requestTemporaryFullAccuracyAuthorization(withPurposeKey:completion:)](requesttemporaryfullaccuracyauthorization%28withpurposekey_completion_%29.md): Requests permission to temporarily use location services with full accuracy and reports the results to the provided completion handler.
- [requestTemporaryFullAccuracyAuthorization(withPurposeKey:)](requesttemporaryfullaccuracyauthorization%28withpurposekey_%29.md): Requests permission to temporarily use location services with full accuracy.
- [CLAuthorizationStatus](../clauthorizationstatus.md): Constants that indicate the app’s authorization to use location services.
- [NSLocationDefaultAccuracyReduced](../../bundleresources/information-property-list/nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
- [NSLocationAlwaysAndWhenInUseUsageDescription](../../bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.

# authorizationStatus (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The current authorization status for the app.

## Declaration

```objectivec
@property (nonatomic, readonly) CLAuthorizationStatus authorizationStatus;
```

<a id="return-value"></a>

## Return Value

A value indicating whether the app is authorized to use location services.

## Mentioned In

- [Requesting authorization to use location services](../requesting-authorization-to-use-location-services.md)

<a id="Discussion"></a>

## Discussion

Check this value when the [locationManagerDidChangeAuthorization:](../cllocationmanagerdelegate/locationmanagerdidchangeauthorization%28__%29.md) delegate callback indicates that the authorization status has changed.

The system is guaranteed to call the delegate method with the app’s initial authorization state and all authorization status changes.

The system manages the authorization status of a given app according to several factors. Users must authorize the app to use location services explicitly, and location services must be enabled in Settings \> Privacy. See [Choosing the  Location Services Authorization to Request](../../bundleresources/choosing-the-location-services-authorization-to-request.md) for more information.

## See Also

### Requesting authorization for location services

- [requestWhenInUseAuthorization](requestwheninuseauthorization%28%29.md): Requests the user’s permission to use location services while the app is in use.
- [requestAlwaysAuthorization](requestalwaysauthorization%28%29.md): Requests the user’s permission to use location services regardless of whether the app is in use.
- [requestTemporaryFullAccuracyAuthorizationWithPurposeKey:completion:](requesttemporaryfullaccuracyauthorization%28withpurposekey_completion_%29.md): Requests permission to temporarily use location services with full accuracy and reports the results to the provided completion handler.
- [requestTemporaryFullAccuracyAuthorizationWithPurposeKey:](requesttemporaryfullaccuracyauthorization%28withpurposekey_%29.md): Requests permission to temporarily use location services with full accuracy.
- [CLAuthorizationStatus](../clauthorizationstatus.md): Constants that indicate the app’s authorization to use location services.
- [NSLocationDefaultAccuracyReduced](../../bundleresources/information-property-list/nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
- [NSLocationAlwaysAndWhenInUseUsageDescription](../../bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.
