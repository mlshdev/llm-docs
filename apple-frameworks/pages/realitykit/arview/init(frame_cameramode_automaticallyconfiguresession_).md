> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/init(frame:cameramode:automaticallyconfiguresession:)](https://developer.apple.com/documentation/realitykit/arview/init(frame:cameramode:automaticallyconfiguresession:))

# init(frame:cameraMode:automaticallyConfigureSession:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Creates an AR view with the specified dimensions, camera mode, and session configuration state.

## Declaration

```swift
@MainActor @preconcurrency init(frame frameRect: CGRect, cameraMode: ARView.CameraMode, automaticallyConfigureSession: Bool)
```

## Parameters

- `frameRect`: The frame rectangle for the view, measured in points.
- `cameraMode`: An indication of whether to use the device’s camera or a virtual one.
- `automaticallyConfigureSession`: An indication of whether to use an AR session with configuration that’s updated automatically based on camera mode and scene anchors. Set this value to `false` if you want to run the session manually with your own configuration.

## See Also

### Creating a view

- [init(frame:)](init%28frame_%29.md): Creates an AR view with the specified dimensions.
- [init(coder:)](init%28coder_%29.md): Creates an AR view initialized from data in a given decoder.
- [init(frame:cameraMode:)](init%28frame_cameramode_%29.md): Deprecated. Creates an AR view with the specified dimensions and camera mode.
