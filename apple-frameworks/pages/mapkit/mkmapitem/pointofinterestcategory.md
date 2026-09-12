> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/pointofinterestcategory](https://developer.apple.com/documentation/mapkit/mkmapitem/pointofinterestcategory)

# pointOfInterestCategory (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The point-of-interest category for the map item.

## Declaration

```swift
var pointOfInterestCategory: MKPointOfInterestCategory? { get set }
```

<a id="Discussion"></a>

## Discussion

If the map item doesn’t correspond to a point of interest, or if the point of interest isn’t one of the known values in [MKPointOfInterestCategory](../mkpointofinterestcategory.md), [pointOfInterestCategory](pointofinterestcategory.md) is `nil`.

## See Also

### Accessing the map item attributes

- [MKMapItem.Identifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](name.md): The descriptive name associated with the map item.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.

# pointOfInterestCategory (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The point-of-interest category for the map item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MKPointOfInterestCategory pointOfInterestCategory;
```

<a id="Discussion"></a>

## Discussion

If the map item doesn’t correspond to a point of interest, or if the point of interest isn’t one of the known values in [MKPointOfInterestCategory](../mkpointofinterestcategory.md), [pointOfInterestCategory](pointofinterestcategory.md) is `nil`.

## See Also

### Accessing the map item attributes

- [MKMapItemIdentifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](name.md): The descriptive name associated with the map item.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.
