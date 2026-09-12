> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaitemlocationtype](https://developer.apple.com/documentation/ituneslibrary/itlibmediaitemlocationtype)

# ITLibMediaItemLocationType (Swift)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants specify the location type of a media item.

## Declaration

```swift
enum ITLibMediaItemLocationType
```

## Topics

### Media Item Location Types

- [ITLibMediaItemLocationType.unknown](itlibmediaitemlocationtype/unknown.md): The media item location type is unknown.
- [ITLibMediaItemLocationType.file](itlibmediaitemlocationtype/file.md): The media item location refers to a local file.
- [ITLibMediaItemLocationType.URL](itlibmediaitemlocationtype/url.md): The media item location refers to a URL, such as a podcast.
- [ITLibMediaItemLocationType.remote](itlibmediaitemlocationtype/remote.md): The media item location refers to a remote file.

### Initializers

- [init(rawValue:)](itlibmediaitemlocationtype/init%28rawvalue_%29.md)

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

# ITLibMediaItemLocationType (Objective-C)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants specify the location type of a media item.

## Declaration

```objectivec
enum ITLibMediaItemLocationType : NSUInteger;
```

## Topics

### Media Item Location Types

- [ITLibMediaItemLocationTypeUnknown](itlibmediaitemlocationtype/unknown.md): The media item location type is unknown.
- [ITLibMediaItemLocationTypeFile](itlibmediaitemlocationtype/file.md): The media item location refers to a local file.
- [ITLibMediaItemLocationTypeURL](itlibmediaitemlocationtype/url.md): The media item location refers to a URL, such as a podcast.
- [ITLibMediaItemLocationTypeRemote](itlibmediaitemlocationtype/remote.md): The media item location refers to a remote file.

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
