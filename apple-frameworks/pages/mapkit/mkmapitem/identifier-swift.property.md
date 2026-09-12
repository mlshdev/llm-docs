> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/identifier-swift.property](https://developer.apple.com/documentation/mapkit/mkmapitem/identifier-swift.property)

# identifier (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A unique identifier for a place.

## Declaration

```swift
var identifier: MKMapItem.Identifier? { get }
```

## Mentioned In

- [Identifying unique locations with Place IDs](../identifying-unique-locations-with-place-ids.md)

<a id="Discussion"></a>

## Discussion

An identifier uniquely identifies a place, such as a business or a landmark. You can persist an identifier and use it later to recall information about place.

## See Also

### Accessing the map item attributes

- [MKMapItem.Identifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](name.md): The descriptive name associated with the map item.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.

# identifier (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A unique identifier for a place.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) MKMapItemIdentifier * identifier;
```

## Mentioned In

- [Identifying unique locations with Place IDs](../identifying-unique-locations-with-place-ids.md)

<a id="Discussion"></a>

## Discussion

An identifier uniquely identifies a place, such as a business or a landmark. You can persist an identifier and use it later to recall information about place.

## See Also

### Accessing the map item attributes

- [MKMapItemIdentifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](name.md): The descriptive name associated with the map item.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.
