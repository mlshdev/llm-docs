> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlregressormetrics](https://developer.apple.com/documentation/createml/mlregressormetrics)

# MLRegressorMetrics

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Metrics you use to evaluate a regressor’s performance.

## Declaration

```swift
struct MLRegressorMetrics
```

## Mentioned In

- [Improving Your Model’s Accuracy](improving-your-model-s-accuracy.md)

<a id="overview"></a>

## Overview

To understand what performance you can expect from the regressor, you start by looking at its [maximumError](mlregressormetrics/maximumerror.md). This high-level metric indicates your model’s worst-case performance. To get a sense for how your model performs on average, look at the [rootMeanSquaredError](mlregressormetrics/rootmeansquarederror.md). In both cases, you want to minimize the value and therefore the error.

> **Note**

> Each trained model contains different metrics for its various data sets (training, validation, and testing). [Improving Your Model’s Accuracy](improving-your-model-s-accuracy.md) compares these metrics among different data sets.

## Topics

### Understanding the model

- [maximumError](mlregressormetrics/maximumerror.md): The largest absolute difference between the expected values and the model’s predicted values during testing or training.
- [rootMeanSquaredError](mlregressormetrics/rootmeansquarederror.md): A common metric used to determine the deviation between correct and predicted values.

### Handling errors

- [isValid](mlregressormetrics/isvalid.md): A Boolean value indicating whether the regressor model was able to calculate metrics.
- [error](mlregressormetrics/error.md): The underlying error present when the metrics are invalid.

### Creating metrics

- [init(maximumError:rootMeanSquaredError:)](mlregressormetrics/init%28maximumerror_rootmeansquarederror_%29.md): Creates regressor metrics describing the quality of your model.

### Describing metrics

- [description](mlregressormetrics/description.md): A text representation of the regressor metrics.
- [debugDescription](mlregressormetrics/debugdescription.md): A text representation of the regressor metrics that’s suitable for output during debugging.
- [playgroundDescription](mlregressormetrics/playgrounddescription.md): A description of the regressor metrics shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlregressormetrics/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlregressormetrics/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlregressormetrics/customstringconvertible-implementations.md)

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
- [MLWordTaggerMetrics](mlwordtaggermetrics.md): Metrics you use to evaluate a word tagger’s performance.
- [MLRecommenderMetrics](mlrecommendermetrics.md): Metrics you use to evaluate a recommender’s performance.
- [MLObjectDetectorMetrics](mlobjectdetectormetrics.md): Metrics you use to evaluate an object detector’s performance.
