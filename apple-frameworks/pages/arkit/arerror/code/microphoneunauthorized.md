> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arerror/code/microphoneunauthorized](https://developer.apple.com/documentation/arkit/arerror/code/microphoneunauthorized)

# ARError.Code.microphoneUnauthorized (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An error that indicates the app lacks user permission for the microphone.

## Declaration

```swift
case microphoneUnauthorized
```

<a id="Discussion"></a>

## Discussion

When this error occurs, the app needs to prompt the user to give permission to use the microphone in Settings.

## See Also

### Errors

- [ARError.Code.requestFailed](requestfailed.md): An error that indicates a request fails.
- [ARError.Code.cameraUnauthorized](cameraunauthorized.md): An error that indicates the app lacks user permission for the camera.
- [ARError.Code.fileIOFailed](fileiofailed.md): An error that indicates a file access fails to read or write.
- [ARError.Code.insufficientFeatures](insufficientfeatures.md): An error that indicates the framework requires more features to complete a task.
- [ARError.Code.invalidCollaborationData](invalidcollaborationdata.md): An error that indicates the framework fails to parse collaboration data the app receives over the network.
- [ARError.Code.invalidConfiguration](invalidconfiguration.md): An error that indicates the configuration contains ambiguous or erroneous data.
- [ARError.Code.invalidReferenceImage](invalidreferenceimage.md): An error that indicates the framework fails to process a reference image.
- [ARError.Code.invalidReferenceObject](invalidreferenceobject.md): An error that indicates the framework fails to process a reference object.
- [ARError.Code.invalidWorldMap](invalidworldmap.md): An error that indicates the framework fails to process a world map.
- [ARError.Code.objectMergeFailed](objectmergefailed.md): An error that indicates the framework fails to merge a detected object.
- [ARError.Code.sensorFailed](sensorfailed.md): An error that indicates a sensor fails to provide required input.
- [ARError.Code.sensorUnavailable](sensorunavailable.md): An error that indicates the framework fails to access a required sensor.
- [ARError.Code.unsupportedConfiguration](unsupportedconfiguration.md): An error that indicates the device lacks support for the session’s configuration.
- [ARError.Code.worldTrackingFailed](worldtrackingfailed.md): An error that indicates when world tracking experiences an unrecoverable problem.
- [ARError.Code.geoTrackingFailed](geotrackingfailed.md): An error that indicates when localization imagery fails to match the device’s camera captures.

# ARErrorCodeMicrophoneUnauthorized (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

An error that indicates the app lacks user permission for the microphone.

## Declaration

```objectivec
ARErrorCodeMicrophoneUnauthorized
```

<a id="Discussion"></a>

## Discussion

When this error occurs, the app needs to prompt the user to give permission to use the microphone in Settings.

## See Also

### Errors

- [ARErrorCodeRequestFailed](requestfailed.md): An error that indicates a request fails.
- [ARErrorCodeCameraUnauthorized](cameraunauthorized.md): An error that indicates the app lacks user permission for the camera.
- [ARErrorCodeFileIOFailed](fileiofailed.md): An error that indicates a file access fails to read or write.
- [ARErrorCodeInsufficientFeatures](insufficientfeatures.md): An error that indicates the framework requires more features to complete a task.
- [ARErrorCodeInvalidCollaborationData](invalidcollaborationdata.md): An error that indicates the framework fails to parse collaboration data the app receives over the network.
- [ARErrorCodeInvalidConfiguration](invalidconfiguration.md): An error that indicates the configuration contains ambiguous or erroneous data.
- [ARErrorCodeInvalidReferenceImage](invalidreferenceimage.md): An error that indicates the framework fails to process a reference image.
- [ARErrorCodeInvalidReferenceObject](invalidreferenceobject.md): An error that indicates the framework fails to process a reference object.
- [ARErrorCodeInvalidWorldMap](invalidworldmap.md): An error that indicates the framework fails to process a world map.
- [ARErrorCodeObjectMergeFailed](objectmergefailed.md): An error that indicates the framework fails to merge a detected object.
- [ARErrorCodeSensorFailed](sensorfailed.md): An error that indicates a sensor fails to provide required input.
- [ARErrorCodeSensorUnavailable](sensorunavailable.md): An error that indicates the framework fails to access a required sensor.
- [ARErrorCodeUnsupportedConfiguration](unsupportedconfiguration.md): An error that indicates the device lacks support for the session’s configuration.
- [ARErrorCodeWorldTrackingFailed](worldtrackingfailed.md): An error that indicates when world tracking experiences an unrecoverable problem.
- [ARErrorCodeGeoTrackingFailed](geotrackingfailed.md): An error that indicates when localization imagery fails to match the device’s camera captures.
