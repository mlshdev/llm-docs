> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluation/evaluators-swift.typealias](https://developer.apple.com/documentation/evaluations/evaluation/evaluators-swift.typealias)

# Evaluation.Evaluators

**Framework:** Evaluations  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The evaluator array type for this conformance.

## Declaration

```swift
typealias Evaluators = [any EvaluatorProtocol<Self.Sample, Self.Subject>]
```

## See Also

### Scoring results

- [evaluators](evaluators-swift.property.md): The evaluators to apply to each sample and its corresponding subject.
- [EvaluatorProtocol](../evaluatorprotocol.md): A type that evaluates subjects and produces metrics.
- [EvaluatorsBuilder](../evaluatorsbuilder.md): A result builder that enables declarative evaluator lists.
- [aggregateMetrics(using:)](aggregatemetrics%28using_%29.md): Aggregates the collected metric results.
