> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/modelparameters-swift.struct/validation-swift.enum/datasource(_:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/modelparameters-swift.struct/validation-swift.enum/datasource(_:))

# MLActivityClassifier.ModelParameters.Validation.dataSource(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 14.0+

A validation dataset represented by a data source.

## Declaration

```swift
case dataSource(MLActivityClassifier.DataSource)
```

## See Also

### Specifying validation data

- [MLActivityClassifier.ModelParameters.Validation.split(strategy:)](split%28strategy_%29.md): A validation dataset derived by randomly selecting a portion of the training data.
- [MLActivityClassifier.ModelParameters.Validation.none](none.md): An empty validation dataset that skips the model validation phase after training.
