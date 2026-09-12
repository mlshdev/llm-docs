> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediaduration](https://developer.apple.com/documentation/nowplaying/mediaduration)

# MediaDuration

**Framework:** Now Playing  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The duration of media content.

## Declaration

```swift
enum MediaDuration
```

<a id="overview"></a>

## Overview

Use this enumeration to specify whether content has a finite duration or is a live stream without a defined end time.

## Topics

### Enumeration Cases

- [MediaDuration.continuous](mediaduration/continuous.md): Content with no defined duration that isn’t a live broadcast.
- [MediaDuration.finite(\_:)](mediaduration/finite%28__%29.md): Content with a known duration.
- [MediaDuration.live](mediaduration/live.md): Live or streaming content without a defined duration.

## See Also

### Specifying type and duration

- [MediaType](mediatype.md): The type of media being played.
