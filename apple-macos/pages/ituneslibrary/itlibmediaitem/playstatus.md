> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaitem/playstatus](https://developer.apple.com/documentation/ituneslibrary/itlibmediaitem/playstatus)

# playStatus (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The play status for the media.

## Declaration

```swift
var playStatus: ITLibMediaItemPlayStatus { get }
```

<a id="Discussion"></a>

## Discussion

Represents partially played and unplayed states for videos and podcasts. Other media types always return [ITLibMediaItemPlayStatus.none](../itlibmediaitemplaystatus/none.md).

## See Also

### Getting Media Item Info

- [title](title.md): The title of the media item.
- [sortTitle](sorttitle.md): The title of the media item to use when sorting.
- [artist](artist.md): Information about the artist that iTunes associates with the media item.
- [composer](composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](sortcomposer.md): The name to use when sorting by composer.
- [rating](rating.md): The rating of the media item.
- [isRatingComputed](isratingcomputed.md): A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.
- [startTime](starttime.md): If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).
- [stopTime](stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](album.md): The album of the media item.
- [genre](genre.md): The genre of the media item, if any.
- [kind](kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](mediakind.md): The kind of media item.
- [totalTime](totaltime.md): The length of the media item in milliseconds.
- [trackNumber](tracknumber.md): The position of the media item within its album.

# playStatus (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The play status for the media.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) ITLibMediaItemPlayStatus playStatus;
```

<a id="Discussion"></a>

## Discussion

Represents partially played and unplayed states for videos and podcasts. Other media types always return [ITLibMediaItemPlayStatusNone](../itlibmediaitemplaystatus/none.md).

## See Also

### Getting Media Item Info

- [title](title.md): The title of the media item.
- [sortTitle](sorttitle.md): The title of the media item to use when sorting.
- [artist](artist.md): Information about the artist that iTunes associates with the media item.
- [composer](composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](sortcomposer.md): The name to use when sorting by composer.
- [rating](rating.md): The rating of the media item.
- [ratingComputed](isratingcomputed.md): A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.
- [startTime](starttime.md): If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).
- [stopTime](stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](album.md): The album of the media item.
- [genre](genre.md): The genre of the media item, if any.
- [kind](kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](mediakind.md): The kind of media item.
- [totalTime](totaltime.md): The length of the media item in milliseconds.
- [trackNumber](tracknumber.md): The position of the media item within its album.
