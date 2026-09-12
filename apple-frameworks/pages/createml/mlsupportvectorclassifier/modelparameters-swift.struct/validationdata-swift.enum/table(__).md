> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsupportvectorclassifier/modelparameters-swift.struct/validationdata-swift.enum/table(_:)](https://developer.apple.com/documentation/createml/mlsupportvectorclassifier/modelparameters-swift.struct/validationdata-swift.enum/table(_:))

# MLSupportVectorClassifier.ModelParameters.ValidationData.table(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Set validation data from the MLDataTable provided.

## Declaration

```swift
case table(MLDataTable)
```

## See Also

### Specifying validation data

- [MLSupportVectorClassifier.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): Deprecated. Generate validation data by splitting the training dataset. This is the default.
- [MLSupportVectorClassifier.ModelParameters.ValidationData.dataFrame(\_:)](dataframe%28__%29.md): Deprecated. Validation data provided in a DataFrame.
- [MLSupportVectorClassifier.ModelParameters.ValidationData.none](none.md): Deprecated. Do not set validation data.
