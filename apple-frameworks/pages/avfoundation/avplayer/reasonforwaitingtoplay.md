> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/reasonforwaitingtoplay](https://developer.apple.com/documentation/avfoundation/avplayer/reasonforwaitingtoplay)

# reasonForWaitingToPlay (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The reason the player is currently waiting for playback to begin or resume.

## Declaration

```swift
nonisolated var reasonForWaitingToPlay: AVPlayer.WaitingReason? { get }
```

<a id="Discussion"></a>

## Discussion

When the value of the player’s [timeControlStatus](timecontrolstatus-swift.property.md) is [AVPlayer.TimeControlStatus.waitingToPlayAtSpecifiedRate](timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate.md), you can use this property determine the reason the player is currently waiting for playback to begin or resume. Possible values for this property are:

- [toMinimizeStalls](waitingreason/tominimizestalls.md)
- [noItemToPlay](waitingreason/noitemtoplay.md)
- [evaluatingBufferingRate](waitingreason/evaluatingbufferingrate.md)

The value of this property will be `nil` if the player’s [timeControlStatus](timecontrolstatus-swift.property.md) is a value other than [AVPlayer.TimeControlStatus.waitingToPlayAtSpecifiedRate](timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate.md).

You can use the value of this property to conditionally show UI indicating the player’s waiting state. This property is observable using key-value observing.

## See Also

### Configuring waiting behavior

- [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md): A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.
- [AVPlayer.WaitingReason](waitingreason.md): The reasons a player is waiting to begin or resume playback.
- [timeControlStatus](timecontrolstatus-swift.property.md): A value that indicates whether playback is in progress, paused indefinitely, or waiting for network conditions to improve.
- [AVPlayer.TimeControlStatus](timecontrolstatus-swift.enum.md): Constants that indicate the state of playback control.
- [playImmediately(atRate:)](playimmediately%28atrate_%29.md): Plays the available media data immediately, at the specified rate.

# reasonForWaitingToPlay (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The reason the player is currently waiting for playback to begin or resume.

## Declaration

```objectivec
@property (readonly, nullable) AVPlayerWaitingReason reasonForWaitingToPlay;
```

<a id="Discussion"></a>

## Discussion

When the value of the player’s [timeControlStatus](timecontrolstatus-swift.property.md) is [AVPlayerTimeControlStatusWaitingToPlayAtSpecifiedRate](timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate.md), you can use this property determine the reason the player is currently waiting for playback to begin or resume. Possible values for this property are:

- [AVPlayerWaitingToMinimizeStallsReason](waitingreason/tominimizestalls.md)
- [AVPlayerWaitingWithNoItemToPlayReason](waitingreason/noitemtoplay.md)
- [AVPlayerWaitingWhileEvaluatingBufferingRateReason](waitingreason/evaluatingbufferingrate.md)

The value of this property will be `nil` if the player’s [timeControlStatus](timecontrolstatus-swift.property.md) is a value other than [AVPlayerTimeControlStatusWaitingToPlayAtSpecifiedRate](timecontrolstatus-swift.enum/waitingtoplayatspecifiedrate.md).

You can use the value of this property to conditionally show UI indicating the player’s waiting state. This property is observable using key-value observing.

## See Also

### Configuring waiting behavior

- [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md): A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.
- [AVPlayerWaitingReason](waitingreason.md): The reasons a player is waiting to begin or resume playback.
- [timeControlStatus](timecontrolstatus-swift.property.md): A value that indicates whether playback is in progress, paused indefinitely, or waiting for network conditions to improve.
- [AVPlayerTimeControlStatus](timecontrolstatus-swift.enum.md): Constants that indicate the state of playback control.
- [playImmediatelyAtRate:](playimmediately%28atrate_%29.md): Plays the available media data immediately, at the specified rate.
