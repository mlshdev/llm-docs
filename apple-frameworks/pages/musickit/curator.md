> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/curator](https://developer.apple.com/documentation/musickit/curator)

# Curator

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 9.0+

A music item that represents a curator.

## Declaration

```swift
struct Curator
```

## Topics

### Instance Properties

- [artwork](curator/artwork.md): The curator artwork.
- [editorialNotes](curator/editorialnotes.md): The notes about the curator that appear in the Music catalog.
- [id](curator/id.md): The unique identifier for the curator.
- [kind](curator/kind-swift.property.md): The kind of curator.
- [name](curator/name.md): The name of the curator.
- [playlists](curator/playlists.md): The curator’s associated playlists.
- [url](curator/url.md): The URL for the curator.

### Enumerations

- [Curator.Kind](curator/kind-swift.enum.md): The available kinds of curators.

### Default Implementations

- [FilterableMusicItem Implementations](curator/filterablemusicitem-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [FilterableMusicItem](filterablemusicitem.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MusicCatalogSearchable](musiccatalogsearchable.md)
- [MusicItem](musicitem.md)
- [MusicPropertyContainer](musicpropertycontainer.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Music Items

- [Album](album.md): A music item that represents an album.
- [Artist](artist.md): A music item that represents an artist.
- [Genre](genre.md): A music item that represents a genre.
- [MusicVideo](musicvideo.md): A music item that represents a music video.
- [Playlist](playlist.md): A music item that represents a playlist.
- [RadioShow](radioshow.md): A music item that represents a radio show.
- [RecordLabel](recordlabel.md): A music item that represents a record label.
- [Song](song.md): A music item that represents a song.
- [Station](station.md): A music item that represents a station.
- [Track](track.md): A music item that represents a track.
