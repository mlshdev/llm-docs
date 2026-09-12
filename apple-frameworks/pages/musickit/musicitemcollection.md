> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicitemcollection](https://developer.apple.com/documentation/musickit/musicitemcollection)

# MusicItemCollection

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A collection of music items.

## Declaration

```swift
struct MusicItemCollection<MusicItemType> where MusicItemType : MusicItem
```

## Topics

### Operators

- [+=(\_:\_:)](musicitemcollection/+=%28____%29.md): Appends contents of a collection representing a next batch, in the right hand side, to the existing collection on the left hand side.

### Initializers

- [init(\_:)](musicitemcollection/init%28__%29.md): Conforms when `MusicItemType` conforms to `MusicItem`.

### Instance Properties

- [hasNextBatch](musicitemcollection/hasnextbatch.md): Conforms when `MusicItemType` conforms to `MusicItem`. A Boolean value that indicates whether the collection has information that allows it to fetch a subsequent batch of items.
- [title](musicitemcollection/title.md): An optional title for the collection.

### Instance Methods

- [nextBatch(limit:)](musicitemcollection/nextbatch%28limit_%29-432i0.md): Conforms when `MusicItemType` conforms to `MusicItem`. Fetches the next batch of items asynchronously.
- [nextBatch(limit:)](musicitemcollection/nextbatch%28limit_%29-ywue.md): Conforms when `MusicItemType` conforms to `MusicItem`. Fetches the next batch of items asynchronously.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Utility

- [MusicItem](musicitem.md): A protocol with basic requirements for music items.
- [MusicItemID](musicitemid.md): An object that represents a unique identifier for a music item.
- [MusicPropertyContainer](musicpropertycontainer.md): A protocol for music items that allow loading additional properties that you can fetch asynchronously.
- [MusicRelationshipProperty](musicrelationshipproperty.md): An identifier for a music item relationship property from a specific root type to a specific value type for the element of the resulting collection.
- [MusicExtendedAttributeProperty](musicextendedattributeproperty.md): An identifier for a music item extended attribute property from a specific root type to a specific resulting value type.
- [MusicAttributeProperty](musicattributeproperty.md): An identifier for a music item attribute property from a specific root type to a specific resulting value type.
- [PartialMusicAsyncProperty](partialmusicasyncproperty.md): A partially type-erased identifier for a music item property that you can fetch asynchronously from a concrete root type to any resulting value type.
- [PartialMusicProperty](partialmusicproperty.md): A partially type-erased identifier for a music item property from a concrete root type to any resulting value type.
- [AnyMusicProperty](anymusicproperty.md): A type-erased identifier for a music item property, from any root type to any resulting value type.
