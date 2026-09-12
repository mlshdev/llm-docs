> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/modelparameters-swift.struct/validation-swift.enum/split(strategy:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/modelparameters-swift.struct/validation-swift.enum/split(strategy:))

# MLActivityClassifier.ModelParameters.Validation.split(strategy:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 14.0+

A validation dataset derived by randomly selecting a portion of the training data.

## Declaration

```swift
case split(strategy: MLSplitStrategy)
```

## See Also

### Specifying validation data

- [MLActivityClassifier.ModelParameters.Validation.dataSource(\_:)](datasource%28__%29.md): A validation dataset represented by a data source.
- [MLActivityClassifier.ModelParameters.Validation.none](none.md): An empty validation dataset that skips the model validation phase after training.
