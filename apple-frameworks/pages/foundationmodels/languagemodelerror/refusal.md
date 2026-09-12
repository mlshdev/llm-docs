> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelerror/refusal](https://developer.apple.com/documentation/foundationmodels/languagemodelerror/refusal)

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

- [init(explanation:debugDescription:metadata:)](refusal/init%28explanation_debugdescription_metadata_%29.md)

### Inspecting refusal errors

- [metadata](refusal/metadata.md)
- [debugDescription](refusal/debugdescription.md)

### Getting a refusal explanation

- [explanation](refusal/explanation.md)
- [explanationStream](refusal/explanationstream.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model refusal error

- [LanguageModelError.refusal(\_:)](refusal%28__%29.md): The model refused to answer.
