> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediatype](https://developer.apple.com/documentation/mediaplayer/mpmediatype)

# MPMediaType (Swift)

**Framework:** Media Player  
**Kind:** Structure  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The properties for defining the type for a media item.

## Declaration

```swift
struct MPMediaType
```

<a id="overview"></a>

## Overview

Media item types are possible values for the [MPMediaItemPropertyMediaType](mpmediaitempropertymediatype.md) property. A media item can have more than one media item type.

## Topics

### Constants

- [music](mpmediatype/music.md): The media item contains music.
- [podcast](mpmediatype/podcast.md): The media item contains a podcast.
- [audioBook](mpmediatype/audiobook.md): The media item contains an audio book.
- [audioITunesU](mpmediatype/audioitunesu.md): The media item contains an iTunes U audio lesson.
- [anyAudio](mpmediatype/anyaudio.md): The media item contains an unspecified type of audio content.
- [movie](mpmediatype/movie.md): The media item contains a movie.
- [tvShow](mpmediatype/tvshow.md): The media item contains a TV show.
- [videoPodcast](mpmediatype/videopodcast.md): The media item contains a video podcast.
- [musicVideo](mpmediatype/musicvideo.md): The media item contains a music video.
- [videoITunesU](mpmediatype/videoitunesu.md): The media item contains an iTunes U video.
- [homeVideo](mpmediatype/homevideo.md): The media item contains a home video.
- [anyVideo](mpmediatype/anyvideo.md): The media item contains an unspecified type of video content.
- [any](mpmediatype/any.md): The media item contains an unspecified type of media content.

### Initializers

- [init(rawValue:)](mpmediatype/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Media item types and keys

- [General media item property keys](general-media-item-property-keys.md): System-defined properties for obtaining the metadata for a media item.
- [User-defined property keys](user-defined-property-keys.md): Properties for obtaining user-defined metadata for a media item.

# MPMediaType (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The properties for defining the type for a media item.

## Declaration

```objectivec
enum MPMediaType : NSUInteger;
```

<a id="overview"></a>

## Overview

Media item types are possible values for the [MPMediaItemPropertyMediaType](mpmediaitempropertymediatype.md) property. A media item can have more than one media item type.

## Topics

### Constants

- [MPMediaTypeMusic](mpmediatype/music.md): The media item contains music.
- [MPMediaTypePodcast](mpmediatype/podcast.md): The media item contains a podcast.
- [MPMediaTypeAudioBook](mpmediatype/audiobook.md): The media item contains an audio book.
- [MPMediaTypeAudioITunesU](mpmediatype/audioitunesu.md): The media item contains an iTunes U audio lesson.
- [MPMediaTypeAnyAudio](mpmediatype/anyaudio.md): The media item contains an unspecified type of audio content.
- [MPMediaTypeMovie](mpmediatype/movie.md): The media item contains a movie.
- [MPMediaTypeTVShow](mpmediatype/tvshow.md): The media item contains a TV show.
- [MPMediaTypeVideoPodcast](mpmediatype/videopodcast.md): The media item contains a video podcast.
- [MPMediaTypeMusicVideo](mpmediatype/musicvideo.md): The media item contains a music video.
- [MPMediaTypeVideoITunesU](mpmediatype/videoitunesu.md): The media item contains an iTunes U video.
- [MPMediaTypeHomeVideo](mpmediatype/homevideo.md): The media item contains a home video.
- [MPMediaTypeAnyVideo](mpmediatype/anyvideo.md): The media item contains an unspecified type of video content.
- [MPMediaTypeAny](mpmediatype/any.md): The media item contains an unspecified type of media content.

## See Also

### Media item types and keys

- [General media item property keys](general-media-item-property-keys.md): System-defined properties for obtaining the metadata for a media item.
- [User-defined property keys](user-defined-property-keys.md): Properties for obtaining user-defined metadata for a media item.
