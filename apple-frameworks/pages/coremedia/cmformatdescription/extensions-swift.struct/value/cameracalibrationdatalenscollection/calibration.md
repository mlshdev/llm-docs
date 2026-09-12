> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/extensions-swift.struct/value/cameracalibrationdatalenscollection/calibration](https://developer.apple.com/documentation/coremedia/cmformatdescription/extensions-swift.struct/value/cameracalibrationdatalenscollection/calibration)

# CMFormatDescription.Extensions.Value.CameraCalibrationDataLensCollection.Calibration

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
struct Calibration
```

## Topics

### Initializers

- [init(algorithmKind:identifier:domain:role:distortionCoefficients:xFrameAdjustmentsPolynomial:yFrameAdjustmentsPolynomial:radialAngleLimit:intrinsicMatrix:intrinsicMatrixProjectionOffset:intrinsicMatrixReferenceDimensions:extrinsicOriginSource:extrinsicOrientationQuaternion:)](calibration/init%28algorithmkind_identifier_domain_role_distortioncoefficients_xframeadjustmentspolynomial_yframeadjustmentspolynomial_radialanglelimit_intrinsicmatrix_intrinsicmatrixprojectiono~9843c46f.md)

### Instance Properties

- [algorithmKind](calibration/algorithmkind.md): The camera calibration methodology.
- [distortionCoefficients](calibration/distortioncoefficients.md): The first and second radial distortion coefficients (k1 and k2) used to correct the distortion that appeared as curved lines for straight lines and the first and second tangential distortion coefficients (p1 and p2) used to correct the distortion caused by a lens’s improper alignment of physical elements.
- [domain](calibration/domain.md): Specifies the kind of lens (e.g., color).
- [extrinsicOrientationQuaternion](calibration/extrinsicorientationquaternion.md): Camera’s orientation to a world or scene coordinate system. The orientation value is a unit quaternion (ix, iy, and iz) instead of the classical 3x3 matrix.
- [extrinsicOriginSource](calibration/extrinsicoriginsource.md): Identifies how the origin of the camera system’s extrinsics are determined.
- [identifier](calibration/identifier.md): Unique number associated with a lens.
- [intrinsicMatrix](calibration/intrinsicmatrix.md): The 3x3 camera intrinsic matrix for camera calibration.
- [intrinsicMatrixProjectionOffset](calibration/intrinsicmatrixprojectionoffset.md): Offset of the point of perspective relative to the rectilinear projection.
- [intrinsicMatrixReferenceDimensions](calibration/intrinsicmatrixreferencedimensions.md): Image dimensions to which the camera’s intrinsic matrix values are relative.
- [radialAngleLimit](calibration/radialanglelimit.md): Outer limit of the calibration validity in degrees of angle eccentric from the optical axis.
- [role](calibration/role.md): Specifies the particular use of the lens in the camera system (e.g., left or right for a stereo system).
- [xFrameAdjustmentsPolynomial](calibration/xframeadjustmentspolynomial.md): Three element polynomial for mapping x axis UV parameters with an adjustment using the equation `x' = polynomialX[0] + polynomialX[1]*x + polynomialX[2]*x^3`.
- [yFrameAdjustmentsPolynomial](calibration/yframeadjustmentspolynomial.md): Three element polynomial for mapping y axis UV parameters with an adjustment using the equation `y' = polynomialY[0] + polynomialY[1]*y + polynomialY[2]*y^3`.

## Relationships

### Conforms To

- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
