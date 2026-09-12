> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nslocationtemporaryusagedescriptiondictionary](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationtemporaryusagedescriptiondictionary)

# NSLocationTemporaryUsageDescriptionDictionary (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · macOS 11.0+ · visionOS 1.0+

A collection of messages that explain why the app is requesting temporary access to their location.

## Details

`NSLocationTemporaryUsageDescriptionDictionary`

<a id="Discussion"></a>

## Discussion

Use this key if your app needs temporary access to full accuracy location information. Provide a dictionary of messages that address different use cases, keyed by strings that you define. For example, if your app suggests nearby coffee shops in one part of the app, and finds nearby friends in another, you could include two entries:

![A screenshot of the NSLocationTemporaryUsageDescriptionDictionary item in the Xcode property list editor showing two entries. The first entry has the key friends and a value that says your location is used to connect with nearby friends. The second entry has the key coffee and a value that says your location is used to find the closest coffee shop.](https://developer.apple.com/images/com.apple.bundleresources/media-3729482@2x.png)

When you request access, select among the messages at run time by providing the associated key to the [requestTemporaryFullAccuracyAuthorization(withPurposeKey:)](../../corelocation/cllocationmanager/requesttemporaryfullaccuracyauthorization%28withpurposekey_%29.md) method:

```swift
// Request location access to find coffee shops.
manager.requestTemporaryFullAccuracyAuthorization(withPurposeKey: "coffee")
```

## See Also

### Location

- [Choosing the  Location Services Authorization to Request](../choosing-the-location-services-authorization-to-request.md): Determine the authorization your app needs to access location data.
- [NSLocationAlwaysAndWhenInUseUsageDescription](nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.
- [NSLocationUsageDescription](nslocationusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location information.
- [NSLocationWhenInUseUsageDescription](nslocationwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information while the app is running in the foreground.
- [NSLocationAlwaysUsageDescription](nslocationalwaysusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location at all times.
- [NSWidgetWantsLocation](nswidgetwantslocation.md): A Boolean value that indicates a widget uses the user’s location information.
- [NSLocationDefaultAccuracyReduced](nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.

# NSLocationTemporaryUsageDescriptionDictionary (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · macOS 11.0+ · visionOS 1.0+

A collection of messages that explain why the app is requesting temporary access to their location.

## Details

`NSLocationTemporaryUsageDescriptionDictionary`

<a id="Discussion"></a>

## Discussion

Use this key if your app needs temporary access to full accuracy location information. Provide a dictionary of messages that address different use cases, keyed by strings that you define. For example, if your app suggests nearby coffee shops in one part of the app, and finds nearby friends in another, you could include two entries:

![A screenshot of the NSLocationTemporaryUsageDescriptionDictionary item in the Xcode property list editor showing two entries. The first entry has the key friends and a value that says your location is used to connect with nearby friends. The second entry has the key coffee and a value that says your location is used to find the closest coffee shop.](https://developer.apple.com/images/com.apple.bundleresources/media-3729482@2x.png)

When you request access, select among the messages at run time by providing the associated key to the [requestTemporaryFullAccuracyAuthorizationWithPurposeKey:](../../corelocation/cllocationmanager/requesttemporaryfullaccuracyauthorization%28withpurposekey_%29.md) method:

```swift
// Request location access to find coffee shops.
manager.requestTemporaryFullAccuracyAuthorization(withPurposeKey: "coffee")
```

## See Also

### Location

- [Choosing the  Location Services Authorization to Request](../choosing-the-location-services-authorization-to-request.md): Determine the authorization your app needs to access location data.
- [NSLocationAlwaysAndWhenInUseUsageDescription](nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.
- [NSLocationUsageDescription](nslocationusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location information.
- [NSLocationWhenInUseUsageDescription](nslocationwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information while the app is running in the foreground.
- [NSLocationAlwaysUsageDescription](nslocationalwaysusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location at all times.
- [NSWidgetWantsLocation](nswidgetwantslocation.md): A Boolean value that indicates a widget uses the user’s location information.
- [NSLocationDefaultAccuracyReduced](nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
