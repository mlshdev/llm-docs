> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibplaylist/name](https://developer.apple.com/documentation/ituneslibrary/itlibplaylist/name)

# name (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The name or title of the playlist.

## Declaration

```swift
var name: String { get }
```

## See Also

### Getting Playlist Info

- [items](items.md): The media items (tracks) in the playlist.
- [parentID](parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [isPrimary](isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [isVisible](isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.

# name (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The name or title of the playlist.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * name;
```

## See Also

### Getting Playlist Info

- [items](items.md): The media items (tracks) in the playlist.
- [parentID](parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [primary](isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [visible](isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.
