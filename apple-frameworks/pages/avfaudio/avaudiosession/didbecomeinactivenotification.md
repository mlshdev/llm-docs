> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/didbecomeinactivenotification

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
