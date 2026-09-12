> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcoordinatedplaybacksuspension/reason-swift.struct/playinginterstitial](https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/reason-swift.struct/playinginterstitial)

# playingInterstitial (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A participant is playing content other than the primary content.

## Declaration

```swift
static let playingInterstitial: AVCoordinatedPlaybackSuspension.Reason
```

<a id="Discussion"></a>

## Discussion

Interstitials are content a player presents that’s unrelated to the primary content, such as advertisements and legal warnings.

## See Also

### Suspension reasons

- [audioSessionInterrupted](audiosessioninterrupted.md): The system interrupts a participant’s audio session.
- [coordinatedPlaybackNotPossible](coordinatedplaybacknotpossible.md): It’s not possible for a participant to start or resume coordinated playback.
- [stallRecovery](stallrecovery.md): The player object is buffering media data after a stall.
- [userActionRequired](useractionrequired.md): A playback object requires user intervention to resume playback.
- [userIsChangingCurrentTime](userischangingcurrenttime.md): A participant is actively changing the current time.

# AVCoordinatedPlaybackSuspensionReasonPlayingInterstitial (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A participant is playing content other than the primary content.

## Declaration

```objectivec
extern AVCoordinatedPlaybackSuspensionReason const AVCoordinatedPlaybackSuspensionReasonPlayingInterstitial;
```

<a id="Discussion"></a>

## Discussion

Interstitials are content a player presents that’s unrelated to the primary content, such as advertisements and legal warnings.

## See Also

### Suspension reasons

- [AVCoordinatedPlaybackSuspensionReasonAudioSessionInterrupted](audiosessioninterrupted.md): The system interrupts a participant’s audio session.
- [AVCoordinatedPlaybackSuspensionReasonCoordinatedPlaybackNotPossible](coordinatedplaybacknotpossible.md): It’s not possible for a participant to start or resume coordinated playback.
- [AVCoordinatedPlaybackSuspensionReasonStallRecovery](stallrecovery.md): The player object is buffering media data after a stall.
- [AVCoordinatedPlaybackSuspensionReasonUserActionRequired](useractionrequired.md): A playback object requires user intervention to resume playback.
- [AVCoordinatedPlaybackSuspensionReasonUserIsChangingCurrentTime](userischangingcurrenttime.md): A participant is actively changing the current time.
