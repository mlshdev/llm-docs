> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/optimizationerror](https://developer.apple.com/documentation/createmlcomponents/optimizationerror)

# OptimizationError

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An optimization error.

## Declaration

```swift
enum OptimizationError
```

## Topics

### Analyzing the error

- [OptimizationError.numericOverflow](optimizationerror/numericoverflow.md): Numerical overflow. Step size parameter may be too large.
- [OptimizationError.numericUnderflow](optimizationerror/numericunderflow.md): Numerical underflow (not enough progress).
- [OptimizationError.unsupportedPlatform](optimizationerror/unsupportedplatform.md): The optimization operation is not supported on this platform.

### Getting the debug description

- [debugDescription](optimizationerror/debugdescription.md): A text representation of the error.

### Default Implementations

- [CustomDebugStringConvertible Implementations](optimizationerror/customdebugstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
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
- [PipelineDataError](pipelinedataerror.md): Errors related to pipeline data affinity problems.
- [SerializationError](serializationerror.md): A serialization error.
- [TabularPipelineDataError](tabularpipelinedataerror.md): Errors related to tabular pipeline data affinity problems.
- [VideoReaderError](videoreadererror.md): Video loader errors.
