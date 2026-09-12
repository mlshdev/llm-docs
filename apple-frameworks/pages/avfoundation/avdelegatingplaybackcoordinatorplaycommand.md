> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinatorplaycommand](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaycommand)

# AVDelegatingPlaybackCoordinatorPlayCommand (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A command that indicates to play at a specific rate and time.

## Declaration

```swift
class AVDelegatingPlaybackCoordinatorPlayCommand
```

## Topics

### Accessing command details

- [rate](avdelegatingplaybackcoordinatorplaycommand/rate.md): A rate to use when starting playback.
- [itemTime](avdelegatingplaybackcoordinatorplaycommand/itemtime.md): A time in the item timeline to use to begin playback.
- [hostClockTime](avdelegatingplaybackcoordinatorplaycommand/hostclocktime.md): A host clock time to use to begin playback.

## Relationships

### Inherits From

- [AVDelegatingPlaybackCoordinatorPlaybackControlCommand](avdelegatingplaybackcoordinatorplaybackcontrolcommand.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Playback commands

- [AVDelegatingPlaybackCoordinatorPlaybackControlCommand](avdelegatingplaybackcoordinatorplaybackcontrolcommand.md): An abstract superclass for playback commands.
- [AVDelegatingPlaybackCoordinatorPauseCommand](avdelegatingplaybackcoordinatorpausecommand.md): A command that indicates to pause playback.
- [AVDelegatingPlaybackCoordinatorSeekCommand](avdelegatingplaybackcoordinatorseekcommand.md): A command that indicates to seek to a new time in the item timeline.
- [AVDelegatingPlaybackCoordinatorBufferingCommand](avdelegatingplaybackcoordinatorbufferingcommand.md): A command that indicates to start buffering data in preparation for playback.

# AVDelegatingPlaybackCoordinatorPlayCommand (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A command that indicates to play at a specific rate and time.

## Declaration

```objectivec
@interface AVDelegatingPlaybackCoordinatorPlayCommand : AVDelegatingPlaybackCoordinatorPlaybackControlCommand
```

## Topics

### Accessing command details

- [rate](avdelegatingplaybackcoordinatorplaycommand/rate.md): A rate to use when starting playback.
- [itemTime](avdelegatingplaybackcoordinatorplaycommand/itemtime.md): A time in the item timeline to use to begin playback.
- [hostClockTime](avdelegatingplaybackcoordinatorplaycommand/hostclocktime.md): A host clock time to use to begin playback.

## Relationships

### Inherits From

- [AVDelegatingPlaybackCoordinatorPlaybackControlCommand](avdelegatingplaybackcoordinatorplaybackcontrolcommand.md)

## See Also

### Playback commands

- [AVDelegatingPlaybackCoordinatorPlaybackControlCommand](avdelegatingplaybackcoordinatorplaybackcontrolcommand.md): An abstract superclass for playback commands.
- [AVDelegatingPlaybackCoordinatorPauseCommand](avdelegatingplaybackcoordinatorpausecommand.md): A command that indicates to pause playback.
- [AVDelegatingPlaybackCoordinatorSeekCommand](avdelegatingplaybackcoordinatorseekcommand.md): A command that indicates to seek to a new time in the item timeline.
- [AVDelegatingPlaybackCoordinatorBufferingCommand](avdelegatingplaybackcoordinatorbufferingcommand.md): A command that indicates to start buffering data in preparation for playback.
