> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsupportvectorclassifier/modelparameters-swift.struct/validationdata-swift.enum](https://developer.apple.com/documentation/createml/mlsupportvectorclassifier/modelparameters-swift.struct/validationdata-swift.enum)

# MLSupportVectorClassifier.ModelParameters.ValidationData

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Values for specifying validation data.

## Declaration

```swift
enum ValidationData
```

## Topics

### Specifying validation data

- [MLSupportVectorClassifier.ModelParameters.ValidationData.split(strategy:)](validationdata-swift.enum/split%28strategy_%29.md): Deprecated. Generate validation data by splitting the training dataset. This is the default.
- [MLSupportVectorClassifier.ModelParameters.ValidationData.table(\_:)](validationdata-swift.enum/table%28__%29.md): Deprecated. Set validation data from the MLDataTable provided.
- [MLSupportVectorClassifier.ModelParameters.ValidationData.dataFrame(\_:)](validationdata-swift.enum/dataframe%28__%29.md): Deprecated. Validation data provided in a DataFrame.
- [MLSupportVectorClassifier.ModelParameters.ValidationData.none](validationdata-swift.enum/none.md): Deprecated. Do not set validation data.

## See Also

### Creating parameters

- [init(validation:maxIterations:penalty:convergenceThreshold:featureRescaling:)](init%28validation_maxiterations_penalty_convergencethreshold_featurerescaling_%29.md): Deprecated. Creates a new set of parameters.
- [init(validationData:maxIterations:penalty:convergenceThreshold:featureRescaling:)](init%28validationdata_maxiterations_penalty_convergencethreshold_featurerescaling_%29.md): Deprecated. Creates a new set of parameters.
