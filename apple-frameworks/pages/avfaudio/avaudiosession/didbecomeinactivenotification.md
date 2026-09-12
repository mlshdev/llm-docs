> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/didbecomeinactivenotification](https://developer.apple.com/documentation/avfaudio/avaudiosession/didbecomeinactivenotification)

# didBecomeInactiveNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Notification sent when the audio session becomes inactive.

## Declaration

```swift
class let didBecomeInactiveNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

The userInfo dictionary contains an [AVAudioSession.DeactivationContext](deactivationcontext.md) object accessible via [deactivationContextKey](deactivationcontextkey.md).

## See Also

### Observing activation lifecycle

- [didBecomeActiveNotification](didbecomeactivenotification.md): Notification sent when the audio session becomes active.
- [resumptionRecommendationNotification](resumptionrecommendationnotification.md): Notification sent when the system provides a resumption recommendation.
- [deactivationContextKey](deactivationcontextkey.md): Keys for [didBecomeInactiveNotification](didbecomeinactivenotification.md) Value is an [AVAudioSession.DeactivationContext](deactivationcontext.md) object describing the deactivation.
- [resumptionContextKey](resumptioncontextkey.md): Keys for [resumptionRecommendationNotification](resumptionrecommendationnotification.md) Value is an [AVAudioSession.ResumptionContext](resumptioncontext.md) describing the resumption recommendation.
- [AVAudioSession.DidBecomeActiveMessage](didbecomeactivemessage.md)
- [AVAudioSession.DidBecomeInactiveMessage](didbecomeinactivemessage.md)
- [AVAudioSession.ResumptionRecommendationMessage](resumptionrecommendationmessage.md)
- [AVAudioSession.DeactivationResult](deactivationresult.md): Type-safe representation of audio session deactivation results.
- [AVAudioSession.DeactivationContext](deactivationcontext.md): An object that describes why and how the audio session deactivated.
- [AVAudioSession.DeactivationSource](deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSession.InterruptionContext](interruptioncontext.md): An object that provides context about an audio session interruption.
- [AVAudioSession.ResumptionContext](resumptioncontext.md): An object that provides context when resumption becomes available.
- [AVAudioSession.ResumptionRecommendation](resumptionrecommendation.md): The system’s recommendation on whether to resume playback.

# AVAudioSessionDidBecomeInactiveNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Notification sent when the audio session becomes inactive.

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionDidBecomeInactiveNotification;
```

<a id="discussion"></a>

## Discussion

The userInfo dictionary contains an [AVAudioSessionDeactivationContext](deactivationcontext.md) object accessible via [AVAudioSessionDeactivationContextKey](deactivationcontextkey.md).

## See Also

### Observing activation lifecycle

- [AVAudioSessionDidBecomeActiveNotification](didbecomeactivenotification.md): Notification sent when the audio session becomes active.
- [AVAudioSessionResumptionRecommendationNotification](resumptionrecommendationnotification.md): Notification sent when the system provides a resumption recommendation.
- [AVAudioSessionDeactivationContextKey](deactivationcontextkey.md): Keys for [AVAudioSessionDidBecomeInactiveNotification](didbecomeinactivenotification.md) Value is an [AVAudioSessionDeactivationContext](deactivationcontext.md) object describing the deactivation.
- [AVAudioSessionResumptionContextKey](resumptioncontextkey.md): Keys for [AVAudioSessionResumptionRecommendationNotification](resumptionrecommendationnotification.md) Value is an [AVAudioSessionResumptionContext](resumptioncontext.md) describing the resumption recommendation.
- [AVAudioSessionDeactivationContext](deactivationcontext.md): An object that describes why and how the audio session deactivated.
- [AVAudioSessionDeactivationSource](deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSessionInterruptionContext](interruptioncontext.md): An object that provides context about an audio session interruption.
- [AVAudioSessionResumptionContext](resumptioncontext.md): An object that provides context when resumption becomes available.
- [AVAudioSessionResumptionRecommendation](resumptionrecommendation.md): The system’s recommendation on whether to resume playback.
