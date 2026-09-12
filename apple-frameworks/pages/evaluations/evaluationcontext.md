> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationcontext](https://developer.apple.com/documentation/evaluations/evaluationcontext)

# EvaluationContext

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A context that provides the evaluation result within a test scope.

## Declaration

```swift
struct EvaluationContext
```

## Mentioned In

- [Evaluating language model responses](evaluating-language-model-responses.md)

<a id="overview"></a>

## Overview

Access the result through [result](evaluationcontext/result.md) after the evaluation completes.

## Topics

### Instance Properties

- [result](evaluationcontext/result.md): The evaluation result.

### Type Properties

- [current](evaluationcontext/current.md): The current evaluation context within the active test scope.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Swift Testing integration

- [EvaluationTrait](evaluationtrait.md): A test trait that runs an evaluation and records the result as attachments.
