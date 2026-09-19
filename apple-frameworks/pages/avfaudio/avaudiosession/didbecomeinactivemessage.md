> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/didbecomeinactivemessage

# AVAudioSession.DidBecomeInactiveMessage

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
struct DidBecomeInactiveMessage
```

## Topics

### Getting the deactivation result

- [deactivationResult](didbecomeinactivemessage/deactivationresult.md)

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling activation messages

- [AVAudioSession.DidBecomeActiveMessage](didbecomeactivemessage.md)
- [AVAudioSession.ResumptionRecommendationMessage](resumptionrecommendationmessage.md)
- [AVAudioSession.DeactivationResult](deactivationresult.md): Type-safe representation of audio session deactivation results.
