> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactionclassifier/modelparameters-swift.struct/validationdata/datasource(_:)

# MLActionClassifier.ModelParameters.ValidationData.dataSource(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+

A validation dataset represented by a data source.

## Declaration

```swift
case dataSource(MLActionClassifier.DataSource)
```

## See Also

### Designating validation data

- [MLActionClassifier.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): A validation dataset derived by randomly selecting a portion of the action classifier’s training dataset using the split strategy.
- [MLActionClassifier.ModelParameters.ValidationData.none](none.md): An empty validation dataset that skips the model validation phase after training.
