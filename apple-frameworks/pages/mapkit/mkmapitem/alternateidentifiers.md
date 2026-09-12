> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/alternateidentifiers](https://developer.apple.com/documentation/mapkit/mkmapitem/alternateidentifiers)

# alternateIdentifiers (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A set of alternative identifiers for a place.

## Declaration

```swift
var alternateIdentifiers: Set<MKMapItem.Identifier> { get }
```

## Mentioned In

- [Identifying unique locations with Place IDs](../identifying-unique-locations-with-place-ids.md)

<a id="Discussion"></a>

## Discussion

The identifier for a point of interest may change over time. This property provides a set of alternative identifiers for this map item.

## See Also

### Accessing the map item attributes

- [MKMapItem.Identifier](identifier-swift.class.md): A unique identifier for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](name.md): The descriptive name associated with the map item.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.

# alternateIdentifiers (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A set of alternative identifiers for a place.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<MKMapItemIdentifier *> * alternateIdentifiers;
```

## Mentioned In

- [Identifying unique locations with Place IDs](../identifying-unique-locations-with-place-ids.md)

<a id="Discussion"></a>

## Discussion

The identifier for a point of interest may change over time. This property provides a set of alternative identifiers for this map item.

## See Also

### Accessing the map item attributes

- [MKMapItemIdentifier](identifier-swift.class.md): A unique identifier for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](name.md): The descriptive name associated with the map item.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.
