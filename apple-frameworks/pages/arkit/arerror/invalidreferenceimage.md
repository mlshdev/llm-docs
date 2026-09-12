> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arerror/invalidreferenceimage](https://developer.apple.com/documentation/arkit/arerror/invalidreferenceimage)

# invalidReferenceImage

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

An error that indicates the framework fails to process a reference image.

## Declaration

```swift
static var invalidReferenceImage: ARError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error occurs when a reference image in the configuration’s [detectionImages](../arworldtrackingconfiguration/detectionimages.md) lacks identifying features, such as when the image contains all white pixels.

## See Also

### Identifying an error cause

- [ARError.Code](code.md): Codes that identify errors in ARKit.
- [requestFailed](requestfailed.md): An error that indicates a request fails.
- [cameraUnauthorized](cameraunauthorized.md): An error that indicates the app lacks user permission for the camera.
- [fileIOFailed](fileiofailed.md): An error that indicates a file access fails to read or write.
- [insufficientFeatures](insufficientfeatures.md): An error that indicates the framework requires more features to complete a task.
- [invalidCollaborationData](invalidcollaborationdata.md): An error that indicates the framework fails to parse collaboration data the app receives over the network.
- [invalidConfiguration](invalidconfiguration.md): An error that indicates the configuration contains ambiguous or erroneous data.
- [invalidReferenceObject](invalidreferenceobject.md): An error that indicates the framework fails to process a reference object.
- [invalidWorldMap](invalidworldmap.md): An error that indicates the framework fails to process a world map.
- [microphoneUnauthorized](microphoneunauthorized.md): An error that indicates the app lacks user permission for the microphone.
- [objectMergeFailed](objectmergefailed.md): An error that indicates the framework fails to merge a detected object.
- [sensorFailed](sensorfailed.md): An error that indicates a sensor fails to provide required input.
- [sensorUnavailable](sensorunavailable.md): An error that indicates the framework fails to access a required sensor.
- [unsupportedConfiguration](unsupportedconfiguration.md): An error that indicates the device lacks support for the session’s configuration.
- [worldTrackingFailed](worldtrackingfailed.md): An error that indicates when world tracking experiences an unrecoverable problem.
