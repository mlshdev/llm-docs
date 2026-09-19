> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayer/ratedidchangereason/setratefailed

# setRateFailed (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An attempt to change the player’s rate fails.

## Declaration

```swift
static let setRateFailed: AVPlayer.RateDidChangeReason
```

## See Also

### Rate change reasons

- [appBackgrounded](appbackgrounded.md): An app transitions to the background.
- [audioSessionInterrupted](audiosessioninterrupted.md): The system interrupts the app’s audio session.
- [setRateCalled](setratecalled.md): An app makes a call to set the player’s rate.

# AVPlayerRateDidChangeReasonSetRateFailed (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An attempt to change the player’s rate fails.

## Declaration

```objectivec
extern AVPlayerRateDidChangeReason const AVPlayerRateDidChangeReasonSetRateFailed;
```

## See Also

### Rate change reasons

- [AVPlayerRateDidChangeReasonAppBackgrounded](appbackgrounded.md): An app transitions to the background.
- [AVPlayerRateDidChangeReasonAudioSessionInterrupted](audiosessioninterrupted.md): The system interrupts the app’s audio session.
- [AVPlayerRateDidChangeReasonSetRateCalled](setratecalled.md): An app makes a call to set the player’s rate.
