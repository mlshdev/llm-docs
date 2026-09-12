> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics/meanaverageprecisionscore(_:)](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/meanaverageprecisionscore(_:))

# meanAveragePrecisionScore(\_:)

**Framework:** Create ML Components  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Computes the mean average precision.

## Declaration

```swift
static func meanAveragePrecisionScore(_ pairs: some Sequence<(classification: ClassificationDistribution<Label>, labels: Set<Label>)>) -> Float
```

## Parameters

- `pairs`: A sequence of classifications and true label pairs.

<a id="return-value"></a>

## Return Value

The mean average precision.

<a id="discussion"></a>

## Discussion

An average precision score summarizes the precision-recall curve for a label. The mean average precision is the mean of the average precision scores for all the classification labels.

## See Also

### Computing the precision

- [meanAveragePrecisionScore(\_:labels:)](meanaverageprecisionscore%28__labels_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the mean average precision.
- [meanAveragePrecisionScore(classifications:groundTruth:)](meanaverageprecisionscore%28classifications_groundtruth_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the mean average precision.
- [meanAveragePrecisionScore(classifications:groundTruth:labels:)](meanaverageprecisionscore%28classifications_groundtruth_labels_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the mean average precision.
