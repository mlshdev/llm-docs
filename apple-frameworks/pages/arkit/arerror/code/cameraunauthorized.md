> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arerror/code/cameraunauthorized](https://developer.apple.com/documentation/arkit/arerror/code/cameraunauthorized)

# ARError.Code.cameraUnauthorized (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An error that indicates the app lacks user permission for the camera.

## Declaration

```swift
case cameraUnauthorized
```

<a id="Discussion"></a>

## Discussion

To use the device’s camera:

- Your app’s Info.plist file must provide a message for the [NSCameraUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSCameraUsageDescription) key. If this key is missing, any attempt to run an AR session fails with this error.
- When your app first attempts to run an AR session or otherwise use the camera, iOS automatically shows an alert with your camera usage description message, asking the user to grant camera permission to your app. If the user accepts this request, the session begins; otherwise the session fails with this error.
- If the user has previously denied camera permission for your app, all attempts to run an AR session or otherwise use the camera fail with this error. To grant camera permission, the user must explicitly enable your app in the iOS Settings app, under Privacy \> Camera.

## See Also

### Errors

- [ARError.Code.requestFailed](requestfailed.md): An error that indicates a request fails.
- [ARError.Code.fileIOFailed](fileiofailed.md): An error that indicates a file access fails to read or write.
- [ARError.Code.insufficientFeatures](insufficientfeatures.md): An error that indicates the framework requires more features to complete a task.
- [ARError.Code.invalidCollaborationData](invalidcollaborationdata.md): An error that indicates the framework fails to parse collaboration data the app receives over the network.
- [ARError.Code.invalidConfiguration](invalidconfiguration.md): An error that indicates the configuration contains ambiguous or erroneous data.
- [ARError.Code.invalidReferenceImage](invalidreferenceimage.md): An error that indicates the framework fails to process a reference image.
- [ARError.Code.invalidReferenceObject](invalidreferenceobject.md): An error that indicates the framework fails to process a reference object.
- [ARError.Code.invalidWorldMap](invalidworldmap.md): An error that indicates the framework fails to process a world map.
- [ARError.Code.microphoneUnauthorized](microphoneunauthorized.md): An error that indicates the app lacks user permission for the microphone.
- [ARError.Code.objectMergeFailed](objectmergefailed.md): An error that indicates the framework fails to merge a detected object.
- [ARError.Code.sensorFailed](sensorfailed.md): An error that indicates a sensor fails to provide required input.
- [ARError.Code.sensorUnavailable](sensorunavailable.md): An error that indicates the framework fails to access a required sensor.
- [ARError.Code.unsupportedConfiguration](unsupportedconfiguration.md): An error that indicates the device lacks support for the session’s configuration.
- [ARError.Code.worldTrackingFailed](worldtrackingfailed.md): An error that indicates when world tracking experiences an unrecoverable problem.
- [ARError.Code.geoTrackingFailed](geotrackingfailed.md): An error that indicates when localization imagery fails to match the device’s camera captures.

# ARErrorCodeCameraUnauthorized (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

An error that indicates the app lacks user permission for the camera.

## Declaration

```objectivec
ARErrorCodeCameraUnauthorized
```

<a id="Discussion"></a>

## Discussion

To use the device’s camera:

- Your app’s Info.plist file must provide a message for the [NSCameraUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSCameraUsageDescription) key. If this key is missing, any attempt to run an AR session fails with this error.
- When your app first attempts to run an AR session or otherwise use the camera, iOS automatically shows an alert with your camera usage description message, asking the user to grant camera permission to your app. If the user accepts this request, the session begins; otherwise the session fails with this error.
- If the user has previously denied camera permission for your app, all attempts to run an AR session or otherwise use the camera fail with this error. To grant camera permission, the user must explicitly enable your app in the iOS Settings app, under Privacy \> Camera.

## See Also

### Errors

- [ARErrorCodeRequestFailed](requestfailed.md): An error that indicates a request fails.
- [ARErrorCodeFileIOFailed](fileiofailed.md): An error that indicates a file access fails to read or write.
- [ARErrorCodeInsufficientFeatures](insufficientfeatures.md): An error that indicates the framework requires more features to complete a task.
- [ARErrorCodeInvalidCollaborationData](invalidcollaborationdata.md): An error that indicates the framework fails to parse collaboration data the app receives over the network.
- [ARErrorCodeInvalidConfiguration](invalidconfiguration.md): An error that indicates the configuration contains ambiguous or erroneous data.
- [ARErrorCodeInvalidReferenceImage](invalidreferenceimage.md): An error that indicates the framework fails to process a reference image.
- [ARErrorCodeInvalidReferenceObject](invalidreferenceobject.md): An error that indicates the framework fails to process a reference object.
- [ARErrorCodeInvalidWorldMap](invalidworldmap.md): An error that indicates the framework fails to process a world map.
- [ARErrorCodeMicrophoneUnauthorized](microphoneunauthorized.md): An error that indicates the app lacks user permission for the microphone.
- [ARErrorCodeObjectMergeFailed](objectmergefailed.md): An error that indicates the framework fails to merge a detected object.
- [ARErrorCodeSensorFailed](sensorfailed.md): An error that indicates a sensor fails to provide required input.
- [ARErrorCodeSensorUnavailable](sensorunavailable.md): An error that indicates the framework fails to access a required sensor.
- [ARErrorCodeUnsupportedConfiguration](unsupportedconfiguration.md): An error that indicates the device lacks support for the session’s configuration.
- [ARErrorCodeWorldTrackingFailed](worldtrackingfailed.md): An error that indicates when world tracking experiences an unrecoverable problem.
- [ARErrorCodeGeoTrackingFailed](geotrackingfailed.md): An error that indicates when localization imagery fails to match the device’s camera captures.
