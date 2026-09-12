> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cameraarray](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cameraarray)

# LowLevelRenderer.CameraArray

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A mutable, fixed-capacity array of camera values.

## Declaration

```swift
struct CameraArray
```

<a id="overview"></a>

## Overview

Set `count` to the number of active cameras before calling [render(using:\_:)](render%28using___%29.md).

## Topics

### Creating a camera array

- [init(cameras:)](cameraarray/init%28cameras_%29.md): Creates a camera array populated with the given cameras.

### Accessing the camera count

- [count](cameraarray/count.md): The number of active cameras.
- [maxCount](cameraarray/maxcount.md): The maximum number of cameras supported.

### Subscripts

- [subscript(\_:)](cameraarray/subscript%28__%29.md): Returns or sets the camera at the given index.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Configuring cameras

- [cameras](cameras.md): The array of active cameras.
- [LowLevelRenderer.Camera](camera.md): The view and projection parameters for a single camera.
