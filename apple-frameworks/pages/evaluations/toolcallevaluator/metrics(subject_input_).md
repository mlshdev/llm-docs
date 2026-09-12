> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/toolcallevaluator/metrics(subject:input:)](https://developer.apple.com/documentation/evaluations/toolcallevaluator/metrics(subject:input:))

# metrics(subject:input:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Evaluates tool-call expectations against the actual transcript and returns scored metrics.

## Declaration

```swift
nonisolated(nonsending) func metrics(subject: ModelSubject<Input.ExpectedValue>, input: Input) async throws -> [Metric]
```

## Parameters

- `subject`: The model subject that contains the transcript of actual tool calls.
- `input`: The sample providing the expected tool call trajectory.

<a id="return-value"></a>

## Return Value

An array that contains the strict pass or fail metric and the partial score metric.

<a id="discussion"></a>

## Discussion

Runs ordered, unordered, and disallowed expectation checks in a single pass and returns both a strict all-pass metric and a partial percentage-pass metric.
