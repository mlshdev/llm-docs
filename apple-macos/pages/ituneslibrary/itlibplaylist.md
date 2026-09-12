> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibplaylist](https://developer.apple.com/documentation/ituneslibrary/itlibplaylist)

# ITLibPlaylist (Swift)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class describes a playlist in the iTunes library.

## Declaration

```swift
class ITLibPlaylist
```

<a id="overview"></a>

## Overview

A *playlist* is a collection of media items (tracks). The user creates and organizes playlists manually, or iTunes automatically generates them. Playlists are media entities. Each contains a unique identifier and a set of properties. Playlists can form a hierarchical structure. In those cases, the [parentID](itlibplaylist/parentid.md) property of [ITLibPlaylist](itlibplaylist.md) returns the persistent ID of the parent playlist.

## Topics

### Getting Playlist Info

- [name](itlibplaylist/name.md): The name or title of the playlist.
- [items](itlibplaylist/items.md): The media items (tracks) in the playlist.
- [parentID](itlibplaylist/parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [isPrimary](itlibplaylist/isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [isVisible](itlibplaylist/isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](itlibplaylist/distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](itlibplaylist/kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.

### Playlist Properties

- [ITLibPlaylistPropertyAllItemsPlaylist](itlibplaylistpropertyallitemsplaylist.md): A Boolean value that indicates whether the API exposes every item in the playlist.
- [ITLibPlaylistPropertyDistinguisedKind](itlibplaylistpropertydistinguisedkind.md): An indication of whether the playlist has a special distinction.
- [ITLibPlaylistPropertyItems](itlibplaylistpropertyitems.md): The media items (tracks) in the playlist.
- [ITLibPlaylistPropertyKind](itlibplaylistpropertykind.md): An indication of the type of playlist.
- [ITLibPlaylistPropertyPrimary](itlibplaylistpropertyprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [ITLibPlaylistPropertyName](itlibplaylistpropertyname.md): The name or title of the playlist.
- [ITLibPlaylistPropertyParentPersistentID](itlibplaylistpropertyparentpersistentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [ITLibPlaylistPropertyVisible](itlibplaylistpropertyvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.

### Deprecated

- [isAllItemsPlaylist](itlibplaylist/isallitemsplaylist.md): Deprecated. Indicates whether the API exposes every item in the playlist.
- [isMaster](itlibplaylist/ismaster.md): Deprecated. A Boolean value that indicates whether the playlist represents the entire iTunes library.
- [ITLibPlaylistPropertyMaster](itlibplaylistpropertymaster.md): Deprecated. A Boolean value that indicates whether the playlist represents the entire iTunes library.

## Relationships

### Inherits From

- [ITLibMediaEntity](itlibmediaentity.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Albums and Playlists

- [ITLibAlbum](itlibalbum.md): This class provides information about an album in the iTunes library.

# ITLibPlaylist (Objective-C)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class describes a playlist in the iTunes library.

## Declaration

```objectivec
@interface ITLibPlaylist : ITLibMediaEntity
```

<a id="overview"></a>

## Overview

A *playlist* is a collection of media items (tracks). The user creates and organizes playlists manually, or iTunes automatically generates them. Playlists are media entities. Each contains a unique identifier and a set of properties. Playlists can form a hierarchical structure. In those cases, the [parentID](itlibplaylist/parentid.md) property of [ITLibPlaylist](itlibplaylist.md) returns the persistent ID of the parent playlist.

## Topics

### Getting Playlist Info

- [name](itlibplaylist/name.md): The name or title of the playlist.
- [items](itlibplaylist/items.md): The media items (tracks) in the playlist.
- [parentID](itlibplaylist/parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [primary](itlibplaylist/isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [visible](itlibplaylist/isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](itlibplaylist/distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](itlibplaylist/kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](itlibplaylistkind.md): These constants specify the possible kinds of playlists.
- [ITLibDistinguishedPlaylistKind](itlibdistinguishedplaylistkind.md): These constants specify the possible kinds of distinguished playlists.

### Playlist Properties

- [ITLibPlaylistPropertyAllItemsPlaylist](itlibplaylistpropertyallitemsplaylist.md): A Boolean value that indicates whether the API exposes every item in the playlist.
- [ITLibPlaylistPropertyDistinguisedKind](itlibplaylistpropertydistinguisedkind.md): An indication of whether the playlist has a special distinction.
- [ITLibPlaylistPropertyItems](itlibplaylistpropertyitems.md): The media items (tracks) in the playlist.
- [ITLibPlaylistPropertyKind](itlibplaylistpropertykind.md): An indication of the type of playlist.
- [ITLibPlaylistPropertyPrimary](itlibplaylistpropertyprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [ITLibPlaylistPropertyName](itlibplaylistpropertyname.md): The name or title of the playlist.
- [ITLibPlaylistPropertyParentPersistentID](itlibplaylistpropertyparentpersistentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [ITLibPlaylistPropertyVisible](itlibplaylistpropertyvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.

### Deprecated

- [allItemsPlaylist](itlibplaylist/isallitemsplaylist.md): Deprecated. Indicates whether the API exposes every item in the playlist.
- [master](itlibplaylist/ismaster.md): Deprecated. A Boolean value that indicates whether the playlist represents the entire iTunes library.
- [ITLibPlaylistPropertyMaster](itlibplaylistpropertymaster.md): Deprecated. A Boolean value that indicates whether the playlist represents the entire iTunes library.

## Relationships

### Inherits From

- [ITLibMediaEntity](itlibmediaentity.md)

## See Also

### Albums and Playlists

- [ITLibAlbum](itlibalbum.md): This class provides information about an album in the iTunes library.
