> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpskipintervalcommandevent](https://developer.apple.com/documentation/mediaplayer/mpskipintervalcommandevent)

# MPSkipIntervalCommandEvent (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An event requesting a change in the current skip interval.

## Declaration

```swift
class MPSkipIntervalCommandEvent
```

## Topics

### Retrieving the skip interval

- [interval](mpskipintervalcommandevent/interval.md): The chosen interval, in seconds, for the skip command event.

## Relationships

### Inherits From

- [MPRemoteCommandEvent](mpremotecommandevent.md)

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
- [MPSkipIntervalCommand](mpskipintervalcommand.md): An object that defines the skip intervals for the player.

# MPSkipIntervalCommandEvent (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An event requesting a change in the current skip interval.

## Declaration

```objectivec
@interface MPSkipIntervalCommandEvent : MPRemoteCommandEvent
```

## Topics

### Retrieving the skip interval

- [interval](mpskipintervalcommandevent/interval.md): The chosen interval, in seconds, for the skip command event.

## Relationships

### Inherits From

- [MPRemoteCommandEvent](mpremotecommandevent.md)

## See Also

### Responding to track navigation events

- [MPChangePlaybackPositionCommand](mpchangeplaybackpositioncommand.md): An object that responds to requests to change the current playback position of the playing item.
- [MPChangePlaybackPositionCommandEvent](mpchangeplaybackpositioncommandevent.md): An event requesting a change in the playback position.
- [MPSeekCommandEvent](mpseekcommandevent.md): An event requesting that the player seek to a new position.
- [MPSkipIntervalCommand](mpskipintervalcommand.md): An object that defines the skip intervals for the player.
