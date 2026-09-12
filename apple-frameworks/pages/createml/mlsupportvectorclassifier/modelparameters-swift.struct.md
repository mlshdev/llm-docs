> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsupportvectorclassifier/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mlsupportvectorclassifier/modelparameters-swift.struct)

# MLSupportVectorClassifier.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.14+ (deprecated in 14.0)

Parameters that affect the process of training a model.

## Declaration

```swift
struct ModelParameters
```

## Topics

### Creating parameters

- [init(validation:maxIterations:penalty:convergenceThreshold:featureRescaling:)](modelparameters-swift.struct/init%28validation_maxiterations_penalty_convergencethreshold_featurerescaling_%29.md): Deprecated. Creates a new set of parameters.
- [init(validationData:maxIterations:penalty:convergenceThreshold:featureRescaling:)](modelparameters-swift.struct/init%28validationdata_maxiterations_penalty_convergencethreshold_featurerescaling_%29.md): Deprecated. Creates a new set of parameters.
- [MLSupportVectorClassifier.ModelParameters.ValidationData](modelparameters-swift.struct/validationdata-swift.enum.md): Deprecated. Values for specifying validation data.

### Accessing parameters

- [convergenceThreshold](modelparameters-swift.struct/convergencethreshold.md): Deprecated.
- [featureRescaling](modelparameters-swift.struct/featurerescaling.md): Deprecated.
- [maxIterations](modelparameters-swift.struct/maxiterations.md): Deprecated.
- [penalty](modelparameters-swift.struct/penalty.md): Deprecated.
- [validationData](modelparameters-swift.struct/validationdata-swift.property.md): Deprecated. Validation data represented as a `MLDataTable`.
- [validation](modelparameters-swift.struct/validation.md): Deprecated. Validation data.

### Describing parameters

- [description](modelparameters-swift.struct/description.md): Deprecated. A text representation of the model parameters for a support vector classifier.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): Deprecated. A text representation of the model parameters for a support vector classifier that’s suitable for output during debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): Deprecated. A description of the model parameters for a support vector classifier shown in a playground.

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

### Creating and training a support vector classifier

- [init(trainingData:targetColumn:featureColumns:parameters:)](init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Deprecated. Creates a support vector classifier.
- [modelParameters](modelparameters-swift.property.md): Deprecated. The underlying parameters used when training the model.
- [targetColumn](targetcolumn.md): Deprecated. The name of the column you selected at initialization to define which categories the classifier predicts.
- [featureColumns](featurecolumns.md): Deprecated. The names of the columns you selected at initialization to train the classifier.
