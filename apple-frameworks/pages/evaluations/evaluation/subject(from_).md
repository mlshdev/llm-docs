> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluation/subject(from:)](https://developer.apple.com/documentation/evaluations/evaluation/subject(from:))

# subject(from:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Produces the subject of evaluation from a given sample.

## Declaration

```swift
nonisolated(nonsending) func subject(from sample: Self.Sample) async throws -> Self.Subject
```

## Parameters

- `sample`: The input sample.

<a id="return-value"></a>

## Return Value

The subject of evaluation.

## Mentioned In

- [Evaluating language model responses](../evaluating-language-model-responses.md)
- [Evaluating tool-calling behavior](../evaluating-tool-calling-behavior.md)

<a id="discussion"></a>

## Discussion

Implement this method to run your system under test and return the subject that evaluators will measure.

## See Also

### Testing an intelligent feature

- [Subject](subject.md): The type of subject the system under test produces.
- [EvaluationSubject](../evaluationsubject.md): A type that represents the output the system under test produces.
- [ModelSubject](../modelsubject.md): The subject type for language model evaluations.
- [name](name.md): The default name, taken from the type name.
