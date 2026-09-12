> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/serializationerror](https://developer.apple.com/documentation/createmlcomponents/serializationerror)

# SerializationError

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A serialization error.

## Declaration

```swift
enum SerializationError
```

## Topics

### Analyzing the error

- [SerializationError.notRepresentableAsCoreML(debugDescription:)](serializationerror/notrepresentableascoreml%28debugdescription_%29.md): An error that indicates that the transformer cannot be represented as a CoreML model.
- [SerializationError.packageAlreadyExists(\_:)](serializationerror/packagealreadyexists%28__%29.md): An error that indicates that the package already exists at the URL.
- [SerializationError.packageNotFound(\_:)](serializationerror/packagenotfound%28__%29.md): An error that indicates that the package at specified URL was not found.

### Getting the debug description

- [debugDescription](serializationerror/debugdescription.md): A text representation of the error.

### Default Implementations

- [CustomDebugStringConvertible Implementations](serializationerror/customdebugstringconvertible-implementations.md)

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
- [PipelineDataError](pipelinedataerror.md): Errors related to pipeline data affinity problems.
- [TabularPipelineDataError](tabularpipelinedataerror.md): Errors related to tabular pipeline data affinity problems.
- [VideoReaderError](videoreadererror.md): Video loader errors.
