> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arerror/cameraunauthorized](https://developer.apple.com/documentation/arkit/arerror/cameraunauthorized)

# cameraUnauthorized

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An error that indicates the app lacks user permission for the camera.

## Declaration

```swift
static var cameraUnauthorized: ARError.Code { get }
```

<a id="Discussion"></a>

## Discussion

To use the device’s camera:

- Your app’s Info.plist file must provide a message for the [NSCameraUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSCameraUsageDescription) key. If this key is missing, any attempt to run an AR session fails with this error.
- When your app first attempts to run an AR session or otherwise use the camera, iOS automatically shows an alert with your camera usage description message, asking the user to grant camera permission to your app. If the user accepts this request, the session begins; otherwise the session fails with this error.
- If the user has previously denied camera permission for your app, all attempts to run an AR session or otherwise use the camera fail with this error. To grant camera permission, the user must explicitly enable your app in the iOS Settings app, under Privacy \> Camera.

## See Also

### Identifying an error cause

- [ARError.Code](code.md): Codes that identify errors in ARKit.
- [requestFailed](requestfailed.md): An error that indicates a request fails.
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
- [worldTrackingFailed](worldtrackingfailed.md): An error that indicates when world tracking experiences an unrecoverable problem.
