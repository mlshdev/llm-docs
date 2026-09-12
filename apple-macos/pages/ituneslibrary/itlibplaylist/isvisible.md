> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibplaylist/isvisible](https://developer.apple.com/documentation/ituneslibrary/itlibplaylist/isvisible)

# isVisible (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

A Boolean value that indicates whether the playlist is visible to the user in iTunes.

## Declaration

```swift
var isVisible: Bool { get }
```

<a id="Discussion"></a>

## Discussion

There are some playlists that iTunes hides, uses, and maintains without displaying them as playlists to the user. Tracks can still be visible when they’re in a playlist that’s not visible.

## See Also

### Getting Playlist Info

- [name](name.md): The name or title of the playlist.
- [items](items.md): The media items (tracks) in the playlist.
- [parentID](parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [isPrimary](isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [distinguishedKind](distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.

# visible (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

A Boolean value that indicates whether the playlist is visible to the user in iTunes.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isVisible) BOOL visible;
```

<a id="Discussion"></a>

## Discussion

There are some playlists that iTunes hides, uses, and maintains without displaying them as playlists to the user. Tracks can still be visible when they’re in a playlist that’s not visible.

## See Also

### Getting Playlist Info

- [name](name.md): The name or title of the playlist.
- [items](items.md): The media items (tracks) in the playlist.
- [parentID](parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [primary](isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [distinguishedKind](distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.
