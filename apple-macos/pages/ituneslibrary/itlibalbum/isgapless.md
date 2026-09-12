> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibalbum/isgapless](https://developer.apple.com/documentation/ituneslibrary/itlibalbum/isgapless)

# isGapless (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

A Boolean value that indicates whether the album is gapless.

## Declaration

```swift
var isGapless: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A gapless album doesn’t have silence (gaps) between tracks.

## See Also

### Getting Album Info

- [trackCount](trackcount.md): The number of tracks in the album.
- [title](title.md): The title of the album.
- [sortTitle](sorttitle.md): The title to use when sorting by album title.
- [rating](rating.md): The rating of the album.
- [isRatingComputed](isratingcomputed.md): A Boolean value that indicates whether the system computes the rating of the album using the ratings of individual tracks in the album.
- [discNumber](discnumber.md): The index (1, 2, 3, and so on) of the disc within an album that’s a multiple-disc set.
- [discCount](disccount.md): The number of discs in a multiple-disc set.
- [isCompilation](iscompilation.md): A Boolean value that indicates whether the album is a compilation.
- [albumArtist](albumartist.md): The name of the artist iTunes associates with the album.
- [sortAlbumArtist](sortalbumartist.md): The name to use when sorting by album artist.
- [persistentID](persistentid.md): The unique identifier of the album.

# gapless (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

A Boolean value that indicates whether the album is gapless.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isGapless) BOOL gapless;
```

<a id="Discussion"></a>

## Discussion

A gapless album doesn’t have silence (gaps) between tracks.

## See Also

### Getting Album Info

- [trackCount](trackcount.md): The number of tracks in the album.
- [title](title.md): The title of the album.
- [sortTitle](sorttitle.md): The title to use when sorting by album title.
- [rating](rating.md): The rating of the album.
- [ratingComputed](isratingcomputed.md): A Boolean value that indicates whether the system computes the rating of the album using the ratings of individual tracks in the album.
- [discNumber](discnumber.md): The index (1, 2, 3, and so on) of the disc within an album that’s a multiple-disc set.
- [discCount](disccount.md): The number of discs in a multiple-disc set.
- [compilation](iscompilation.md): A Boolean value that indicates whether the album is a compilation.
- [albumArtist](albumartist.md): The name of the artist iTunes associates with the album.
- [sortAlbumArtist](sortalbumartist.md): The name to use when sorting by album artist.
- [persistentID](persistentid.md): The unique identifier of the album.
