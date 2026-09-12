> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibplaylist/kind](https://developer.apple.com/documentation/ituneslibrary/itlibplaylist/kind)

# kind (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

An indication of the type of playlist.

## Declaration

```swift
var kind: ITLibPlaylistKind { get }
```

## See Also

### Getting Playlist Info

- [name](name.md): The name or title of the playlist.
- [items](items.md): The media items (tracks) in the playlist.
- [parentID](parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [isPrimary](isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [isVisible](isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.

# kind (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

An indication of the type of playlist.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) ITLibPlaylistKind kind;
```

## See Also

### Getting Playlist Info

- [name](name.md): The name or title of the playlist.
- [items](items.md): The media items (tracks) in the playlist.
- [parentID](parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [primary](isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [visible](isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.
