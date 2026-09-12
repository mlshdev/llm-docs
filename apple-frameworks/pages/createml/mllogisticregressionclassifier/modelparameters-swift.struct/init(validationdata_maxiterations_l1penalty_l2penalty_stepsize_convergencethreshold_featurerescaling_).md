> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mllogisticregressionclassifier/modelparameters-swift.struct/init(validationdata:maxiterations:l1penalty:l2penalty:stepsize:convergencethreshold:featurerescaling:)](https://developer.apple.com/documentation/createml/mllogisticregressionclassifier/modelparameters-swift.struct/init(validationdata:maxiterations:l1penalty:l2penalty:stepsize:convergencethreshold:featurerescaling:))

# init(validationData:maxIterations:l1Penalty:l2Penalty:stepSize:convergenceThreshold:featureRescaling:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 10.15) · visionOS 1.0+

Creates a new set of parameters.

> Use the validation property instead.

## Declaration

```swift
init(validationData: MLDataTable?, maxIterations: Int = 10, l1Penalty: Double = 0, l2Penalty: Double = 0.01, stepSize: Double = 1.0, convergenceThreshold: Double = 0.01, featureRescaling: Bool = true)
```

## Parameters

- `validationData`: The dataset used to monitor how well the model is generalizing.

  The default value is `nil` which will use an automatically sampled validation set.
- `maxIterations`: The maximum number of passes through the data.

  The default value is 10.
- `l1Penalty`: Weight on the l1-regularizer. The l1Penalty zeros out small coefficients, indicating features that are not useful for the  model.

  The default value is 0 which prevents any values from being discarded.
- `l2Penalty`: Weight of the l2-regularizer. The larger the l2Penalty the less variance in the model.

  The default value is 0.01.
- `stepSize`: The adjustment size that should be made by the underlying solver. Values close to 1.0 take an aggressive step based off feedback from each training iteration.

  The default value is 1.0.
- `convergenceThreshold`: The threshold with which to determine if the model has converged. Consider reducing this value for higher training accuracy, but beware of overfitting.

  The default value is 0.01.
- `featureRescaling`: Determines if the features should be preprocessed to ensure all features are on the same scale.

  The default value is true.

## See Also

### Creating parameters

- [init(validation:maxIterations:l1Penalty:l2Penalty:stepSize:convergenceThreshold:featureRescaling:)](init%28validation_maxiterations_l1penalty_l2penalty_stepsize_convergencethreshold_featurerescaling_%29.md)
- [MLLogisticRegressionClassifier.ModelParameters.ValidationData](validationdata-swift.enum.md): Values for specifying validation data.
