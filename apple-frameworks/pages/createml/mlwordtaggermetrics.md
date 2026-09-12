> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtaggermetrics](https://developer.apple.com/documentation/createml/mlwordtaggermetrics)

# MLWordTaggerMetrics

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.14+

Metrics you use to evaluate a word tagger’s performance.

## Declaration

```swift
struct MLWordTaggerMetrics
```

## Mentioned In

- [Creating a word tagger model](creating-a-word-tagger-model.md)

## Topics

### Analyzing the tagger’s performance

- [taggingError](mlwordtaggermetrics/taggingerror.md): The fraction of incorrectly tagged examples.
- [precisionRecall](mlwordtaggermetrics/precisionrecall.md): Deprecated. A data table listing the precision and recall percentages for each category.
- [confusion](mlwordtaggermetrics/confusion.md): Deprecated. A table comparing the actual and predicted labels for each tagging category.

### Handling errors

- [isValid](mlwordtaggermetrics/isvalid.md): A Boolean value indicating whether the metrics were calculated.
- [error](mlwordtaggermetrics/error.md): The underlying error present when the metrics are invalid.

### Describing metrics

- [description](mlwordtaggermetrics/description.md): A text representation of the word tagger metrics.
- [debugDescription](mlwordtaggermetrics/debugdescription.md): A text representation of the word tagger metrics that’s suitable for output during debugging.
- [playgroundDescription](mlwordtaggermetrics/playgrounddescription.md): A description of the word tagger metrics shown in a playground.
- [confusionDataFrame](mlwordtaggermetrics/confusiondataframe.md): A data frame comparing the actual and predicted labels for each class.
- [precisionRecallDataFrame](mlwordtaggermetrics/precisionrecalldataframe.md): A data frame listing the precision and recall percentages for each class.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlwordtaggermetrics/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlwordtaggermetrics/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlwordtaggermetrics/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Model accuracy

- [Improving Your Model’s Accuracy](improving-your-model-s-accuracy.md): Use metrics to tune the performance of your machine learning model.
- [MLClassifierMetrics](mlclassifiermetrics.md): Metrics you use to evaluate a classifier’s performance.
- [MLRegressorMetrics](mlregressormetrics.md): Metrics you use to evaluate a regressor’s performance.
- [MLRecommenderMetrics](mlrecommendermetrics.md): Metrics you use to evaluate a recommender’s performance.
- [MLObjectDetectorMetrics](mlobjectdetectormetrics.md): Metrics you use to evaluate an object detector’s performance.
