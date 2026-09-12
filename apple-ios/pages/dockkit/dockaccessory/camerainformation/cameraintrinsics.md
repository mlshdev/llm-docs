> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/camerainformation/cameraintrinsics](https://developer.apple.com/documentation/dockkit/dockaccessory/camerainformation/cameraintrinsics)

# cameraIntrinsics

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

A matrix that represents the characteristics of the lens.

## Declaration

```swift
let cameraIntrinsics: matrix_float3x3?
```

## See Also

### Getting camera information

- [cameraPosition](cameraposition.md): The physical position of the capture device.
- [captureDevice](capturedevice.md): The capture device generating the video.
- [orientation](orientation.md): The orientation of the capture device.
- [referenceDimensions](referencedimensions.md): The size of the video frame.
