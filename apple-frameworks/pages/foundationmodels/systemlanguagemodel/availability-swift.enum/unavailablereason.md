> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/systemlanguagemodel/availability-swift.enum/unavailablereason](https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/availability-swift.enum/unavailablereason)

# SystemLanguageModel.Availability.UnavailableReason

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The unavailable reason.

## Declaration

```swift
enum UnavailableReason
```

## Topics

### Getting the unavailable reasons

- [SystemLanguageModel.Availability.UnavailableReason.appleIntelligenceNotEnabled](unavailablereason/appleintelligencenotenabled.md): Apple Intelligence is not enabled on the system.
- [SystemLanguageModel.Availability.UnavailableReason.deviceNotEligible](unavailablereason/devicenoteligible.md): The device does not support Apple Intelligence.
- [SystemLanguageModel.Availability.UnavailableReason.modelNotReady](unavailablereason/modelnotready.md): The models aren’t available on the user’s device.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking for availability

- [SystemLanguageModel.Availability.available](available.md): The system is ready for making requests.
- [SystemLanguageModel.Availability.unavailable(\_:)](unavailable%28__%29.md): Indicates that the system is not ready for requests.
