> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audiopreprocessingerror](https://developer.apple.com/documentation/createmlcomponents/audiopreprocessingerror)

# AudioPreprocessingError

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Audio preprocessing errors.

## Declaration

```swift
enum AudioPreprocessingError
```

## Topics

### Analyzing the error

- [AudioPreprocessingError.incompatibleTargetFormatForConversion(inputFormat:targetFormat:)](audiopreprocessingerror/incompatibletargetformatforconversion%28inputformat_targetformat_%29.md): An error that indicates that the input and output formats are incompatible for creating an audio converter.

### Getting the debug description

- [debugDescription](audiopreprocessingerror/debugdescription.md): A text representation of the error.

### Default Implementations

- [CustomDebugStringConvertible Implementations](audiopreprocessingerror/customdebugstringconvertible-implementations.md)

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

- [AudioReaderError](audioreadererror.md): Audio reader errors.
- [CompatibilityError](compatibilityerror.md): A compatibility error.
- [ConcatenationError](concatenationerror.md): Errors thrown when concatenating numeric values.
- [DatasetError](dataseterror.md): Dataset processing errors.
- [EstimatorEncodingError](estimatorencodingerror.md): An estimator encoding error.
- [ModelCompatibilityError](modelcompatibilityerror.md): Errors related to CoreML model compatibility.
- [ModelUpdateError](modelupdateerror.md): An updatable model error.
- [OptimizationError](optimizationerror.md): An optimization error.
- [PipelineDataError](pipelinedataerror.md): Errors related to pipeline data affinity problems.
- [SerializationError](serializationerror.md): A serialization error.
- [TabularPipelineDataError](tabularpipelinedataerror.md): Errors related to tabular pipeline data affinity problems.
- [VideoReaderError](videoreadererror.md): Video loader errors.
