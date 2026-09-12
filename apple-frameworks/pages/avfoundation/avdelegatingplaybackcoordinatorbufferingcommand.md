> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinatorbufferingcommand](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorbufferingcommand)

# AVDelegatingPlaybackCoordinatorBufferingCommand (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A command that indicates to start buffering data in preparation for playback.

## Declaration

```swift
class AVDelegatingPlaybackCoordinatorBufferingCommand
```

<a id="overview"></a>

## Overview

When your app receives this command, update its user interface to indicate that playback is buffering.

## Topics

### Accessing command details

- [anticipatedPlaybackRate](avdelegatingplaybackcoordinatorbufferingcommand/anticipatedplaybackrate.md): The rate at which the coordinator expects the current item to play.
- [completionDueDate](avdelegatingplaybackcoordinatorbufferingcommand/completionduedate.md): The deadline by which the coordinator expects the delegate to complete execution of a command.

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
- [AVDelegatingPlaybackCoordinatorPlayCommand](avdelegatingplaybackcoordinatorplaycommand.md): A command that indicates to play at a specific rate and time.
- [AVDelegatingPlaybackCoordinatorPauseCommand](avdelegatingplaybackcoordinatorpausecommand.md): A command that indicates to pause playback.
- [AVDelegatingPlaybackCoordinatorSeekCommand](avdelegatingplaybackcoordinatorseekcommand.md): A command that indicates to seek to a new time in the item timeline.

# AVDelegatingPlaybackCoordinatorBufferingCommand (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A command that indicates to start buffering data in preparation for playback.

## Declaration

```objectivec
@interface AVDelegatingPlaybackCoordinatorBufferingCommand : AVDelegatingPlaybackCoordinatorPlaybackControlCommand
```

<a id="overview"></a>

## Overview

When your app receives this command, update its user interface to indicate that playback is buffering.

## Topics

### Accessing command details

- [anticipatedPlaybackRate](avdelegatingplaybackcoordinatorbufferingcommand/anticipatedplaybackrate.md): The rate at which the coordinator expects the current item to play.
- [completionDueDate](avdelegatingplaybackcoordinatorbufferingcommand/completionduedate.md): The deadline by which the coordinator expects the delegate to complete execution of a command.

## Relationships

### Inherits From

- [AVDelegatingPlaybackCoordinatorPlaybackControlCommand](avdelegatingplaybackcoordinatorplaybackcontrolcommand.md)

## See Also

### Playback commands

- [AVDelegatingPlaybackCoordinatorPlaybackControlCommand](avdelegatingplaybackcoordinatorplaybackcontrolcommand.md): An abstract superclass for playback commands.
- [AVDelegatingPlaybackCoordinatorPlayCommand](avdelegatingplaybackcoordinatorplaycommand.md): A command that indicates to play at a specific rate and time.
- [AVDelegatingPlaybackCoordinatorPauseCommand](avdelegatingplaybackcoordinatorpausecommand.md): A command that indicates to pause playback.
- [AVDelegatingPlaybackCoordinatorSeekCommand](avdelegatingplaybackcoordinatorseekcommand.md): A command that indicates to seek to a new time in the item timeline.
