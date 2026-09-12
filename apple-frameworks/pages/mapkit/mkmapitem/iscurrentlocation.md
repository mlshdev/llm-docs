> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/iscurrentlocation](https://developer.apple.com/documentation/mapkit/mkmapitem/iscurrentlocation)

# isCurrentLocation (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the map item represents the user’s location.

## Declaration

```swift
var isCurrentLocation: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the map item represents the user’s location, and the value in the [placemark](placemark.md) property is `nil`.

## See Also

### Accessing the map item attributes

- [MKMapItem.Identifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [name](name.md): The descriptive name associated with the map item.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.

# isCurrentLocation (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the map item represents the user’s location.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isCurrentLocation;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the map item represents the user’s location, and the value in the [placemark](placemark.md) property is `nil`.

## See Also

### Accessing the map item attributes

- [MKMapItemIdentifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [name](name.md): The descriptive name associated with the map item.
- [placemark](placemark.md): Deprecated. The placemark object containing the location information.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.
