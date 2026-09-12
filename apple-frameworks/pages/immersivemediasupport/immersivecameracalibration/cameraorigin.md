> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivecameracalibration/cameraorigin](https://developer.apple.com/documentation/immersivemediasupport/immersivecameracalibration/cameraorigin)

# ImmersiveCameraCalibration.CameraOrigin

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A type that holds the position information representing the origin from which to render the calibration in 3D space relative to the person’s eye.

## Declaration

```swift
struct CameraOrigin
```

<a id="overview"></a>

## Overview

Coordinates are in meters.

## Topics

### Initializers

- [init(left:right:)](cameraorigin/init%28left_right_%29.md)

### Type Properties

- [zero](cameraorigin/zero.md): The default immersive camera origin.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Calibration geometry

- [ImmersiveCameraCalibration.CameraTextureMapping](cameratexturemapping.md): A type that holds the matrices used for video frame texture mapping on the camera lens geometry.
- [ImmersiveCameraMeshCalibration](../immersivecamerameshcalibration.md): Calibration mesh geometry based on USDZ data.
