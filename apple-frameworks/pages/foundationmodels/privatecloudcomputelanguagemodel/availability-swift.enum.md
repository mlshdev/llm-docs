> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/availability-swift.enum

# PrivateCloudComputeLanguageModel.Availability

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The availability status for a specific PCC language model.

## Declaration

```swift
@frozen enum Availability
```

## Topics

### Checking for availability

- [PrivateCloudComputeLanguageModel.Availability.available](availability-swift.enum/available.md): The system is ready to make requests.
- [PrivateCloudComputeLanguageModel.Availability.unavailable(\_:)](availability-swift.enum/unavailable%28__%29.md): The system isn’t ready for requests.
- [PrivateCloudComputeLanguageModel.Availability.UnavailableReason](availability-swift.enum/unavailablereason.md): The reason the model is unavailable.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the availability

- [isAvailable](isavailable.md): A Boolean value that indicates whether the system is entirely ready.
- [availability](availability-swift.property.md): The availability of the language model.
