> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/timezone](https://developer.apple.com/documentation/mapkit/mkmapitem/timezone)

# timeZone (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time zone of the specified location.

## Declaration

```swift
var timeZone: TimeZone? { get set }
```

<a id="Discussion"></a>

## Discussion

When you search for map items, MapKit populates this field with the time zone information as a convenience. You may also set the time zone for any map items you create.

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
- [url](url.md): The URL associated with the specified location.

# timeZone (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The time zone of the specified location.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSTimeZone * timeZone;
```

<a id="Discussion"></a>

## Discussion

When you search for map items, MapKit populates this field with the time zone information as a convenience. You may also set the time zone for any map items you create.

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
- [url](url.md): The URL associated with the specified location.
