> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaitemplaystatus](https://developer.apple.com/documentation/ituneslibrary/itlibmediaitemplaystatus)

# ITLibMediaItemPlayStatus (Swift)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants specify the play status of the media item.

## Declaration

```swift
enum ITLibMediaItemPlayStatus
```

## Topics

### Media Item Play Statuses

- [ITLibMediaItemPlayStatus.none](itlibmediaitemplaystatus/none.md): The user has played the media item or iTunes doesn’t track the play status for this kind of media item.
- [ITLibMediaItemPlayStatus.partiallyPlayed](itlibmediaitemplaystatus/partiallyplayed.md): The user has partially played the media item.
- [ITLibMediaItemPlayStatus.unplayed](itlibmediaitemplaystatus/unplayed.md): The user hasn’t played the media item.

### Initializers

- [init(rawValue:)](itlibmediaitemplaystatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Media Item Info

- [title](itlibmediaitem/title.md): The title of the media item.
- [sortTitle](itlibmediaitem/sorttitle.md): The title of the media item to use when sorting.
- [artist](itlibmediaitem/artist.md): Information about the artist that iTunes associates with the media item.
- [composer](itlibmediaitem/composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](itlibmediaitem/sortcomposer.md): The name to use when sorting by composer.
- [rating](itlibmediaitem/rating.md): The rating of the media item.
- [isRatingComputed](itlibmediaitem/isratingcomputed.md): A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.
- [startTime](itlibmediaitem/starttime.md): If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).
- [stopTime](itlibmediaitem/stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](itlibmediaitem/album.md): The album of the media item.
- [genre](itlibmediaitem/genre.md): The genre of the media item, if any.
- [kind](itlibmediaitem/kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](itlibmediaitem/mediakind.md): The kind of media item.
- [totalTime](itlibmediaitem/totaltime.md): The length of the media item in milliseconds.
- [trackNumber](itlibmediaitem/tracknumber.md): The position of the media item within its album.

# ITLibMediaItemPlayStatus (Objective-C)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants specify the play status of the media item.

## Declaration

```objectivec
enum ITLibMediaItemPlayStatus : NSUInteger;
```

## Topics

### Media Item Play Statuses

- [ITLibMediaItemPlayStatusNone](itlibmediaitemplaystatus/none.md): The user has played the media item or iTunes doesn’t track the play status for this kind of media item.
- [ITLibMediaItemPlayStatusPartiallyPlayed](itlibmediaitemplaystatus/partiallyplayed.md): The user has partially played the media item.
- [ITLibMediaItemPlayStatusUnplayed](itlibmediaitemplaystatus/unplayed.md): The user hasn’t played the media item.

## See Also

### Getting Media Item Info

- [title](itlibmediaitem/title.md): The title of the media item.
- [sortTitle](itlibmediaitem/sorttitle.md): The title of the media item to use when sorting.
- [artist](itlibmediaitem/artist.md): Information about the artist that iTunes associates with the media item.
- [composer](itlibmediaitem/composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](itlibmediaitem/sortcomposer.md): The name to use when sorting by composer.
- [rating](itlibmediaitem/rating.md): The rating of the media item.
- [ratingComputed](itlibmediaitem/isratingcomputed.md): A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.
- [startTime](itlibmediaitem/starttime.md): If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).
- [stopTime](itlibmediaitem/stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](itlibmediaitem/album.md): The album of the media item.
- [genre](itlibmediaitem/genre.md): The genre of the media item, if any.
- [kind](itlibmediaitem/kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](itlibmediaitem/mediakind.md): The kind of media item.
- [totalTime](itlibmediaitem/totaltime.md): The length of the media item in milliseconds.
- [trackNumber](itlibmediaitem/tracknumber.md): The position of the media item within its album.
