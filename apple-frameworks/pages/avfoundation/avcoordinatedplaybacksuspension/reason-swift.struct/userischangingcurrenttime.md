> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcoordinatedplaybacksuspension/reason-swift.struct/userischangingcurrenttime](https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/reason-swift.struct/userischangingcurrenttime)

# userIsChangingCurrentTime (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A participant is actively changing the current time.

## Declaration

```swift
static let userIsChangingCurrentTime: AVCoordinatedPlaybackSuspension.Reason
```

## See Also

### Suspension reasons

- [audioSessionInterrupted](audiosessioninterrupted.md): The system interrupts a participant’s audio session.
- [coordinatedPlaybackNotPossible](coordinatedplaybacknotpossible.md): It’s not possible for a participant to start or resume coordinated playback.
- [playingInterstitial](playinginterstitial.md): A participant is playing content other than the primary content.
- [stallRecovery](stallrecovery.md): The player object is buffering media data after a stall.
- [userActionRequired](useractionrequired.md): A playback object requires user intervention to resume playback.

# AVCoordinatedPlaybackSuspensionReasonUserIsChangingCurrentTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A participant is actively changing the current time.

## Declaration

```objectivec
extern AVCoordinatedPlaybackSuspensionReason const AVCoordinatedPlaybackSuspensionReasonUserIsChangingCurrentTime;
```

## See Also

### Suspension reasons

- [AVCoordinatedPlaybackSuspensionReasonAudioSessionInterrupted](audiosessioninterrupted.md): The system interrupts a participant’s audio session.
- [AVCoordinatedPlaybackSuspensionReasonCoordinatedPlaybackNotPossible](coordinatedplaybacknotpossible.md): It’s not possible for a participant to start or resume coordinated playback.
- [AVCoordinatedPlaybackSuspensionReasonPlayingInterstitial](playinginterstitial.md): A participant is playing content other than the primary content.
- [AVCoordinatedPlaybackSuspensionReasonStallRecovery](stallrecovery.md): The player object is buffering media data after a stall.
- [AVCoordinatedPlaybackSuspensionReasonUserActionRequired](useractionrequired.md): A playback object requires user intervention to resume playback.
