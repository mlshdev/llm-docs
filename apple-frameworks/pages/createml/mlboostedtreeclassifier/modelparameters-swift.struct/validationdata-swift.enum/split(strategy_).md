> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlboostedtreeclassifier/modelparameters-swift.struct/validationdata-swift.enum/split(strategy:)](https://developer.apple.com/documentation/createml/mlboostedtreeclassifier/modelparameters-swift.struct/validationdata-swift.enum/split(strategy:))

# MLBoostedTreeClassifier.ModelParameters.ValidationData.split(strategy:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

Generate validation data by splitting the training dataset. This is the default.

## Declaration

```swift
case split(strategy: MLSplitStrategy)
```

## See Also

### Specifying validation data

- [MLBoostedTreeClassifier.ModelParameters.ValidationData.table(\_:)](table%28__%29.md): Deprecated. Set validation data from the MLDataTable provided.
- [MLBoostedTreeClassifier.ModelParameters.ValidationData.dataFrame(\_:)](dataframe%28__%29.md): Validation data provided in a DataFrame.
- [MLBoostedTreeClassifier.ModelParameters.ValidationData.none](none.md): Do not set validation data.
