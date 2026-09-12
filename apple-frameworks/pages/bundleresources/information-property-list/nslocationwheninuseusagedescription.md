> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nslocationwheninuseusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationwheninuseusagedescription)

# NSLocationWhenInUseUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

A message that tells people why the app is requesting access to their location information while the app is running in the foreground.

## Details

`NSLocationWhenInUseUsageDescription`

<a id="Discussion"></a>

## Discussion

Use this key if your iOS app accesses location information only when running in the foreground. If your app needs location information when in the background, use [NSLocationAlwaysAndWhenInUseUsageDescription](nslocationalwaysandwheninuseusagedescription.md) instead. For more information, see [Choosing the  Location Services Authorization to Request](../choosing-the-location-services-authorization-to-request.md).

If you need location information in a macOS app, use [NSLocationUsageDescription](nslocationusagedescription.md) instead.

> **Important**

>  This key is required if your iOS app uses APIs that access the user’s location information while the app is in use.

## See Also

### Location

- [Choosing the  Location Services Authorization to Request](../choosing-the-location-services-authorization-to-request.md): Determine the authorization your app needs to access location data.
- [NSLocationAlwaysAndWhenInUseUsageDescription](nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.
- [NSLocationUsageDescription](nslocationusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location information.
- [NSLocationTemporaryUsageDescriptionDictionary](nslocationtemporaryusagedescriptiondictionary.md): A collection of messages that explain why the app is requesting temporary access to their location.
- [NSLocationAlwaysUsageDescription](nslocationalwaysusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location at all times.
- [NSWidgetWantsLocation](nswidgetwantslocation.md): A Boolean value that indicates a widget uses the user’s location information.
- [NSLocationDefaultAccuracyReduced](nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
