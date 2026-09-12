> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeclassifier/train(trainingdata:targetcolumn:featurecolumns:parameters:sessionparameters:)](https://developer.apple.com/documentation/createml/mldecisiontreeclassifier/train(trainingdata:targetcolumn:featurecolumns:parameters:sessionparameters:))

# train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Trains a decision tree classifier.

## Declaration

```swift
static func train(trainingData: DataFrame, targetColumn: String, featureColumns: [String]? = nil, parameters: MLDecisionTreeClassifier.ModelParameters = ModelParameters(), sessionParameters: MLTrainingSessionParameters = _defaultSessionParameters) throws -> MLJob<MLDecisionTreeClassifier>
```

## Parameters

- `trainingData`: A `DataFrame` specifying training data.
- `targetColumn`: A String specifying the target column name in the trainingData
- `featureColumns`: An optional list of Strings specifying feature columns to be used to predict the target, if not provided, default to use all the other columns in the trainingData, except the one specified by targetColumn
- `parameters`: Model training parameters. See [MLDecisionTreeClassifier.ModelParameters](modelparameters-swift.struct.md) for the defaults.
- `sessionParameters`: Training session parameters. See [MLTrainingSessionParameters](../mltrainingsessionparameters.md) for the defaults.

<a id="return-value"></a>

## Return Value

A `MLJob` that can be used to observe training progress.

<a id="discussion"></a>

## Discussion

If `sessionDirectory` is provided it will save training progress. If there is progress already saved training will resume from the last checkpoint.

## See Also

### Training a decision tree classifier synchronously

- [targetColumn](targetcolumn.md): The name of the column you selected at initialization to define which categories the classifier predicts.
- [featureColumns](featurecolumns.md): The names of the columns you selected at initialization to train the classifier.
