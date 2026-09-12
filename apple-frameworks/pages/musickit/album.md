> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/album](https://developer.apple.com/documentation/musickit/album)

# Album

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A music item that represents an album.

## Declaration

```swift
struct Album
```

## Topics

### Instance Properties

- [appearsOn](album/appearson.md): A collection of playlists that include tracks from the album.
- [artistName](album/artistname.md): The artist’s name.
- [artistURL](album/artisturl.md): The artist’s URL.
- [artists](album/artists.md): The album’s associated artists.
- [artwork](album/artwork.md): The album artwork.
- [audioVariants](album/audiovariants.md): The variants that indicate the quality of audio available for the album.
- [contentRating](album/contentrating.md): The rating of the content.
- [copyright](album/copyright.md): The copyright text for the album.
- [editorialNotes](album/editorialnotes.md): The notes about the album that appear in the Music app.
- [genreNames](album/genrenames.md): The names of the album’s associated genres.
- [genres](album/genres.md): The genres for the album.
- [id](album/id.md): The unique identifier for the album.
- [isAppleDigitalMaster](album/isappledigitalmaster.md): A Boolean value that indicates whether the album is an Apple Digital Master.
- [isCompilation](album/iscompilation.md): A Boolean value that indicates whether the album is a compilation.
- [isComplete](album/iscomplete.md): A Boolean value that indicates whether the album is complete.
- [isSingle](album/issingle.md): A Boolean value that indicates whether the album consists of a single song.
- [lastPlayedDate](album/lastplayeddate.md): The date when the user last played the album on this device.
- [libraryAddedDate](album/libraryaddeddate.md): The date when the user added the album to the library.
- [otherVersions](album/otherversions.md): A collection of other versions of the album.
- [playParameters](album/playparameters.md): The parameters to use to play the tracks of the album.
- [recordLabelName](album/recordlabelname.md): The name of the album’s record label.
- [recordLabels](album/recordlabels.md): The record labels for the album.
- [relatedAlbums](album/relatedalbums.md): A collection of related albums.
- [relatedVideos](album/relatedvideos.md): A collection of the album’s music videos.
- [releaseDate](album/releasedate.md): The release date (or expected prerelease date) for the album.
- [title](album/title.md): The title of the album.
- [trackCount](album/trackcount.md): The number of tracks for the album.
- [tracks](album/tracks.md): The tracks on the album.
- [upc](album/upc.md): The universal product code (UPC) for the album.
- [url](album/url.md): The URL for the album.

### Default Implementations

- [FilterableMusicItem Implementations](album/filterablemusicitem-implementations.md)
- [MusicLibraryRequestable Implementations](album/musiclibraryrequestable-implementations.md)

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

- [Artist](artist.md): A music item that represents an artist.
- [Curator](curator.md): A music item that represents a curator.
- [Genre](genre.md): A music item that represents a genre.
- [MusicVideo](musicvideo.md): A music item that represents a music video.
- [Playlist](playlist.md): A music item that represents a playlist.
- [RadioShow](radioshow.md): A music item that represents a radio show.
- [RecordLabel](recordlabel.md): A music item that represents a record label.
- [Song](song.md): A music item that represents a song.
- [Station](station.md): A music item that represents a station.
- [Track](track.md): A music item that represents a track.
