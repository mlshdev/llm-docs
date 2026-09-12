> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/subjectinferenceerror](https://developer.apple.com/documentation/evaluations/subjectinferenceerror)

# SubjectInferenceError

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A value that describes a failure to produce a subject for a sample.

## Declaration

```swift
enum SubjectInferenceError
```

<a id="overview"></a>

## Overview

The evaluation runner records these values in the `"SubjectInferenceError"` column of [detailed](evaluationresult/detailed.md). The evaluation runner omits this column entirely on a clean run where the run produces every subject successfully, so check for the column’s presence before reading it.

```swift
let result = try await evaluation.run()
if result.detailed.containsColumn("SubjectInferenceError") {
    let column = result.detailed["SubjectInferenceError", SubjectInferenceError.self]
    for (index, failure) in column.enumerated() {
        if let failure {
            print("Sample \(index) failed: \(failure.localizedDescription)")
        }
    }
}
```

Rows with a `SubjectInferenceError` value also have a `nil` `Response`, so failed samples are identifiable structurally. This is useful for filtering and re-running them. This error is distinct from [EvaluatorError](evaluatorerror.md), which covers failures that occur after subject production succeeds.

## Topics

### Enumeration Cases

- [SubjectInferenceError.failed(reason:)](subjectinferenceerror/failed%28reason_%29.md): The subject method threw an error.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [EvaluationError](evaluationerror.md): Errors thrown during an evaluation run.
- [EvaluatorError](evaluatorerror.md): A value that describes why an evaluator failed while scoring a produced subject.
- [EvaluationResultsError](evaluationresultserror.md): Errors the framework throws when parsing evaluation results.
