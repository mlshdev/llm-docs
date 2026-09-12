> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpchangeplaybackpositioncommand](https://developer.apple.com/documentation/mediaplayer/mpchangeplaybackpositioncommand)

# MPChangePlaybackPositionCommand (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

An object that responds to requests to change the current playback position of the playing item.

## Declaration

```swift
class MPChangePlaybackPositionCommand
```

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

- [MPChangePlaybackPositionCommandEvent](mpchangeplaybackpositioncommandevent.md): An event requesting a change in the playback position.
- [MPSeekCommandEvent](mpseekcommandevent.md): An event requesting that the player seek to a new position.
- [MPSkipIntervalCommand](mpskipintervalcommand.md): An object that defines the skip intervals for the player.
- [MPSkipIntervalCommandEvent](mpskipintervalcommandevent.md): An event requesting a change in the current skip interval.

# MPChangePlaybackPositionCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

An object that responds to requests to change the current playback position of the playing item.

## Declaration

```objectivec
@interface MPChangePlaybackPositionCommand : MPRemoteCommand
```

## Relationships

### Inherits From

- [MPRemoteCommand](mpremotecommand.md)

## See Also

### Responding to track navigation events

- [MPChangePlaybackPositionCommandEvent](mpchangeplaybackpositioncommandevent.md): An event requesting a change in the playback position.
- [MPSeekCommandEvent](mpseekcommandevent.md): An event requesting that the player seek to a new position.
- [MPSkipIntervalCommand](mpskipintervalcommand.md): An object that defines the skip intervals for the player.
- [MPSkipIntervalCommandEvent](mpskipintervalcommandevent.md): An event requesting a change in the current skip interval.
