> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlboostedtreeregressor/init(trainingdata:targetcolumn:featurecolumns:parameters:)](https://developer.apple.com/documentation/createml/mlboostedtreeregressor/init(trainingdata:targetcolumn:featurecolumns:parameters:))

# init(trainingData:targetColumn:featureColumns:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a boosted tree regressor.

## Declaration

```swift
init(trainingData: DataFrame, targetColumn: String, featureColumns: [String]? = nil, parameters: MLBoostedTreeRegressor.ModelParameters = ModelParameters(validation: .split(strategy: .automatic))) throws
```

## Parameters

- `trainingData`: The training data
- `targetColumn`: Name of the column containing the target values
- `featureColumns`: Names of the columns containing feature values. If `nil` all columns, other than the target column, will be used as feature values.
- `parameters`: Model training parameters. See [MLBoostedTreeRegressor.ModelParameters](modelparameters-swift.struct.md) for the defaults.

## See Also

### Training a boosted tree regressor synchronously

- [targetColumn](targetcolumn.md): The name of the column you selected at initialization to define which feature the regressor predicts.
- [featureColumns](featurecolumns.md): The names of the columns you selected at initialization to train the regressor.
