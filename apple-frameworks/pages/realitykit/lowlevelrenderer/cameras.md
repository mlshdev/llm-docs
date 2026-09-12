> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cameras](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cameras)

# cameras

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The array of active cameras.

## Declaration

```swift
final var cameras: LowLevelRenderer.CameraArray { get set }
```

<a id="discussion"></a>

## Discussion

Set `cameras.count` to the number of active cameras before calling [render(using:\_:)](render%28using___%29.md)..

## See Also

### Configuring cameras

- [LowLevelRenderer.CameraArray](cameraarray.md): A mutable, fixed-capacity array of camera values.
- [LowLevelRenderer.Camera](camera.md): The view and projection parameters for a single camera.
