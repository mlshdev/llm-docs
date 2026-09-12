> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/cameramode-swift.enum/nonar](https://developer.apple.com/documentation/realitykit/arview/cameramode-swift.enum/nonar)

# ARView.CameraMode.nonAR

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

A mode that creates a fully virtual environment with no relationship to the real world.

## Declaration

```swift
case nonAR
```

<a id="discussion"></a>

## Discussion

Use this mode to create pure virtual 3D environments using [ARView](../../arview.md). RealityKit doesn’t place `.nonAR` content into the real world and, as a result, doesn’t require a front-facing device camera.

## See Also

### Setting the camera mode

- [ARView.CameraMode.ar](ar.md): A mode that uses the device’s camera to place virtual entities relative to the real world.
