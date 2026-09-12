> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeregressor/modelparameters-swift.struct/validationdata-swift.enum/split(strategy:)](https://developer.apple.com/documentation/createml/mldecisiontreeregressor/modelparameters-swift.struct/validationdata-swift.enum/split(strategy:))

# MLDecisionTreeRegressor.ModelParameters.ValidationData.split(strategy:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Generate validation data by splitting the training dataset. This is the default.

## Declaration

```swift
case split(strategy: MLSplitStrategy)
```

## See Also

### Specifying validation data

- [MLDecisionTreeRegressor.ModelParameters.ValidationData.table(\_:)](table%28__%29.md): Deprecated. Set validation data from the MLDataTable provided.
- [MLDecisionTreeRegressor.ModelParameters.ValidationData.dataFrame(\_:)](dataframe%28__%29.md): Set validation data from the DataFrame provided.
- [MLDecisionTreeRegressor.ModelParameters.ValidationData.none](none.md): Do not set validation data.
