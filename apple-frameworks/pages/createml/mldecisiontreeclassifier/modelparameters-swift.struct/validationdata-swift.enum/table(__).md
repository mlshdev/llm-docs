> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeclassifier/modelparameters-swift.struct/validationdata-swift.enum/table(_:)](https://developer.apple.com/documentation/createml/mldecisiontreeclassifier/modelparameters-swift.struct/validationdata-swift.enum/table(_:))

# MLDecisionTreeClassifier.ModelParameters.ValidationData.table(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 10.15+ (deprecated in 14.0) · tvOS 16.0+ (deprecated in 17.0) · visionOS 1.0+

Set validation data from the MLDataTable provided.

## Declaration

```swift
case table(MLDataTable)
```

## See Also

### Specifying validation data

- [MLDecisionTreeClassifier.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): Generate validation data by splitting the training dataset. This is the default.
- [MLDecisionTreeClassifier.ModelParameters.ValidationData.dataFrame(\_:)](dataframe%28__%29.md): Validation data provided in a DataFrame.
- [MLDecisionTreeClassifier.ModelParameters.ValidationData.none](none.md): Do not set validation data.
