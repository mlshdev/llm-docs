> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mllinearregressor/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mllinearregressor/modelparameters-swift.struct)

# MLLinearRegressor.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Parameters that affect the process of training a model.

## Declaration

```swift
struct ModelParameters
```

## Topics

### Creating parameters

- [init(validation:maxIterations:l1Penalty:l2Penalty:stepSize:convergenceThreshold:featureRescaling:)](modelparameters-swift.struct/init%28validation_maxiterations_l1penalty_l2penalty_stepsize_convergencethreshold_featurerescaling_%29.md)
- [init(validationData:maxIterations:l1Penalty:l2Penalty:stepSize:convergenceThreshold:featureRescaling:)](modelparameters-swift.struct/init%28validationdata_maxiterations_l1penalty_l2penalty_stepsize_convergencethreshold_featurerescaling_%29.md): Deprecated. Creates a new set of parameters.
- [MLLinearRegressor.ModelParameters.ValidationData](modelparameters-swift.struct/validationdata-swift.enum.md): Values for specifying validation data.

### Accessing parameters

- [validationData](modelparameters-swift.struct/validationdata-swift.property.md): Deprecated. Validation data represented as a `MLDataTable`.
- [maxIterations](modelparameters-swift.struct/maxiterations.md)
- [l1Penalty](modelparameters-swift.struct/l1penalty.md)
- [l2Penalty](modelparameters-swift.struct/l2penalty.md)
- [stepSize](modelparameters-swift.struct/stepsize.md)
- [convergenceThreshold](modelparameters-swift.struct/convergencethreshold.md)
- [featureRescaling](modelparameters-swift.struct/featurerescaling.md)
- [validation](modelparameters-swift.struct/validation.md): Validation data.

### Describing parameters

- [description](modelparameters-swift.struct/description.md): A text representation of the model parameters for a linear regressor.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): A text representation of the model parameters for a linear regressor that’s suitable for output during debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): A description of the model parameters for a linear regressor shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelparameters-swift.struct/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](modelparameters-swift.struct/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](modelparameters-swift.struct/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Inspecting a linear regressor

- [model](model.md): The Core ML model.
- [modelParameters](modelparameters-swift.property.md): The underlying parameters used when training the model.
