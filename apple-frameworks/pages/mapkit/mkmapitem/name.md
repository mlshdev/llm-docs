> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/name](https://developer.apple.com/documentation/mapkit/mkmapitem/name)

# name (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The descriptive name associated with the map item.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the name associated with the location. For example, if there’s a business at the specified location, use this property to specify the name of the business.

If this map item represents the user’s location, the value in this property is a localized version of *Current Location*.

## See Also

### Accessing the map item attributes

- [MKMapItem.Identifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.

# name (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The descriptive name associated with the map item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the name associated with the location. For example, if there’s a business at the specified location, use this property to specify the name of the business.

If this map item represents the user’s location, the value in this property is a localized version of *Current Location*.

## See Also

### Accessing the map item attributes

- [MKMapItemIdentifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.
