> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlclassifiermetrics/precisionrecalldataframe](https://developer.apple.com/documentation/createml/mlclassifiermetrics/precisionrecalldataframe)

# precisionRecallDataFrame

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A data frame listing the precision and recall percentages for each class.

## Declaration

```swift
var precisionRecallDataFrame: DataFrame { get }
```

<a id="discussion"></a>

## Discussion

Precision and recall are metrics calculated for each class. Together they describe the tradeoff between misapplying a label too liberally and missing examples of that label.

Precision describes how effective the model was at applying a label only when appropriate for a given category (few false positives).

Recall describes how effective the model was at finding all the relevant examples of a category (few false negatives).

![](https://developer.apple.com/images/com.apple.createml/MLClassifierMetrics-precisionRecall-1@2x.png)

The figure below shows how each example contributes to the precision and recall percentages for the category “Elephant”.

![A table of actual and predicted labels for the Elephant category.](https://developer.apple.com/images/com.apple.createml/MLClassifierMetrics-precisionRecall-2@2x.png)

“Elephant” appears as the true or correct label only once, but it’s predicted twice. This second prediction is an error in precision. Precision and recall can give you a much better idea of how your model is making mistakes than [classificationError](classificationerror.md).

To determine what other categories “Elephant” examples may have been labeled with, see the [confusion](confusion.md) property.

## See Also

### Understanding the model

- [classificationError](classificationerror.md): The fraction of incorrectly labeled examples.
- [precisionRecall](precisionrecall.md): Deprecated. A data table listing the precision and recall percentages for each class.
- [confusion](confusion.md): Deprecated. A table comparing the actual and predicted labels for each classification category.
- [confusionDataFrame](confusiondataframe.md): A data frame comparing the actual and predicted labels for each class.
