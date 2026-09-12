> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifiermodel/prediction(from:confidencethresholds:)](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifiermodel/prediction(from:confidencethresholds:))

# prediction(from:confidenceThresholds:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Performs a prediction and keeps label-confidence pairs that are greater than or equal to the provided confidence thresholds.

## Declaration

```swift
func prediction(from input: FullyConnectedNetworkMultiLabelClassifierModel<Scalar, Label>.Input, confidenceThresholds: [Label : Scalar]) throws -> ClassificationDistribution<Label>
```

## Parameters

- `input`: The classifier input.
- `confidenceThresholds`: A dictionary of label and confidence threshold pairs.

<a id="return-value"></a>

## Return Value

A dictionary of labels and confidences.

<a id="discussion"></a>

## Discussion

When the confidence threshold is `NaN`, the label-confidence pair is not included in the result, regardless of the label’s confidence.
