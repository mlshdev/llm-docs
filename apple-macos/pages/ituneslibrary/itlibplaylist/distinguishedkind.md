> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibplaylist/distinguishedkind](https://developer.apple.com/documentation/ituneslibrary/itlibplaylist/distinguishedkind)

# distinguishedKind (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

An indication of whether the playlist has a special distinction.

## Declaration

```swift
var distinguishedKind: ITLibDistinguishedPlaylistKind { get }
```

<a id="Discussion"></a>

## Discussion

*Distinguished playlists* are special playlists that iTunes generates to organize media items inside the library. If the playlist isn’t a distinguished playlist, this property returns [ITLibDistinguishedPlaylistKind.kindNone](../itlibdistinguishedplaylistkind/kindnone.md).

## See Also

### Getting Playlist Info

- [name](name.md): The name or title of the playlist.
- [items](items.md): The media items (tracks) in the playlist.
- [parentID](parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [isPrimary](isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [isVisible](isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [kind](kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.

# distinguishedKind (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

An indication of whether the playlist has a special distinction.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) ITLibDistinguishedPlaylistKind distinguishedKind;
```

<a id="Discussion"></a>

## Discussion

*Distinguished playlists* are special playlists that iTunes generates to organize media items inside the library. If the playlist isn’t a distinguished playlist, this property returns [ITLibDistinguishedPlaylistKindNone](../itlibdistinguishedplaylistkind/kindnone.md).

## See Also

### Getting Playlist Info

- [name](name.md): The name or title of the playlist.
- [items](items.md): The media items (tracks) in the playlist.
- [parentID](parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [primary](isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [visible](isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [kind](kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.
