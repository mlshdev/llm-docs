> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlregressor/evaluation(on:)](https://developer.apple.com/documentation/createml/mlregressor/evaluation(on:))

# evaluation(on:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Evaluates the classifier on the provided labeled data.

## Declaration

```swift
func evaluation(on labeledData: DataFrame) -> MLRegressorMetrics
```

## Parameters

- `labeledData`: A `DataFrame` to evaluate the trained model on.

<a id="return-value"></a>

## Return Value

Metrics that describe the maximum error ([maximumError](../mlregressormetrics/maximumerror.md)) or the average error ([rootMeanSquaredError](../mlregressormetrics/rootmeansquarederror.md)).

<a id="discussion"></a>

## Discussion

Evaluation should be done on a testing data set that the model has not seen as part of the training or validation data sets. The data should have feature columns with identical name and type to the training data, as well as a labels column with the same name.

## See Also

### Evaluating a regressor

- [trainingMetrics](trainingmetrics.md): Measurements of the regressor’s performance on the training data set.
- [validationMetrics](validationmetrics.md): Measurements of the regressor’s performance on the validation data set.
