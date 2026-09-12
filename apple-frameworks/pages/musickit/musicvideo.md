> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicvideo](https://developer.apple.com/documentation/musickit/musicvideo)

# MusicVideo

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A music item that represents a music video.

## Declaration

```swift
struct MusicVideo
```

## Topics

### Instance Properties

- [albumTitle](musicvideo/albumtitle.md): The title of the album the music video appears on.
- [albums](musicvideo/albums.md): The music video’s associated albums.
- [artistName](musicvideo/artistname.md): The artist’s name.
- [artistURL](musicvideo/artisturl.md): The artist’s URL.
- [artists](musicvideo/artists.md): The music video’s associated artists.
- [artwork](musicvideo/artwork.md): The artwork for the music video.
- [contentRating](musicvideo/contentrating.md): The rating of the content.
- [duration](musicvideo/duration.md): The duration of the music video.
- [editorialNotes](musicvideo/editorialnotes.md): The editorial notes for the music video.
- [endTime](musicvideo/endtime.md): The custom end time for the music video.
- [genreNames](musicvideo/genrenames.md): The names of the music video’s associated genres.
- [genres](musicvideo/genres.md): The music video’s associated genres.
- [has4K](musicvideo/has4k.md): A Boolean value that indicates whether the music video has 4K content.
- [hasHDR](musicvideo/hashdr.md): A Boolean value that indicates whether the music video has HDR10-encoded content.
- [id](musicvideo/id.md): The unique identifier for the music video.
- [isPreview](musicvideo/ispreview.md): A Boolean value that indicates whether this content corresponds to a subscription video preview.
- [isrc](musicvideo/isrc.md): The International Standard Recording Code (ISRC) for the music video.
- [lastPlayedDate](musicvideo/lastplayeddate.md): The date when the user last played the music video on this device.
- [libraryAddedDate](musicvideo/libraryaddeddate.md): The date when the user added the music video to the library.
- [moreByArtist](musicvideo/morebyartist.md): A collection of additional music videos by the artist.
- [moreInGenre](musicvideo/moreingenre.md): A collection of music videos in the same genre as this music video.
- [playCount](musicvideo/playcount.md): The number of times the user played the music video.
- [playParameters](musicvideo/playparameters.md): The parameters to use to play the music video.
- [previewAssets](musicvideo/previewassets.md): The preview assets for the music video.
- [releaseDate](musicvideo/releasedate.md): The release date (or expected prerelease date) for the music video.
- [songs](musicvideo/songs.md): The music video’s associated songs.
- [startTime](musicvideo/starttime.md): The custom start time for the music video.
- [title](musicvideo/title.md): The title of the music video.
- [trackNumber](musicvideo/tracknumber.md): The music video’s number in the album’s track list.
- [url](musicvideo/url.md): The URL for the music video.
- [workName](musicvideo/workname.md): For classical music only, the name of the associated work.

### Default Implementations

- [FilterableMusicItem Implementations](musicvideo/filterablemusicitem-implementations.md)
- [MusicLibraryRequestable Implementations](musicvideo/musiclibraryrequestable-implementations.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Music Items

- [Album](album.md): A music item that represents an album.
- [Artist](artist.md): A music item that represents an artist.
- [Curator](curator.md): A music item that represents a curator.
- [Genre](genre.md): A music item that represents a genre.
- [Playlist](playlist.md): A music item that represents a playlist.
- [RadioShow](radioshow.md): A music item that represents a radio show.
- [RecordLabel](recordlabel.md): A music item that represents a record label.
- [Song](song.md): A music item that represents a song.
- [Station](station.md): A music item that represents a station.
- [Track](track.md): A music item that represents a track.
