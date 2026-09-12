> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicpropertycontainer](https://developer.apple.com/documentation/musickit/musicpropertycontainer)

# MusicPropertyContainer

**Framework:** MusicKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A protocol for music items that allow loading additional properties that you can fetch asynchronously.

## Declaration

```swift
protocol MusicPropertyContainer
```

## Topics

### Instance Methods

- [with(\_:)](musicpropertycontainer/with%28__%29.md): Loads a new instance of the music item that includes the specified properties.
- [with(\_:preferredSource:)](musicpropertycontainer/with%28__preferredsource_%29-8ec7p.md): Loads a new instance of the music item that includes the specified properties.
- [with(\_:preferredSource:)](musicpropertycontainer/with%28__preferredsource_%29-9wqhc.md): Loads a new instance of the music item that includes the specified properties.

## Relationships

### Conforming Types

- [Album](album.md)
- [Artist](artist.md)
- [Curator](curator.md)
- [Genre](genre.md)
- [MusicPlayer.Queue.Entry.Item](musicplayer/queue/entry/item-swift.enum.md)
- [MusicVideo](musicvideo.md)
- [Playlist](playlist.md)
- [Playlist.Entry](playlist/entry.md)
- [Playlist.Entry.Item](playlist/entry/item-swift.enum.md)
- [RadioShow](radioshow.md)
- [RecordLabel](recordlabel.md)
- [Song](song.md)
- [Station](station.md)
- [Track](track.md)

## See Also

### Utility

- [MusicItem](musicitem.md): A protocol with basic requirements for music items.
- [MusicItemID](musicitemid.md): An object that represents a unique identifier for a music item.
- [MusicItemCollection](musicitemcollection.md): A collection of music items.
- [MusicRelationshipProperty](musicrelationshipproperty.md): An identifier for a music item relationship property from a specific root type to a specific value type for the element of the resulting collection.
- [MusicExtendedAttributeProperty](musicextendedattributeproperty.md): An identifier for a music item extended attribute property from a specific root type to a specific resulting value type.
- [MusicAttributeProperty](musicattributeproperty.md): An identifier for a music item attribute property from a specific root type to a specific resulting value type.
- [PartialMusicAsyncProperty](partialmusicasyncproperty.md): A partially type-erased identifier for a music item property that you can fetch asynchronously from a concrete root type to any resulting value type.
- [PartialMusicProperty](partialmusicproperty.md): A partially type-erased identifier for a music item property from a concrete root type to any resulting value type.
- [AnyMusicProperty](anymusicproperty.md): A type-erased identifier for a music item property, from any root type to any resulting value type.
