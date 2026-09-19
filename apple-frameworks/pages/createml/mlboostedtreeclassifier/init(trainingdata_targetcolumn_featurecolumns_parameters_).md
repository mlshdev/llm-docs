> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlboostedtreeclassifier/init(trainingdata:targetcolumn:featurecolumns:parameters:)

# init(trainingData:targetColumn:featureColumns:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a boosted tree classifier.

## Declaration

```swift
init(trainingData: DataFrame, targetColumn: String, featureColumns: [String]? = nil, parameters: MLBoostedTreeClassifier.ModelParameters = ModelParameters(validation: .split(strategy: .automatic))) throws
```

## Parameters

- `trainingData`: The training data
- `targetColumn`: Name of the column containing the class labels
- `featureColumns`: Names of the columns containing feature values. If `nil` all columns, other than the target column, will be used as feature values.
- `parameters`: Model training parameters. See [MLBoostedTreeClassifier.ModelParameters](modelparameters-swift.struct.md) for the defaults.

## See Also

### Training a boosted tree classifier synchronously

- [targetColumn](targetcolumn.md): The name of the column you selected at initialization to define which categories the classifier predicts.
- [featureColumns](featurecolumns.md): The names of the columns you selected at initialization to train the classifier.
