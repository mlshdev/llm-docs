> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivecameracalibration/calibrationtype](https://developer.apple.com/documentation/immersivemediasupport/immersivecameracalibration/calibrationtype)

# ImmersiveCameraCalibration.CalibrationType

**Framework:** Immersive Media Support  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A value that represents the calibration type used to generate camera calibration geometry.

## Declaration

```swift
enum CalibrationType
```

## Topics

### Enumeration Cases

- [ImmersiveCameraCalibration.CalibrationType.immersiveCameraLensDefinition(\_:)](calibrationtype/immersivecameralensdefinition%28__%29.md): A value that represents a calibration type that uses coefficients to present each camera lens.
- [ImmersiveCameraCalibration.CalibrationType.usdzMesh(\_:)](calibrationtype/usdzmesh%28__%29.md): A value that represents a calibration type that uses a calibration mesh containing the calibration for each lens represented as a mesh inside a USDZ file.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Calibration configuration

- [ImmersiveCameraLensDefinition](../immersivecameralensdefinition.md): This type holds the ILPD lens configuration parameters to generate a camera calibration type instance.
