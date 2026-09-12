> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifiermodel/evaluation(on:confidencethresholds:)](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifiermodel/evaluation(on:confidencethresholds:))

# evaluation(on:confidenceThresholds:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Computes evaluation metrics on annotated examples.

## Declaration

```swift
func evaluation(on input: some Collection<AnnotatedFeature<MLShapedArray<Scalar>, Set<Label>>>, confidenceThresholds: [Label : Float]) throws -> MultiLabelClassificationMetrics<Label>
```

## Parameters

- `input`: A collection of annotated examples.
- `confidenceThresholds`: A dictionary of label and confidence threshold pairs.

<a id="return-value"></a>

## Return Value

Multi-label classifier metrics.
