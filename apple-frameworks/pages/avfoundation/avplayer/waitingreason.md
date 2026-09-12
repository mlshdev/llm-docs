> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/waitingreason](https://developer.apple.com/documentation/avfoundation/avplayer/waitingreason)

# AVPlayer.WaitingReason (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The reasons a player is waiting to begin or resume playback.

## Declaration

```swift
struct WaitingReason
```

## Topics

### Player waiting reasons

- [evaluatingBufferingRate](waitingreason/evaluatingbufferingrate.md): The player is waiting because it’s monitoring the buffer’s fill rate to determine whether playback is likely to complete without interruptions.
- [noItemToPlay](waitingreason/noitemtoplay.md): The player is waiting because there’s no item to play.
- [toMinimizeStalls](waitingreason/tominimizestalls.md): The player is waiting for appropriate playback conditions before starting playback.
- [interstitialEvent](waitingreason/interstitialevent.md): The player is waiting for an interstitial event to complete.
- [waitingForCoordinatedPlayback](waitingreason/waitingforcoordinatedplayback.md): The player is waiting for another participant in a coordinated playback session.

### Initializers

- [init(rawValue:)](waitingreason/init%28rawvalue_%29.md): Creates a waiting reason with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring waiting behavior

- [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md): A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.
- [reasonForWaitingToPlay](reasonforwaitingtoplay.md): The reason the player is currently waiting for playback to begin or resume.
- [timeControlStatus](timecontrolstatus-swift.property.md): A value that indicates whether playback is in progress, paused indefinitely, or waiting for network conditions to improve.
- [AVPlayer.TimeControlStatus](timecontrolstatus-swift.enum.md): Constants that indicate the state of playback control.
- [playImmediately(atRate:)](playimmediately%28atrate_%29.md): Plays the available media data immediately, at the specified rate.

# AVPlayerWaitingReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The reasons a player is waiting to begin or resume playback.

## Declaration

```objectivec
typedef NSString * AVPlayerWaitingReason;
```

## Topics

### Player waiting reasons

- [AVPlayerWaitingWhileEvaluatingBufferingRateReason](waitingreason/evaluatingbufferingrate.md): The player is waiting because it’s monitoring the buffer’s fill rate to determine whether playback is likely to complete without interruptions.
- [AVPlayerWaitingWithNoItemToPlayReason](waitingreason/noitemtoplay.md): The player is waiting because there’s no item to play.
- [AVPlayerWaitingToMinimizeStallsReason](waitingreason/tominimizestalls.md): The player is waiting for appropriate playback conditions before starting playback.
- [AVPlayerWaitingDuringInterstitialEventReason](waitingreason/interstitialevent.md): The player is waiting for an interstitial event to complete.
- [AVPlayerWaitingForCoordinatedPlaybackReason](waitingreason/waitingforcoordinatedplayback.md): The player is waiting for another participant in a coordinated playback session.

## See Also

### Configuring waiting behavior

- [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md): A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.
- [reasonForWaitingToPlay](reasonforwaitingtoplay.md): The reason the player is currently waiting for playback to begin or resume.
- [timeControlStatus](timecontrolstatus-swift.property.md): A value that indicates whether playback is in progress, paused indefinitely, or waiting for network conditions to improve.
- [AVPlayerTimeControlStatus](timecontrolstatus-swift.enum.md): Constants that indicate the state of playback control.
- [playImmediatelyAtRate:](playimmediately%28atrate_%29.md): Plays the available media data immediately, at the specified rate.
