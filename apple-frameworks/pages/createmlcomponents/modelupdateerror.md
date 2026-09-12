> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/modelupdateerror](https://developer.apple.com/documentation/createmlcomponents/modelupdateerror)

# ModelUpdateError

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An updatable model error.

## Declaration

```swift
enum ModelUpdateError
```

## Topics

### Analyzing the error

- [ModelUpdateError.invalidState(debugDescription:)](modelupdateerror/invalidstate%28debugdescription_%29.md): An error that indicates that a default initialized transformer suitable for fitting cannot perform apply before performing an update.

### Getting the debug description

- [debugDescription](modelupdateerror/debugdescription.md): A text representation of the error.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelupdateerror/customdebugstringconvertible-implementations.md)

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
- [OptimizationError](optimizationerror.md): An optimization error.
- [PipelineDataError](pipelinedataerror.md): Errors related to pipeline data affinity problems.
- [SerializationError](serializationerror.md): A serialization error.
- [TabularPipelineDataError](tabularpipelinedataerror.md): Errors related to tabular pipeline data affinity problems.
- [VideoReaderError](videoreadererror.md): Video loader errors.
