> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmformatdescriptioncameracalibration_intrinsicmatrix](https://developer.apple.com/documentation/coremedia/kcmformatdescriptioncameracalibration_intrinsicmatrix)

# kCMFormatDescriptionCameraCalibration_IntrinsicMatrix (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
let kCMFormatDescriptionCameraCalibration_IntrinsicMatrix: CFString
```

<a id="discussion"></a>

## Discussion

Specifies the 3x3 camera intrinsic matrix for camera calibration.

Camera intrinsic matrix is a CFData containing a matrix_float3x3, which is column-major. Each element is in IEEE754 native-endian 32-bit floating point. It has the following contents: fx	s	cx 0	fy	cy 0	0	1 fx and fy are the focal length in pixels. For square pixels, they will have the same value. cx and cy are the coordinates of the principal point. The origin is the upper left of the frame. s is an optional skew factor.

## See Also

### Constants

- [kCMFormatDescriptionExtension_CameraCalibrationDataLensCollection](kcmformatdescriptionextension_cameracalibrationdatalenscollection.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOrientationQuaternion](kcmformatdescriptioncameracalibration_extrinsicorientationquaternion.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOriginSource](kcmformatdescriptioncameracalibration_extrinsicoriginsource.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixProjectionOffset](kcmformatdescriptioncameracalibration_intrinsicmatrixprojectionoffset.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixReferenceDimensions](kcmformatdescriptioncameracalibration_intrinsicmatrixreferencedimensions.md)
- [kCMFormatDescriptionCameraCalibration_LensAlgorithmKind](kcmformatdescriptioncameracalibration_lensalgorithmkind.md)
- [kCMFormatDescriptionCameraCalibration_LensDistortions](kcmformatdescriptioncameracalibration_lensdistortions.md)
- [kCMFormatDescriptionCameraCalibration_LensDomain](kcmformatdescriptioncameracalibration_lensdomain.md)
- [kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialX](kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialx.md)
- [kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialY](kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialy.md)
- [kCMFormatDescriptionCameraCalibration_LensIdentifier](kcmformatdescriptioncameracalibration_lensidentifier.md)
- [kCMFormatDescriptionCameraCalibration_LensRole](kcmformatdescriptioncameracalibration_lensrole.md)
- [kCMFormatDescriptionCameraCalibration_RadialAngleLimit](kcmformatdescriptioncameracalibration_radialanglelimit.md)
- [kCMFormatDescriptionCameraCalibrationExtrinsicOriginSource_StereoCameraSystemBaseline](kcmformatdescriptioncameracalibrationextrinsicoriginsource_stereocamerasystembaseline.md)
- [kCMFormatDescriptionCameraCalibrationLensAlgorithmKind_ParametricLens](kcmformatdescriptioncameracalibrationlensalgorithmkind_parametriclens.md)

# kCMFormatDescriptionCameraCalibration_IntrinsicMatrix (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern CFStringRef const kCMFormatDescriptionCameraCalibration_IntrinsicMatrix;
```

<a id="discussion"></a>

## Discussion

Specifies the 3x3 camera intrinsic matrix for camera calibration.

Camera intrinsic matrix is a CFData containing a matrix_float3x3, which is column-major. Each element is in IEEE754 native-endian 32-bit floating point. It has the following contents: fx	s	cx 0	fy	cy 0	0	1 fx and fy are the focal length in pixels. For square pixels, they will have the same value. cx and cy are the coordinates of the principal point. The origin is the upper left of the frame. s is an optional skew factor.

## See Also

### Constants

- [kCMFormatDescriptionExtension_CameraCalibrationDataLensCollection](kcmformatdescriptionextension_cameracalibrationdatalenscollection.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOrientationQuaternion](kcmformatdescriptioncameracalibration_extrinsicorientationquaternion.md)
- [kCMFormatDescriptionCameraCalibration_ExtrinsicOriginSource](kcmformatdescriptioncameracalibration_extrinsicoriginsource.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixProjectionOffset](kcmformatdescriptioncameracalibration_intrinsicmatrixprojectionoffset.md)
- [kCMFormatDescriptionCameraCalibration_IntrinsicMatrixReferenceDimensions](kcmformatdescriptioncameracalibration_intrinsicmatrixreferencedimensions.md)
- [kCMFormatDescriptionCameraCalibration_LensAlgorithmKind](kcmformatdescriptioncameracalibration_lensalgorithmkind.md)
- [kCMFormatDescriptionCameraCalibration_LensDistortions](kcmformatdescriptioncameracalibration_lensdistortions.md)
- [kCMFormatDescriptionCameraCalibration_LensDomain](kcmformatdescriptioncameracalibration_lensdomain.md)
- [kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialX](kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialx.md)
- [kCMFormatDescriptionCameraCalibration_LensFrameAdjustmentsPolynomialY](kcmformatdescriptioncameracalibration_lensframeadjustmentspolynomialy.md)
- [kCMFormatDescriptionCameraCalibration_LensIdentifier](kcmformatdescriptioncameracalibration_lensidentifier.md)
- [kCMFormatDescriptionCameraCalibration_LensRole](kcmformatdescriptioncameracalibration_lensrole.md)
- [kCMFormatDescriptionCameraCalibration_RadialAngleLimit](kcmformatdescriptioncameracalibration_radialanglelimit.md)
- [kCMFormatDescriptionCameraCalibrationExtrinsicOriginSource_StereoCameraSystemBaseline](kcmformatdescriptioncameracalibrationextrinsicoriginsource_stereocamerasystembaseline.md)
- [kCMFormatDescriptionCameraCalibrationLensAlgorithmKind_ParametricLens](kcmformatdescriptioncameracalibrationlensalgorithmkind_parametriclens.md)
