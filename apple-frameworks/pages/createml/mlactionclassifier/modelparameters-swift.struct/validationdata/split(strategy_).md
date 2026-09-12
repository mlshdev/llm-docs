> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/modelparameters-swift.struct/validationdata/split(strategy:)](https://developer.apple.com/documentation/createml/mlactionclassifier/modelparameters-swift.struct/validationdata/split(strategy:))

# MLActionClassifier.ModelParameters.ValidationData.split(strategy:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+

A validation dataset derived by randomly selecting a portion of the action classifier’s training dataset using the split strategy.

## Declaration

```swift
case split(strategy: MLSplitStrategy)
```

## See Also

### Designating validation data

- [MLActionClassifier.ModelParameters.ValidationData.dataSource(\_:)](datasource%28__%29.md): A validation dataset represented by a data source.
- [MLActionClassifier.ModelParameters.ValidationData.none](none.md): An empty validation dataset that skips the model validation phase after training.
