> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/playlist](https://developer.apple.com/documentation/musickit/playlist)

# Playlist

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A music item that represents a playlist.

## Declaration

```swift
struct Playlist
```

## Topics

### Structures

- [Playlist.Entry](playlist/entry.md): A music item that represents a playlist entry.

### Instance Properties

- [artwork](playlist/artwork.md): The artwork for the playlist.
- [curator](playlist/curator.md): The playlist’s associated curator.
- [curatorName](playlist/curatorname.md): The display name for the playlist’s curator.
- [entries](playlist/entries.md): The entries in the playlist
- [featuredArtists](playlist/featuredartists.md): A collection of featured artists for this playlist.
- [id](playlist/id.md): The unique identifier for the playlist.
- [isChart](playlist/ischart.md): A Boolean value that indicates whether the playlist represents a popularity chart.
- [kind](playlist/kind-swift.property.md): The kind of playlist.
- [lastModifiedDate](playlist/lastmodifieddate.md): The playlist’s most recent modification date.
- [lastPlayedDate](playlist/lastplayeddate.md): The date when the user last played the playlist on this device.
- [libraryAddedDate](playlist/libraryaddeddate.md): The date when the user added the playlist to the library.
- [moreByCurator](playlist/morebycurator.md): A collection of additional playlists by the same curator.
- [name](playlist/name.md): The name of the playlist.
- [playParameters](playlist/playparameters.md): The parameters to use to play the tracks in the playlist.
- [radioShow](playlist/radioshow.md): The playlist’s associated radio show.
- [shortDescription](playlist/shortdescription.md): An abbreviated description to show inline or when the playlist appears alongside other content.
- [standardDescription](playlist/standarddescription.md): A description to show when the playlist is prominently displayed.
- [tracks](playlist/tracks.md): The tracks in the playlist.
- [url](playlist/url.md): The URL for the playlist.

### Enumerations

- [Playlist.Kind](playlist/kind-swift.enum.md): The available kinds of playlists.

### Default Implementations

- [FilterableMusicItem Implementations](playlist/filterablemusicitem-implementations.md)
- [MusicLibraryRequestable Implementations](playlist/musiclibraryrequestable-implementations.md)

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
- [MusicCatalogChartRequestable](musiccatalogchartrequestable.md)
- [MusicCatalogSearchable](musiccatalogsearchable.md)
- [MusicItem](musicitem.md)
- [MusicLibraryAddable](musiclibraryaddable.md)
- [MusicLibraryRequestable](musiclibraryrequestable.md)
- [MusicLibrarySearchable](musiclibrarysearchable.md)
- [MusicLibrarySectionRequestable](musiclibrarysectionrequestable.md)
- [MusicPersonalRecommendationItem](musicpersonalrecommendationitem.md)
- [MusicPlaylistAddable](musicplaylistaddable.md)
- [MusicPropertyContainer](musicpropertycontainer.md)
- [PlayableMusicItem](playablemusicitem.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Music Items

- [Album](album.md): A music item that represents an album.
- [Artist](artist.md): A music item that represents an artist.
- [Curator](curator.md): A music item that represents a curator.
- [Genre](genre.md): A music item that represents a genre.
- [MusicVideo](musicvideo.md): A music item that represents a music video.
- [RadioShow](radioshow.md): A music item that represents a radio show.
- [RecordLabel](recordlabel.md): A music item that represents a record label.
- [Song](song.md): A music item that represents a song.
- [Station](station.md): A music item that represents a station.
- [Track](track.md): A music item that represents a track.
