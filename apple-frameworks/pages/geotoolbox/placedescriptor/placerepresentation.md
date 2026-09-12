> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/geotoolbox/placedescriptor/placerepresentation](https://developer.apple.com/documentation/geotoolbox/placedescriptor/placerepresentation)

# PlaceDescriptor.PlaceRepresentation

**Framework:** GeoToolbox  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Values that represent a physical place, suitable for use when searching or retrieving rich data.

## Declaration

```swift
enum PlaceRepresentation
```

## Topics

### Place representations

- [address](address.md): A full address, that one could use in postal or administrative scenarios.
- [coordinate](coordinate.md): The latitude and longitude for a place.

### Enumeration cases

- [PlaceDescriptor.PlaceRepresentation.address(\_:)](placerepresentation/address%28__%29.md): Full address, as you’d use in postal or administrative scenarios.
- [PlaceDescriptor.PlaceRepresentation.coordinate(\_:)](placerepresentation/coordinate%28__%29.md): A physical location described by its latitude and longitude.
- [PlaceDescriptor.PlaceRepresentation.deviceLocation(\_:)](placerepresentation/devicelocation%28__%29.md): Physical location in a coordinate system that a device would collect.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Values that describe places and mapping service providers

- [PlaceDescriptor.SupportingPlaceRepresentation](supportingplacerepresentation.md): Values that describe the representation of a physical place using proprietary attributes, such as an alphanumeric location identifier from a mapping service provider.
