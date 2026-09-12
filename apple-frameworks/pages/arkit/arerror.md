> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arerror](https://developer.apple.com/documentation/arkit/arerror)

# ARError

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An error reported by ARKit.

## Declaration

```swift
struct ARError
```

## Topics

### Inspecting error information

- [errorDomain](arerror/errordomain.md)

### Identifying an error cause

- [ARError.Code](arerror/code.md): Codes that identify errors in ARKit.
- [requestFailed](arerror/requestfailed.md): An error that indicates a request fails.
- [cameraUnauthorized](arerror/cameraunauthorized.md): An error that indicates the app lacks user permission for the camera.
- [fileIOFailed](arerror/fileiofailed.md): An error that indicates a file access fails to read or write.
- [insufficientFeatures](arerror/insufficientfeatures.md): An error that indicates the framework requires more features to complete a task.
- [invalidCollaborationData](arerror/invalidcollaborationdata.md): An error that indicates the framework fails to parse collaboration data the app receives over the network.
- [invalidConfiguration](arerror/invalidconfiguration.md): An error that indicates the configuration contains ambiguous or erroneous data.
- [invalidReferenceImage](arerror/invalidreferenceimage.md): An error that indicates the framework fails to process a reference image.
- [invalidReferenceObject](arerror/invalidreferenceobject.md): An error that indicates the framework fails to process a reference object.
- [invalidWorldMap](arerror/invalidworldmap.md): An error that indicates the framework fails to process a world map.
- [microphoneUnauthorized](arerror/microphoneunauthorized.md): An error that indicates the app lacks user permission for the microphone.
- [objectMergeFailed](arerror/objectmergefailed.md): An error that indicates the framework fails to merge a detected object.
- [sensorFailed](arerror/sensorfailed.md): An error that indicates a sensor fails to provide required input.
- [sensorUnavailable](arerror/sensorunavailable.md): An error that indicates the framework fails to access a required sensor.
- [unsupportedConfiguration](arerror/unsupportedconfiguration.md): An error that indicates the device lacks support for the session’s configuration.
- [worldTrackingFailed](arerror/worldtrackingfailed.md): An error that indicates when world tracking experiences an unrecoverable problem.
- [geoTrackingFailed](arerror/geotrackingfailed.md): An error that indicates when localization imagery fails to match the device’s camera captures.
- [geoTrackingNotAvailableAtLocation](arerror/geotrackingnotavailableatlocation.md): An error that indicates a location lacks geotracking support.
- [locationUnauthorized](arerror/locationunauthorized.md): An error that indicates the app lacks user permission for the device’s current location.
- [highResolutionFrameCaptureFailed](arerror/highresolutionframecapturefailed.md): An error that indicates a problem in the system’s capture pipeline.
- [highResolutionFrameCaptureInProgress](arerror/highresolutionframecaptureinprogress.md): An error that indicates the system needs to finish a high-resolution frame request before accepting another request.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ARError.Code](arerror/code.md): Codes that identify errors in ARKit.
