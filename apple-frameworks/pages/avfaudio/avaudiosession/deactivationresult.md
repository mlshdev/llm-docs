> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/deactivationresult

# AVAudioSession.DeactivationResult

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Type-safe representation of audio session deactivation results.

## Declaration

```swift
enum DeactivationResult
```

<a id="overview"></a>

## Overview

This enum provides a Swift-idiomatic way to handle deactivation scenarios with associated values, ensuring impossible states are prevented at compile time.

## Topics

### Getting the deactivation result

- [AVAudioSession.DeactivationResult.appDeactivated](deactivationresult/appdeactivated.md): Session was successfully deactivated by the app.
- [AVAudioSession.DeactivationResult.systemInterruption(\_:)](deactivationresult/systeminterruption%28__%29.md): Session was deactivated due to a system interruption.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling activation messages

- [AVAudioSession.DidBecomeActiveMessage](didbecomeactivemessage.md)
- [AVAudioSession.DidBecomeInactiveMessage](didbecomeinactivemessage.md)
- [AVAudioSession.ResumptionRecommendationMessage](resumptionrecommendationmessage.md)
