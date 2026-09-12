> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsupportvectorclassifier/init(trainingdata:targetcolumn:featurecolumns:parameters:)](https://developer.apple.com/documentation/createml/mlsupportvectorclassifier/init(trainingdata:targetcolumn:featurecolumns:parameters:))

# init(trainingData:targetColumn:featureColumns:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 12.0+ (deprecated in 14.0)

Creates a support vector classifier.

## Declaration

```swift
init(trainingData: DataFrame, targetColumn: String, featureColumns: [String]? = nil, parameters: MLSupportVectorClassifier.ModelParameters = ModelParameters(validation: .split(strategy: .automatic))) throws
```

## Parameters

- `trainingData`: The training data
- `targetColumn`: Name of the column containing the class labels
- `featureColumns`: Names of the columns containing feature values. If `nil` all columns, other than the target column, will be used as feature values.
- `parameters`: Model training parameters

## See Also

### Creating and training a support vector classifier

- [MLSupportVectorClassifier.ModelParameters](modelparameters-swift.struct.md): Deprecated. Parameters that affect the process of training a model.
- [modelParameters](modelparameters-swift.property.md): Deprecated. The underlying parameters used when training the model.
- [targetColumn](targetcolumn.md): Deprecated. The name of the column you selected at initialization to define which categories the classifier predicts.
- [featureColumns](featurecolumns.md): Deprecated. The names of the columns you selected at initialization to train the classifier.
