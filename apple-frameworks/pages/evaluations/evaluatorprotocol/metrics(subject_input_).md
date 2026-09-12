> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluatorprotocol/metrics(subject:input:)](https://developer.apple.com/documentation/evaluations/evaluatorprotocol/metrics(subject:input:))

# metrics(subject:input:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Computes metrics for the given subject, given the input sample.

## Declaration

```swift
nonisolated(nonsending) func metrics(subject: Self.Subject, input: Self.Input) async throws -> [Metric]
```

## Parameters

- `subject`: The subject of evaluation, which the evaluation’s `subject(from:)` method produces.
- `input`: The input sample that contains the expected value and other context.

<a id="return-value"></a>

## Return Value

An array of metrics this evaluator produces.
