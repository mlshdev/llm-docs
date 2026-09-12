> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/pipelinedataerror](https://developer.apple.com/documentation/createmlcomponents/pipelinedataerror)

# PipelineDataError

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Errors related to pipeline data affinity problems.

## Declaration

```swift
enum PipelineDataError
```

## Topics

### Analyzing the error

- [PipelineDataError.emptyInput(operation:)](pipelinedataerror/emptyinput%28operation_%29.md): An error that indicates that the input to fit is empty.
- [PipelineDataError.incompatibleConfiguration(operation:debugDescription:)](pipelinedataerror/incompatibleconfiguration%28operation_debugdescription_%29.md): An error that indicates that an input is not compatible with an operation’s configuration.
- [PipelineDataError.incompatibleDataFormat(operation:debugDescription:)](pipelinedataerror/incompatibledataformat%28operation_debugdescription_%29.md): An error that indicates that an input doesn’t have the expected data format.
- [PipelineDataError.incompatibleShape(\_:debugDescription:)](pipelinedataerror/incompatibleshape%28__debugdescription_%29.md): An error that indicates that an input’s doesn’t have the expected shape for the operation.
- [PipelineDataError.missingAnnotation(operation:)](pipelinedataerror/missingannotation%28operation_%29.md): An error that indicates that an expected annotation is missing.
- [PipelineDataError.missingValue(operation:)](pipelinedataerror/missingvalue%28operation_%29.md): An error that indicates that an expected value is missing.
- [PipelineDataError.unrecognizedCategory(operation:category:)](pipelinedataerror/unrecognizedcategory%28operation_category_%29.md): An error that indicates that a new category was encountered after fitting.

### Getting the debug description

- [debugDescription](pipelinedataerror/debugdescription.md): A text representation of the error.

### Default Implementations

- [CustomDebugStringConvertible Implementations](pipelinedataerror/customdebugstringconvertible-implementations.md)

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
- [ModelCompatibilityError](modelcompatibilityerror.md): Errors related to CoreML model compatibility.
- [ModelUpdateError](modelupdateerror.md): An updatable model error.
- [OptimizationError](optimizationerror.md): An optimization error.
- [SerializationError](serializationerror.md): A serialization error.
- [TabularPipelineDataError](tabularpipelinedataerror.md): Errors related to tabular pipeline data affinity problems.
- [VideoReaderError](videoreadererror.md): Video loader errors.
