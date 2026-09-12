> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcoordinatedplaybacksuspension/reason-swift.struct](https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/reason-swift.struct)

# AVCoordinatedPlaybackSuspension.Reason (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Constants that identify playback suspension reasons.

## Declaration

```swift
struct Reason
```

## Topics

### Suspension reasons

- [audioSessionInterrupted](reason-swift.struct/audiosessioninterrupted.md): The system interrupts a participant’s audio session.
- [coordinatedPlaybackNotPossible](reason-swift.struct/coordinatedplaybacknotpossible.md): It’s not possible for a participant to start or resume coordinated playback.
- [playingInterstitial](reason-swift.struct/playinginterstitial.md): A participant is playing content other than the primary content.
- [stallRecovery](reason-swift.struct/stallrecovery.md): The player object is buffering media data after a stall.
- [userActionRequired](reason-swift.struct/useractionrequired.md): A playback object requires user intervention to resume playback.
- [userIsChangingCurrentTime](reason-swift.struct/userischangingcurrenttime.md): A participant is actively changing the current time.

### Initializers

- [init(\_:)](reason-swift.struct/init%28__%29.md): Creates a suspension with a string.
- [init(rawValue:)](reason-swift.struct/init%28rawvalue_%29.md): Creates a suspension with a raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a suspension

- [beginDate](begindate.md): The time the suspension begins.
- [reason](reason-swift.property.md): The reason for the suspension.

# AVCoordinatedPlaybackSuspensionReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Constants that identify playback suspension reasons.

## Declaration

```objectivec
typedef NSString * AVCoordinatedPlaybackSuspensionReason;
```

## Topics

### Suspension reasons

- [AVCoordinatedPlaybackSuspensionReasonAudioSessionInterrupted](reason-swift.struct/audiosessioninterrupted.md): The system interrupts a participant’s audio session.
- [AVCoordinatedPlaybackSuspensionReasonCoordinatedPlaybackNotPossible](reason-swift.struct/coordinatedplaybacknotpossible.md): It’s not possible for a participant to start or resume coordinated playback.
- [AVCoordinatedPlaybackSuspensionReasonPlayingInterstitial](reason-swift.struct/playinginterstitial.md): A participant is playing content other than the primary content.
- [AVCoordinatedPlaybackSuspensionReasonStallRecovery](reason-swift.struct/stallrecovery.md): The player object is buffering media data after a stall.
- [AVCoordinatedPlaybackSuspensionReasonUserActionRequired](reason-swift.struct/useractionrequired.md): A playback object requires user intervention to resume playback.
- [AVCoordinatedPlaybackSuspensionReasonUserIsChangingCurrentTime](reason-swift.struct/userischangingcurrenttime.md): A participant is actively changing the current time.

## See Also

### Inspecting a suspension

- [beginDate](begindate.md): The time the suspension begins.
- [reason](reason-swift.property.md): The reason for the suspension.
