> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/deactivationcontextkey

# deactivationContextKey (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Keys for [didBecomeInactiveNotification](didbecomeinactivenotification.md) Value is an [AVAudioSession.DeactivationContext](deactivationcontext.md) object describing the deactivation.

## Declaration

```swift
class let deactivationContextKey: String
```

## See Also

### Observing activation lifecycle

- [didBecomeActiveNotification](didbecomeactivenotification.md): Notification sent when the audio session becomes active.
- [didBecomeInactiveNotification](didbecomeinactivenotification.md): Notification sent when the audio session becomes inactive.
- [resumptionRecommendationNotification](resumptionrecommendationnotification.md): Notification sent when the system provides a resumption recommendation.
- [resumptionContextKey](resumptioncontextkey.md): Keys for [resumptionRecommendationNotification](resumptionrecommendationnotification.md) Value is an [AVAudioSession.ResumptionContext](resumptioncontext.md) describing the resumption recommendation.

# AVAudioSessionDeactivationContextKey (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Keys for [AVAudioSessionDidBecomeInactiveNotification](didbecomeinactivenotification.md) Value is an [AVAudioSessionDeactivationContext](deactivationcontext.md) object describing the deactivation.

## Declaration

```objectivec
extern NSString * const AVAudioSessionDeactivationContextKey;
```

## See Also

### Observing activation lifecycle

- [AVAudioSessionDidBecomeActiveNotification](didbecomeactivenotification.md): Notification sent when the audio session becomes active.
- [AVAudioSessionDidBecomeInactiveNotification](didbecomeinactivenotification.md): Notification sent when the audio session becomes inactive.
- [AVAudioSessionResumptionRecommendationNotification](resumptionrecommendationnotification.md): Notification sent when the system provides a resumption recommendation.
- [AVAudioSessionResumptionContextKey](resumptioncontextkey.md): Keys for [AVAudioSessionResumptionRecommendationNotification](resumptionrecommendationnotification.md) Value is an [AVAudioSessionResumptionContext](resumptioncontext.md) describing the resumption recommendation.
