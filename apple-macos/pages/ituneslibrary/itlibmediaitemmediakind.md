> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaitemmediakind](https://developer.apple.com/documentation/ituneslibrary/itlibmediaitemmediakind)

# ITLibMediaItemMediaKind (Swift)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants specify the possible media kinds of a media item.

## Declaration

```swift
enum ITLibMediaItemMediaKind
```

## Topics

### Media Kinds

- [ITLibMediaItemMediaKind.kindUnknown](itlibmediaitemmediakind/kindunknown.md): The media item kind is unknown.
- [ITLibMediaItemMediaKind.kindSong](itlibmediaitemmediakind/kindsong.md): The media item is a song.
- [ITLibMediaItemMediaKind.kindMovie](itlibmediaitemmediakind/kindmovie.md): The media item is a movie.
- [ITLibMediaItemMediaKind.kindPodcast](itlibmediaitemmediakind/kindpodcast.md): The media item is an audio or a video podcast.
- [ITLibMediaItemMediaKind.kindAudiobook](itlibmediaitemmediakind/kindaudiobook.md): The media item is an audiobook.
- [ITLibMediaItemMediaKind.kindPDFBooklet](itlibmediaitemmediakind/kindpdfbooklet.md): The media item is an unwrapped PDF file that’s part of a music album.
- [ITLibMediaItemMediaKind.kindMusicVideo](itlibmediaitemmediakind/kindmusicvideo.md): The media item is a music video.
- [ITLibMediaItemMediaKind.kindTVShow](itlibmediaitemmediakind/kindtvshow.md): The media item is a TV show.
- [ITLibMediaItemMediaKind.kindInteractiveBooklet](itlibmediaitemmediakind/kindinteractivebooklet.md): Deprecated. The media item is a QuickTime movie with embedded Flash.
- [ITLibMediaItemMediaKind.kindHomeVideo](itlibmediaitemmediakind/kindhomevideo.md): The media item is a non-iTunes Store movie.
- [ITLibMediaItemMediaKind.kindRingtone](itlibmediaitemmediakind/kindringtone.md): The media item is an iOS ringtone.
- [ITLibMediaItemMediaKind.kindDigitalBooklet](itlibmediaitemmediakind/kinddigitalbooklet.md): The media item is an iTunes Extra or an iTunes LP item.
- [ITLibMediaItemMediaKind.kindIOSApplication](itlibmediaitemmediakind/kindiosapplication.md): The media item is an iOS app.
- [ITLibMediaItemMediaKind.kindVoiceMemo](itlibmediaitemmediakind/kindvoicememo.md): The media item is a recorded voice memo.
- [ITLibMediaItemMediaKind.kindiTunesU](itlibmediaitemmediakind/kinditunesu.md): The media item is an iTunes U audio or video file.
- [ITLibMediaItemMediaKind.kindBook](itlibmediaitemmediakind/kindbook.md): The media item is an EPUB file or an iBooks Author book.
- [ITLibMediaItemMediaKind.kindPDFBook](itlibmediaitemmediakind/kindpdfbook.md): The media item is a PDF file that iTunes treats as a book unless the user overrides it.
- [ITLibMediaItemMediaKind.kindAlertTone](itlibmediaitemmediakind/kindalerttone.md): The media item is an audio tone that’s not a protected ringtone on an iOS device.

### Initializers

- [init(rawValue:)](itlibmediaitemmediakind/init%28rawvalue_%29.md)

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

# ITLibMediaItemMediaKind (Objective-C)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants specify the possible media kinds of a media item.

## Declaration

```objectivec
enum ITLibMediaItemMediaKind : NSUInteger;
```

## Topics

### Media Kinds

- [ITLibMediaItemMediaKindUnknown](itlibmediaitemmediakind/kindunknown.md): The media item kind is unknown.
- [ITLibMediaItemMediaKindSong](itlibmediaitemmediakind/kindsong.md): The media item is a song.
- [ITLibMediaItemMediaKindMovie](itlibmediaitemmediakind/kindmovie.md): The media item is a movie.
- [ITLibMediaItemMediaKindPodcast](itlibmediaitemmediakind/kindpodcast.md): The media item is an audio or a video podcast.
- [ITLibMediaItemMediaKindAudiobook](itlibmediaitemmediakind/kindaudiobook.md): The media item is an audiobook.
- [ITLibMediaItemMediaKindPDFBooklet](itlibmediaitemmediakind/kindpdfbooklet.md): The media item is an unwrapped PDF file that’s part of a music album.
- [ITLibMediaItemMediaKindMusicVideo](itlibmediaitemmediakind/kindmusicvideo.md): The media item is a music video.
- [ITLibMediaItemMediaKindTVShow](itlibmediaitemmediakind/kindtvshow.md): The media item is a TV show.
- [ITLibMediaItemMediaKindInteractiveBooklet](itlibmediaitemmediakind/kindinteractivebooklet.md): Deprecated. The media item is a QuickTime movie with embedded Flash.
- [ITLibMediaItemMediaKindHomeVideo](itlibmediaitemmediakind/kindhomevideo.md): The media item is a non-iTunes Store movie.
- [ITLibMediaItemMediaKindRingtone](itlibmediaitemmediakind/kindringtone.md): The media item is an iOS ringtone.
- [ITLibMediaItemMediaKindDigitalBooklet](itlibmediaitemmediakind/kinddigitalbooklet.md): The media item is an iTunes Extra or an iTunes LP item.
- [ITLibMediaItemMediaKindIOSApplication](itlibmediaitemmediakind/kindiosapplication.md): The media item is an iOS app.
- [ITLibMediaItemMediaKindVoiceMemo](itlibmediaitemmediakind/kindvoicememo.md): The media item is a recorded voice memo.
- [ITLibMediaItemMediaKindiTunesU](itlibmediaitemmediakind/kinditunesu.md): The media item is an iTunes U audio or video file.
- [ITLibMediaItemMediaKindBook](itlibmediaitemmediakind/kindbook.md): The media item is an EPUB file or an iBooks Author book.
- [ITLibMediaItemMediaKindPDFBook](itlibmediaitemmediakind/kindpdfbook.md): The media item is a PDF file that iTunes treats as a book unless the user overrides it.
- [ITLibMediaItemMediaKindAlertTone](itlibmediaitemmediakind/kindalerttone.md): The media item is an audio tone that’s not a protected ringtone on an iOS device.

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
