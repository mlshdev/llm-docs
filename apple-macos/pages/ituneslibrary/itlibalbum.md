> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibalbum](https://developer.apple.com/documentation/ituneslibrary/itlibalbum)

# ITLibAlbum (Swift)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class provides information about an album in the iTunes library.

## Declaration

```swift
class ITLibAlbum
```

<a id="overview"></a>

## Overview

A *media item* is a track that iTunes associates with an album. See [ITLibMediaItem](itlibmediaitem.md).

A *compilation* is an album with tracks from more than one source.

If an album is part of a *multiple-disc set*, [discNumber](itlibalbum/discnumber.md) is the index of the album in the set.

To retrieve an [ITLibAlbum](itlibalbum.md) instance, use the [album](itlibmediaitem/album.md) property of [ITLibMediaItem](itlibmediaitem.md).

## Topics

### Getting Album Info

- [trackCount](itlibalbum/trackcount.md): The number of tracks in the album.
- [title](itlibalbum/title.md): The title of the album.
- [sortTitle](itlibalbum/sorttitle.md): The title to use when sorting by album title.
- [rating](itlibalbum/rating.md): The rating of the album.
- [isRatingComputed](itlibalbum/isratingcomputed.md): A Boolean value that indicates whether the system computes the rating of the album using the ratings of individual tracks in the album.
- [isGapless](itlibalbum/isgapless.md): A Boolean value that indicates whether the album is gapless.
- [discNumber](itlibalbum/discnumber.md): The index (1, 2, 3, and so on) of the disc within an album that’s a multiple-disc set.
- [discCount](itlibalbum/disccount.md): The number of discs in a multiple-disc set.
- [isCompilation](itlibalbum/iscompilation.md): A Boolean value that indicates whether the album is a compilation.
- [albumArtist](itlibalbum/albumartist.md): The name of the artist iTunes associates with the album.
- [sortAlbumArtist](itlibalbum/sortalbumartist.md): The name to use when sorting by album artist.
- [persistentID](itlibalbum/persistentid.md): The unique identifier of the album.

### Deprecated

- [artist](itlibalbum/artist.md): Deprecated. The artist iTunes associates with the album.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Albums and Playlists

- [ITLibPlaylist](itlibplaylist.md): This class describes a playlist in the iTunes library.

# ITLibAlbum (Objective-C)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class provides information about an album in the iTunes library.

## Declaration

```objectivec
@interface ITLibAlbum : NSObject
```

<a id="overview"></a>

## Overview

A *media item* is a track that iTunes associates with an album. See [ITLibMediaItem](itlibmediaitem.md).

A *compilation* is an album with tracks from more than one source.

If an album is part of a *multiple-disc set*, [discNumber](itlibalbum/discnumber.md) is the index of the album in the set.

To retrieve an [ITLibAlbum](itlibalbum.md) instance, use the [album](itlibmediaitem/album.md) property of [ITLibMediaItem](itlibmediaitem.md).

## Topics

### Getting Album Info

- [trackCount](itlibalbum/trackcount.md): The number of tracks in the album.
- [title](itlibalbum/title.md): The title of the album.
- [sortTitle](itlibalbum/sorttitle.md): The title to use when sorting by album title.
- [rating](itlibalbum/rating.md): The rating of the album.
- [ratingComputed](itlibalbum/isratingcomputed.md): A Boolean value that indicates whether the system computes the rating of the album using the ratings of individual tracks in the album.
- [gapless](itlibalbum/isgapless.md): A Boolean value that indicates whether the album is gapless.
- [discNumber](itlibalbum/discnumber.md): The index (1, 2, 3, and so on) of the disc within an album that’s a multiple-disc set.
- [discCount](itlibalbum/disccount.md): The number of discs in a multiple-disc set.
- [compilation](itlibalbum/iscompilation.md): A Boolean value that indicates whether the album is a compilation.
- [albumArtist](itlibalbum/albumartist.md): The name of the artist iTunes associates with the album.
- [sortAlbumArtist](itlibalbum/sortalbumartist.md): The name to use when sorting by album artist.
- [persistentID](itlibalbum/persistentid.md): The unique identifier of the album.

### Deprecated

- [artist](itlibalbum/artist.md): Deprecated. The artist iTunes associates with the album.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Albums and Playlists

- [ITLibPlaylist](itlibplaylist.md): This class describes a playlist in the iTunes library.
