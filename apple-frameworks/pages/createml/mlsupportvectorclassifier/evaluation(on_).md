> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsupportvectorclassifier/evaluation(on:)](https://developer.apple.com/documentation/createml/mlsupportvectorclassifier/evaluation(on:))

# evaluation(on:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 12.0+ (deprecated in 14.0)

Evaluates the classifier on the provided labeled data.

## Declaration

```swift
func evaluation(on labeledData: DataFrame) -> MLClassifierMetrics
```

## Parameters

- `labeledData`: A `DataFrame` to evaluate the trained model on.

<a id="return-value"></a>

## Return Value

Metrics that describe the classification errors ([classificationError](../mlclassifiermetrics/classificationerror.md)), the precision and recall percentages ([precisionRecall](../mlclassifiermetrics/precisionrecall.md)), and a table that describes how labels were misapplied ([confusion](../mlclassifiermetrics/confusion.md)) on the provided data.

<a id="discussion"></a>

## Discussion

Evaluation should be done on a testing data set that the model has not seen as part of the training or validation data sets. The data should have feature columns with identical name and type to the training data, as well as a labels column with the same name.

## See Also

### Evaluating a support vector classifier

- [trainingMetrics](trainingmetrics.md): Deprecated. Measurements of the classifier’s performance on the training data set.
- [validationMetrics](validationmetrics.md): Deprecated. Measurements of the classifier’s performance on the validation data set.
