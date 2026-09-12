> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlclassifiermetrics/confusiondataframe](https://developer.apple.com/documentation/createml/mlclassifiermetrics/confusiondataframe)

# confusionDataFrame

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A data frame comparing the actual and predicted labels for each class.

## Declaration

```swift
var confusionDataFrame: DataFrame { get }
```

<a id="discussion"></a>

## Discussion

The confusion data frame describes how examples were mislabeled between categories. Each row contains the true label, the predicted label, and the number of instances of that combination. For example, the table below lists that “business” was labeled correctly with “business” 113 times, while “business” was confused with “entertainment” 2 times.

![A table showing the format of the confusion matrix containing rows for the true label the label predicted by](https://developer.apple.com/images/com.apple.createml/MLClassifierMetrics-confusion-1@2x.png)

## See Also

### Understanding the model

- [classificationError](classificationerror.md): The fraction of incorrectly labeled examples.
- [precisionRecall](precisionrecall.md): Deprecated. A data table listing the precision and recall percentages for each class.
- [confusion](confusion.md): Deprecated. A table comparing the actual and predicted labels for each classification category.
- [precisionRecallDataFrame](precisionrecalldataframe.md): A data frame listing the precision and recall percentages for each class.
