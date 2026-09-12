> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluation/aggregatemetrics(using:)](https://developer.apple.com/documentation/evaluations/evaluation/aggregatemetrics(using:))

# aggregateMetrics(using:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Aggregates the collected metric results.

## Declaration

```swift
func aggregateMetrics(using aggregator: inout MetricsAggregator)
```

## Parameters

- `aggregator`: The aggregator for computing statistics.

## Mentioned In

- [Evaluating language model responses](../evaluating-language-model-responses.md)
- [Scoring with model-judge evaluators](../scoring-with-model-as-judge-evaluators.md)

## See Also

### Scoring results

- [evaluators](evaluators-swift.property.md): The evaluators to apply to each sample and its corresponding subject.
- [Evaluation.Evaluators](evaluators-swift.typealias.md): The evaluator array type for this conformance.
- [EvaluatorProtocol](../evaluatorprotocol.md): A type that evaluates subjects and produces metrics.
- [EvaluatorsBuilder](../evaluatorsbuilder.md): A result builder that enables declarative evaluator lists.
