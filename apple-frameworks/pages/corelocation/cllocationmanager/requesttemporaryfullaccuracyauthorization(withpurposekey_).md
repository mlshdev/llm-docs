> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/requesttemporaryfullaccuracyauthorization(withpurposekey:)](https://developer.apple.com/documentation/corelocation/cllocationmanager/requesttemporaryfullaccuracyauthorization(withpurposekey:))

# requestTemporaryFullAccuracyAuthorization(withPurposeKey:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Requests permission to temporarily use location services with full accuracy.

## Declaration

```swift
func requestTemporaryFullAccuracyAuthorization(withPurposeKey purposeKey: String)
```

## Parameters

- `purposeKey`: A key in the [NSLocationTemporaryUsageDescriptionDictionary](../../bundleresources/information-property-list/nslocationtemporaryusagedescriptiondictionary.md) dictionary of the app’s `Info.plist` file.  The value for this key is an app-provided string that describes the reason for accessing location data with full accuracy.  To localize a usage description, add an entry to your `InfoPlist.strings` file with the same key you provide for this parameter.

<a id="Discussion"></a>

## Discussion

This method behaves the same as calling the [requestTemporaryFullAccuracyAuthorization(withPurposeKey:completion:)](requesttemporaryfullaccuracyauthorization%28withpurposekey_completion_%29.md) method, passing `nil` as the completion closure. Use this method if your app’s logic to respond to changes in location data accuracy is already handled by the [locationManagerDidChangeAuthorization(\_:)](../cllocationmanagerdelegate/locationmanagerdidchangeauthorization%28__%29.md) delegate method, and your app doesn’t have any work to do in the closure.

## See Also

### Requesting authorization for location services

- [requestWhenInUseAuthorization()](requestwheninuseauthorization%28%29.md): Requests the user’s permission to use location services while the app is in use.
- [requestAlwaysAuthorization()](requestalwaysauthorization%28%29.md): Requests the user’s permission to use location services regardless of whether the app is in use.
- [requestTemporaryFullAccuracyAuthorization(withPurposeKey:completion:)](requesttemporaryfullaccuracyauthorization%28withpurposekey_completion_%29.md): Requests permission to temporarily use location services with full accuracy and reports the results to the provided completion handler.
- [authorizationStatus](authorizationstatus-swift.property.md): The current authorization status for the app.
- [CLAuthorizationStatus](../clauthorizationstatus.md): Constants that indicate the app’s authorization to use location services.
- [NSLocationDefaultAccuracyReduced](../../bundleresources/information-property-list/nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
- [NSLocationAlwaysAndWhenInUseUsageDescription](../../bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.

# requestTemporaryFullAccuracyAuthorizationWithPurposeKey: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Requests permission to temporarily use location services with full accuracy.

## Declaration

```objectivec
- (void) requestTemporaryFullAccuracyAuthorizationWithPurposeKey:(NSString *) purposeKey;
```

## Parameters

- `purposeKey`: A key in the [NSLocationTemporaryUsageDescriptionDictionary](../../bundleresources/information-property-list/nslocationtemporaryusagedescriptiondictionary.md) dictionary of the app’s `Info.plist` file.  The value for this key is an app-provided string that describes the reason for accessing location data with full accuracy.  To localize a usage description, add an entry to your `InfoPlist.strings` file with the same key you provide for this parameter.

<a id="Discussion"></a>

## Discussion

This method behaves the same as calling the [requestTemporaryFullAccuracyAuthorizationWithPurposeKey:completion:](requesttemporaryfullaccuracyauthorization%28withpurposekey_completion_%29.md) method, passing `nil` as the completion closure. Use this method if your app’s logic to respond to changes in location data accuracy is already handled by the [locationManagerDidChangeAuthorization:](../cllocationmanagerdelegate/locationmanagerdidchangeauthorization%28__%29.md) delegate method, and your app doesn’t have any work to do in the closure.

## See Also

### Requesting authorization for location services

- [requestWhenInUseAuthorization](requestwheninuseauthorization%28%29.md): Requests the user’s permission to use location services while the app is in use.
- [requestAlwaysAuthorization](requestalwaysauthorization%28%29.md): Requests the user’s permission to use location services regardless of whether the app is in use.
- [requestTemporaryFullAccuracyAuthorizationWithPurposeKey:completion:](requesttemporaryfullaccuracyauthorization%28withpurposekey_completion_%29.md): Requests permission to temporarily use location services with full accuracy and reports the results to the provided completion handler.
- [authorizationStatus](authorizationstatus-swift.property.md): The current authorization status for the app.
- [CLAuthorizationStatus](../clauthorizationstatus.md): Constants that indicate the app’s authorization to use location services.
- [NSLocationDefaultAccuracyReduced](../../bundleresources/information-property-list/nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
- [NSLocationAlwaysAndWhenInUseUsageDescription](../../bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.
