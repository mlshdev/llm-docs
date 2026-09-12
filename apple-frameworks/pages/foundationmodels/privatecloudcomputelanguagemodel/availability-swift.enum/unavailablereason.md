> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/privatecloudcomputelanguagemodel/availability-swift.enum/unavailablereason](https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/availability-swift.enum/unavailablereason)

# PrivateCloudComputeLanguageModel.Availability.UnavailableReason

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The unavailable reason.

## Declaration

```swift
enum UnavailableReason
```

## Topics

### Getting the unavailable reasons

- [PrivateCloudComputeLanguageModel.Availability.UnavailableReason.deviceNotEligible](unavailablereason/devicenoteligible.md): The device does not support Apple Intelligence.
- [PrivateCloudComputeLanguageModel.Availability.UnavailableReason.systemNotReady](unavailablereason/systemnotready.md): The system is not yet ready to serve PCC requests.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking for availability

- [PrivateCloudComputeLanguageModel.Availability.available](available.md): The system is ready for making requests.
- [PrivateCloudComputeLanguageModel.Availability.unavailable(\_:)](unavailable%28__%29.md): Indicates that the system isn’t ready for requests.
