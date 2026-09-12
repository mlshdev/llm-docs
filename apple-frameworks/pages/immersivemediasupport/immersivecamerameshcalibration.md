> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivecamerameshcalibration](https://developer.apple.com/documentation/immersivemediasupport/immersivecamerameshcalibration)

# ImmersiveCameraMeshCalibration

**Framework:** Immersive Media Support  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Calibration mesh geometry based on USDZ data.

## Declaration

```swift
final class ImmersiveCameraMeshCalibration
```

<a id="overview"></a>

## Overview

This class is associated with the calibration type ‘usdzMesh’ and is used for calibration performed by camera lens provider using usdz.

## Topics

### Initializers

- [init(name:usdzData:)](immersivecamerameshcalibration/init%28name_usdzdata_%29.md): Creates an instance of `ImmersiveCameraMeshCalibration`.

### Instance Properties

- [name](immersivecamerameshcalibration/name.md)
- [usdzData](immersivecamerameshcalibration/usdzdata.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Calibration geometry

- [ImmersiveCameraCalibration.CameraOrigin](immersivecameracalibration/cameraorigin.md): A type that holds the position information representing the origin from which to render the calibration in 3D space relative to the person’s eye.
- [ImmersiveCameraCalibration.CameraTextureMapping](immersivecameracalibration/cameratexturemapping.md): A type that holds the matrices used for video frame texture mapping on the camera lens geometry.
