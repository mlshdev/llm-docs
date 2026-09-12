> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialx](https://developer.apple.com/documentation/coremedia/kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialx)

# kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialX (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
let kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialX: CFString
```

<a id="discussion"></a>

## Discussion

Specifies a three element polynomial for mapping x axis UV parameters with an adjustment using the equation `x' = polynomialX[0] + polynomialX[1]*x + polynomialX[2]*x^3`.

The values are in a CFArray of three CFNumbers(float) in the order polynomialX\[0\], polynomialX\[1\] & polynomialX\[2\]. The polynomial transform origin is at the center of the frame. The default values of elements of polynomialX\[\] are \[0.0, 1.0, 0.0\].

## See Also

### Constants

- [kCMFormatDescriptionExtension_CameraCalibrationDataLensCollection](kcmformatdescriptionextension_cameracalibrationdatalenscollection.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOrientationQuaternion](kcmformatdescriptioncameracalibration_extrinsicorientationquaternion.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOriginSource](kcmformatdescriptioncameracalibration_extrinsicoriginsource.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrix](kcmformatdescriptioncameracalibration_intrinsicmatrix.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixProjectionOffset](kcmformatdescriptioncameracalibration_intrinsicmatrixprojectionoffset.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixReferenceDimensions](kcmformatdescriptioncameracalibration_intrinsicmatrixreferencedimensions.md)
- [kCMFormatDescriptionCameraCalibration_LensAlgorithmKind](kcmformatdescriptioncameracalibration_lensalgorithmkind.md)
- [kCMFormatDescriptionCameraCalibration_LensDistortions](kcmformatdescriptioncameracalibration_lensdistortions.md)
- [kCMFormatDescriptionCameraCalibration_LensDomain](kcmformatdescriptioncameracalibration_lensdomain.md)
- [kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialY](kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialy.md)
- [kCMFormatDescriptionCameraCalibration_LensIdentifier](kcmformatdescriptioncameracalibration_lensidentifier.md)
- [kCMFormatDescriptionCameraCalibration_LensRole](kcmformatdescriptioncameracalibration_lensrole.md)
- [kCMFormatDescriptionCameraCalibration_RadialAngleLimit](kcmformatdescriptioncameracalibration_radialanglelimit.md)
- [kCMFormatDescriptionCameraCalibrationExtrinsicOriginSource_StereoCameraSystemBaseline](kcmformatdescriptioncameracalibrationextrinsicoriginsource_stereocamerasystembaseline.md)
- [kCMFormatDescriptionCameraCalibrationLensAlgorithmKind_ParametricLens](kcmformatdescriptioncameracalibrationlensalgorithmkind_parametriclens.md)

# kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialX (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern CFStringRef const kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialX;
```

<a id="discussion"></a>

## Discussion

Specifies a three element polynomial for mapping x axis UV parameters with an adjustment using the equation `x' = polynomialX[0] + polynomialX[1]*x + polynomialX[2]*x^3`.

The values are in a CFArray of three CFNumbers(float) in the order polynomialX\[0\], polynomialX\[1\] & polynomialX\[2\]. The polynomial transform origin is at the center of the frame. The default values of elements of polynomialX\[\] are \[0.0, 1.0, 0.0\].

## See Also

### Constants

- [kCMFormatDescriptionExtension_CameraCalibrationDataLensCollection](kcmformatdescriptionextension_cameracalibrationdatalenscollection.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOrientationQuaternion](kcmformatdescriptioncameracalibration_extrinsicorientationquaternion.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOriginSource](kcmformatdescriptioncameracalibration_extrinsicoriginsource.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrix](kcmformatdescriptioncameracalibration_intrinsicmatrix.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixProjectionOffset](kcmformatdescriptioncameracalibration_intrinsicmatrixprojectionoffset.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixReferenceDimensions](kcmformatdescriptioncameracalibration_intrinsicmatrixreferencedimensions.md)
- [kCMFormatDescriptionCameraCalibration_LensAlgorithmKind](kcmformatdescriptioncameracalibration_lensalgorithmkind.md)
- [kCMFormatDescriptionCameraCalibration_LensDistortions](kcmformatdescriptioncameracalibration_lensdistortions.md)
- [kCMFormatDescriptionCameraCalibration_LensDomain](kcmformatdescriptioncameracalibration_lensdomain.md)
- [kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialY](kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialy.md)
- [kCMFormatDescriptionCameraCalibration_LensIdentifier](kcmformatdescriptioncameracalibration_lensidentifier.md)
- [kCMFormatDescriptionCameraCalibration_LensRole](kcmformatdescriptioncameracalibration_lensrole.md)
- [kCMFormatDescriptionCameraCalibration_RadialAngleLimit](kcmformatdescriptioncameracalibration_radialanglelimit.md)
- [kCMFormatDescriptionCameraCalibrationExtrinsicOriginSource_StereoCameraSystemBaseline](kcmformatdescriptioncameracalibrationextrinsicoriginsource_stereocamerasystembaseline.md)
- [kCMFormatDescriptionCameraCalibrationLensAlgorithmKind_ParametricLens](kcmformatdescriptioncameracalibrationlensalgorithmkind_parametriclens.md)
