> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics/meanaverageprecision](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/meanaverageprecision)

# meanAveragePrecision

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

The mean average precision.

## Declaration

```swift
var meanAveragePrecision: Float { get }
```

<a id="discussion"></a>

## Discussion

An average precision score summarizes the precision-recall curve for a label. The mean average precision is the mean of the average precision scores for all the classification labels.

## See Also

### Getting the properties

- [confidenceThresholds](confidencethresholds.md): A dictionary of label and confidence thresholds.
- [exampleCount](examplecount.md): The number of examples used to compute the metrics.
- [labels](labels.md): The classifier labels.
