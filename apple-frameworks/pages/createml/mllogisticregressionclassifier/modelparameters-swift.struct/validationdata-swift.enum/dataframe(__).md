> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mllogisticregressionclassifier/modelparameters-swift.struct/validationdata-swift.enum/dataframe(_:)](https://developer.apple.com/documentation/createml/mllogisticregressionclassifier/modelparameters-swift.struct/validationdata-swift.enum/dataframe(_:))

# MLLogisticRegressionClassifier.ModelParameters.ValidationData.dataFrame(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Validation data provided in a DataFrame.

## Declaration

```swift
case dataFrame(DataFrame)
```

## See Also

### Specifying validation data

- [MLLogisticRegressionClassifier.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): Generate validation data by splitting the training dataset. This is the default.
- [MLLogisticRegressionClassifier.ModelParameters.ValidationData.table(\_:)](table%28__%29.md): Deprecated. Set validation data from the MLDataTable provided.
- [MLLogisticRegressionClassifier.ModelParameters.ValidationData.none](none.md): Do not set validation data.
