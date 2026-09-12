> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediatype](https://developer.apple.com/documentation/nowplaying/mediatype)

# MediaType

**Framework:** Now Playing  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The type of media being played.

## Declaration

```swift
enum MediaType
```

<a id="overview"></a>

## Overview

Use this enumeration to specify whether content is audio-only or includes video. The system uses this information to optimize the Now Playing interface.

## Topics

### Enumeration Cases

- [MediaType.audio](mediatype/audio.md): Audio-only content, such as music, podcasts, or audiobooks.
- [MediaType.video](mediatype/video.md): Video content, such as movies, TV shows, or video podcasts.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Specifying type and duration

- [MediaDuration](mediaduration.md): The duration of media content.
