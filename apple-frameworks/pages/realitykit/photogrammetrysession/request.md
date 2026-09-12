> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/request](https://developer.apple.com/documentation/realitykit/photogrammetrysession/request)

# PhotogrammetrySession.Request

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that configures a photogrammetry session reconstruction request.

## Declaration

```swift
enum Request
```

## Mentioned In

- [Creating 3D objects from photographs](../creating-3d-objects-from-photographs.md)

<a id="overview"></a>

## Overview

Create a [PhotogrammetrySession.Request](request.md) for each 3D object you want to construct from the same set of photographs. You might, for example, create a session with two requests, one to generate a low-resolution preview object in memory, and a second to generate a high-resolution final object saved to the file system.

Before creating an instance of this class,  check [isSupported](issupported.md) to ensure object capture is available on the current device.

For more information on using [PhotogrammetrySession](../photogrammetrysession.md), see [Creating 3D objects from photographs](../creating-3d-objects-from-photographs.md).

## Topics

### Creating the request

- [init(modelFile:)](request/init%28modelfile_%29.md): Creates an instance based on the contents of a USDZ file.

### Specifying the output

- [PhotogrammetrySession.Request.modelFile(url:detail:geometry:)](request/modelfile%28url_detail_geometry_%29.md): An object-creation request saved to a USDZ file or a folder (for OBJ output).
- [PhotogrammetrySession.Request.modelEntity(detail:geometry:)](request/modelentity%28detail_geometry_%29.md): An object-creation request stored in-memory for immediate display.
- [PhotogrammetrySession.Request.bounds](request/bounds.md): An object-creation request that returns a box the same size as the created model.
- [PhotogrammetrySession.Request.Detail](request/detail.md): Supported levels of detail for a request.

### Transforming the created model

- [PhotogrammetrySession.Request.Geometry](request/geometry.md): An object that holds a bounding box and transformation data for a request.

### Enumeration Cases

- [PhotogrammetrySession.Request.pointCloud](request/pointcloud.md): The raw detected points from the pictures with no polygons connecting them.
- [PhotogrammetrySession.Request.poses](request/poses.md): Requests the estimated pose of the camera in each shot (relative to the common estimated coordinate system shared with the `.bounds` request).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
