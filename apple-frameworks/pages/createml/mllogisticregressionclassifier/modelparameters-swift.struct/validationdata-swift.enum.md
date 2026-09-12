> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mllogisticregressionclassifier/modelparameters-swift.struct/validationdata-swift.enum](https://developer.apple.com/documentation/createml/mllogisticregressionclassifier/modelparameters-swift.struct/validationdata-swift.enum)

# MLLogisticRegressionClassifier.ModelParameters.ValidationData

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

- [MLLogisticRegressionClassifier.ModelParameters.ValidationData.split(strategy:)](validationdata-swift.enum/split%28strategy_%29.md): Generate validation data by splitting the training dataset. This is the default.
- [MLLogisticRegressionClassifier.ModelParameters.ValidationData.table(\_:)](validationdata-swift.enum/table%28__%29.md): Deprecated. Set validation data from the MLDataTable provided.
- [MLLogisticRegressionClassifier.ModelParameters.ValidationData.dataFrame(\_:)](validationdata-swift.enum/dataframe%28__%29.md): Validation data provided in a DataFrame.
- [MLLogisticRegressionClassifier.ModelParameters.ValidationData.none](validationdata-swift.enum/none.md): Do not set validation data.

## See Also

### Creating parameters

- [init(validation:maxIterations:l1Penalty:l2Penalty:stepSize:convergenceThreshold:featureRescaling:)](init%28validation_maxiterations_l1penalty_l2penalty_stepsize_convergencethreshold_featurerescaling_%29.md)
- [init(validationData:maxIterations:l1Penalty:l2Penalty:stepSize:convergenceThreshold:featureRescaling:)](init%28validationdata_maxiterations_l1penalty_l2penalty_stepsize_convergencethreshold_featurerescaling_%29.md): Deprecated. Creates a new set of parameters.
