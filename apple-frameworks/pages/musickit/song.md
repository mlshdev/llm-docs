> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/song](https://developer.apple.com/documentation/musickit/song)

# Song

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A music item that represents a song.

## Declaration

```swift
struct Song
```

## Topics

### Instance Properties

- [albumTitle](song/albumtitle.md): The title of the album the song appears on.
- [albums](song/albums.md): The song’s associated albums.
- [artistName](song/artistname.md): The artist’s name.
- [artistURL](song/artisturl.md): The artist’s URL.
- [artists](song/artists.md): The song’s associated artists.
- [artwork](song/artwork.md): The artwork for the song.
- [attribution](song/attribution.md): For classical music only, the name of the artist or composer to attribute to the song.
- [audioVariants](song/audiovariants.md): The variants that indicate the quality of audio available for the song.
- [composerName](song/composername.md): The name of the song’s composer.
- [composers](song/composers.md): The song’s composers.
- [contentRating](song/contentrating.md): The rating of the content.
- [discNumber](song/discnumber.md): The number of the disc the song appears on.
- [duration](song/duration.md): The duration of the song.
- [editorialNotes](song/editorialnotes.md): The editorial notes for the song.
- [endTime](song/endtime.md): The custom end time for the song.
- [genreNames](song/genrenames.md): The names of the song’s associated genres.
- [genres](song/genres.md): The song’s associated genres.
- [hasLyrics](song/haslyrics.md): A Boolean value that indicates whether the song has lyrics available in the catalog. If true, the song has lyrics available; otherwise, it doesn’t.
- [id](song/id.md): The unique identifier for the song.
- [isAppleDigitalMaster](song/isappledigitalmaster.md): A Boolean value that indicates whether the song is an Apple Digital Master.
- [isrc](song/isrc.md): The International Standard Recording Code (ISRC) for the song.
- [lastPlayedDate](song/lastplayeddate.md): The date when the user last played the song on this device.
- [libraryAddedDate](song/libraryaddeddate.md): The date when the user added the song to the library.
- [movementCount](song/movementcount.md): For classical music only, the movement count of this song.
- [movementName](song/movementname.md): For classical music only, the movement name of this song.
- [movementNumber](song/movementnumber.md): For classical music only, the movement number of this song.
- [musicVideos](song/musicvideos.md): The song’s associated music videos.
- [playCount](song/playcount.md): The number of times the user played the song.
- [playParameters](song/playparameters.md): The parameters to use to play the song.
- [previewAssets](song/previewassets.md): The preview assets for the song.
- [releaseDate](song/releasedate.md): The release date (or expected prerelease date) for the song.
- [startTime](song/starttime.md): The custom start time for the song.
- [station](song/station.md): The song’s associated station.
- [title](song/title.md): The title of the song.
- [trackNumber](song/tracknumber.md): The song’s number in the album’s track list.
- [url](song/url.md): The URL for the song.
- [workName](song/workname.md): For classical music only, the name of the associated work.

### Default Implementations

- [FilterableMusicItem Implementations](song/filterablemusicitem-implementations.md)
- [MusicLibraryRequestable Implementations](song/musiclibraryrequestable-implementations.md)

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
- [MusicPlaylistAddable](musicplaylistaddable.md)
- [MusicPropertyContainer](musicpropertycontainer.md)
- [MusicRecentlyPlayedRequestable](musicrecentlyplayedrequestable.md)
- [PickableMusicItem](pickablemusicitem.md)
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
- [Playlist](playlist.md): A music item that represents a playlist.
- [RadioShow](radioshow.md): A music item that represents a radio show.
- [RecordLabel](recordlabel.md): A music item that represents a record label.
- [Station](station.md): A music item that represents a station.
- [Track](track.md): A music item that represents a track.
