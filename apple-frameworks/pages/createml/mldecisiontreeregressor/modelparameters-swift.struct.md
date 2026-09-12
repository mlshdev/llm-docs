> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeregressor/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mldecisiontreeregressor/modelparameters-swift.struct)

# MLDecisionTreeRegressor.ModelParameters

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

- [init(validation:maxDepth:minLossReduction:minChildWeight:randomSeed:)](modelparameters-swift.struct/init%28validation_maxdepth_minlossreduction_minchildweight_randomseed_%29.md)
- [init(validationData:maxDepth:minLossReduction:minChildWeight:randomSeed:)](modelparameters-swift.struct/init%28validationdata_maxdepth_minlossreduction_minchildweight_randomseed_%29.md): Deprecated. Creates a new set of parameters.
- [MLDecisionTreeRegressor.ModelParameters.ValidationData](modelparameters-swift.struct/validationdata-swift.enum.md): Values for specifying validation data.

### Accessing parameters

- [maxDepth](modelparameters-swift.struct/maxdepth.md)
- [minChildWeight](modelparameters-swift.struct/minchildweight.md)
- [minLossReduction](modelparameters-swift.struct/minlossreduction.md)
- [randomSeed](modelparameters-swift.struct/randomseed.md)
- [validationData](modelparameters-swift.struct/validationdata-swift.property.md): Deprecated. Validation data represented as a `MLDataTable`.
- [validation](modelparameters-swift.struct/validation.md): Validation data.

### Describing parameters

- [description](modelparameters-swift.struct/description.md): A text representation of the model parameters for a decision tree regressor.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): A text representation of the model parameters for a decision tree regressor that’s suitable for output during debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): A text representation of the model parameters for a decision tree regressor.

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

### Inspecting a decision tree regressor

- [model](model.md): The Core ML model.
- [modelParameters](modelparameters-swift.property.md): The underlying parameters used when training the model.
