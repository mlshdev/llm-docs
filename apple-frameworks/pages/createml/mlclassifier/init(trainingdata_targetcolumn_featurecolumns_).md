> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlclassifier/init(trainingdata:targetcolumn:featurecolumns:)](https://developer.apple.com/documentation/createml/mlclassifier/init(trainingdata:targetcolumn:featurecolumns:))

# init(trainingData:targetColumn:featureColumns:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a classifier.

## Declaration

```swift
init(trainingData: DataFrame, targetColumn: String, featureColumns: [String]? = nil) throws
```

## Parameters

- `trainingData`: The training data
- `targetColumn`: Name of the column containing the class labels
- `featureColumns`: Names of the columns containing feature values. If `nil` all columns, other than the target column, will be used as feature values.

## See Also

### Creating and training a classifier

- [targetColumn](targetcolumn.md): The name of the column you selected at initialization to define which categories the classifier predicts.
- [featureColumns](featurecolumns.md): The names of the columns you selected at initialization to train the classifier.
