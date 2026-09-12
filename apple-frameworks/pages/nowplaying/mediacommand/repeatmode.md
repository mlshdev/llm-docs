> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/repeatmode](https://developer.apple.com/documentation/nowplaying/mediacommand/repeatmode)

# MediaCommand.RepeatMode

**Framework:** Now Playing  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The repeat mode for media playback.

## Declaration

```swift
enum RepeatMode
```

<a id="overview"></a>

## Overview

Use this enumeration to specify how the player repeats content during playback.

## Topics

### Enumeration Cases

- [MediaCommand.RepeatMode.all](repeatmode/all.md): The player repeats the current container or playlist indefinitely.
- [MediaCommand.RepeatMode.off](repeatmode/off.md): The player does not repeat content during playback.
- [MediaCommand.RepeatMode.one](repeatmode/one.md): The player repeats a single item indefinitely.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Changing playback modes

- [changePlaybackRate(supported:\_:)](changeplaybackrate%28supported___%29.md): Creates a command that changes the playback rate of the media.
- [changeRepeatMode(current:supported:\_:)](changerepeatmode%28current_supported___%29.md): Creates a command that changes the repeat mode for media playback.
- [changeShuffleMode(current:supported:\_:)](changeshufflemode%28current_supported___%29.md): Creates a command that changes the shuffle mode for media playback.
- [MediaCommand.ShuffleMode](shufflemode.md): The shuffle mode for media playback.
