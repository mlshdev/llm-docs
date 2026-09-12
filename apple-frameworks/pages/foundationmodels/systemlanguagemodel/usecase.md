> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/systemlanguagemodel/usecase](https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/usecase)

# SystemLanguageModel.UseCase

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A type that represents the use case for prompting.

## Declaration

```swift
struct UseCase
```

## Topics

### Getting the general use case

- [general](usecase/general.md): A use case for general prompting.

### Getting the content tagging use case

- [contentTagging](usecase/contenttagging.md): A use case for content tagging.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a model for a use case

- [init(useCase:guardrails:)](init%28usecase_guardrails_%29.md): Creates a system language model instance for a specific use case.
- [SystemLanguageModel.Guardrails](guardrails.md): A set of controls that flag sensitive content from model input and output.
