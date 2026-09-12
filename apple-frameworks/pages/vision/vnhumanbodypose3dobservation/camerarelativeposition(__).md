> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/camerarelativeposition(_:)](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/camerarelativeposition(_:))

# cameraRelativePosition(\_:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Returns a position relative to the camera for the body joint you specify.

## Declaration

```swift
@nonobjc func cameraRelativePosition(_ jointName: VNHumanBodyPose3DObservation.JointName) throws -> simd_float4x4
```

## Parameters

- `jointName`: The name of the human body joint.

<a id="return-value"></a>

## Return Value

The joint position, in meters.

## Mentioned In

- [Identifying 3D human body poses in images](../identifying-3d-human-body-poses-in-images.md)

## See Also

### Getting the Camera Position

- [cameraOriginMatrix](cameraoriginmatrix.md): A transform from the skeleton hip to the camera.
