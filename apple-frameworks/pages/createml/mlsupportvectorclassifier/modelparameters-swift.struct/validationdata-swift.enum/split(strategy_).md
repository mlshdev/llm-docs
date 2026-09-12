> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsupportvectorclassifier/modelparameters-swift.struct/validationdata-swift.enum/split(strategy:)](https://developer.apple.com/documentation/createml/mlsupportvectorclassifier/modelparameters-swift.struct/validationdata-swift.enum/split(strategy:))

# MLSupportVectorClassifier.ModelParameters.ValidationData.split(strategy:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Generate validation data by splitting the training dataset. This is the default.

## Declaration

```swift
case split(strategy: MLSplitStrategy)
```

## See Also

### Specifying validation data

- [MLSupportVectorClassifier.ModelParameters.ValidationData.table(\_:)](table%28__%29.md): Deprecated. Set validation data from the MLDataTable provided.
- [MLSupportVectorClassifier.ModelParameters.ValidationData.dataFrame(\_:)](dataframe%28__%29.md): Deprecated. Validation data provided in a DataFrame.
- [MLSupportVectorClassifier.ModelParameters.ValidationData.none](none.md): Deprecated. Do not set validation data.
