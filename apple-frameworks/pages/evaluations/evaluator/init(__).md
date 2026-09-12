> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluator/init(_:)](https://developer.apple.com/documentation/evaluations/evaluator/init(_:))

# init(\_:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates an evaluator with the given evaluation closure.

## Declaration

```swift
init(_ evaluate: nonisolated(nonsending) @escaping (Input, ModelSubject<Input.ExpectedValue>) async throws -> Metric)
```

## Parameters

- `evaluate`: A closure that receives the input and subject, and returns a [Metric](../metric.md) with a result value.

<a id="discussion"></a>

## Discussion

```swift
let metric = Metric("ExactMatch")
let evaluator = Evaluator<ModelSample<String>> { sample, subject in
    guard let expected = sample.expected else { return metric.ignore() }
    return subject.value == expected ? metric.passing() : metric.failing()
}
```
