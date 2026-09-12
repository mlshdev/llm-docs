> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/interruptioncontext](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptioncontext)

# AVAudioSession.InterruptionContext (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An object that provides context about an audio session interruption.

## Declaration

```swift
class InterruptionContext
```

## Topics

### Getting the interruption reason

- [reason](interruptioncontext/reason.md): The reason for the interruption.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing activation lifecycle

- [didBecomeActiveNotification](didbecomeactivenotification.md): Notification sent when the audio session becomes active.
- [didBecomeInactiveNotification](didbecomeinactivenotification.md): Notification sent when the audio session becomes inactive.
- [resumptionRecommendationNotification](resumptionrecommendationnotification.md): Notification sent when the system provides a resumption recommendation.
- [deactivationContextKey](deactivationcontextkey.md): Keys for [didBecomeInactiveNotification](didbecomeinactivenotification.md) Value is an [AVAudioSession.DeactivationContext](deactivationcontext.md) object describing the deactivation.
- [resumptionContextKey](resumptioncontextkey.md): Keys for [resumptionRecommendationNotification](resumptionrecommendationnotification.md) Value is an [AVAudioSession.ResumptionContext](resumptioncontext.md) describing the resumption recommendation.
- [AVAudioSession.DidBecomeActiveMessage](didbecomeactivemessage.md)
- [AVAudioSession.DidBecomeInactiveMessage](didbecomeinactivemessage.md)
- [AVAudioSession.ResumptionRecommendationMessage](resumptionrecommendationmessage.md)
- [AVAudioSession.DeactivationResult](deactivationresult.md): Type-safe representation of audio session deactivation results.
- [AVAudioSession.DeactivationContext](deactivationcontext.md): An object that describes why and how the audio session deactivated.
- [AVAudioSession.DeactivationSource](deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSession.ResumptionContext](resumptioncontext.md): An object that provides context when resumption becomes available.
- [AVAudioSession.ResumptionRecommendation](resumptionrecommendation.md): The system’s recommendation on whether to resume playback.

# AVAudioSessionInterruptionContext (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An object that provides context about an audio session interruption.

## Declaration

```objectivec
@interface AVAudioSessionInterruptionContext : NSObject
```

## Topics

### Getting the interruption reason

- [reason](interruptioncontext/reason.md): The reason for the interruption.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Observing activation lifecycle

- [AVAudioSessionDidBecomeActiveNotification](didbecomeactivenotification.md): Notification sent when the audio session becomes active.
- [AVAudioSessionDidBecomeInactiveNotification](didbecomeinactivenotification.md): Notification sent when the audio session becomes inactive.
- [AVAudioSessionResumptionRecommendationNotification](resumptionrecommendationnotification.md): Notification sent when the system provides a resumption recommendation.
- [AVAudioSessionDeactivationContextKey](deactivationcontextkey.md): Keys for [AVAudioSessionDidBecomeInactiveNotification](didbecomeinactivenotification.md) Value is an [AVAudioSessionDeactivationContext](deactivationcontext.md) object describing the deactivation.
- [AVAudioSessionResumptionContextKey](resumptioncontextkey.md): Keys for [AVAudioSessionResumptionRecommendationNotification](resumptionrecommendationnotification.md) Value is an [AVAudioSessionResumptionContext](resumptioncontext.md) describing the resumption recommendation.
- [AVAudioSessionDeactivationContext](deactivationcontext.md): An object that describes why and how the audio session deactivated.
- [AVAudioSessionDeactivationSource](deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSessionResumptionContext](resumptioncontext.md): An object that provides context when resumption becomes available.
- [AVAudioSessionResumptionRecommendation](resumptionrecommendation.md): The system’s recommendation on whether to resume playback.
