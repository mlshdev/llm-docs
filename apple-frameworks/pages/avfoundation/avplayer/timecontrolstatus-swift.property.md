> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/timecontrolstatus-swift.property](https://developer.apple.com/documentation/avfoundation/avplayer/timecontrolstatus-swift.property)

# timeControlStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A value that indicates whether playback is in progress, paused indefinitely, or waiting for network conditions to improve.

## Declaration

```swift
nonisolated var timeControlStatus: AVPlayer.TimeControlStatus { get }
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)
- [Observing playback state in SwiftUI](../observing-playback-state-in-swiftui.md)

<a id="Discussion"></a>

## Discussion

When the value of [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md) is [true](https://developer.apple.com/documentation/swift/true), the player waits until your app resumes playback.

During playback, the value of the property changes between [AVPlayer.TimeControlStatus.playing](timecontrolstatus-swift.enum/playing.md) and [AVPlayer.TimeControlStatus.waitingToPlayAtSpecifiedRate](timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate.md) depending on whether the player has sufficient media data to continue playback.

This property is key-value observable.

## See Also

### Configuring waiting behavior

- [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md): A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.
- [reasonForWaitingToPlay](reasonforwaitingtoplay.md): The reason the player is currently waiting for playback to begin or resume.
- [AVPlayer.WaitingReason](waitingreason.md): The reasons a player is waiting to begin or resume playback.
- [AVPlayer.TimeControlStatus](timecontrolstatus-swift.enum.md): Constants that indicate the state of playback control.
- [playImmediately(atRate:)](playimmediately%28atrate_%29.md): Plays the available media data immediately, at the specified rate.

# timeControlStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A value that indicates whether playback is in progress, paused indefinitely, or waiting for network conditions to improve.

## Declaration

```objectivec
@property (readonly) AVPlayerTimeControlStatus timeControlStatus;
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)
- [Observing playback state in SwiftUI](../observing-playback-state-in-swiftui.md)

<a id="Discussion"></a>

## Discussion

When the value of [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md) is [true](https://developer.apple.com/documentation/swift/true), the player waits until your app resumes playback.

During playback, the value of the property changes between [AVPlayerTimeControlStatusPlaying](timecontrolstatus-swift.enum/playing.md) and [AVPlayerTimeControlStatusWaitingToPlayAtSpecifiedRate](timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate.md) depending on whether the player has sufficient media data to continue playback.

This property is key-value observable.

## See Also

### Configuring waiting behavior

- [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md): A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.
- [reasonForWaitingToPlay](reasonforwaitingtoplay.md): The reason the player is currently waiting for playback to begin or resume.
- [AVPlayerWaitingReason](waitingreason.md): The reasons a player is waiting to begin or resume playback.
- [AVPlayerTimeControlStatus](timecontrolstatus-swift.enum.md): Constants that indicate the state of playback control.
- [playImmediatelyAtRate:](playimmediately%28atrate_%29.md): Plays the available media data immediately, at the specified rate.
