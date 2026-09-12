> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicitemid](https://developer.apple.com/documentation/musickit/musicitemid)

# MusicItemID

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents a unique identifier for a music item.

## Declaration

```swift
@frozen struct MusicItemID
```

## Topics

### Initializers

- [init(\_:)](musicitemid/init%28__%29.md): Creates a music item identifier with a string.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MusicLibraryRequestFilterValueEquatable](musiclibraryrequestfiltervalueequatable.md)
- [MusicLibraryRequestFilterValueMembershipComparable](musiclibraryrequestfiltervaluemembershipcomparable.md)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Utility

- [MusicItem](musicitem.md): A protocol with basic requirements for music items.
- [MusicItemCollection](musicitemcollection.md): A collection of music items.
- [MusicPropertyContainer](musicpropertycontainer.md): A protocol for music items that allow loading additional properties that you can fetch asynchronously.
- [MusicRelationshipProperty](musicrelationshipproperty.md): An identifier for a music item relationship property from a specific root type to a specific value type for the element of the resulting collection.
- [MusicExtendedAttributeProperty](musicextendedattributeproperty.md): An identifier for a music item extended attribute property from a specific root type to a specific resulting value type.
- [MusicAttributeProperty](musicattributeproperty.md): An identifier for a music item attribute property from a specific root type to a specific resulting value type.
- [PartialMusicAsyncProperty](partialmusicasyncproperty.md): A partially type-erased identifier for a music item property that you can fetch asynchronously from a concrete root type to any resulting value type.
- [PartialMusicProperty](partialmusicproperty.md): A partially type-erased identifier for a music item property from a concrete root type to any resulting value type.
- [AnyMusicProperty](anymusicproperty.md): A type-erased identifier for a music item property, from any root type to any resulting value type.
