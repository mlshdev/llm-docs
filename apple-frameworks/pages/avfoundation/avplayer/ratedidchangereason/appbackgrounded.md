> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/ratedidchangereason/appbackgrounded](https://developer.apple.com/documentation/avfoundation/avplayer/ratedidchangereason/appbackgrounded)

# appBackgrounded (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An app transitions to the background.

## Declaration

```swift
static let appBackgrounded: AVPlayer.RateDidChangeReason
```

## See Also

### Rate change reasons

- [audioSessionInterrupted](audiosessioninterrupted.md): The system interrupts the app’s audio session.
- [setRateCalled](setratecalled.md): An app makes a call to set the player’s rate.
- [setRateFailed](setratefailed.md): An attempt to change the player’s rate fails.

# AVPlayerRateDidChangeReasonAppBackgrounded (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An app transitions to the background.

## Declaration

```objectivec
extern AVPlayerRateDidChangeReason const AVPlayerRateDidChangeReasonAppBackgrounded;
```

## See Also

### Rate change reasons

- [AVPlayerRateDidChangeReasonAudioSessionInterrupted](audiosessioninterrupted.md): The system interrupts the app’s audio session.
- [AVPlayerRateDidChangeReasonSetRateCalled](setratecalled.md): An app makes a call to set the player’s rate.
- [AVPlayerRateDidChangeReasonSetRateFailed](setratefailed.md): An attempt to change the player’s rate fails.
