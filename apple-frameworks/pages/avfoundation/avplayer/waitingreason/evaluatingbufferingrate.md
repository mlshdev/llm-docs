> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/waitingreason/evaluatingbufferingrate](https://developer.apple.com/documentation/avfoundation/avplayer/waitingreason/evaluatingbufferingrate)

# evaluatingBufferingRate (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The player is waiting because it’s monitoring the buffer’s fill rate to determine whether playback is likely to complete without interruptions.

## Declaration

```swift
static let evaluatingBufferingRate: AVPlayer.WaitingReason
```

## See Also

### Player waiting reasons

- [noItemToPlay](noitemtoplay.md): The player is waiting because there’s no item to play.
- [toMinimizeStalls](tominimizestalls.md): The player is waiting for appropriate playback conditions before starting playback.
- [interstitialEvent](interstitialevent.md): The player is waiting for an interstitial event to complete.
- [waitingForCoordinatedPlayback](waitingforcoordinatedplayback.md): The player is waiting for another participant in a coordinated playback session.

# AVPlayerWaitingWhileEvaluatingBufferingRateReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The player is waiting because it’s monitoring the buffer’s fill rate to determine whether playback is likely to complete without interruptions.

## Declaration

```objectivec
extern AVPlayerWaitingReason const AVPlayerWaitingWhileEvaluatingBufferingRateReason;
```

## See Also

### Player waiting reasons

- [AVPlayerWaitingWithNoItemToPlayReason](noitemtoplay.md): The player is waiting because there’s no item to play.
- [AVPlayerWaitingToMinimizeStallsReason](tominimizestalls.md): The player is waiting for appropriate playback conditions before starting playback.
- [AVPlayerWaitingDuringInterstitialEventReason](interstitialevent.md): The player is waiting for an interstitial event to complete.
- [AVPlayerWaitingForCoordinatedPlaybackReason](waitingforcoordinatedplayback.md): The player is waiting for another participant in a coordinated playback session.
