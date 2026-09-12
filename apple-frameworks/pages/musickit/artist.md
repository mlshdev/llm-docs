> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/artist](https://developer.apple.com/documentation/musickit/artist)

# Artist

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A music item that represents an artist.

## Declaration

```swift
struct Artist
```

## Topics

### Instance Properties

- [albums](artist/albums.md): The artist’s associated albums.
- [appearsOnAlbums](artist/appearsonalbums.md): A collection of albums from other artists that this artist appears on.
- [artwork](artist/artwork.md): The artist artwork.
- [compilationAlbums](artist/compilationalbums.md): A collection of compilation albums that include tracks by the artist.
- [editorialNotes](artist/editorialnotes.md): The notes about the artist that appear in the Music catalog.
- [featuredAlbums](artist/featuredalbums.md): A collection of featured albums of the artist.
- [featuredPlaylists](artist/featuredplaylists.md): A collection of the artist’s associated playlists.
- [fullAlbums](artist/fullalbums.md): A collection of the artist’s full-release albums.
- [genreNames](artist/genrenames.md): The names of this artist’s associated genres.
- [genres](artist/genres.md): The artist’s associated genres.
- [id](artist/id.md): The unique identifier for the artist.
- [latestRelease](artist/latestrelease.md): The artist’s most recent album.
- [libraryAddedDate](artist/libraryaddeddate.md): The date when the user added the artist to the library.
- [liveAlbums](artist/livealbums.md): A collection of the artist’s live albums.
- [musicVideos](artist/musicvideos.md): The artist’s associated music videos.
- [name](artist/name.md): The name of the artist.
- [playlists](artist/playlists.md): The artist’s associated playlists.
- [similarArtists](artist/similarartists.md): A collection of artists similar to this artist.
- [singles](artist/singles.md): A collection of the artist’s associated albums in the *singles* category.
- [station](artist/station.md): The artist’s associated station.
- [topMusicVideos](artist/topmusicvideos.md): A collection of the artist’s top music videos.
- [topSongs](artist/topsongs.md): A collection of the artist’s top songs.
- [url](artist/url.md): The URL for the artist.

### Default Implementations

- [FilterableMusicItem Implementations](artist/filterablemusicitem-implementations.md)
- [MusicLibraryRequestable Implementations](artist/musiclibraryrequestable-implementations.md)

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
- [MusicLibraryRequestable](musiclibraryrequestable.md)
- [MusicLibrarySearchable](musiclibrarysearchable.md)
- [MusicLibrarySectionRequestable](musiclibrarysectionrequestable.md)
- [MusicPropertyContainer](musicpropertycontainer.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Music Items

- [Album](album.md): A music item that represents an album.
- [Curator](curator.md): A music item that represents a curator.
- [Genre](genre.md): A music item that represents a genre.
- [MusicVideo](musicvideo.md): A music item that represents a music video.
- [Playlist](playlist.md): A music item that represents a playlist.
- [RadioShow](radioshow.md): A music item that represents a radio show.
- [RecordLabel](recordlabel.md): A music item that represents a record label.
- [Song](song.md): A music item that represents a song.
- [Station](station.md): A music item that represents a station.
- [Track](track.md): A music item that represents a track.
