> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/ratedidchangereason/setratecalled](https://developer.apple.com/documentation/avfoundation/avplayer/ratedidchangereason/setratecalled)

# setRateCalled (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An app makes a call to set the player’s rate.

## Declaration

```swift
static let setRateCalled: AVPlayer.RateDidChangeReason
```

## See Also

### Rate change reasons

- [appBackgrounded](appbackgrounded.md): An app transitions to the background.
- [audioSessionInterrupted](audiosessioninterrupted.md): The system interrupts the app’s audio session.
- [setRateFailed](setratefailed.md): An attempt to change the player’s rate fails.

# AVPlayerRateDidChangeReasonSetRateCalled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An app makes a call to set the player’s rate.

## Declaration

```objectivec
extern AVPlayerRateDidChangeReason const AVPlayerRateDidChangeReasonSetRateCalled;
```

## See Also

### Rate change reasons

- [AVPlayerRateDidChangeReasonAppBackgrounded](appbackgrounded.md): An app transitions to the background.
- [AVPlayerRateDidChangeReasonAudioSessionInterrupted](audiosessioninterrupted.md): The system interrupts the app’s audio session.
- [AVPlayerRateDidChangeReasonSetRateFailed](setratefailed.md): An attempt to change the player’s rate fails.
