> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationresultserror](https://developer.apple.com/documentation/evaluations/evaluationresultserror)

# EvaluationResultsError

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Errors the framework throws when parsing evaluation results.

## Declaration

```swift
enum EvaluationResultsError
```

<a id="overview"></a>

## Overview

```swift
do {
    throw EvaluationResultsError.fileNotFound(URL(fileURLWithPath: "/tmp/results.json"))
} catch EvaluationResultsError.fileNotFound(let url) {
    print("File not found: \(url)")
}
```

## Topics

### Enumeration Cases

- [EvaluationResultsError.emptyJSONFile](evaluationresultserror/emptyjsonfile.md): The JSON file exists but contains no data.
- [EvaluationResultsError.fileNotFound(\_:)](evaluationresultserror/filenotfound%28__%29.md): The specified file URL is not findable on disk.
- [EvaluationResultsError.invalidJSONFormat](evaluationresultserror/invalidjsonformat.md): The JSON data doesn’t match the expected evaluation result format.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [EvaluationError](evaluationerror.md): Errors thrown during an evaluation run.
- [EvaluatorError](evaluatorerror.md): A value that describes why an evaluator failed while scoring a produced subject.
- [SubjectInferenceError](subjectinferenceerror.md): A value that describes a failure to produce a subject for a sample.
