> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcaptureview](https://developer.apple.com/documentation/realitykit/objectcaptureview)

# ObjectCaptureView

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+

A view that guides a user through capturing images for object capture.

## Declaration

```swift
@MainActor @preconcurrency struct ObjectCaptureView<Overlay> where Overlay : View
```

<a id="overview"></a>

## Overview

The primary view of the Object Capture front-end 3D UI.  This view is used to present the UI for a given [ObjectCaptureSession](objectcapturesession.md). It presents the current state of the wrapped session. The view can be taken down temporarily to show the [ObjectCapturePointCloudView](objectcapturepointcloudview.md) or an app’s custom tutorial pages. If a [ObjectCaptureView](objectcaptureview.md) is removed from the content view, creating a new [ObjectCaptureView](objectcaptureview.md) from the original view’s [ObjectCaptureSession](objectcapturesession.md) resumes the in-progress capture session.

## Topics

### Initializers

- [init(session:)](objectcaptureview/init%28session_%29.md): Renders the current state of the provided session.
- [init(session:cameraFeedOverlay:)](objectcaptureview/init%28session_camerafeedoverlay_%29.md): Renders the current state of the provided session.

### Instance Methods

- [hideObjectReticle(\_:)](objectcaptureview/hideobjectreticle%28__%29.md): Conforms when `Overlay` conforms to `View`. Hides the object selection reticle when the session is in `.ready` state if set to true. Example: ObjectCaptureView(session: mySession) .hideObjectReticle()

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

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
- [ObjectCaptureSession](objectcapturesession.md): A session object that monitors and controls image capture for photogrammetry.
- [ObjectCapturePointCloudView](objectcapturepointcloudview.md): Renders the current state of the point cloud from an object capture session.
