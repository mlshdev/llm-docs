> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlclassifiermetrics](https://developer.apple.com/documentation/createml/mlclassifiermetrics)

# MLClassifierMetrics

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Metrics you use to evaluate a classifier’s performance.

## Declaration

```swift
struct MLClassifierMetrics
```

## Mentioned In

- [Creating a text classifier model](creating-a-text-classifier-model.md)
- [Creating an Image Classifier Model](creating-an-image-classifier-model.md)
- [Improving Your Model’s Accuracy](improving-your-model-s-accuracy.md)

<a id="overview"></a>

## Overview

Use [MLClassifierMetrics](mlclassifiermetrics.md) to evaluate your model’s ability to distinguish between different categories when it’s classifying data.

You can determine the model’s accuracy using the [classificationError](mlclassifiermetrics/classificationerror.md) metric. For information about how your model is mislabeling or missing a certain category, use the [precisionRecall](mlclassifiermetrics/precisionrecall.md) metric. To determine specific cases where your model is mistaking one label for another, use the [confusion](mlclassifiermetrics/confusion.md) property.

Accuracy can be a misleading metric if you use unbalanced data, which means the number of examples for some categories are much larger than others. Instead, use [precisionRecall](mlclassifiermetrics/precisionrecall.md) or [confusion](mlclassifiermetrics/confusion.md).

> **Note**

> Each trained model contains different metrics for its various data sets (training, validation, and testing). [Improving Your Model’s Accuracy](improving-your-model-s-accuracy.md) compares these metrics between different data sets.

## Topics

### Understanding the model

- [classificationError](mlclassifiermetrics/classificationerror.md): The fraction of incorrectly labeled examples.
- [precisionRecall](mlclassifiermetrics/precisionrecall.md): Deprecated. A data table listing the precision and recall percentages for each class.
- [confusion](mlclassifiermetrics/confusion.md): Deprecated. A table comparing the actual and predicted labels for each classification category.
- [confusionDataFrame](mlclassifiermetrics/confusiondataframe.md): A data frame comparing the actual and predicted labels for each class.
- [precisionRecallDataFrame](mlclassifiermetrics/precisionrecalldataframe.md): A data frame listing the precision and recall percentages for each class.

### Handling errors

- [isValid](mlclassifiermetrics/isvalid.md): A Boolean value indicating whether the classifier model was able to calculate metrics.
- [error](mlclassifiermetrics/error.md): The underlying error present when the metrics are invalid.

### Creating metrics

- [init(classificationError:confusion:precisionRecall:)](mlclassifiermetrics/init%28classificationerror_confusion_precisionrecall_%29.md): Deprecated. Creates empty classifier metrics.

### Describing metrics

- [description](mlclassifiermetrics/description.md): A text representation of the classifier metrics.
- [debugDescription](mlclassifiermetrics/debugdescription.md): A text representation of the classifier metrics that’s suitable for output during debugging.
- [playgroundDescription](mlclassifiermetrics/playgrounddescription.md): A description of the classifier metrics shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlclassifiermetrics/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlclassifiermetrics/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlclassifiermetrics/customstringconvertible-implementations.md)

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
- [MLRegressorMetrics](mlregressormetrics.md): Metrics you use to evaluate a regressor’s performance.
- [MLWordTaggerMetrics](mlwordtaggermetrics.md): Metrics you use to evaluate a word tagger’s performance.
- [MLRecommenderMetrics](mlrecommendermetrics.md): Metrics you use to evaluate a recommender’s performance.
- [MLObjectDetectorMetrics](mlobjectdetectormetrics.md): Metrics you use to evaluate an object detector’s performance.
