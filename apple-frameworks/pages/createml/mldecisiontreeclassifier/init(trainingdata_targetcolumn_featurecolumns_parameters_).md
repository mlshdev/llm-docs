> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeclassifier/init(trainingdata:targetcolumn:featurecolumns:parameters:)](https://developer.apple.com/documentation/createml/mldecisiontreeclassifier/init(trainingdata:targetcolumn:featurecolumns:parameters:))

# init(trainingData:targetColumn:featureColumns:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a decision tree classifier.

## Declaration

```swift
init(trainingData: DataFrame, targetColumn: String, featureColumns: [String]? = nil, parameters: MLDecisionTreeClassifier.ModelParameters = ModelParameters(validation: .split(strategy: .automatic))) throws
```

## Parameters

- `trainingData`: The training data
- `targetColumn`: Name of the column containing the class labels
- `featureColumns`: Names of the columns containing feature values. If `nil` all columns, other than the target column, will be used as feature values.
- `parameters`: Model training parameters. See [MLDecisionTreeClassifier.ModelParameters](modelparameters-swift.struct.md) for the defaults.

## See Also

### Training a decision tree classifier asynchronously

- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [resume(\_:)](resume%28__%29.md): Resumes a training session from the last checkpoint if available.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Restores an existing training session.
