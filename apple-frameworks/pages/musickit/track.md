> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/track](https://developer.apple.com/documentation/musickit/track)

# Track

**Framework:** MusicKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A music item that represents a track.

## Declaration

```swift
enum Track
```

## Topics

### Enumeration Cases

- [Track.musicVideo(\_:)](track/musicvideo%28__%29.md): A track that corresponds to a music video.
- [Track.song(\_:)](track/song%28__%29.md): A track that corresponds to a song.

### Instance Properties

- [albumTitle](track/albumtitle.md): The title of the album the track appears on.
- [albums](track/albums.md): The track’s associated albums.
- [artistName](track/artistname.md): The artist’s name.
- [artistURL](track/artisturl.md): The artist’s URL.
- [artists](track/artists.md): The track’s associated artists.
- [artwork](track/artwork.md): The artwork for the track.
- [contentRating](track/contentrating.md): The rating of the content.
- [discNumber](track/discnumber.md): The disc number of the track.
- [duration](track/duration.md): The duration of the track.
- [editorialNotes](track/editorialnotes.md): The editorial notes for the track.
- [endTime](track/endtime.md): The custom end time of the track.
- [genreNames](track/genrenames.md): The names of the track’s associated genres.
- [genres](track/genres.md): The track’s associated genres.
- [id](track/id.md): The unique identifier for the track.
- [isrc](track/isrc.md): The International Standard Recording Code (ISRC) for the track.
- [lastPlayedDate](track/lastplayeddate.md): The date when the user last played the track on this device.
- [libraryAddedDate](track/libraryaddeddate.md): The date when the user added the track to the library.
- [playCount](track/playcount.md): The number of times the user played the track.
- [playParameters](track/playparameters.md): The parameters to use to play the track.
- [previewAssets](track/previewassets.md): The preview assets for the track.
- [releaseDate](track/releasedate.md): The release date (or expected for pre-release) of the track.
- [startTime](track/starttime.md): The custom start time of the track.
- [title](track/title.md): The title of the track.
- [trackNumber](track/tracknumber.md): The track’s number in the album’s track list.
- [url](track/url.md): The URL for the track.
- [workName](track/workname.md): For classical music only, the name of the associated work.

### Default Implementations

- [MusicLibraryRequestable Implementations](track/musiclibraryrequestable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MusicItem](musicitem.md)
- [MusicLibraryAddable](musiclibraryaddable.md)
- [MusicLibraryRequestable](musiclibraryrequestable.md)
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
- [Song](song.md): A music item that represents a song.
- [Station](station.md): A music item that represents a station.
