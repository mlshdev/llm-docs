> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysample](https://developer.apple.com/documentation/realitykit/photogrammetrysample)

# PhotogrammetrySample

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that represents one image and its corresponding metadata.

## Declaration

```swift
struct PhotogrammetrySample
```

<a id="overview"></a>

## Overview

This object holds a single input image for constructing 3D objects from a series of photographs, along with the image’s metadata, such as EXIF data or information about a depth buffer, an object mask, or gravity vector.

Use a  unique [id](photogrammetrysample/id.md) for each [PhotogrammetrySession](photogrammetrysession.md) so RealityKit can distinguish different [PhotogrammetrySample](photogrammetrysample.md) instances in status updates, error messages, and other contexts.

## Topics

### Creating a sample

- [init(id:image:)](photogrammetrysample/init%28id_image_%29.md): Creates a new sample.

### Describing the sample

- [image](photogrammetrysample/image.md): The image data for this sample.
- [metadata](photogrammetrysample/metadata.md): An image’s EXIF metadata.
- [depthDataMap](photogrammetrysample/depthdatamap.md): The image’s depth data.
- [gravity](photogrammetrysample/gravity.md): An image’s gravity vector.
- [objectMask](photogrammetrysample/objectmask.md): The image’s object mask.

### Structures

- [PhotogrammetrySample.Camera](photogrammetrysample/camera-swift.struct.md): A read-only data structure representing metadata about the camera used to capture the RGB `image`. All transforms are tagged by the `sessionID` and are only commensurate between samples with the same `sessionID`.

### Initializers

- [init(contentsOf:)](photogrammetrysample/init%28contentsof_%29.md): Asynchronously loads the image file located at URL into a `PhotogrammetrySample` with as many data fields populated as can be found in the target file. HEIC images captured with the `ObjectCaptureSession` will contain more advanced data fields beyond just the image. Which properties are populated depends on how the images were captured. The `id` of the sample will be automatically created to be unique to the current process. Throws: If `url` does not point to a file URL or there is a problem loading `url`.

### Instance Properties

- [boundingBox](photogrammetrysample/boundingbox.md): The bounding box of the scene or object being captured, represented as the transform of a unit cube centered at the origin into an oriented box in the session’s world coordinate system. The transform can be factored as an SRT into the scale (axis length), orientation (rotation), and center (translation) using `Transform(matrix:)`.
- [camera](photogrammetrysample/camera-swift.property.md): Optional information about the camera that captured the image.
- [captureTime](photogrammetrysample/capturetime.md): The capture time of the sample.
- [depthConfidenceMap](photogrammetrysample/depthconfidencemap.md): Depth confidence map associated with the `depthDataMap` if available. Pixel format is `kCVPixelFormatType_OneComponent8`.
- [id](photogrammetrysample/id.md): Unique identifier for the sample. This `id` *must* be in the domain \[0, 2147483647\].
- [orientation](photogrammetrysample/orientation.md): The orientation at which the `image` pixel buffer is intended to be displayed in a 2D UI.
- [scanPassID](photogrammetrysample/scanpassid.md): If captured with `ObjectCaptureSession`, this will contain the ID of the scan pass within the given `sessionID` in which this sample was captured. Each new scan pass within a specific `sessionID` will have a different `scanPassID` which can be used to differentiate any associated `boundingBox` data since a new bounding box may have been created after flipping an object and starting a new pass. Note that `scanPassID` can only be equated if the `sessionID` is the same – if the `sessionID` of two samples is different but the `scanPassID` is the same, these are semantically different coordinate systems and data between them is not commensurate. Note that for samples not captured with `ObjectCaptureSession` (where `sessionID` is `nil`), this `scanPassID` is also `nil`.
- [sessionID](photogrammetrysample/sessionid.md): If captured with `ObjectCaptureSession`, this will contain a UUID associated with the session. Note that any `boundingBox` or camera pose information will only be in a consistent coordinate system if the `sessionID` for those samples is the same. In this sense, the `sessionID` is a tag that defines the coordinate system of all poses and transforms when comparing samples from multiple captures.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
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
- [PhotogrammetrySession](photogrammetrysession.md): Manages the creation of a 3D model from a set of images.
- [ObjectCaptureView](objectcaptureview.md): A view that guides a user through capturing images for object capture.
- [ObjectCaptureSession](objectcapturesession.md): A session object that monitors and controls image capture for photogrammetry.
- [ObjectCapturePointCloudView](objectcapturepointcloudview.md): Renders the current state of the point cloud from an object capture session.
