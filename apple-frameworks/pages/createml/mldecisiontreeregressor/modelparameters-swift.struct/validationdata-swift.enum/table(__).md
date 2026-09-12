> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeregressor/modelparameters-swift.struct/validationdata-swift.enum/table(_:)](https://developer.apple.com/documentation/createml/mldecisiontreeregressor/modelparameters-swift.struct/validationdata-swift.enum/table(_:))

# MLDecisionTreeRegressor.ModelParameters.ValidationData.table(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 16.0+ (deprecated in 17.0) · visionOS 1.0+

Set validation data from the MLDataTable provided.

## Declaration

```swift
case table(MLDataTable)
```

## See Also

### Specifying validation data

- [MLDecisionTreeRegressor.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): Generate validation data by splitting the training dataset. This is the default.
- [MLDecisionTreeRegressor.ModelParameters.ValidationData.dataFrame(\_:)](dataframe%28__%29.md): Set validation data from the DataFrame provided.
- [MLDecisionTreeRegressor.ModelParameters.ValidationData.none](none.md): Do not set validation data.
