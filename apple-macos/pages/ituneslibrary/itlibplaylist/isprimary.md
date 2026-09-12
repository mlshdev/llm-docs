> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibplaylist/isprimary](https://developer.apple.com/documentation/ituneslibrary/itlibplaylist/isprimary)

# isPrimary (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 12.0+

A Boolean value that indicates whether the playlist is the primary playlist.

## Declaration

```swift
var isPrimary: Bool { get }
```

## See Also

### Getting Playlist Info

- [name](name.md): The name or title of the playlist.
- [items](items.md): The media items (tracks) in the playlist.
- [parentID](parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [isVisible](isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.

# primary (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 12.0+

A Boolean value that indicates whether the playlist is the primary playlist.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isPrimary) BOOL primary;
```

## See Also

### Getting Playlist Info

- [name](name.md): The name or title of the playlist.
- [items](items.md): The media items (tracks) in the playlist.
- [parentID](parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [visible](isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.
