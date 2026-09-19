> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/refusal

# LanguageModelError.Refusal

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Information about a model refusal.

## Declaration

```swift
struct Refusal
```

<a id="overview"></a>

## Overview

Refusal failures indicate that the model chose not to respond to a prompt.

## Topics

### Creating an error instance

- [init(explanation:debugDescription:metadata:)](refusal/init%28explanation_debugdescription_metadata_%29.md): Creates information describing a model refusal.

### Inspecting refusal errors

- [metadata](refusal/metadata.md): Additional information about the failure, keyed by name.
- [debugDescription](refusal/debugdescription.md): A debug description to help developers diagnose issues during development.

### Getting a refusal explanation

- [explanation](refusal/explanation.md): The model’s explanation for why it refused to generate a response.
- [explanationStream](refusal/explanationstream.md): The model’s explanation for why it refused to generate a response, delivered as it streams.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model refusal error

- [LanguageModelError.refusal(\_:)](refusal%28__%29.md): The model refused to answer.
