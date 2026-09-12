> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioreadererror](https://developer.apple.com/documentation/createmlcomponents/audioreadererror)

# AudioReaderError

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Audio reader errors.

## Declaration

```swift
enum AudioReaderError
```

## Topics

### Analyzing the error

- [AudioReaderError.microphoneAuthorizationDenied](audioreadererror/microphoneauthorizationdenied.md): An error that indicates that the microphone authorization status is denied. The user has explicitly denied permission for audio capture.
- [AudioReaderError.microphoneAuthorizationRestricted](audioreadererror/microphoneauthorizationrestricted.md): An error that indicates that the microphone authorization status is restricted. The user is not allowed to access audio capture devices.
- [AudioReaderError.sourceDeviceNotAvailable](audioreadererror/sourcedevicenotavailable.md): An error that indicates that no source devices are available.

### Getting the debug description

- [debugDescription](audioreadererror/debugdescription.md): A text representation of the error.

### Default Implementations

- [CustomDebugStringConvertible Implementations](audioreadererror/customdebugstringconvertible-implementations.md)

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
