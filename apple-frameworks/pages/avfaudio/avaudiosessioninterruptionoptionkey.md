> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessioninterruptionoptionkey](https://developer.apple.com/documentation/avfaudio/avaudiosessioninterruptionoptionkey)

# AVAudioSessionInterruptionOptionKey (Swift)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+

A user info key to retrieve the interruption option.

## Declaration

```swift
let AVAudioSessionInterruptionOptionKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object containing an unsigned integer that identifies any options associated with the interruption. For a list of possible flags, see [AVAudioSession.InterruptionOptions](avaudiosession/interruptionoptions.md).

## See Also

### User Info Keys

- [AVAudioSessionInterruptionTypeKey](avaudiosessioninterruptiontypekey.md): Deprecated. A user info key to retrieve the interruption type.
- [AVAudioSessionInterruptionReasonKey](avaudiosessioninterruptionreasonkey.md): Deprecated. A user info key to retrieve the interruption reason.
- [AVAudioSessionInterruptionWasSuspendedKey](avaudiosessioninterruptionwassuspendedkey.md): Deprecated. A user info key used to determine if the interruption is due to the audio session being deactivated when the system suspended the app.

# AVAudioSessionInterruptionOptionKey (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+

A user info key to retrieve the interruption option.

## Declaration

```objectivec
extern NSString * const AVAudioSessionInterruptionOptionKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object containing an unsigned integer that identifies any options associated with the interruption. For a list of possible flags, see [AVAudioSessionInterruptionOptions](avaudiosession/interruptionoptions.md).

## See Also

### User Info Keys

- [AVAudioSessionInterruptionTypeKey](avaudiosessioninterruptiontypekey.md): Deprecated. A user info key to retrieve the interruption type.
- [AVAudioSessionInterruptionReasonKey](avaudiosessioninterruptionreasonkey.md): Deprecated. A user info key to retrieve the interruption reason.
- [AVAudioSessionInterruptionWasSuspendedKey](avaudiosessioninterruptionwassuspendedkey.md): Deprecated. A user info key used to determine if the interruption is due to the audio session being deactivated when the system suspended the app.
