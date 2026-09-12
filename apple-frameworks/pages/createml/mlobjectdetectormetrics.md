> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetectormetrics](https://developer.apple.com/documentation/createml/mlobjectdetectormetrics)

# MLObjectDetectorMetrics

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.15+

Metrics you use to evaluate an object detector’s performance.

## Declaration

```swift
struct MLObjectDetectorMetrics
```

<a id="overview"></a>

## Overview

An object detector generates intersection-over-union (IoU) metrics, which is a way to measure the similarity of two bounding boxes. The IoU metric is the overlapping area divided by the area of the union of the bounding boxes.

For example, two bounding boxes that overlap perfectly have an IoU of `1.0`, because their overlap is the same area as the union. Two bounding boxes that have no overlap have an IoU of `0.0`. Anything between `0.0` and `1.0` either means the two bounding boxes partially overlap or one box completely encases the other.

## Topics

### Creating metrics

- [init(averagePrecision:meanAveragePrecision:)](mlobjectdetectormetrics/init%28averageprecision_meanaverageprecision_%29.md): Creates metrics for an object detector given an average precision and a mean average precision.

### Assessing the model

- [averagePrecision](mlobjectdetectormetrics/averageprecision.md): Two dictionaries of average precisions at different thresholds.
- [meanAveragePrecision](mlobjectdetectormetrics/meanaverageprecision.md): Two mean-average precisions at different thresholds.

### Handling errors

- [isValid](mlobjectdetectormetrics/isvalid.md): A Boolean value indicating whether the object detector model was able to calculate metrics.
- [error](mlobjectdetectormetrics/error.md): The underlying error present when the metrics are invalid.

### Describing metrics

- [description](mlobjectdetectormetrics/description.md): A text representation of the object detector metrics.
- [debugDescription](mlobjectdetectormetrics/debugdescription.md): A text representation of the object detector metrics that’s suitable for output during debugging.
- [playgroundDescription](mlobjectdetectormetrics/playgrounddescription.md): A description of the object detector metrics shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlobjectdetectormetrics/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlobjectdetectormetrics/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlobjectdetectormetrics/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model accuracy

- [Improving Your Model’s Accuracy](improving-your-model-s-accuracy.md): Use metrics to tune the performance of your machine learning model.
- [MLClassifierMetrics](mlclassifiermetrics.md): Metrics you use to evaluate a classifier’s performance.
- [MLRegressorMetrics](mlregressormetrics.md): Metrics you use to evaluate a regressor’s performance.
- [MLWordTaggerMetrics](mlwordtaggermetrics.md): Metrics you use to evaluate a word tagger’s performance.
- [MLRecommenderMetrics](mlrecommendermetrics.md): Metrics you use to evaluate a recommender’s performance.
