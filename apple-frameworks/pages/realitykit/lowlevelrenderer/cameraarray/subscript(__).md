> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cameraarray/subscript(_:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cameraarray/subscript(_:))

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns or sets the camera at the given index.

## Declaration

```swift
subscript(index: Int) -> LowLevelRenderer.Camera { get set }
```

## Parameters

- `index`: The zero-based index of the camera to access.

<a id="return-value"></a>

## Return Value

The [LowLevelRenderer.Camera](../camera.md) at `index`.
