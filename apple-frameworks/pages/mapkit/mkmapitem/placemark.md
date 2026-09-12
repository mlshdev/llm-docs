> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/placemark](https://developer.apple.com/documentation/mapkit/mkmapitem/placemark)

# placemark (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

The placemark object containing the location information.

> Use location, address and addressRepresentations instead

## Declaration

```swift
var placemark: MKPlacemark { get }
```

<a id="Discussion"></a>

## Discussion

If you create the map item using the [forCurrentLocation()](forcurrentlocation%28%29.md) method, the value of this property is `nil` and the [isCurrentLocation](iscurrentlocation.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the map item attributes

- [MKMapItem.Identifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](name.md): The descriptive name associated with the map item.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.

# placemark (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

The placemark object containing the location information.

> Use location, address and addressRepresentations instead

## Declaration

```objectivec
@property (nonatomic, readonly) MKPlacemark * placemark;
```

<a id="Discussion"></a>

## Discussion

If you create the map item using the [mapItemForCurrentLocation](forcurrentlocation%28%29.md) method, the value of this property is `nil` and the [isCurrentLocation](iscurrentlocation.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the map item attributes

- [MKMapItemIdentifier](identifier-swift.class.md): A unique identifier for a place.
- [alternateIdentifiers](alternateidentifiers.md): A set of alternative identifiers for a place.
- [identifier](identifier-swift.property.md): A unique identifier for a place.
- [isCurrentLocation](iscurrentlocation.md): A Boolean value that indicates whether the map item represents the user’s location.
- [name](name.md): The descriptive name associated with the map item.
- [pointOfInterestCategory](pointofinterestcategory.md): The point-of-interest category for the map item.
- [phoneNumber](phonenumber.md): The phone number associated with a business at the specified location.
- [timeZone](timezone.md): The time zone of the specified location.
- [url](url.md): The URL associated with the specified location.
