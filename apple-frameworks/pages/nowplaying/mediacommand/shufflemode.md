> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/shufflemode](https://developer.apple.com/documentation/nowplaying/mediacommand/shufflemode)

# MediaCommand.ShuffleMode

**Framework:** Now Playing  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The shuffle mode for media playback.

## Declaration

```swift
enum ShuffleMode
```

<a id="overview"></a>

## Overview

Use this enumeration to specify how the player shuffles content during playback.

## Topics

### Enumeration Cases

- [MediaCommand.ShuffleMode.collections](shufflemode/collections.md): The player shuffles collections during playback (for example, albums).
- [MediaCommand.ShuffleMode.items](shufflemode/items.md): The player shuffles individual items during playback (for example, songs).
- [MediaCommand.ShuffleMode.off](shufflemode/off.md): The player does not shuffle content during playback.

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
- [MediaCommand.RepeatMode](repeatmode.md): The repeat mode for media playback.
