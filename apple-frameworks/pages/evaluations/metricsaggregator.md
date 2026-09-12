> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/metricsaggregator](https://developer.apple.com/documentation/evaluations/metricsaggregator)

# MetricsAggregator

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A utility for computing aggregate statistics from evaluation metrics.

## Declaration

```swift
struct MetricsAggregator
```

## Mentioned In

- [Designing effective evaluations](designing-effective-evaluations.md)
- [Scoring with model-judge evaluators](scoring-with-model-as-judge-evaluators.md)

<a id="overview"></a>

## Overview

```swift
let accuracy = Metric("Accuracy")

func aggregateMetrics(using aggregator: inout MetricsAggregator) {
    aggregator.computeMean(of: accuracy)
    aggregator.computeMaximum(of: accuracy)
    aggregator.computeStandardDeviation(of: accuracy)
}
```

Use this structure to calculate summary statistics like mean, median, and standard deviation from your evaluation results. The aggregator processes metric data from a DataFrame and produces aggregated results.

## Topics

### Computing standard aggregations

- [computeMean(of:)](metricsaggregator/computemean%28of_%29.md): Computes the mean of a metric and adds it to the aggregated results.
- [computeMedian(of:)](metricsaggregator/computemedian%28of_%29.md): Computes the median of a metric and adds it to the aggregated results.
- [computeMode(of:)](metricsaggregator/computemode%28of_%29.md): Computes the mode of a metric and adds it to the aggregated results.
- [computeMinimum(of:)](metricsaggregator/computeminimum%28of_%29.md): Computes the minimum value of a metric and adds it to the aggregated results.
- [computeMaximum(of:)](metricsaggregator/computemaximum%28of_%29.md): Computes the maximum value of a metric and adds it to the aggregated results.

### Computing variability

- [computeStandardDeviation(of:)](metricsaggregator/computestandarddeviation%28of_%29.md): Computes the standard deviation of a metric and adds it to the aggregated results.
- [computeVariance(of:)](metricsaggregator/computevariance%28of_%29.md): Computes the variance of a metric and adds it to the aggregated results.

### Computing custom aggregations

- [custom(of:label:\_:)](metricsaggregator/custom%28of_label___%29.md): Computes a custom aggregation from a single metric’s results.

### Grouping metrics

- [group(\_:\_:)](metricsaggregator/group%28____%29.md): Creates a group of related metrics.
- [MetricsAggregator.Group](metricsaggregator/group.md): A grouped collection of related metrics.

### Inspecting aggregate results

- [AggregateMetric](aggregatemetric.md): An aggregate statistic computed from a metric’s results across the evaluation dataset.
- [AggregationOperation](aggregationoperation.md): The type of aggregation operation used to compute a summary statistic.

## See Also

### Metrics and evaluators

- [Designing specific, measurable criteria in an evaluation suite](designing-evaluation-criteria.md): Define quality for your feature by choosing measurable criteria, scoring approaches, and ground-truth strategies.
- [Metric](metric.md): A named metric that carries a result value.
- [Evaluator](evaluator.md): A closure-based evaluator.
