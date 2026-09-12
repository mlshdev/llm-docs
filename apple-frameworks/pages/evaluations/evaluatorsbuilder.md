> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluatorsbuilder](https://developer.apple.com/documentation/evaluations/evaluatorsbuilder)

# EvaluatorsBuilder

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A result builder that enables declarative evaluator lists.

## Declaration

```swift
@resultBuilder struct EvaluatorsBuilder<Sample, Subject> where Sample : SampleProtocol, Subject : EvaluationSubject
```

<a id="overview"></a>

## Overview

Apply this builder to the `evaluators` property to remove the need for explicit array literals and type annotations:

```swift
@EvaluatorsBuilder<ModelSample<String>, ModelSubject<String>>
func buildEvaluators() -> [any EvaluatorProtocol<ModelSample<String>, ModelSubject<String>>] {
    Evaluator<ModelSample<String>> { sample, subject in
        Metric("Match").scoring(1.0)
    }
}
```

## Topics

### Type Methods

- [buildExpression(\_:)](evaluatorsbuilder/buildexpression%28__%29.md): Wraps a single evaluator expression into the builder pipeline.
- [buildOptional(\_:)](evaluatorsbuilder/buildoptional%28__%29.md): Provides an empty array when an optional evaluator block is absent.
- [buildPartialBlock(accumulated:next:)](evaluatorsbuilder/buildpartialblock%28accumulated_next_%29-7lvjo.md)
- [buildPartialBlock(accumulated:next:)](evaluatorsbuilder/buildpartialblock%28accumulated_next_%29-88zf9.md)
- [buildPartialBlock(first:)](evaluatorsbuilder/buildpartialblock%28first_%29-3o70b.md)
- [buildPartialBlock(first:)](evaluatorsbuilder/buildpartialblock%28first_%29-875f9.md)

## See Also

### Scoring results

- [evaluators](evaluation/evaluators-swift.property.md): The evaluators to apply to each sample and its corresponding subject.
- [Evaluation.Evaluators](evaluation/evaluators-swift.typealias.md): The evaluator array type for this conformance.
- [EvaluatorProtocol](evaluatorprotocol.md): A type that evaluates subjects and produces metrics.
- [aggregateMetrics(using:)](evaluation/aggregatemetrics%28using_%29.md): Aggregates the collected metric results.
