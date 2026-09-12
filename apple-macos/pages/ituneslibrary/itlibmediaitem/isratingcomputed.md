> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaitem/isratingcomputed](https://developer.apple.com/documentation/ituneslibrary/itlibmediaitem/isratingcomputed)

# isRatingComputed (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.

## Declaration

```swift
var isRatingComputed: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the user has rated an album, all tracks within that album that have no rating receive the album rating by default. The user can override the ratings by supplying actual ratings for each track.

## See Also

### Getting Media Item Info

- [title](title.md): The title of the media item.
- [sortTitle](sorttitle.md): The title of the media item to use when sorting.
- [artist](artist.md): Information about the artist that iTunes associates with the media item.
- [composer](composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](sortcomposer.md): The name to use when sorting by composer.
- [rating](rating.md): The rating of the media item.
- [startTime](starttime.md): If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).
- [stopTime](stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](album.md): The album of the media item.
- [genre](genre.md): The genre of the media item, if any.
- [kind](kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](mediakind.md): The kind of media item.
- [totalTime](totaltime.md): The length of the media item in milliseconds.
- [trackNumber](tracknumber.md): The position of the media item within its album.
- [category](category.md): The podcast category of the media item, if the media item is a podcast.

# ratingComputed (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isRatingComputed) BOOL ratingComputed;
```

<a id="Discussion"></a>

## Discussion

If the user has rated an album, all tracks within that album that have no rating receive the album rating by default. The user can override the ratings by supplying actual ratings for each track.

## See Also

### Getting Media Item Info

- [title](title.md): The title of the media item.
- [sortTitle](sorttitle.md): The title of the media item to use when sorting.
- [artist](artist.md): Information about the artist that iTunes associates with the media item.
- [composer](composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](sortcomposer.md): The name to use when sorting by composer.
- [rating](rating.md): The rating of the media item.
- [startTime](starttime.md): If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).
- [stopTime](stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](album.md): The album of the media item.
- [genre](genre.md): The genre of the media item, if any.
- [kind](kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](mediakind.md): The kind of media item.
- [totalTime](totaltime.md): The length of the media item in milliseconds.
- [trackNumber](tracknumber.md): The position of the media item within its album.
- [category](category.md): The podcast category of the media item, if the media item is a podcast.
