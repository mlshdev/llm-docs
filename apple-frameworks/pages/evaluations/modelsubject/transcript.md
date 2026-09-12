> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modelsubject/transcript](https://developer.apple.com/documentation/evaluations/modelsubject/transcript)

# transcript

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The structured transcript from the model session.

## Declaration

```swift
var transcript: StructuredTranscript?
```

<a id="discussion"></a>

## Discussion

This transcript is required when using [ToolCallEvaluator](../toolcallevaluator.md). If `nil`, [ToolCallEvaluator](../toolcallevaluator.md) throws [EvaluationError.missingTranscript(evaluatorType:)](../evaluationerror/missingtranscript%28evaluatortype_%29.md).

## See Also

### Accessing the content

- [value](value.md): The typed value the model produces.
