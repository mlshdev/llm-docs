> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mllinearregressor/modelparameters-swift.struct/validationdata-swift.enum/dataframe(_:)](https://developer.apple.com/documentation/createml/mllinearregressor/modelparameters-swift.struct/validationdata-swift.enum/dataframe(_:))

# MLLinearRegressor.ModelParameters.ValidationData.dataFrame(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Set validation data from the DataFrame provided.

## Declaration

```swift
case dataFrame(DataFrame)
```

## See Also

### Specifying validation data

- [MLLinearRegressor.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): Generate validation data by splitting the training dataset. This is the default.
- [MLLinearRegressor.ModelParameters.ValidationData.table(\_:)](table%28__%29.md): Deprecated. Set validation data from the MLDataTable provided.
- [MLLinearRegressor.ModelParameters.ValidationData.none](none.md): Do not set validation data.
