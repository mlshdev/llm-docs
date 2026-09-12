> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaitem/starttime](https://developer.apple.com/documentation/ituneslibrary/itlibmediaitem/starttime)

# startTime (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).

## Declaration

```swift
var startTime: Int { get }
```

## See Also

### Getting Media Item Info

- [title](title.md): The title of the media item.
- [sortTitle](sorttitle.md): The title of the media item to use when sorting.
- [artist](artist.md): Information about the artist that iTunes associates with the media item.
- [composer](composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](sortcomposer.md): The name to use when sorting by composer.
- [rating](rating.md): The rating of the media item.
- [isRatingComputed](isratingcomputed.md): A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.
- [stopTime](stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](album.md): The album of the media item.
- [genre](genre.md): The genre of the media item, if any.
- [kind](kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](mediakind.md): The kind of media item.
- [totalTime](totaltime.md): The length of the media item in milliseconds.
- [trackNumber](tracknumber.md): The position of the media item within its album.
- [category](category.md): The podcast category of the media item, if the media item is a podcast.

# startTime (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSUInteger startTime;
```

## See Also

### Getting Media Item Info

- [title](title.md): The title of the media item.
- [sortTitle](sorttitle.md): The title of the media item to use when sorting.
- [artist](artist.md): Information about the artist that iTunes associates with the media item.
- [composer](composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](sortcomposer.md): The name to use when sorting by composer.
- [rating](rating.md): The rating of the media item.
- [ratingComputed](isratingcomputed.md): A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.
- [stopTime](stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](album.md): The album of the media item.
- [genre](genre.md): The genre of the media item, if any.
- [kind](kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](mediakind.md): The kind of media item.
- [totalTime](totaltime.md): The length of the media item in milliseconds.
- [trackNumber](tracknumber.md): The position of the media item within its album.
- [category](category.md): The podcast category of the media item, if the media item is a podcast.
