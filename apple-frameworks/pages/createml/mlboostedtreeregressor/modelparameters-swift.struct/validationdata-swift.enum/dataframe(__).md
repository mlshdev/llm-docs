> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlboostedtreeregressor/modelparameters-swift.struct/validationdata-swift.enum/dataframe(_:)

# MLBoostedTreeRegressor.ModelParameters.ValidationData.dataFrame(\_:)

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

- [MLBoostedTreeRegressor.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): Generate validation data by splitting the training dataset. This is the default.
- [MLBoostedTreeRegressor.ModelParameters.ValidationData.table(\_:)](table%28__%29.md): Deprecated. Set validation data from the MLDataTable provided.
- [MLBoostedTreeRegressor.ModelParameters.ValidationData.none](none.md): Do not set validation data.
