> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem](https://developer.apple.com/documentation/mapkit/mkmapitem)

# MKMapItem (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A point of interest on the map.

## Declaration

```swift
class MKMapItem
```

## Mentioned In

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md)

<a id="overview"></a>

## Overview

A map item includes a geographic location and any interesting data that might apply to that location, such as the address at that location and the name of a business at that address. You can also create a special `MKMapItem` object representing the user’s location.

Use this class to do the following:

- Share map-related data with the Maps app.
- Handle requests for directions that originate from the Maps app.

To display information in the Maps app, create an `MKMapItem` object with the information you want to display and call the [openMaps(with:launchOptions:)](mkmapitem/openmaps%28with_launchoptions_%29.md) method. The Maps app displays that location on the map and shows the information you provide.

If you implement a routing app, the Maps app provides two `MKMapItem` objects representing the start and end points. Use the information in those two objects to plot the route and generate directions.

## Topics

### Creating map items

- [init(placemark:)](mkmapitem/init%28placemark_%29.md): Deprecated. Creates and returns a map item object using the specified placemark object.
- [forCurrentLocation()](mkmapitem/forcurrentlocation%28%29.md): Creates and returns a singleton map item object representing the user’s location.

### Accessing the map item attributes

- [MKMapItem.Identifier](mkmapitem/identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](mkmapitem/alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](mkmapitem/identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](mkmapitem/iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](mkmapitem/name.md): The descriptive name associated with the map item.
- [placemark](mkmapitem/placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](mkmapitem/pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](mkmapitem/phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](mkmapitem/timezone.md): The time zone of the specified location.
- [url](mkmapitem/url.md): The URL associated with the specified location.

### Launching the Maps app

- [openMaps(with:launchOptions:)](mkmapitem/openmaps%28with_launchoptions_%29.md): Opens the Maps app and displays the specified map items.
- [openMaps(with:launchOptions:completionHandler:)](mkmapitem/openmaps%28with_launchoptions_completionhandler_%29.md): Opens the Maps app using the specified map items and options.
- [openMaps(with:launchOptions:from:completionHandler:)](mkmapitem/openmaps%28with_launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified map items and options.
- [openInMaps(launchOptions:)](mkmapitem/openinmaps%28launchoptions_%29.md): Opens the Maps app and displays the map item.
- [openInMaps(launchOptions:completionHandler:)](mkmapitem/openinmaps%28launchoptions_completionhandler_%29.md): Opens the Maps app and displays the map item.
- [openInMaps(launchOptions:from:completionHandler:)](mkmapitem/openinmaps%28launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified options.

### Serializing a map item

- [MKMapItemTypeIdentifier](mkmapitemtypeidentifier.md): A constant that indicates the type of a serialized map item.

### Opening items at launch time

- [Launch options dictionary keys](launch-options-dictionary-keys.md): Launch options to specify when opening map items in the Maps app.
- [Directions mode values](directions-mode-values.md): Strings that represent the possible values of the launch options direction mode key.

### Initializers

- [init(location:address:)](mkmapitem/init%28location_address_%29.md): Creates and returns a map item object using the specified location and address objects.

### Instance Properties

- [address](mkmapitem/address.md): The address object.
- [addressRepresentations](mkmapitem/addressrepresentations.md): The address representations object that contains various address representations useful for display purposes.
- [location](mkmapitem/location.md): The location object.

### Default Implementations

- [MKMapItem Implementations](mkmapitem/mkmapitem-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Essentials

- [Enabling Maps capability in Xcode](enabling-maps-capability-in-xcode.md): Configure your routing app to support providing directions.
- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapView](mkmapview.md): An embeddable map interface, similar to the one that the Maps app provides.

# MKMapItem (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A point of interest on the map.

## Declaration

```objectivec
@interface MKMapItem : NSObject
```

## Mentioned In

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md)

<a id="overview"></a>

## Overview

A map item includes a geographic location and any interesting data that might apply to that location, such as the address at that location and the name of a business at that address. You can also create a special `MKMapItem` object representing the user’s location.

Use this class to do the following:

- Share map-related data with the Maps app.
- Handle requests for directions that originate from the Maps app.

To display information in the Maps app, create an `MKMapItem` object with the information you want to display and call the [openMapsWithItems:launchOptions:](mkmapitem/openmaps%28with_launchoptions_%29.md) method. The Maps app displays that location on the map and shows the information you provide.

If you implement a routing app, the Maps app provides two `MKMapItem` objects representing the start and end points. Use the information in those two objects to plot the route and generate directions.

## Topics

### Creating map items

- [initWithPlacemark:](mkmapitem/init%28placemark_%29.md): Deprecated. Creates and returns a map item object using the specified placemark object.
- [mapItemForCurrentLocation](mkmapitem/forcurrentlocation%28%29.md): Creates and returns a singleton map item object representing the user’s location.

### Accessing the map item attributes

- [MKMapItemIdentifier](mkmapitem/identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](mkmapitem/alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](mkmapitem/identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](mkmapitem/iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](mkmapitem/name.md): The descriptive name associated with the map item.
- [placemark](mkmapitem/placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](mkmapitem/pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](mkmapitem/phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](mkmapitem/timezone.md): The time zone of the specified location.
- [url](mkmapitem/url.md): The URL associated with the specified location.

### Launching the Maps app

- [openMapsWithItems:launchOptions:](mkmapitem/openmaps%28with_launchoptions_%29.md): Opens the Maps app and displays the specified map items.
- [openMapsWithItems:launchOptions:completionHandler:](mkmapitem/openmaps%28with_launchoptions_completionhandler_%29.md): Opens the Maps app using the specified map items and options.
- [openMapsWithItems:launchOptions:fromScene:completionHandler:](mkmapitem/openmaps%28with_launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified map items and options.
- [openInMapsWithLaunchOptions:](mkmapitem/openinmaps%28launchoptions_%29.md): Opens the Maps app and displays the map item.
- [openInMapsWithLaunchOptions:completionHandler:](mkmapitem/openinmaps%28launchoptions_completionhandler_%29.md): Opens the Maps app and displays the map item.
- [openInMapsWithLaunchOptions:fromScene:completionHandler:](mkmapitem/openinmaps%28launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified options.

### Serializing a map item

- [MKMapItemTypeIdentifier](mkmapitemtypeidentifier.md): A constant that indicates the type of a serialized map item.

### Opening items at launch time

- [Launch options dictionary keys](launch-options-dictionary-keys.md): Launch options to specify when opening map items in the Maps app.
- [Directions mode values](directions-mode-values.md): Strings that represent the possible values of the launch options direction mode key.

### Instance Properties

- [address](mkmapitem/address.md): The address object.
- [addressRepresentations](mkmapitem/addressrepresentations.md): The address representations object that contains various address representations useful for display purposes.
- [location](mkmapitem/location.md): The location object.

### Instance Methods

- [initWithLocation:address:](mkmapitem/init%28location_address_%29.md): Creates and returns a map item object using the specified location and address objects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Essentials

- [Enabling Maps capability in Xcode](enabling-maps-capability-in-xcode.md): Configure your routing app to support providing directions.
- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapView](mkmapview.md): An embeddable map interface, similar to the one that the Maps app provides.
