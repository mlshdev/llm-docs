> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arerror/code](https://developer.apple.com/documentation/arkit/arerror/code)

# ARError.Code (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Codes that identify errors in ARKit.

## Declaration

```swift
enum Code
```

## Topics

### Errors

- [ARError.Code.requestFailed](code/requestfailed.md): An error that indicates a request fails.
- [ARError.Code.cameraUnauthorized](code/cameraunauthorized.md): An error that indicates the app lacks user permission for the camera.
- [ARError.Code.fileIOFailed](code/fileiofailed.md): An error that indicates a file access fails to read or write.
- [ARError.Code.insufficientFeatures](code/insufficientfeatures.md): An error that indicates the framework requires more features to complete a task.
- [ARError.Code.invalidCollaborationData](code/invalidcollaborationdata.md): An error that indicates the framework fails to parse collaboration data the app receives over the network.
- [ARError.Code.invalidConfiguration](code/invalidconfiguration.md): An error that indicates the configuration contains ambiguous or erroneous data.
- [ARError.Code.invalidReferenceImage](code/invalidreferenceimage.md): An error that indicates the framework fails to process a reference image.
- [ARError.Code.invalidReferenceObject](code/invalidreferenceobject.md): An error that indicates the framework fails to process a reference object.
- [ARError.Code.invalidWorldMap](code/invalidworldmap.md): An error that indicates the framework fails to process a world map.
- [ARError.Code.microphoneUnauthorized](code/microphoneunauthorized.md): An error that indicates the app lacks user permission for the microphone.
- [ARError.Code.objectMergeFailed](code/objectmergefailed.md): An error that indicates the framework fails to merge a detected object.
- [ARError.Code.sensorFailed](code/sensorfailed.md): An error that indicates a sensor fails to provide required input.
- [ARError.Code.sensorUnavailable](code/sensorunavailable.md): An error that indicates the framework fails to access a required sensor.
- [ARError.Code.unsupportedConfiguration](code/unsupportedconfiguration.md): An error that indicates the device lacks support for the session’s configuration.
- [ARError.Code.worldTrackingFailed](code/worldtrackingfailed.md): An error that indicates when world tracking experiences an unrecoverable problem.
- [ARError.Code.geoTrackingFailed](code/geotrackingfailed.md): An error that indicates when localization imagery fails to match the device’s camera captures.
- [ARError.Code.geoTrackingNotAvailableAtLocation](code/geotrackingnotavailableatlocation.md): An error that indicates a location lacks geotracking support.
- [ARError.Code.locationUnauthorized](code/locationunauthorized.md): An error that indicates the app lacks user permission for the device’s current location.
- [ARError.Code.highResolutionFrameCaptureFailed](code/highresolutionframecapturefailed.md): An error that indicates a problem in the system’s capture pipeline.
- [ARError.Code.highResolutionFrameCaptureInProgress](code/highresolutionframecaptureinprogress.md): An error that indicates the system needs to finish a high-resolution frame request before accepting another request.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ARError](../arerror.md): An error reported by ARKit.

# ARErrorCode (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Codes that identify errors in ARKit.

## Declaration

```objectivec
enum ARErrorCode : NSInteger;
```

## Topics

### Errors

- [ARErrorCodeRequestFailed](code/requestfailed.md): An error that indicates a request fails.
- [ARErrorCodeCameraUnauthorized](code/cameraunauthorized.md): An error that indicates the app lacks user permission for the camera.
- [ARErrorCodeFileIOFailed](code/fileiofailed.md): An error that indicates a file access fails to read or write.
- [ARErrorCodeInsufficientFeatures](code/insufficientfeatures.md): An error that indicates the framework requires more features to complete a task.
- [ARErrorCodeInvalidCollaborationData](code/invalidcollaborationdata.md): An error that indicates the framework fails to parse collaboration data the app receives over the network.
- [ARErrorCodeInvalidConfiguration](code/invalidconfiguration.md): An error that indicates the configuration contains ambiguous or erroneous data.
- [ARErrorCodeInvalidReferenceImage](code/invalidreferenceimage.md): An error that indicates the framework fails to process a reference image.
- [ARErrorCodeInvalidReferenceObject](code/invalidreferenceobject.md): An error that indicates the framework fails to process a reference object.
- [ARErrorCodeInvalidWorldMap](code/invalidworldmap.md): An error that indicates the framework fails to process a world map.
- [ARErrorCodeMicrophoneUnauthorized](code/microphoneunauthorized.md): An error that indicates the app lacks user permission for the microphone.
- [ARErrorCodeObjectMergeFailed](code/objectmergefailed.md): An error that indicates the framework fails to merge a detected object.
- [ARErrorCodeSensorFailed](code/sensorfailed.md): An error that indicates a sensor fails to provide required input.
- [ARErrorCodeSensorUnavailable](code/sensorunavailable.md): An error that indicates the framework fails to access a required sensor.
- [ARErrorCodeUnsupportedConfiguration](code/unsupportedconfiguration.md): An error that indicates the device lacks support for the session’s configuration.
- [ARErrorCodeWorldTrackingFailed](code/worldtrackingfailed.md): An error that indicates when world tracking experiences an unrecoverable problem.
- [ARErrorCodeGeoTrackingFailed](code/geotrackingfailed.md): An error that indicates when localization imagery fails to match the device’s camera captures.
- [ARErrorCodeGeoTrackingNotAvailableAtLocation](code/geotrackingnotavailableatlocation.md): An error that indicates a location lacks geotracking support.
- [ARErrorCodeLocationUnauthorized](code/locationunauthorized.md): An error that indicates the app lacks user permission for the device’s current location.
- [ARErrorCodeHighResolutionFrameCaptureFailed](code/highresolutionframecapturefailed.md): An error that indicates a problem in the system’s capture pipeline.
- [ARErrorCodeHighResolutionFrameCaptureInProgress](code/highresolutionframecaptureinprogress.md): An error that indicates the system needs to finish a high-resolution frame request before accepting another request.
