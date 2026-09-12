> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nswidgetwantslocation](https://developer.apple.com/documentation/bundleresources/information-property-list/nswidgetwantslocation)

# NSWidgetWantsLocation

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · macOS 11.0+

A Boolean value that indicates a widget uses the user’s location information.

## Details

`NSWidgetWantsLocation`

<a id="Discussion"></a>

## Discussion

To access the user’s location information from a widget, set the value to [true](https://developer.apple.com/documentation/swift/true) in the widget extension’s `Info.plist` file.

Before a widget can access location information, the containing app must request authorization from the user. The containing app’s `Info.plist` file must also contain relevant purpose strings. For more information, see [Requesting authorization to use location services](../../corelocation/requesting-authorization-to-use-location-services.md).

## See Also

### Location

- [Choosing the  Location Services Authorization to Request](../choosing-the-location-services-authorization-to-request.md): Determine the authorization your app needs to access location data.
- [NSLocationAlwaysAndWhenInUseUsageDescription](nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.
- [NSLocationUsageDescription](nslocationusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location information.
- [NSLocationWhenInUseUsageDescription](nslocationwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information while the app is running in the foreground.
- [NSLocationTemporaryUsageDescriptionDictionary](nslocationtemporaryusagedescriptiondictionary.md): A collection of messages that explain why the app is requesting temporary access to their location.
- [NSLocationAlwaysUsageDescription](nslocationalwaysusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their location at all times.
- [NSLocationDefaultAccuracyReduced](nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
