> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationerror](https://developer.apple.com/documentation/evaluations/evaluationerror)

# EvaluationError

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Errors thrown during an evaluation run.

## Declaration

```swift
enum EvaluationError
```

<a id="overview"></a>

## Overview

```swift
do {
    let result = try await evaluation.run()
} catch EvaluationError.missingTranscript(let evaluatorType) {
    print("'\(evaluatorType)' requires a transcript")
}
```

## Topics

### Enumeration Cases

- [EvaluationError.missingTranscript(evaluatorType:)](evaluationerror/missingtranscript%28evaluatortype_%29.md): An evaluator received a subject without the required transcript.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [EvaluatorError](evaluatorerror.md): A value that describes why an evaluator failed while scoring a produced subject.
- [SubjectInferenceError](subjectinferenceerror.md): A value that describes a failure to produce a subject for a sample.
- [EvaluationResultsError](evaluationresultserror.md): Errors the framework throws when parsing evaluation results.
