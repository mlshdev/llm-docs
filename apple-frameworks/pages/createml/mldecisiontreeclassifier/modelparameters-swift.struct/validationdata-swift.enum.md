> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeclassifier/modelparameters-swift.struct/validationdata-swift.enum](https://developer.apple.com/documentation/createml/mldecisiontreeclassifier/modelparameters-swift.struct/validationdata-swift.enum)

# MLDecisionTreeClassifier.ModelParameters.ValidationData

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

Values for specifying validation data.

## Declaration

```swift
enum ValidationData
```

## Topics

### Specifying validation data

- [MLDecisionTreeClassifier.ModelParameters.ValidationData.split(strategy:)](validationdata-swift.enum/split%28strategy_%29.md): Generate validation data by splitting the training dataset. This is the default.
- [MLDecisionTreeClassifier.ModelParameters.ValidationData.table(\_:)](validationdata-swift.enum/table%28__%29.md): Deprecated. Set validation data from the MLDataTable provided.
- [MLDecisionTreeClassifier.ModelParameters.ValidationData.dataFrame(\_:)](validationdata-swift.enum/dataframe%28__%29.md): Validation data provided in a DataFrame.
- [MLDecisionTreeClassifier.ModelParameters.ValidationData.none](validationdata-swift.enum/none.md): Do not set validation data.

## See Also

### Creating parameters

- [init(validation:maxDepth:minLossReduction:minChildWeight:randomSeed:)](init%28validation_maxdepth_minlossreduction_minchildweight_randomseed_%29.md)
- [init(validationData:maxDepth:minLossReduction:minChildWeight:randomSeed:)](init%28validationdata_maxdepth_minlossreduction_minchildweight_randomseed_%29.md): Deprecated. Creates a new set of parameters.
