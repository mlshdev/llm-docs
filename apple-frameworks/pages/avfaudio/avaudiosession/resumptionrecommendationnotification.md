> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/resumptionrecommendationnotification

# resumptionRecommendationNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Notification sent when the system provides a resumption recommendation.

## Declaration

```swift
class let resumptionRecommendationNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

The userInfo dictionary contains an [AVAudioSession.ResumptionContext](resumptioncontext.md) object accessible via [resumptionContextKey](resumptioncontextkey.md).

## See Also

### Observing activation lifecycle

- [didBecomeActiveNotification](didbecomeactivenotification.md): Notification sent when the audio session becomes active.
- [didBecomeInactiveNotification](didbecomeinactivenotification.md): Notification sent when the audio session becomes inactive.
- [deactivationContextKey](deactivationcontextkey.md): Keys for [didBecomeInactiveNotification](didbecomeinactivenotification.md) Value is an [AVAudioSession.DeactivationContext](deactivationcontext.md) object describing the deactivation.
- [resumptionContextKey](resumptioncontextkey.md): Keys for [resumptionRecommendationNotification](resumptionrecommendationnotification.md) Value is an [AVAudioSession.ResumptionContext](resumptioncontext.md) describing the resumption recommendation.

# AVAudioSessionResumptionRecommendationNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Notification sent when the system provides a resumption recommendation.

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionResumptionRecommendationNotification;
```

<a id="discussion"></a>

## Discussion

The userInfo dictionary contains an [AVAudioSessionResumptionContext](resumptioncontext.md) object accessible via [AVAudioSessionResumptionContextKey](resumptioncontextkey.md).

## See Also

### Observing activation lifecycle

- [AVAudioSessionDidBecomeActiveNotification](didbecomeactivenotification.md): Notification sent when the audio session becomes active.
- [AVAudioSessionDidBecomeInactiveNotification](didbecomeinactivenotification.md): Notification sent when the audio session becomes inactive.
- [AVAudioSessionDeactivationContextKey](deactivationcontextkey.md): Keys for [AVAudioSessionDidBecomeInactiveNotification](didbecomeinactivenotification.md) Value is an [AVAudioSessionDeactivationContext](deactivationcontext.md) object describing the deactivation.
- [AVAudioSessionResumptionContextKey](resumptioncontextkey.md): Keys for [AVAudioSessionResumptionRecommendationNotification](resumptionrecommendationnotification.md) Value is an [AVAudioSessionResumptionContext](resumptioncontext.md) describing the resumption recommendation.
