> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibplaylist/parentid](https://developer.apple.com/documentation/ituneslibrary/itlibplaylist/parentid)

# parentID (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The unique persistent identifier of the playlist’s parent playlist.

## Declaration

```swift
var parentID: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

If the playlist doesn’t have a parent, this property is `nil`.

## See Also

### Getting Playlist Info

- [name](name.md): The name or title of the playlist.
- [items](items.md): The media items (tracks) in the playlist.
- [isPrimary](isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [isVisible](isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.

# parentID (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The unique persistent identifier of the playlist’s parent playlist.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSNumber * parentID;
```

<a id="Discussion"></a>

## Discussion

If the playlist doesn’t have a parent, this property is `nil`.

## See Also

### Getting Playlist Info

- [name](name.md): The name or title of the playlist.
- [items](items.md): The media items (tracks) in the playlist.
- [primary](isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [visible](isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](../itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](../itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.
