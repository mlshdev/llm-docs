> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cullconfiguration/frustum-swift.struct/init(from:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cullconfiguration/frustum-swift.struct/init(from:))

# init(from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a frustum by computing the culling planes for the given camera.

## Declaration

```swift
init(from camera: LowLevelRenderer.Camera)
```

## Parameters

- `camera`: The camera whose view volume defines the frustum.

<a id="discussion"></a>

## Discussion

Produces up to six outward-facing planes corresponding to the camera’s view volume. For perspective cameras with an infinite far plane, the far plane is omitted, yielding five planes.
