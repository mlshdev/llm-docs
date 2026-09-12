> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlregressor/init(trainingdata:targetcolumn:featurecolumns:)](https://developer.apple.com/documentation/createml/mlregressor/init(trainingdata:targetcolumn:featurecolumns:))

# init(trainingData:targetColumn:featureColumns:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a regressor.

## Declaration

```swift
init(trainingData: DataFrame, targetColumn: String, featureColumns: [String]? = nil) throws
```

## Parameters

- `trainingData`: The training data
- `targetColumn`: Name of the column containing the target values
- `featureColumns`: Names of the columns containing feature values. If `nil` all columns, other than the target column, will be used as feature values.

## See Also

### Creating and training a regressor

- [targetColumn](targetcolumn.md): The name of the column you selected at initialization to define which feature the regressor predicts.
- [featureColumns](featurecolumns.md): The names of the columns you selected at initialization to train the regressor.
