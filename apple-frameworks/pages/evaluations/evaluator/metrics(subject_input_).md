> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluator/metrics(subject:input:)](https://developer.apple.com/documentation/evaluations/evaluator/metrics(subject:input:))

# metrics(subject:input:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Evaluates the input and returns an array of metrics.

## Declaration

```swift
nonisolated(nonsending) func metrics(subject: ModelSubject<Input.ExpectedValue>, input: Input) async throws -> [Metric]
```

## Parameters

- `subject`: The model subject that provides the value and transcript to evaluate.
- `input`: The sample input that contains the prompt and expected value.

<a id="return-value"></a>

## Return Value

An array that contains the [Metric](../metric.md) the evaluation closure produces.
