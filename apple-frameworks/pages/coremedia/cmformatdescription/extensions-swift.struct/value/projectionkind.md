> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/extensions-swift.struct/value/projectionkind](https://developer.apple.com/documentation/coremedia/cmformatdescription/extensions-swift.struct/value/projectionkind)

# CMFormatDescription.Extensions.Value.ProjectionKind

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
struct ProjectionKind
```

## Topics

### Type Properties

- [appleImmersiveVideo](projectionkind/appleimmersivevideo.md): Indicates a proprietary projection used for Apple Immersive Video.
- [equirectangular](projectionkind/equirectangular.md): Indicates equirectangular projection of a 360 degree sphere to a rectangular plane, where longitude and latitude of the sphere are mapped linearly to the x,y axes of the plane.
- [halfEquirectangular](projectionkind/halfequirectangular.md): Indicates half equirectangular projection of a 180 degree hemisphere to a rectangular plane, where longitude and latitude of the sphere are mapped linearly to the x,y axes of the plane
- [parametricImmersive](projectionkind/parametricimmersive.md): Indicates a projection described mathematically by a model of camera lens calibration parameters. Parameters may be found in lens calibration metadata in [cameraCalibrationDataLensCollection](../key/cameracalibrationdatalenscollection.md) with algorithmKind being [CMFormatDescription.Extensions.Value.CameraCalibrationDataLensCollection.AlgorithmKind.parametric](cameracalibrationdatalenscollection/algorithmkind/parametric.md).
- [rectilinear](projectionkind/rectilinear.md): Indicates rectilinear projection. Generally less than 90 degree field of view with no barrel distortion.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
