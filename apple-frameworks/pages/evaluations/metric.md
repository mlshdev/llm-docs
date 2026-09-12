> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/metric](https://developer.apple.com/documentation/evaluations/metric)

# Metric

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A named metric that carries a result value.

## Declaration

```swift
struct Metric
```

## Mentioned In

- [Scoring with model-judge evaluators](scoring-with-model-as-judge-evaluators.md)
- [Evaluating language model responses](evaluating-language-model-responses.md)
- [Evaluating tool-calling behavior](evaluating-tool-calling-behavior.md)

<a id="overview"></a>

## Overview

Use `Metric` to define a named measurement. The factory methods (`passing`, `failing`, `scoring`, `ignore`) return a new `Metric` with the result stored inside.

Here’s how you create a custom metric:

```swift
let metric = Metric("Accuracy")
let result = metric.passing(rationale: "Exact match")
```

## Topics

### Creating a metric

- [init(\_:)](metric/init%28__%29.md): Creates a metric with just a name.

### Producing results

- [passing(rationale:)](metric/passing%28rationale_%29.md): Returns a metric with a passing result.
- [failing(rationale:)](metric/failing%28rationale_%29.md): Returns a metric with a failing result.
- [scoring(\_:rationale:)](metric/scoring%28__rationale_%29.md): Returns a metric with a numeric result.
- [ignore(rationale:)](metric/ignore%28rationale_%29.md): Returns a metric with an ignored result, excluded from aggregation.

### Inspecting a result

- [name](metric/name.md): The name of the metric, used as the DataFrame column name.
- [value](metric/value-swift.property.md): The result value of this metric.
- [doubleValue](metric/doublevalue.md): The numeric value of this metric.
- [rationale](metric/rationale.md): An optional rationale describing the result.
- [Metric.Value](metric/value-swift.enum.md): A metric result value.

### Type Properties

- [toolsAllPass](metric/toolsallpass.md): A convenience metric for the strict pass or fail result of a [ToolCallEvaluator](toolcallevaluator.md).
- [toolsPercentagePass](metric/toolspercentagepass.md): A convenience metric for the partial score result of a [ToolCallEvaluator](toolcallevaluator.md).

### Default Implementations

- [CustomStringConvertible Implementations](metric/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metrics and evaluators

- [Designing specific, measurable criteria in an evaluation suite](designing-evaluation-criteria.md): Define quality for your feature by choosing measurable criteria, scoring approaches, and ground-truth strategies.
- [Evaluator](evaluator.md): A closure-based evaluator.
- [MetricsAggregator](metricsaggregator.md): A utility for computing aggregate statistics from evaluation metrics.
