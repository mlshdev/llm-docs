> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessioninterruptiontypekey](https://developer.apple.com/documentation/avfaudio/avaudiosessioninterruptiontypekey)

# AVAudioSessionInterruptionTypeKey (Swift)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+

A user info key to retrieve the interruption type.

## Declaration

```swift
let AVAudioSessionInterruptionTypeKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object containing an unsigned integer that identifies the type of interruption. For a list of possible values, see [AVAudioSession.InterruptionType](avaudiosession/interruptiontype.md).

## See Also

### User Info Keys

- [AVAudioSessionInterruptionOptionKey](avaudiosessioninterruptionoptionkey.md): Deprecated. A user info key to retrieve the interruption option.
- [AVAudioSessionInterruptionReasonKey](avaudiosessioninterruptionreasonkey.md): Deprecated. A user info key to retrieve the interruption reason.
- [AVAudioSessionInterruptionWasSuspendedKey](avaudiosessioninterruptionwassuspendedkey.md): Deprecated. A user info key used to determine if the interruption is due to the audio session being deactivated when the system suspended the app.

# AVAudioSessionInterruptionTypeKey (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+

A user info key to retrieve the interruption type.

## Declaration

```objectivec
extern NSString * const AVAudioSessionInterruptionTypeKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object containing an unsigned integer that identifies the type of interruption. For a list of possible values, see [AVAudioSessionInterruptionType](avaudiosession/interruptiontype.md).

## See Also

### User Info Keys

- [AVAudioSessionInterruptionOptionKey](avaudiosessioninterruptionoptionkey.md): Deprecated. A user info key to retrieve the interruption option.
- [AVAudioSessionInterruptionReasonKey](avaudiosessioninterruptionreasonkey.md): Deprecated. A user info key to retrieve the interruption reason.
- [AVAudioSessionInterruptionWasSuspendedKey](avaudiosessioninterruptionwassuspendedkey.md): Deprecated. A user info key used to determine if the interruption is due to the audio session being deactivated when the system suspended the app.
