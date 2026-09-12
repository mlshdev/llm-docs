> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluator](https://developer.apple.com/documentation/evaluations/evaluator)

# Evaluator

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A closure-based evaluator.

## Declaration

```swift
struct Evaluator<Input> where Input : SampleProtocol, Input.ExpectedValue : Decodable, Input.ExpectedValue : Encodable, Input.ExpectedValue : Sendable
```

## Mentioned In

- [Designing specific, measurable criteria in an evaluation suite](designing-evaluation-criteria.md)

<a id="overview"></a>

## Overview

Use Evaluator to create inline evaluators without defining a custom type. The closure receives the input sample and the [ModelSubject](modelsubject.md), providing access to both .value and .transcript.

```swift
Evaluator { sample, subject in
    let metric = Metric("TitleMatch")
    guard let expected = sample.expected else { return metric.ignore() }
    return subject.value == expected ? metric.passing() : metric.failing()
}
```

## Topics

### Initializers

- [init(\_:)](evaluator/init%28__%29.md): Creates an evaluator with the given evaluation closure.

### Instance Methods

- [metrics(subject:input:)](evaluator/metrics%28subject_input_%29.md): Evaluates the input and returns an array of metrics.

## Relationships

### Conforms To

- [EvaluatorProtocol](evaluatorprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metrics and evaluators

- [Designing specific, measurable criteria in an evaluation suite](designing-evaluation-criteria.md): Define quality for your feature by choosing measurable criteria, scoring approaches, and ground-truth strategies.
- [Metric](metric.md): A named metric that carries a result value.
- [MetricsAggregator](metricsaggregator.md): A utility for computing aggregate statistics from evaluation metrics.
