> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/waitingreason/noitemtoplay](https://developer.apple.com/documentation/avfoundation/avplayer/waitingreason/noitemtoplay)

# noItemToPlay (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The player is waiting because there’s no item to play.

## Declaration

```swift
static let noItemToPlay: AVPlayer.WaitingReason
```

## See Also

### Player waiting reasons

- [evaluatingBufferingRate](evaluatingbufferingrate.md): The player is waiting because it’s monitoring the buffer’s fill rate to determine whether playback is likely to complete without interruptions.
- [toMinimizeStalls](tominimizestalls.md): The player is waiting for appropriate playback conditions before starting playback.
- [interstitialEvent](interstitialevent.md): The player is waiting for an interstitial event to complete.
- [waitingForCoordinatedPlayback](waitingforcoordinatedplayback.md): The player is waiting for another participant in a coordinated playback session.

# AVPlayerWaitingWithNoItemToPlayReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The player is waiting because there’s no item to play.

## Declaration

```objectivec
extern AVPlayerWaitingReason const AVPlayerWaitingWithNoItemToPlayReason;
```

## See Also

### Player waiting reasons

- [AVPlayerWaitingWhileEvaluatingBufferingRateReason](evaluatingbufferingrate.md): The player is waiting because it’s monitoring the buffer’s fill rate to determine whether playback is likely to complete without interruptions.
- [AVPlayerWaitingToMinimizeStallsReason](tominimizestalls.md): The player is waiting for appropriate playback conditions before starting playback.
- [AVPlayerWaitingDuringInterstitialEventReason](interstitialevent.md): The player is waiting for an interstitial event to complete.
- [AVPlayerWaitingForCoordinatedPlaybackReason](waitingforcoordinatedplayback.md): The player is waiting for another participant in a coordinated playback session.
