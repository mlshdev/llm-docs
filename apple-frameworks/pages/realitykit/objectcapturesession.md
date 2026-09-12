> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession](https://developer.apple.com/documentation/realitykit/objectcapturesession)

# ObjectCaptureSession

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+

A session object that monitors and controls image capture for photogrammetry.

## Declaration

```swift
@MainActor class ObjectCaptureSession
```

<a id="overview"></a>

## Overview

An [ObjectCaptureSession](objectcapturesession.md) is used together with an [ObjectCaptureView](objectcaptureview.md) to present a view that assists in capturing images of an object for reconstruction of a 3D model by using a [PhotogrammetrySession](photogrammetrysession.md).

A capture session contains functions for starting and advancing the capture session through a state machine that controls the image capture process. Your app can also observe several properties of the capture session to determine the current state of the capture process.

Once a session enters the `.completed` state, your app can transfer the images to a Mac or use them locally on the iOS device for use in object reconstruction using [PhotogrammetrySession](photogrammetrysession.md). Model reconstruction is a separate phase which this session does not directly monitor or control.

## Topics

### Creating a session

- [init()](objectcapturesession/init%28%29.md): Creates a new object capture session.

### Checking availability

- [isSupported](objectcapturesession/issupported.md): A Boolean that indicates whether the current device supports object capture sessions.

### Configuring a session

- [feedback](objectcapturesession/feedback-swift.property.md): The current set of active `Feedback` states.
- [ObjectCaptureSession.Feedback](objectcapturesession/feedback-swift.enum.md): Provides information about possible problems with the capture session.
- [isPaused](objectcapturesession/ispaused.md): A Boolean value that indicates if the capture session is paused.
- [state](objectcapturesession/state.md): The current state of the capture session.
- [cameraTracking](objectcapturesession/cameratracking.md): The current state of ARKit camera tracking.
- [ObjectCaptureSession.Tracking](objectcapturesession/tracking.md): A data structure that describes the current tracking state for the camera.

### Monitoring the session

- [ObjectCaptureSession.CaptureState](objectcapturesession/capturestate.md): State of the capture session.
- [ObjectCaptureSession.Error](objectcapturesession/error.md): Errors associated with the top-level computation of this class.

### Controlling the session

- [cancel()](objectcapturesession/cancel%28%29.md): Requests that the capture session be canceled.
- [finish()](objectcapturesession/finish%28%29.md): Requests that the capture session be stopped and all data saved.
- [pause()](objectcapturesession/pause%28%29.md): Pauses the automatic capture and other resource-intense algorithms.
- [requestImageCapture()](objectcapturesession/requestimagecapture%28%29.md): Requests a manual image capture.
- [resume()](objectcapturesession/resume%28%29.md): Resumes object tracking algorithms after [pause()](objectcapturesession/pause%28%29.md) is called.
- [startCapturing()](objectcapturesession/startcapturing%28%29.md): Begins taking images for object capture.

### Structures

- [ObjectCaptureSession.Configuration](objectcapturesession/configuration-swift.struct.md): The configuration options for the session which are passed into the `start(imagesDirectory:configuration:)` call.
- [ObjectCaptureSession.Updates](objectcapturesession/updates.md): Used to provide an `AsyncSequence` of change events for the observable properties.

### Instance Properties

- [cameraTrackingUpdates](objectcapturesession/cameratrackingupdates.md): The `Updates` `AsyncSequence` for the `cameraTracking` property.
- [canRequestImageCapture](objectcapturesession/canrequestimagecapture.md): Will be `true` only when a call to [requestImageCapture()](objectcapturesession/requestimagecapture%28%29.md) is expected to be successful. It will be `false` when not in the `.capturing` state or if the session is too busy to currently process a new request. There is a period of time after requesting an image capture where this property will be `false` and a new call to [requestImageCapture()](objectcapturesession/requestimagecapture%28%29.md) will not produce a new image.
- [canRequestImageCaptureUpdates](objectcapturesession/canrequestimagecaptureupdates.md): The `Updates` `AsyncSequence` for the `canRequestImagecapture` property.
- [configuration](objectcapturesession/configuration-swift.property.md): The read-only `Configuration` used to start the capture session. The configuration can be set by passing it to the `start()` call and it remains immutable after the session is started successfully.
- [feedbackUpdates](objectcapturesession/feedbackupdates.md): The `Updates` `AsyncSequence` for the `feedback` property.
- [isAutoCaptureEnabled](objectcapturesession/isautocaptureenabled.md): Enables/disables auto-capture system. If disabled, only manually triggered shots are taken.
- [isPausedUpdates](objectcapturesession/ispausedupdates.md): The `Updates` `AsyncSequence` for the `isPaused` property.
- [maximumNumberOfInputImages](objectcapturesession/maximumnumberofinputimages.md): The maximum number of images that can be used for on-device reconstruction.
- [numberOfShotsTaken](objectcapturesession/numberofshotstaken.md): The number of shots taken in the entire capture session so far, including both automatic capture and manual capture.
- [numberOfShotsTakenUpdates](objectcapturesession/numberofshotstakenupdates.md): The `Updates` `AsyncSequence` for the `numberOfShotsTaken` property.
- [shouldPlayHaptics](objectcapturesession/shouldplayhaptics.md): Enables/disables haptics on devices that support it.
- [stateUpdates](objectcapturesession/stateupdates.md): The `Updates` `AsyncSequence` for the `state` property.
- [userCompletedScanPass](objectcapturesession/usercompletedscanpass.md): This property starts out `false` at the start of a capture and will switch to `true` when the user has moved the device in a full circular scan pass around the bounding box of the target object and captured enough data to fill completely the capture dial.
- [userCompletedScanPassUpdates](objectcapturesession/usercompletedscanpassupdates.md): The `Updates` `AsyncSequence` for the `userCompletedScanPass` property.

### Instance Methods

- [beginNewScanPass()](objectcapturesession/beginnewscanpass%28%29.md): Resets the state of the capture dial such that the user will need to perform another complete scan pass to fill it and generate a new event in the published property [userCompletedScanPass](objectcapturesession/usercompletedscanpass.md).
- [beginNewScanPassAfterFlip()](objectcapturesession/beginnewscanpassafterflip%28%29.md): Starts the capturing of a new side of the object, to be called after the object is scanned one side and flipped.
- [resetDetection()](objectcapturesession/resetdetection%28%29.md): Moves the session state from `.detecting` back to `.ready` to reset the bounding box and prepare to select a new one with a new call to `startDetecting()`.
- [start(imagesDirectory:configuration:)](objectcapturesession/start%28imagesdirectory_configuration_%29.md): Starts the session with the provided output image directory and optional checkpoint directory.
- [startDetecting()](objectcapturesession/startdetecting%28%29.md): Requests that the session should start detecting the object in the center of the camera.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model creation

- [Capturing photographs for RealityKit Object Capture](capturing-photographs-for-realitykit-object-capture.md): Take high-quality images of objects to generate 3D models.
- [Creating 3D objects from photographs](creating-3d-objects-from-photographs.md): Construct virtual objects to use in your AR experiences.
- [Scanning objects using Object Capture](scanning-objects-using-object-capture.md): Implement a full scanning workflow for capturing objects on iOS devices.
- [Building an object reconstruction app](building-an-object-reconstruction-app.md): Reconstruct objects from user-selected input images by using photogrammetry.
- [Creating a photogrammetry command-line app](creating-a-photogrammetry-command-line-app.md): Generate 3D objects from images using RealityKit Object Capture.
- [Using object capture assets in RealityKit](using-object-capture-assets-in-realitykit.md): Create a chess game using RealityKit and assets created using Object Capture.
- [PhotogrammetrySession](photogrammetrysession.md): Manages the creation of a 3D model from a set of images.
- [PhotogrammetrySample](photogrammetrysample.md): An object that represents one image and its corresponding metadata.
- [ObjectCaptureView](objectcaptureview.md): A view that guides a user through capturing images for object capture.
- [ObjectCapturePointCloudView](objectcapturepointcloudview.md): Renders the current state of the point cloud from an object capture session.
