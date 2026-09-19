> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/availability-swift.enum/unavailablereason

# PrivateCloudComputeLanguageModel.Availability.UnavailableReason

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The reason the model is unavailable.

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

- [PrivateCloudComputeLanguageModel.Availability.available](available.md): The system is ready to make requests.
- [PrivateCloudComputeLanguageModel.Availability.unavailable(\_:)](unavailable%28__%29.md): The system isn’t ready for requests.
