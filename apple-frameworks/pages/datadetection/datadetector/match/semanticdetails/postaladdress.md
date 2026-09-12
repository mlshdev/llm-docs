> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails/postaladdress](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/postaladdress)

# DataDetector.Match.SemanticDetails.PostalAddress

**Framework:** DataDetection  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A match that the data detector determines represents a postal address.

## Declaration

```swift
struct PostalAddress
```

<a id="Discussion"></a>

## Discussion

The data detector attempts to populate as much of the postal address as possible. The properties the detector supports include:

- [fullAddress](postaladdress/fulladdress.md) contains the full string of the address and may contain more than just the sum of the individual components.
- [street](postaladdress/street.md) may contain the street component of the address.
- [city](postaladdress/city.md) may contain the city component of the address.
- [state](postaladdress/state.md) may contain the state component of the address.
- [postalCode](postaladdress/postalcode.md) may contain the postal code component of the address.
- [region](postaladdress/region.md) may contain the region component of the address, for example, United States or France.
- [regionCode](postaladdress/regioncode.md) may contain the ISO region code of the address.
- [label](postaladdress/label.md) may contain a value suitable to populate a label when creating a contact.

## Topics

### Properties that detail parts of a postal address

- [fullAddress](postaladdress/fulladdress.md): A string that contains the full string of the address.
- [street](postaladdress/street.md): An optional string that may contain the street component of the address.
- [city](postaladdress/city.md): An optional string that may contain the city component of the address.
- [state](postaladdress/state.md): An optional string that may contain the state component of the address.
- [postalCode](postaladdress/postalcode.md): An optional string that may contain the postal code component of the address.
- [region](postaladdress/region.md): An optional string that may contain the region component of the address.
- [regionCode](postaladdress/regioncode.md): An optional string that may contain the standard ISO 3166 region code of the address.
- [label](postaladdress/label.md): An optional string that may contain a value suitable to populate a label when creating a contact.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
