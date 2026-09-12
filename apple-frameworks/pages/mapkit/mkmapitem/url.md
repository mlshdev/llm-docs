> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/url](https://developer.apple.com/documentation/mapkit/mkmapitem/url)

# url (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The URL associated with the specified location.

## Declaration

```swift
var url: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

If there’s a relevant URL associated with the location, such as for a business at the location, use this property to specify that value.

## See Also

### Accessing the map item attributes

- [MKMapItem.Identifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](name.md): The descriptive name associated with the map item.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.

# url (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The URL associated with the specified location.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSURL * url;
```

<a id="Discussion"></a>

## Discussion

If there’s a relevant URL associated with the location, such as for a business at the location, use this property to specify that value.

## See Also

### Accessing the map item attributes

- [MKMapItemIdentifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](name.md): The descriptive name associated with the map item.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
