> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/executor

# SystemLanguageModel.Executor

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An executor that responds to session requests using the on-device system model.

## Declaration

```swift
struct Executor
```

## Topics

### Type Aliases

- [SystemLanguageModel.Executor.Model](executor/model.md): The model type this executor processes requests for.

### Default Implementations

- [LanguageModelExecutor Implementations](executor/languagemodelexecutor-implementations.md)

## Relationships

### Conforms To

- [LanguageModelExecutor](../languagemodelexecutor.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
