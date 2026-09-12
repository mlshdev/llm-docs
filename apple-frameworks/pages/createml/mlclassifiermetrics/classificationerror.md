> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlclassifiermetrics/classificationerror](https://developer.apple.com/documentation/createml/mlclassifiermetrics/classificationerror)

# classificationError

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The fraction of incorrectly labeled examples.

## Declaration

```swift
var classificationError: Double { get }
```

## Mentioned In

- [Creating a text classifier model](../creating-a-text-classifier-model.md)
- [Improving Your Model’s Accuracy](../improving-your-model-s-accuracy.md)

<a id="discussion"></a>

## Discussion

The classification error describes how many examples were incorrectly labeled divided by the total number of examples. Accuracy as a percentage may be more intuitive. You can calculate it as follows:

```swift
let accuracy = (1 - metrics.classificationError) * 100
```

> **Important**

> This is a useful metric only when the data is well-balanced between categories. For example, suppose you build a classifier to detect a rare disease with very few examples of sick patients compared to the number of healthy patients. Predicting that a new patient will always be healthy would be highly accurate (low classification error), but a poor disease detector. The [precisionRecall](precisionrecall.md) and [confusion](confusion.md) properties provide more detail in these cases.

## See Also

### Understanding the model

- [precisionRecall](precisionrecall.md): Deprecated. A data table listing the precision and recall percentages for each class.
- [confusion](confusion.md): Deprecated. A table comparing the actual and predicted labels for each classification category.
- [confusionDataFrame](confusiondataframe.md): A data frame comparing the actual and predicted labels for each class.
- [precisionRecallDataFrame](precisionrecalldataframe.md): A data frame listing the precision and recall percentages for each class.
