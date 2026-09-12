> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession](https://developer.apple.com/documentation/realitykit/photogrammetrysession)

# PhotogrammetrySession

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Manages the creation of a 3D model from a set of images.

## Declaration

```swift
class PhotogrammetrySession
```

## Mentioned In

- [Creating 3D objects from photographs](creating-3d-objects-from-photographs.md)

<a id="overview"></a>

## Overview

For more information on using [PhotogrammetrySession](photogrammetrysession.md), see [Creating 3D objects from photographs](creating-3d-objects-from-photographs.md).

## Topics

### Creating the session

- [init(input:configuration:)](photogrammetrysession/init%28input_configuration_%29-wo4e.md): Creates a session from a specified directory of images.
- [init(input:configuration:)](photogrammetrysession/init%28input_configuration_%29-7glmh.md): Creates a session from a sequence of samples.
- [isSupported](photogrammetrysession/issupported.md): Returns `true` if the current hardware supports Object Capture.

### Configuring the session

- [configuration](photogrammetrysession/configuration-swift.property.md): Readonly property containing the session configuration set in the construction.
- [PhotogrammetrySession.Configuration](photogrammetrysession/configuration-swift.struct.md): The configuration parameters for a photogrammetry session.

### Monitoring the session

- [activeRequests](photogrammetrysession/activerequests.md): The session’s active request objects.
- [isProcessing](photogrammetrysession/isprocessing.md): The session is actively processing requests.
- [outputs](photogrammetrysession/outputs-swift.property.md): Returns the outputs message stream which can be asynchronously iterated on.
- [PhotogrammetrySession.Output](photogrammetrysession/output.md): Status updates on the object-creation process.

### Controlling object creation

- [process(requests:)](photogrammetrysession/process%28requests_%29.md): Starts processing of the provided processing `requests`. Messages begin to be produced to the `output` publisher.
- [cancel()](photogrammetrysession/cancel%28%29.md): Requests cancellation of any running requests.

### Creating requests

- [PhotogrammetrySession.Request](photogrammetrysession/request.md): An object that configures a photogrammetry session reconstruction request.

### Obtaining results

- [PhotogrammetrySession.Result](photogrammetrysession/result.md): An object that holds the created 3D object.
- [PhotogrammetrySession.PointCloud](photogrammetrysession/pointcloud.md): A sparse point cloud data structure output as the payload of a `.pointCloud` request. A point cloud is an array of `PointCloud.Point` instances.
- [PhotogrammetrySession.Error](photogrammetrysession/error.md): The errors that can occur during reconstruction in a photogrammetry session.
- [PhotogrammetrySession.Pose](photogrammetrysession/pose.md): A 6DOF pose relative to the estimated coordinate system.
- [PhotogrammetrySession.Poses](photogrammetrysession/poses.md): Once initial photogrammetric calculations are complete, a data structure mapping the sample ID (or index if a folder was used) to the 6DOF algorithmically estimated pose of that sample is returned.

### Structures

- [PhotogrammetrySession.Limits](photogrammetrysession/limits-swift.struct.md): Data structure to observe hardware limits for reconstruction. Note that these are specific to the device on which the `PhotogrammetrySession` is run.
- [PhotogrammetrySession.Outputs](photogrammetrysession/outputs-swift.struct.md): An asynchronous sequence of session-related updates.

### Initializers

- [init(input:configuration:)](photogrammetrysession/init%28input_configuration_%29.md): Creates a session from a specified directory of images.

### Type Properties

- [limits](photogrammetrysession/limits-swift.type.property.md): Observer for the device-specific constant hardware limits for reconstruction.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Model creation

- [Capturing photographs for RealityKit Object Capture](capturing-photographs-for-realitykit-object-capture.md): Take high-quality images of objects to generate 3D models.
- [Creating 3D objects from photographs](creating-3d-objects-from-photographs.md): Construct virtual objects to use in your AR experiences.
- [Scanning objects using Object Capture](scanning-objects-using-object-capture.md): Implement a full scanning workflow for capturing objects on iOS devices.
- [Building an object reconstruction app](building-an-object-reconstruction-app.md): Reconstruct objects from user-selected input images by using photogrammetry.
- [Creating a photogrammetry command-line app](creating-a-photogrammetry-command-line-app.md): Generate 3D objects from images using RealityKit Object Capture.
- [Using object capture assets in RealityKit](using-object-capture-assets-in-realitykit.md): Create a chess game using RealityKit and assets created using Object Capture.
- [PhotogrammetrySample](photogrammetrysample.md): An object that represents one image and its corresponding metadata.
- [ObjectCaptureView](objectcaptureview.md): A view that guides a user through capturing images for object capture.
- [ObjectCaptureSession](objectcapturesession.md): A session object that monitors and controls image capture for photogrammetry.
- [ObjectCapturePointCloudView](objectcapturepointcloudview.md): Renders the current state of the point cloud from an object capture session.
