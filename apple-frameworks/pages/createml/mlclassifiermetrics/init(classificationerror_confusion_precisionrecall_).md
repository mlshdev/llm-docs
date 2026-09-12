> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlclassifiermetrics/init(classificationerror:confusion:precisionrecall:)](https://developer.apple.com/documentation/createml/mlclassifiermetrics/init(classificationerror:confusion:precisionrecall:))

# init(classificationError:confusion:precisionRecall:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 16.0+ (deprecated in 17.0) · visionOS 1.0+

Creates empty classifier metrics.

## Declaration

```swift
init(classificationError: Double, confusion: MLDataTable, precisionRecall: MLDataTable)
```

## Parameters

- `classificationError`: The fraction of incorrectly labeled examples.
- `confusion`: A confusion matrix describing the classifications for each category.
- `precisionRecall`: A two-dimensional table describing the precision and recall for each category.

<a id="discussion"></a>

## Discussion

You typically don’t initialize metrics directly. Instead you get metrics about your model after training. For example, when you train an [MLClassifier](../mlclassifier.md), you can look at its [trainingMetrics](../mlclassifier/trainingmetrics.md) and [validationMetrics](../mlclassifier/validationmetrics.md) properties. Additionally, you can check the performance on a test set with the [evaluation(on:)](https://developer.apple.com/documentation/createml/mlclassifier/evaluation%28on:%29-6433y) method.

> **Warning**

> This initializer should not be used, it creates an empty instance.
