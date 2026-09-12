> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/partialmusicasyncproperty](https://developer.apple.com/documentation/musickit/partialmusicasyncproperty)

# PartialMusicAsyncProperty

**Framework:** MusicKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A partially type-erased identifier for a music item property that you can fetch asynchronously from a concrete root type to any resulting value type.

## Declaration

```swift
class PartialMusicAsyncProperty<Root>
```

## Relationships

### Inherits From

- [PartialMusicProperty](partialmusicproperty.md)

### Inherited By

- [MusicExtendedAttributeProperty](musicextendedattributeproperty.md)
- [MusicRelationshipProperty](musicrelationshipproperty.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Utility

- [MusicItem](musicitem.md): A protocol with basic requirements for music items.
- [MusicItemID](musicitemid.md): An object that represents a unique identifier for a music item.
- [MusicItemCollection](musicitemcollection.md): A collection of music items.
- [MusicPropertyContainer](musicpropertycontainer.md): A protocol for music items that allow loading additional properties that you can fetch asynchronously.
- [MusicRelationshipProperty](musicrelationshipproperty.md): An identifier for a music item relationship property from a specific root type to a specific value type for the element of the resulting collection.
- [MusicExtendedAttributeProperty](musicextendedattributeproperty.md): An identifier for a music item extended attribute property from a specific root type to a specific resulting value type.
- [MusicAttributeProperty](musicattributeproperty.md): An identifier for a music item attribute property from a specific root type to a specific resulting value type.
- [PartialMusicProperty](partialmusicproperty.md): A partially type-erased identifier for a music item property from a concrete root type to any resulting value type.
- [AnyMusicProperty](anymusicproperty.md): A type-erased identifier for a music item property, from any root type to any resulting value type.
