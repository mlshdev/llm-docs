> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaitemvideoinfo](https://developer.apple.com/documentation/ituneslibrary/itlibmediaitemvideoinfo)

# ITLibMediaItemVideoInfo (Swift)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class encapsulates the video information of a video media item.

## Declaration

```swift
class ITLibMediaItemVideoInfo
```

<a id="overview"></a>

## Overview

Video media items include TV shows, movies, and video podcasts.

## Topics

### Getting Video Information

- [videoWidth](itlibmediaitemvideoinfo/videowidth.md): The width of the video in pixels.
- [videoHeight](itlibmediaitemvideoinfo/videoheight.md): The height of the video in pixels.
- [series](itlibmediaitemvideoinfo/series.md): The name of the corresponding TV series, if the media item is an episode in a TV series.
- [sortSeries](itlibmediaitemvideoinfo/sortseries.md): The sorting name of the corresponding TV series, if the media item is an episode in a TV series.
- [season](itlibmediaitemvideoinfo/season.md): The corresponding TV season, if the media item is an episode of a TV series.
- [isHD](itlibmediaitemvideoinfo/ishd.md): A Boolean value that indicates whether the video is high-definition.
- [episode](itlibmediaitemvideoinfo/episode.md): The name of the episode, if the media item is an episode of a TV series.
- [episodeOrder](itlibmediaitemvideoinfo/episodeorder.md): The numerical order of the episode, if the media item is an episode of a TV series.

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

### Media Items

- [ITLibMediaItem](itlibmediaitem.md): This class describes a media item (a track) in the iTunes library, such as a song, a video, or a podcast.
- [ITLibMediaEntity](itlibmediaentity.md): This class describes a media entity, which can be a media item, such as an audio track.
- [ITLibArtist](itlibartist.md): This class represents an artist, such as the performer of a song.
- [ITLibArtwork](itlibartwork.md): This class represents the artwork for a media item.

# ITLibMediaItemVideoInfo (Objective-C)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class encapsulates the video information of a video media item.

## Declaration

```objectivec
@interface ITLibMediaItemVideoInfo : NSObject
```

<a id="overview"></a>

## Overview

Video media items include TV shows, movies, and video podcasts.

## Topics

### Getting Video Information

- [videoWidth](itlibmediaitemvideoinfo/videowidth.md): The width of the video in pixels.
- [videoHeight](itlibmediaitemvideoinfo/videoheight.md): The height of the video in pixels.
- [series](itlibmediaitemvideoinfo/series.md): The name of the corresponding TV series, if the media item is an episode in a TV series.
- [sortSeries](itlibmediaitemvideoinfo/sortseries.md): The sorting name of the corresponding TV series, if the media item is an episode in a TV series.
- [season](itlibmediaitemvideoinfo/season.md): The corresponding TV season, if the media item is an episode of a TV series.
- [hd](itlibmediaitemvideoinfo/ishd.md): A Boolean value that indicates whether the video is high-definition.
- [episode](itlibmediaitemvideoinfo/episode.md): The name of the episode, if the media item is an episode of a TV series.
- [episodeOrder](itlibmediaitemvideoinfo/episodeorder.md): The numerical order of the episode, if the media item is an episode of a TV series.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Media Items

- [ITLibMediaItem](itlibmediaitem.md): This class describes a media item (a track) in the iTunes library, such as a song, a video, or a podcast.
- [ITLibMediaEntity](itlibmediaentity.md): This class describes a media entity, which can be a media item, such as an audio track.
- [ITLibArtist](itlibartist.md): This class represents an artist, such as the performer of a song.
- [ITLibArtwork](itlibartwork.md): This class represents the artwork for a media item.
