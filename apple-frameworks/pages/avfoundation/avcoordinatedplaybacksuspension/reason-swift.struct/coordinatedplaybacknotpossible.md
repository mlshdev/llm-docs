> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/reason-swift.struct/coordinatedplaybacknotpossible

# coordinatedPlaybackNotPossible (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

It’s not possible for a participant to start or resume coordinated playback.

## Declaration

```swift
static let coordinatedPlaybackNotPossible: AVCoordinatedPlaybackSuspension.Reason
```

## See Also

### Suspension reasons

- [audioSessionInterrupted](audiosessioninterrupted.md): The system interrupts a participant’s audio session.
- [playingInterstitial](playinginterstitial.md): A participant is playing content other than the primary content.
- [stallRecovery](stallrecovery.md): The player object is buffering media data after a stall.
- [userActionRequired](useractionrequired.md): A playback object requires user intervention to resume playback.
- [userIsChangingCurrentTime](userischangingcurrenttime.md): A participant is actively changing the current time.

# AVCoordinatedPlaybackSuspensionReasonCoordinatedPlaybackNotPossible (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

It’s not possible for a participant to start or resume coordinated playback.

## Declaration

```objectivec
extern AVCoordinatedPlaybackSuspensionReason const AVCoordinatedPlaybackSuspensionReasonCoordinatedPlaybackNotPossible;
```

## See Also

### Suspension reasons

- [AVCoordinatedPlaybackSuspensionReasonAudioSessionInterrupted](audiosessioninterrupted.md): The system interrupts a participant’s audio session.
- [AVCoordinatedPlaybackSuspensionReasonPlayingInterstitial](playinginterstitial.md): A participant is playing content other than the primary content.
- [AVCoordinatedPlaybackSuspensionReasonStallRecovery](stallrecovery.md): The player object is buffering media data after a stall.
- [AVCoordinatedPlaybackSuspensionReasonUserActionRequired](useractionrequired.md): A playback object requires user intervention to resume playback.
- [AVCoordinatedPlaybackSuspensionReasonUserIsChangingCurrentTime](userischangingcurrenttime.md): A participant is actively changing the current time.
