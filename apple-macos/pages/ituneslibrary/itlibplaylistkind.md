> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibplaylistkind](https://developer.apple.com/documentation/ituneslibrary/itlibplaylistkind)

# ITLibPlaylistKind (Swift)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants specify the possible kinds of playlists.

## Declaration

```swift
enum ITLibPlaylistKind
```

## Topics

### Playlist Kinds

- [ITLibPlaylistKind.regular](itlibplaylistkind/regular.md): A standard playlist that the user or iTunes creates, such as *Music*, *Movies*, *Pop Mix*, or *My Awesome Playlist*.
- [ITLibPlaylistKind.smart](itlibplaylistkind/smart.md): A playlist with contents that iTunes generates by evaluating a set of rules, such as *90s Music* or *Songs from 1999*.
- [ITLibPlaylistKind.genius](itlibplaylistkind/genius.md): A playlist iTunes creates of songs that go well with a song the user specifies.
- [ITLibPlaylistKind.folder](itlibplaylistkind/folder.md): A playlist folder that the user or iTunes creates, such as *My Playlist Folder* or *Genius Mixes*.
- [ITLibPlaylistKind.geniusMix](itlibplaylistkind/geniusmix.md): An ongoing playlist in a particular genre—like a commercial-free radio station playing the user’s favorite songs—that iTunes creates from music in the user’s iTunes library.

### Initializers

- [init(rawValue:)](itlibplaylistkind/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Playlist Info

- [name](itlibplaylist/name.md): The name or title of the playlist.
- [items](itlibplaylist/items.md): The media items (tracks) in the playlist.
- [parentID](itlibplaylist/parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [isPrimary](itlibplaylist/isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [isVisible](itlibplaylist/isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](itlibplaylist/distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](itlibplaylist/kind.md): An indication of the type of playlist.
- [ITLibDistinguishedPlaylistKind](itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.

# ITLibPlaylistKind (Objective-C)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants specify the possible kinds of playlists.

## Declaration

```objectivec
enum ITLibPlaylistKind : NSUInteger;
```

## Topics

### Playlist Kinds

- [ITLibPlaylistKindRegular](itlibplaylistkind/regular.md): A standard playlist that the user or iTunes creates, such as *Music*, *Movies*, *Pop Mix*, or *My Awesome Playlist*.
- [ITLibPlaylistKindSmart](itlibplaylistkind/smart.md): A playlist with contents that iTunes generates by evaluating a set of rules, such as *90s Music* or *Songs from 1999*.
- [ITLibPlaylistKindGenius](itlibplaylistkind/genius.md): A playlist iTunes creates of songs that go well with a song the user specifies.
- [ITLibPlaylistKindFolder](itlibplaylistkind/folder.md): A playlist folder that the user or iTunes creates, such as *My Playlist Folder* or *Genius Mixes*.
- [ITLibPlaylistKindGeniusMix](itlibplaylistkind/geniusmix.md): An ongoing playlist in a particular genre—like a commercial-free radio station playing the user’s favorite songs—that iTunes creates from music in the user’s iTunes library.

## See Also

### Getting Playlist Info

- [name](itlibplaylist/name.md): The name or title of the playlist.
- [items](itlibplaylist/items.md): The media items (tracks) in the playlist.
- [parentID](itlibplaylist/parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [primary](itlibplaylist/isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [visible](itlibplaylist/isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](itlibplaylist/distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](itlibplaylist/kind.md): An indication of the type of playlist.
- [ITLibDistinguishedPlaylistKind](itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.
