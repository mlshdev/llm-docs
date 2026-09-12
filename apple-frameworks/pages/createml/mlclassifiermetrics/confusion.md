> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlclassifiermetrics/confusion](https://developer.apple.com/documentation/createml/mlclassifiermetrics/confusion)

# confusion

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 16.0+ (deprecated in 17.0) · visionOS 1.0+

A table comparing the actual and predicted labels for each classification category.

## Declaration

```swift
var confusion: MLDataTable { get }
```

## Mentioned In

- [Improving Your Model’s Accuracy](../improving-your-model-s-accuracy.md)

<a id="discussion"></a>

## Discussion

The confusion data table describes how examples were mislabeled between categories. Each row contains the true label, the predicted label, and the count for each possible combination of categories. For example, the table below lists that “business” was labeled correctly with “business” 113 times, while “business” was confused with “entertainment” 2 times.

![A table showing the format of the confusion table containing rows for the true label the label predicted by](https://developer.apple.com/images/com.apple.createml/MLClassifierMetrics-confusion-1@2x.png)

To gain insight into the performance of your model, you can use this data table to determine what categories your model is most confused about (making the most mistakes on) for a given data set. For example, the code listing below shows how to find the mistake that happens most frequently.

```swift
let confusion = model.validationMetrics.confusion

// Filter for rows which contain mistakes.
let errors = confusion[confusion["True Label"] != confusion["Predicted"]]
let mostCommonError = errors.rows.max { row1, row2 in
    row1["Count", Int.self]! < row2["Count", Int.self]!
}
print(mostCommonError ?? "The confusion table is empty.")
// ["Predicted": "tech", "True Label": "business", "Count": 9]
```

Another useful view into this data is to compare the actual and predicated labels using a matrix. Printing the [MLClassifierMetrics](../mlclassifiermetrics.md) directly displays the matrix format.

```swift
print(model.validationMetrics)
// ...
// ******CONFUSION MATRIX******
// ----------------------------------
// True\Pred business entertainment politics sport tech
// business 113 2 3 0 9
// entertainment 1 183 3 2 3
// politics 6 8 116 0 3
// sport 0 6 1 135 3
// tech 2 7 3 0 129
// ...
```

In this example, the upper left hand count shows that 113 business examples were correctly labeled as “business”. The second column shows that “entertainment” was predicted for 2 “business” examples. The second row shows that 1 “entertainment” example was mislabeled as “business”.

## See Also

### Understanding the model

- [classificationError](classificationerror.md): The fraction of incorrectly labeled examples.
- [precisionRecall](precisionrecall.md): Deprecated. A data table listing the precision and recall percentages for each class.
- [confusionDataFrame](confusiondataframe.md): A data frame comparing the actual and predicted labels for each class.
- [precisionRecallDataFrame](precisionrecalldataframe.md): A data frame listing the precision and recall percentages for each class.
