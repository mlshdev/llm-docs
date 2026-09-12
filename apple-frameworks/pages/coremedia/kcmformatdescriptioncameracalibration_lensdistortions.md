> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmformatdescriptioncameracalibration_lensdistortions](https://developer.apple.com/documentation/coremedia/kcmformatdescriptioncameracalibration_lensdistortions)

# kCMFormatDescriptionCameraCalibration_LensDistortions (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
let kCMFormatDescriptionCameraCalibration_LensDistortions: CFString
```

<a id="discussion"></a>

## Discussion

Specifies the first and second radial distortion coefficients(k1 and k2) used to correct the distortion that appeared as curved lines for straight lines and the first and second tangential distortion coefficients(p1 and p2) used to correct the distortion caused by a lens’s improper alignment of physical elements.

The values are in a CFArray of four CFNumbers in k1, k2, p1 and p2 order.

## See Also

### Constants

- [kCMFormatDescriptionExtension_CameraCalibrationDataLensCollection](kcmformatdescriptionextension_cameracalibrationdatalenscollection.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOrientationQuaternion](kcmformatdescriptioncameracalibration_extrinsicorientationquaternion.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOriginSource](kcmformatdescriptioncameracalibration_extrinsicoriginsource.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrix](kcmformatdescriptioncameracalibration_intrinsicmatrix.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixProjectionOffset](kcmformatdescriptioncameracalibration_intrinsicmatrixprojectionoffset.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixReferenceDimensions](kcmformatdescriptioncameracalibration_intrinsicmatrixreferencedimensions.md)
- [kCMFormatDescriptionCameraCalibration_LensAlgorithmKind](kcmformatdescriptioncameracalibration_lensalgorithmkind.md)
- [kCMFormatDescriptionCameraCalibration_LensDomain](kcmformatdescriptioncameracalibration_lensdomain.md)
- [kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialX](kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialx.md)
- [kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialY](kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialy.md)
- [kCMFormatDescriptionCameraCalibration_LensIdentifier](kcmformatdescriptioncameracalibration_lensidentifier.md)
- [kCMFormatDescriptionCameraCalibration_LensRole](kcmformatdescriptioncameracalibration_lensrole.md)
- [kCMFormatDescriptionCameraCalibration_RadialAngleLimit](kcmformatdescriptioncameracalibration_radialanglelimit.md)
- [kCMFormatDescriptionCameraCalibrationExtrinsicOriginSource_StereoCameraSystemBaseline](kcmformatdescriptioncameracalibrationextrinsicoriginsource_stereocamerasystembaseline.md)
- [kCMFormatDescriptionCameraCalibrationLensAlgorithmKind_ParametricLens](kcmformatdescriptioncameracalibrationlensalgorithmkind_parametriclens.md)

# kCMFormatDescriptionCameraCalibration_LensDistortions (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern CFStringRef const kCMFormatDescriptionCameraCalibration_LensDistortions;
```

<a id="discussion"></a>

## Discussion

Specifies the first and second radial distortion coefficients(k1 and k2) used to correct the distortion that appeared as curved lines for straight lines and the first and second tangential distortion coefficients(p1 and p2) used to correct the distortion caused by a lens’s improper alignment of physical elements.

The values are in a CFArray of four CFNumbers in k1, k2, p1 and p2 order.

## See Also

### Constants

- [kCMFormatDescriptionExtension_CameraCalibrationDataLensCollection](kcmformatdescriptionextension_cameracalibrationdatalenscollection.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOrientationQuaternion](kcmformatdescriptioncameracalibration_extrinsicorientationquaternion.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOriginSource](kcmformatdescriptioncameracalibration_extrinsicoriginsource.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrix](kcmformatdescriptioncameracalibration_intrinsicmatrix.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixProjectionOffset](kcmformatdescriptioncameracalibration_intrinsicmatrixprojectionoffset.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixReferenceDimensions](kcmformatdescriptioncameracalibration_intrinsicmatrixreferencedimensions.md)
- [kCMFormatDescriptionCameraCalibration_LensAlgorithmKind](kcmformatdescriptioncameracalibration_lensalgorithmkind.md)
- [kCMFormatDescriptionCameraCalibration_LensDomain](kcmformatdescriptioncameracalibration_lensdomain.md)
- [kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialX](kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialx.md)
- [kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialY](kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialy.md)
- [kCMFormatDescriptionCameraCalibration_LensIdentifier](kcmformatdescriptioncameracalibration_lensidentifier.md)
- [kCMFormatDescriptionCameraCalibration_LensRole](kcmformatdescriptioncameracalibration_lensrole.md)
- [kCMFormatDescriptionCameraCalibration_RadialAngleLimit](kcmformatdescriptioncameracalibration_radialanglelimit.md)
- [kCMFormatDescriptionCameraCalibrationExtrinsicOriginSource_StereoCameraSystemBaseline](kcmformatdescriptioncameracalibrationextrinsicoriginsource_stereocamerasystembaseline.md)
- [kCMFormatDescriptionCameraCalibrationLensAlgorithmKind_ParametricLens](kcmformatdescriptioncameracalibrationlensalgorithmkind_parametriclens.md)
