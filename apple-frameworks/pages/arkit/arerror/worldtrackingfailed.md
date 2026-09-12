> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arerror/worldtrackingfailed](https://developer.apple.com/documentation/arkit/arerror/worldtrackingfailed)

# worldTrackingFailed

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An error that indicates when world tracking experiences an unrecoverable problem.

## Declaration

```swift
static var worldTrackingFailed: ARError.Code { get }
```

## See Also

### Identifying an error cause

- [ARError.Code](code.md): Codes that identify errors in ARKit.
- [requestFailed](requestfailed.md): An error that indicates a request fails.
- [cameraUnauthorized](cameraunauthorized.md): An error that indicates the app lacks user permission for the camera.
- [fileIOFailed](fileiofailed.md): An error that indicates a file access fails to read or write.
- [insufficientFeatures](insufficientfeatures.md): An error that indicates the framework requires more features to complete a task.
- [invalidCollaborationData](invalidcollaborationdata.md): An error that indicates the framework fails to parse collaboration data the app receives over the network.
- [invalidConfiguration](invalidconfiguration.md): An error that indicates the configuration contains ambiguous or erroneous data.
- [invalidReferenceImage](invalidreferenceimage.md): An error that indicates the framework fails to process a reference image.
- [invalidReferenceObject](invalidreferenceobject.md): An error that indicates the framework fails to process a reference object.
- [invalidWorldMap](invalidworldmap.md): An error that indicates the framework fails to process a world map.
- [microphoneUnauthorized](microphoneunauthorized.md): An error that indicates the app lacks user permission for the microphone.
- [objectMergeFailed](objectmergefailed.md): An error that indicates the framework fails to merge a detected object.
- [sensorFailed](sensorfailed.md): An error that indicates a sensor fails to provide required input.
- [sensorUnavailable](sensorunavailable.md): An error that indicates the framework fails to access a required sensor.
- [unsupportedConfiguration](unsupportedconfiguration.md): An error that indicates the device lacks support for the session’s configuration.
