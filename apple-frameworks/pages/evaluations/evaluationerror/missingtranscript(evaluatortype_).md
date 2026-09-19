> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/evaluationerror/missingtranscript(evaluatortype:)

# EvaluationError.missingTranscript(evaluatorType:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

An evaluator received a subject without the required transcript.

## Declaration

```swift
case missingTranscript(evaluatorType: String)
```

## Parameters

- `evaluatorType`: The concrete type name of the evaluator that requires a transcript.

<a id="discussion"></a>

## Discussion

This occurs when using [ToolCallEvaluator](../toolcallevaluator.md) with a [ModelSubject](../modelsubject.md) that has a `nil` transcript. Pass `session.transcript.structuredTranscript` when creating the `ModelSubject`.
