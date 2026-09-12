> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpchangeplaybackpositioncommandevent](https://developer.apple.com/documentation/mediaplayer/mpchangeplaybackpositioncommandevent)

# MPChangePlaybackPositionCommandEvent (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 5.0+

An event requesting a change in the playback position.

## Declaration

```swift
class MPChangePlaybackPositionCommandEvent
```

## Topics

### Retrieving the position time

- [positionTime](mpchangeplaybackpositioncommandevent/positiontime.md): The playback position used when setting the current time of the player.

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
- [MPSeekCommandEvent](mpseekcommandevent.md): An event requesting that the player seek to a new position.
- [MPSkipIntervalCommand](mpskipintervalcommand.md): An object that defines the skip intervals for the player.
- [MPSkipIntervalCommandEvent](mpskipintervalcommandevent.md): An event requesting a change in the current skip interval.

# MPChangePlaybackPositionCommandEvent (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 5.0+

An event requesting a change in the playback position.

## Declaration

```objectivec
@interface MPChangePlaybackPositionCommandEvent : MPRemoteCommandEvent
```

## Topics

### Retrieving the position time

- [positionTime](mpchangeplaybackpositioncommandevent/positiontime.md): The playback position used when setting the current time of the player.

## Relationships

### Inherits From

- [MPRemoteCommandEvent](mpremotecommandevent.md)

## See Also

### Responding to track navigation events

- [MPChangePlaybackPositionCommand](mpchangeplaybackpositioncommand.md): An object that responds to requests to change the current playback position of the playing item.
- [MPSeekCommandEvent](mpseekcommandevent.md): An event requesting that the player seek to a new position.
- [MPSkipIntervalCommand](mpskipintervalcommand.md): An object that defines the skip intervals for the player.
- [MPSkipIntervalCommandEvent](mpskipintervalcommandevent.md): An event requesting a change in the current skip interval.
