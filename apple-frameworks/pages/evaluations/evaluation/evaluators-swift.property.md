> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluation/evaluators-swift.property](https://developer.apple.com/documentation/evaluations/evaluation/evaluators-swift.property)

# evaluators

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The evaluators to apply to each sample and its corresponding subject.

## Declaration

```swift
@EvaluatorsBuilder<Self.Sample, Self.Subject> var evaluators: Self.Evaluators { get }
```

## See Also

### Scoring results

- [Evaluation.Evaluators](evaluators-swift.typealias.md): The evaluator array type for this conformance.
- [EvaluatorProtocol](../evaluatorprotocol.md): A type that evaluates subjects and produces metrics.
- [EvaluatorsBuilder](../evaluatorsbuilder.md): A result builder that enables declarative evaluator lists.
- [aggregateMetrics(using:)](aggregatemetrics%28using_%29.md): Aggregates the collected metric results.
