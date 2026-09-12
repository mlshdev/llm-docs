> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/systemlanguagemodel/availability-swift.enum](https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/availability-swift.enum)

# SystemLanguageModel.Availability

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The availability status for a specific system language model.

## Declaration

```swift
@frozen enum Availability
```

<a id="overview"></a>

## Overview

> **See Also**

> [availability](availability-swift.property.md)

## Topics

### Checking for availability

- [SystemLanguageModel.Availability.available](availability-swift.enum/available.md): The system is ready for making requests.
- [SystemLanguageModel.Availability.unavailable(\_:)](availability-swift.enum/unavailable%28__%29.md): Indicates that the system is not ready for requests.
- [SystemLanguageModel.Availability.UnavailableReason](availability-swift.enum/unavailablereason.md): The unavailable reason.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking model availability

- [isAvailable](isavailable.md): A Boolean value that indicates whether the system is entirely ready.
- [availability](availability-swift.property.md): The availability of the language model.
