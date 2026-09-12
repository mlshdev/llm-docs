> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/modelcompatibilityerror](https://developer.apple.com/documentation/createmlcomponents/modelcompatibilityerror)

# ModelCompatibilityError

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Errors related to CoreML model compatibility.

## Declaration

```swift
enum ModelCompatibilityError
```

## Topics

### Analyzing the error

- [ModelCompatibilityError.incompatibleInputCount(expected:actual:)](modelcompatibilityerror/incompatibleinputcount%28expected_actual_%29.md): An error that indicates that the number of model inputs is wrong.
- [ModelCompatibilityError.incompatibleInputDataFormat(expected:actual:)](modelcompatibilityerror/incompatibleinputdataformat%28expected_actual_%29.md): An error that indicates that the input data has the wrong format.
- [ModelCompatibilityError.incompatibleInputMultiArrayDataType(\_:)](modelcompatibilityerror/incompatibleinputmultiarraydatatype%28__%29.md): An error that indicates that the input multi array has the wrong value type.
- [ModelCompatibilityError.incompatibleLabelType](modelcompatibilityerror/incompatiblelabeltype.md): An error that indicates that the label has the wrong type.
- [ModelCompatibilityError.incompatibleMetadataKey(name:)](modelcompatibilityerror/incompatiblemetadatakey%28name_%29.md): An error that indicates that the metadata key has the wrong type.
- [ModelCompatibilityError.incompatibleOutputCount(expected:actual:)](modelcompatibilityerror/incompatibleoutputcount%28expected_actual_%29.md): An error that indicates that the number of model outputs is wrong.
- [ModelCompatibilityError.incompatibleOutputDataFormat(expected:actual:)](modelcompatibilityerror/incompatibleoutputdataformat%28expected_actual_%29.md): An error that indicates that the output data has the wrong format.
- [ModelCompatibilityError.missingInput(name:)](modelcompatibilityerror/missinginput%28name_%29.md): An error that indicates that the input is missing from the model.
- [ModelCompatibilityError.missingLabel](modelcompatibilityerror/missinglabel.md): An error that indicates that the label output is missing from the model.
- [ModelCompatibilityError.missingLabelProbabilities](modelcompatibilityerror/missinglabelprobabilities.md): An error that indicates that the label probabilities output is missing from the model.
- [ModelCompatibilityError.missingOutput(name:)](modelcompatibilityerror/missingoutput%28name_%29.md): An error that indicates that the output is missing from the model.
- [ModelCompatibilityError.missingPredictedFeature](modelcompatibilityerror/missingpredictedfeature.md): An error that indicates that the regressor model output is missing.

### Getting the debug description

- [debugDescription](modelcompatibilityerror/debugdescription.md): A text representation of the error.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelcompatibilityerror/customdebugstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [AudioPreprocessingError](audiopreprocessingerror.md): Audio preprocessing errors.
- [AudioReaderError](audioreadererror.md): Audio reader errors.
- [CompatibilityError](compatibilityerror.md): A compatibility error.
- [ConcatenationError](concatenationerror.md): Errors thrown when concatenating numeric values.
- [DatasetError](dataseterror.md): Dataset processing errors.
- [EstimatorEncodingError](estimatorencodingerror.md): An estimator encoding error.
- [ModelUpdateError](modelupdateerror.md): An updatable model error.
- [OptimizationError](optimizationerror.md): An optimization error.
- [PipelineDataError](pipelinedataerror.md): Errors related to pipeline data affinity problems.
- [SerializationError](serializationerror.md): A serialization error.
- [TabularPipelineDataError](tabularpipelinedataerror.md): Errors related to tabular pipeline data affinity problems.
- [VideoReaderError](videoreadererror.md): Video loader errors.
