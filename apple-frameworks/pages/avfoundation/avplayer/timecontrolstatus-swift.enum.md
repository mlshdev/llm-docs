> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/timecontrolstatus-swift.enum](https://developer.apple.com/documentation/avfoundation/avplayer/timecontrolstatus-swift.enum)

# AVPlayer.TimeControlStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the state of playback control.

## Declaration

```swift
enum TimeControlStatus
```

## Topics

### Status values

- [AVPlayer.TimeControlStatus.paused](timecontrolstatus-swift.enum/paused.md): A state that indicates the player paused playback indefinitely.
- [AVPlayer.TimeControlStatus.waitingToPlayAtSpecifiedRate](timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate.md): A state that indicates that the player is waiting for network conditions to improve before it can start or resume playback.
- [AVPlayer.TimeControlStatus.playing](timecontrolstatus-swift.enum/playing.md): A state that indicates that the player is currently playing media.

### Initializers

- [init(rawValue:)](timecontrolstatus-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring waiting behavior

- [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md): A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.
- [reasonForWaitingToPlay](reasonforwaitingtoplay.md): The reason the player is currently waiting for playback to begin or resume.
- [AVPlayer.WaitingReason](waitingreason.md): The reasons a player is waiting to begin or resume playback.
- [timeControlStatus](timecontrolstatus-swift.property.md): A value that indicates whether playback is in progress, paused indefinitely, or waiting for network conditions to improve.
- [playImmediately(atRate:)](playimmediately%28atrate_%29.md): Plays the available media data immediately, at the specified rate.

# AVPlayerTimeControlStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the state of playback control.

## Declaration

```objectivec
enum AVPlayerTimeControlStatus : NSInteger;
```

## Topics

### Status values

- [AVPlayerTimeControlStatusPaused](timecontrolstatus-swift.enum/paused.md): A state that indicates the player paused playback indefinitely.
- [AVPlayerTimeControlStatusWaitingToPlayAtSpecifiedRate](timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate.md): A state that indicates that the player is waiting for network conditions to improve before it can start or resume playback.
- [AVPlayerTimeControlStatusPlaying](timecontrolstatus-swift.enum/playing.md): A state that indicates that the player is currently playing media.

## See Also

### Configuring waiting behavior

- [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md): A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.
- [reasonForWaitingToPlay](reasonforwaitingtoplay.md): The reason the player is currently waiting for playback to begin or resume.
- [AVPlayerWaitingReason](waitingreason.md): The reasons a player is waiting to begin or resume playback.
- [timeControlStatus](timecontrolstatus-swift.property.md): A value that indicates whether playback is in progress, paused indefinitely, or waiting for network conditions to improve.
- [playImmediatelyAtRate:](playimmediately%28atrate_%29.md): Plays the available media data immediately, at the specified rate.
