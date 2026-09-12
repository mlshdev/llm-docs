> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nslocationusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nslocationusagedescription)

# NSLocationUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · macOS 10.14+

A message that tells people why the app is requesting access to their location information.

## Details

`NSLocationUsageDescription`

<a id="Discussion"></a>

## Discussion

Use this key in a macOS app that accesses the user’s location information. In an iOS app, use [NSLocationWhenInUseUsageDescription](nslocationwheninuseusagedescription.md) or [NSLocationAlwaysAndWhenInUseUsageDescription](nslocationalwaysandwheninuseusagedescription.md) instead.

> **Important**

>  This key is required if your macOS app uses APIs that access the user’s location information.

## See Also

### Location

- [Choosing the  Location Services Authorization to Request](../choosing-the-location-services-authorization-to-request.md): Determine the authorization your app needs to access location data.
- [NSLocationAlwaysAndWhenInUseUsageDescription](nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.
- [NSLocationWhenInUseUsageDescription](nslocationwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information while the app is running in the foreground.
- [NSLocationTemporaryUsageDescriptionDictionary](nslocationtemporaryusagedescriptiondictionary.md): A collection of messages that explain why the app is requesting temporary access to their location.
- [NSLocationAlwaysUsageDescription](nslocationalwaysusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location at all times.
- [NSWidgetWantsLocation](nswidgetwantslocation.md): A Boolean value that indicates a widget uses the user’s location information.
- [NSLocationDefaultAccuracyReduced](nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
