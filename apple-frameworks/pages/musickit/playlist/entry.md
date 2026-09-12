> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/playlist/entry](https://developer.apple.com/documentation/musickit/playlist/entry)

# Playlist.Entry

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A music item that represents a playlist entry.

## Declaration

```swift
struct Entry
```

## Topics

### Instance Properties

- [albumTitle](entry/albumtitle.md): The title of the album the playlist entry appears on.
- [artistName](entry/artistname.md): The artist’s name.
- [artistURL](entry/artisturl.md): The artist’s URL.
- [artwork](entry/artwork.md): The artwork of the playlist entry.
- [contentRating](entry/contentrating.md): The rating of the content.
- [duration](entry/duration.md): The duration of the playlist entry.
- [editorialNotes](entry/editorialnotes.md): The editorial notes for the playlist entry.
- [genreNames](entry/genrenames.md): The names of the playlist entry’s associated genres.
- [id](entry/id.md): The unique identifier for the playlist entry.
- [isrc](entry/isrc.md): The International Standard Recording Code (ISRC) for the playlist entry.
- [item](entry/item-swift.property.md): The item of the playlist entry.
- [lastPlayedDate](entry/lastplayeddate.md): The date when the user last played the playlist entry on this device.
- [libraryAddedDate](entry/libraryaddeddate.md): The date when the user added the playlist entry to the library.
- [playCount](entry/playcount.md): The number of times the user played the playlist entry.
- [playParameters](entry/playparameters.md): The parameters to use to play the playlist entry.
- [position](entry/position.md): The position of the playlist entry.
- [previewAssets](entry/previewassets.md): The preview assets for the playlist entry.
- [releaseDate](entry/releasedate.md): The release date (or expected for pre-release) of the playlist entry.
- [title](entry/title.md): The title of the playlist entry.
- [url](entry/url.md): The URL for the playlist entry.

### Enumerations

- [Playlist.Entry.Item](entry/item-swift.enum.md): An item that corresponds to an entry in a playlist.

### Default Implementations

- [MusicLibraryRequestable Implementations](entry/musiclibraryrequestable-implementations.md)

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
- [MusicItem](../musicitem.md)
- [MusicLibraryAddable](../musiclibraryaddable.md)
- [MusicLibraryRequestable](../musiclibraryrequestable.md)
- [MusicPlaylistAddable](../musicplaylistaddable.md)
- [MusicPropertyContainer](../musicpropertycontainer.md)
- [PlayableMusicItem](../playablemusicitem.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
