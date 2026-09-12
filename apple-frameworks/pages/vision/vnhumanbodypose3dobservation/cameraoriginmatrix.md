> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/cameraoriginmatrix](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/cameraoriginmatrix)

# cameraOriginMatrix (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A transform from the skeleton hip to the camera.

## Declaration

```swift
var cameraOriginMatrix: simd_float4x4 { get }
```

## Mentioned In

- [Identifying 3D human body poses in images](../identifying-3d-human-body-poses-in-images.md)

## See Also

### Getting the Camera Position

- [cameraRelativePosition(\_:)](camerarelativeposition%28__%29.md): Returns a position relative to the camera for the body joint you specify.

# cameraOriginMatrix (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A transform from the skeleton hip to the camera.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float4x4 cameraOriginMatrix;
```

## Mentioned In

- [Identifying 3D human body poses in images](../identifying-3d-human-body-poses-in-images.md)

## See Also

### Getting the Camera Position

- [getCameraRelativePosition:forJointName:error:](getcamerarelativeposition_forjointname_error_.md): Gets a position relative to the camera for the body joint you specify.
