> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessioninterruptionwassuspendedkey](https://developer.apple.com/documentation/avfaudio/avaudiosessioninterruptionwassuspendedkey)

# AVAudioSessionInterruptionWasSuspendedKey (Swift)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 10.3+ (deprecated in 14.5) · iPadOS 10.3+ (deprecated in 14.5) · Mac Catalyst 13.1+ (deprecated in 14.5) · macOS · tvOS 10.3+ (deprecated in 14.5) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 7.3)

A user info key used to determine if the interruption is due to the audio session being deactivated when the system suspended the app.

> Use [AVAudioSessionInterruptionReasonKey](avaudiosessioninterruptionreasonkey.md) instead.

## Declaration

```swift
let AVAudioSessionInterruptionWasSuspendedKey: String
```

<a id="Discussion"></a>

## Discussion

This [userInfo](../foundation/nsnotification/userinfo.md) key is present only in [AVAudioSession.InterruptionType.began](avaudiosession/interruptiontype/began.md) interruption events, where the interruption is a direct result of the operating system suspending the app. Its associated value is a Boolean [NSNumber](../foundation/nsnumber.md), where a [true](https://developer.apple.com/documentation/swift/true) value indicates that the interruption is due to the system suspending the app, rather than being interrupted by another audio session.

## See Also

### User Info Keys

- [AVAudioSessionInterruptionTypeKey](avaudiosessioninterruptiontypekey.md): Deprecated. A user info key to retrieve the interruption type.
- [AVAudioSessionInterruptionOptionKey](avaudiosessioninterruptionoptionkey.md): Deprecated. A user info key to retrieve the interruption option.
- [AVAudioSessionInterruptionReasonKey](avaudiosessioninterruptionreasonkey.md): Deprecated. A user info key to retrieve the interruption reason.

# AVAudioSessionInterruptionWasSuspendedKey (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 10.3+ (deprecated in 14.5) · iPadOS 10.3+ (deprecated in 14.5) · Mac Catalyst 13.1+ (deprecated in 14.5) · macOS · tvOS 10.3+ (deprecated in 14.5) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 7.3)

A user info key used to determine if the interruption is due to the audio session being deactivated when the system suspended the app.

> Use [AVAudioSessionInterruptionReasonKey](avaudiosessioninterruptionreasonkey.md) instead.

## Declaration

```objectivec
extern NSString * const AVAudioSessionInterruptionWasSuspendedKey;
```

<a id="Discussion"></a>

## Discussion

This [userInfo](../foundation/nsnotification/userinfo.md) key is present only in [AVAudioSessionInterruptionTypeBegan](avaudiosession/interruptiontype/began.md) interruption events, where the interruption is a direct result of the operating system suspending the app. Its associated value is a Boolean [NSNumber](../foundation/nsnumber.md), where a [true](https://developer.apple.com/documentation/swift/true) value indicates that the interruption is due to the system suspending the app, rather than being interrupted by another audio session.

## See Also

### User Info Keys

- [AVAudioSessionInterruptionTypeKey](avaudiosessioninterruptiontypekey.md): Deprecated. A user info key to retrieve the interruption type.
- [AVAudioSessionInterruptionOptionKey](avaudiosessioninterruptionoptionkey.md): Deprecated. A user info key to retrieve the interruption option.
- [AVAudioSessionInterruptionReasonKey](avaudiosessioninterruptionreasonkey.md): Deprecated. A user info key to retrieve the interruption reason.
