> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluatorprotocol](https://developer.apple.com/documentation/evaluations/evaluatorprotocol)

# EvaluatorProtocol

**Framework:** Evaluations  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A type that evaluates subjects and produces metrics.

## Declaration

```swift
protocol EvaluatorProtocol<Input, Subject> : Sendable
```

<a id="overview"></a>

## Overview

Conform to `EvaluatorProtocol` to create custom evaluators that measure the system’s output against expected criteria. Each evaluator returns an array of [Metric](metric.md) values: one for each DataFrame column.

The protocol takes `Input` (the sample type) as a type parameter. `Subject` is an associated type constrained to [EvaluationSubject](evaluationsubject.md), ensuring the subject’s value type matches the sample’s expected value type.

Conforming types must be `Sendable`.

```swift
struct MyEvaluator<Input: SampleProtocol>: EvaluatorProtocol
where Input.ExpectedValue: Sendable & Codable {
    let metric = Metric("Quality")

    func metrics(
        subject: ModelSubject<Input.ExpectedValue>,
        input: Input
    ) async throws -> [Metric] {
        return [metric.scoring(1.0)]
    }
}
```

## Topics

### Associated Types

- [Input](evaluatorprotocol/input.md): The input sample type.
- [Subject](evaluatorprotocol/subject.md): The type of subject the system under test produces.

### Instance Methods

- [metrics(subject:input:)](evaluatorprotocol/metrics%28subject_input_%29.md): Computes metrics for the given subject, given the input sample.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [Evaluator](evaluator.md)
- [ModelJudgeEvaluator](modeljudgeevaluator.md)
- [ToolCallEvaluator](toolcallevaluator.md)

## See Also

### Scoring results

- [evaluators](evaluation/evaluators-swift.property.md): The evaluators to apply to each sample and its corresponding subject.
- [Evaluation.Evaluators](evaluation/evaluators-swift.typealias.md): The evaluator array type for this conformance.
- [EvaluatorsBuilder](evaluatorsbuilder.md): A result builder that enables declarative evaluator lists.
- [aggregateMetrics(using:)](evaluation/aggregatemetrics%28using_%29.md): Aggregates the collected metric results.
