> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluatorerror](https://developer.apple.com/documentation/evaluations/evaluatorerror)

# EvaluatorError

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A value that describes why an evaluator failed while scoring a produced subject.

## Declaration

```swift
enum EvaluatorError
```

<a id="overview"></a>

## Overview

The evaluation runner records these values in the `"EvaluatorErrors"` column of [detailed](evaluationresult/detailed.md) as an array. Multiple evaluators can fail for the same sample. The evaluation runner omits this column entirely when no evaluator fails, so check for the column’s presence before reading it.

```swift
let result = try await evaluation.run()
if result.detailed.containsColumn("EvaluatorErrors") {
    let column = result.detailed["EvaluatorErrors", [EvaluatorError].self]
    for (index, failures) in column.enumerated() {
        if let failures {
            for failure in failures {
                print("Sample \(index): \(failure.localizedDescription)")
            }
        }
    }
}
```

Rows with an `EvaluatorErrors` value always have a non-`nil` `Response`. Evaluators only run after subject production succeeds. Distinct from [SubjectInferenceError](subjectinferenceerror.md), which covers failures that occur before subject production.

## Topics

### Enumeration Cases

- [EvaluatorError.failed(evaluator:evaluatorType:reason:)](evaluatorerror/failed%28evaluator_evaluatortype_reason_%29.md): The evaluator threw an error while scoring the subject.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [EvaluationError](evaluationerror.md): Errors thrown during an evaluation run.
- [SubjectInferenceError](subjectinferenceerror.md): A value that describes a failure to produce a subject for a sample.
- [EvaluationResultsError](evaluationresultserror.md): Errors the framework throws when parsing evaluation results.
