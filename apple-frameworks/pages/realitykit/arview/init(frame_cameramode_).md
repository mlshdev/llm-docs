> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/init(frame:cameramode:)](https://developer.apple.com/documentation/realitykit/arview/init(frame:cameramode:))

# init(frame:cameraMode:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Creates an AR view with the specified dimensions and camera mode.

## Declaration

```swift
@MainActor @preconcurrency convenience init(frame frameRect: CGRect, cameraMode: ARView.CameraMode)
```

## Parameters

- `frameRect`: The frame rectangle for the view, measured in points.
- `cameraMode`: An indication of whether to use the device’s camera or a virtual one.

## See Also

### Creating a view

- [init(frame:)](init%28frame_%29.md): Creates an AR view with the specified dimensions.
- [init(frame:cameraMode:automaticallyConfigureSession:)](init%28frame_cameramode_automaticallyconfiguresession_%29.md): Creates an AR view with the specified dimensions, camera mode, and session configuration state.
- [init(coder:)](init%28coder_%29.md): Creates an AR view initialized from data in a given decoder.
