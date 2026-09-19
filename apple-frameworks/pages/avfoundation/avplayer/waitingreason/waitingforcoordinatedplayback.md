> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayer/waitingreason/waitingforcoordinatedplayback

# waitingForCoordinatedPlayback (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The player is waiting for another participant in a coordinated playback session.

## Declaration

```swift
static let waitingForCoordinatedPlayback: AVPlayer.WaitingReason
```

## See Also

### Player waiting reasons

- [evaluatingBufferingRate](evaluatingbufferingrate.md): The player is waiting because it’s monitoring the buffer’s fill rate to determine whether playback is likely to complete without interruptions.
- [noItemToPlay](noitemtoplay.md): The player is waiting because there’s no item to play.
- [toMinimizeStalls](tominimizestalls.md): The player is waiting for appropriate playback conditions before starting playback.
- [interstitialEvent](interstitialevent.md): The player is waiting for an interstitial event to complete.

# AVPlayerWaitingForCoordinatedPlaybackReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The player is waiting for another participant in a coordinated playback session.

## Declaration

```objectivec
extern AVPlayerWaitingReason const AVPlayerWaitingForCoordinatedPlaybackReason;
```

## See Also

### Player waiting reasons

- [AVPlayerWaitingWhileEvaluatingBufferingRateReason](evaluatingbufferingrate.md): The player is waiting because it’s monitoring the buffer’s fill rate to determine whether playback is likely to complete without interruptions.
- [AVPlayerWaitingWithNoItemToPlayReason](noitemtoplay.md): The player is waiting because there’s no item to play.
- [AVPlayerWaitingToMinimizeStallsReason](tominimizestalls.md): The player is waiting for appropriate playback conditions before starting playback.
- [AVPlayerWaitingDuringInterstitialEventReason](interstitialevent.md): The player is waiting for an interstitial event to complete.
