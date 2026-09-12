> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/ratedidchangereason/audiosessioninterrupted](https://developer.apple.com/documentation/avfoundation/avplayer/ratedidchangereason/audiosessioninterrupted)

# audioSessionInterrupted (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The system interrupts the app’s audio session.

## Declaration

```swift
static let audioSessionInterrupted: AVPlayer.RateDidChangeReason
```

## See Also

### Rate change reasons

- [appBackgrounded](appbackgrounded.md): An app transitions to the background.
- [setRateCalled](setratecalled.md): An app makes a call to set the player’s rate.
- [setRateFailed](setratefailed.md): An attempt to change the player’s rate fails.

# AVPlayerRateDidChangeReasonAudioSessionInterrupted (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The system interrupts the app’s audio session.

## Declaration

```objectivec
extern AVPlayerRateDidChangeReason const AVPlayerRateDidChangeReasonAudioSessionInterrupted;
```

## See Also

### Rate change reasons

- [AVPlayerRateDidChangeReasonAppBackgrounded](appbackgrounded.md): An app transitions to the background.
- [AVPlayerRateDidChangeReasonSetRateCalled](setratecalled.md): An app makes a call to set the player’s rate.
- [AVPlayerRateDidChangeReasonSetRateFailed](setratefailed.md): An attempt to change the player’s rate fails.
