> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpskipintervalcommand](https://developer.apple.com/documentation/mediaplayer/mpskipintervalcommand)

# MPSkipIntervalCommand (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An object that defines the skip intervals for the player.

## Declaration

```swift
class MPSkipIntervalCommand
```

<a id="overview"></a>

## Overview

You use a skip interval to move the playback of a media item, forward or backward, the indicated number of seconds. For example, a forward skip interval of 30 seconds at 2 minutes and 30 seconds into a song would immediately jump to 3 minutes into the song and continue playing. The skipped content isn’t played.

## Topics

### Retrieving skip intervals

- [preferredIntervals](mpskipintervalcommand/preferredintervals.md): The available skip intervals, in seconds, for a media item.

## Relationships

### Inherits From

- [MPRemoteCommand](mpremotecommand.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to track navigation events

- [MPChangePlaybackPositionCommand](mpchangeplaybackpositioncommand.md): An object that responds to requests to change the current playback position of the playing item.
- [MPChangePlaybackPositionCommandEvent](mpchangeplaybackpositioncommandevent.md): An event requesting a change in the playback position.
- [MPSeekCommandEvent](mpseekcommandevent.md): An event requesting that the player seek to a new position.
- [MPSkipIntervalCommandEvent](mpskipintervalcommandevent.md): An event requesting a change in the current skip interval.

# MPSkipIntervalCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An object that defines the skip intervals for the player.

## Declaration

```objectivec
@interface MPSkipIntervalCommand : MPRemoteCommand
```

<a id="overview"></a>

## Overview

You use a skip interval to move the playback of a media item, forward or backward, the indicated number of seconds. For example, a forward skip interval of 30 seconds at 2 minutes and 30 seconds into a song would immediately jump to 3 minutes into the song and continue playing. The skipped content isn’t played.

## Topics

### Retrieving skip intervals

- [preferredIntervals](mpskipintervalcommand/preferredintervals.md): The available skip intervals, in seconds, for a media item.

## Relationships

### Inherits From

- [MPRemoteCommand](mpremotecommand.md)

## See Also

### Responding to track navigation events

- [MPChangePlaybackPositionCommand](mpchangeplaybackpositioncommand.md): An object that responds to requests to change the current playback position of the playing item.
- [MPChangePlaybackPositionCommandEvent](mpchangeplaybackpositioncommandevent.md): An event requesting a change in the playback position.
- [MPSeekCommandEvent](mpseekcommandevent.md): An event requesting that the player seek to a new position.
- [MPSkipIntervalCommandEvent](mpskipintervalcommandevent.md): An event requesting a change in the current skip interval.
