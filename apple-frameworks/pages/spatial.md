> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial](https://developer.apple.com/documentation/spatial)

# Spatial (Swift)

**Framework:** Spatial  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Create and manipulate 3D mathematical primitives.

<a id="overview"></a>

## Overview

The Spatial module is a lightweight 3D mathematical library that provides a simple API for working with 3D primitives. Much of its functionality is similar to the 2D geometry support in Core Graphics, but in three dimensions.

## Topics

### Data structures

- [Vector3D](spatial/vector3d.md): A three-element vector.
- [Vector3DFloat](spatial/vector3dfloat.md): A single-precision structure that defines a three-element vector
- [Axis3D](spatial/axis3d.md): Constants that describe an axis.

### 2D primitives

- [Angle2D](spatial/angle2d.md): A geometric angle with a value you access in either radians or degrees.
- [Angle2DFloat](spatial/angle2dfloat.md): A single-precision geometric angle whose value you access in either radians or degrees.

### 3D primitives

- [Point3D](spatial/point3d.md): A point in a 3D coordinate system.
- [Point3DFloat](spatial/point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [Size3D](spatial/size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
- [Size3DFloat](spatial/size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [Rect3D](spatial/rect3d.md): A rectangle in a 3D coordinate system.
- [Rect3DFloat](spatial/rect3dfloat.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [Rotation3D](spatial/rotation3d.md): A rotation in three dimensions.
- [Rotation3DFloat](spatial/rotation3dfloat.md): A single-precision structure that represents a rotation in three dimensions.
- [RotationAxis3D](spatial/rotationaxis3d.md): A 3D rotation axis.
- [RotationAxis3DFloat](spatial/rotationaxis3dfloat.md): A 3D axis.
- [Pose3D](spatial/pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [Pose3DFloat](spatial/pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3D](spatial/scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [ScaledPose3DFloat](spatial/scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](spatial/sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SphericalCoordinates3DFloat](spatial/sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [Ray3D](spatial/ray3d.md): A ray in a 3D coordinate system.
- [Ray3DFloat](spatial/ray3dfloat.md): A single-precision structure that contains the origin and direction of a 3D ray.

### Affine and projective transforms

- [AffineTransform3D](spatial/affinetransform3d.md): A 3D affine transformation matrix.
- [AffineTransform3DFloat](spatial/affinetransform3dfloat.md)
- [ProjectiveTransform3D](spatial/projectivetransform3d.md): A 3D projective transformation matrix.
- [ProjectiveTransform3DFloat](spatial/projectivetransform3dfloat.md): A single-precision 3D projective transformation matrix.

### Converting between coordinate spaces

- [CoordinateSpace3D](spatial/coordinatespace3d.md): A type that represents a coordinate space which you can use to convert values to and from other coordinate spaces.
- [CoordinateSpace3DFloat](spatial/coordinatespace3dfloat.md)
- [CoordinateSpaceValue3D](spatial/coordinatespacevalue3d.md): An opaque value which can be resolved to a concrete value in a `CoordinateSpace3D`
- [ProjectiveTransformable3D](spatial/projectivetransformable3d.md)
- [ProjectiveTransformable3DFloat](spatial/projectivetransformable3dfloat.md)
- [WorldReferenceCoordinateSpace](spatial/worldreferencecoordinatespace.md): A coordinate space that represents a world reference point.

### Applying trigonometric functions

- [cos(\_:)](spatial/cos%28__%29-609v4.md)
- [cos(\_:)](spatial/cos%28__%29-79fxe.md)
- [cosh(\_:)](spatial/cosh%28__%29-6cg6v.md)
- [cosh(\_:)](spatial/cosh%28__%29-9mmhn.md)
- [sin(\_:)](spatial/sin%28__%29-46su7.md)
- [sin(\_:)](spatial/sin%28__%29-5tddt.md)
- [sinh(\_:)](spatial/sinh%28__%29-4m7ds.md)
- [sinh(\_:)](spatial/sinh%28__%29-8kigy.md)
- [tan(\_:)](spatial/tan%28__%29-1sjgu.md)
- [tan(\_:)](spatial/tan%28__%29-9x99s.md)
- [tanh(\_:)](spatial/tanh%28__%29-1f341.md)
- [tanh(\_:)](spatial/tanh%28__%29-5yozs.md)

### Protocols

- [Primitive3D](spatial/primitive3d.md): A set of methods common to Spatial primitives.
- [Rotatable3D](spatial/rotatable3d.md): A set of methods that defines the interface to rotate Spatial entities.
- [Scalable3D](spatial/scalable3d.md): A set of methods that defines the interface to scale Spatial entities.
- [Shearable3D](spatial/shearable3d.md): A set of methods that defines the interface to shear Spatial entities.
- [Translatable3D](spatial/translatable3d.md): A set of methods that defines the interface to translate Spatial entities.
- [Volumetric](spatial/volumetric.md): A set of methods for working with Spatial primitives with volume.
- [ClampableWithinRectProtocol](spatial/clampablewithinrectprotocol.md): A set of methods that defines the interface for Spatial entities that can be clamped to a volume.
- [Primitive3DProtocol](spatial/primitive3dprotocol.md): A set of methods common to Spatial primitives.
- [Rotatable3DProtocol](spatial/rotatable3dprotocol.md): A set of methods that defines the interface for Spatial entities that can rotate.
- [Scalable3DProtocol](spatial/scalable3dprotocol.md): A set of methods that defines the interface for Spatial entities that can scale.
- [Shearable3DProtocol](spatial/shearable3dprotocol.md): A set of methods that defines the interface for Spatial entities that can shear.
- [SpatialTypeProtocol](spatial/spatialtypeprotocol.md)
- [Transform3DProtocol](spatial/transform3dprotocol.md): A set of methods that are common to transforms.
- [Translatable3DProtocol](spatial/translatable3dprotocol.md): A set of methods that defines the interface for Spatial entities that can translate.
- [VolumetricProtocol](spatial/volumetricprotocol.md): A set of methods for working with Spatial primitives with volume.

### Macros

- [Macros & Global Variables](spatial/spatial-macros.md)

### Structures

- [EulerAnglesFloat](spatial/euleranglesfloat.md)

### Enumerations

- [AxisWithFactorsFloat](spatial/axiswithfactorsfloat.md): The axis of a shear transform.

# Spatial (Objective-C)

**Framework:** Spatial  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Create and manipulate 3D mathematical primitives.

<a id="overview"></a>

## Overview

The Spatial module is a lightweight 3D mathematical library that provides a simple API for working with 3D primitives. Much of its functionality is similar to the 2D geometry support in Core Graphics, but in three dimensions.

## Topics

### Data structures

- [SPVector3D](spatial/vector3d.md): A three-element vector.
- [SPVector3DFloat](spatial/vector3dfloat.md): A single-precision structure that defines a three-element vector
- [SPAxis](spatial/axis3d.md): Constants that describe an axis.

### 2D primitives

- [SPAngle](spatial/angle2d.md): A geometric angle with a value you access in either radians or degrees.
- [SPAngleFloat](spatial/angle2dfloat.md): A single-precision geometric angle whose value you access in either radians or degrees.

### 3D primitives

- [SPPoint3D](spatial/point3d.md): A point in a 3D coordinate system.
- [SPPoint3DFloat](spatial/point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [SPSize3D](spatial/size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
- [SPSize3DFloat](spatial/size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [SPRect3D](spatial/rect3d.md): A rectangle in a 3D coordinate system.
- [SPRect3DFloat](spatial/rect3dfloat.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [SPRotation3D](spatial/rotation3d.md): A rotation in three dimensions.
- [SPRotation3DFloat](spatial/rotation3dfloat.md): A single-precision structure that represents a rotation in three dimensions.
- [SPRotationAxis3D](spatial/rotationaxis3d.md): A 3D rotation axis.
- [SPRotationAxis3DFloat](spatial/rotationaxis3dfloat.md): A 3D axis.
- [SPPose3D](spatial/pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [SPPose3DFloat](spatial/pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [SPScaledPose3D](spatial/scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DFloat](spatial/scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](spatial/sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPSphericalCoordinates3DFloat](spatial/sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPRay3D](spatial/ray3d.md): A ray in a 3D coordinate system.
- [SPRay3DFloat](spatial/ray3dfloat.md): A single-precision structure that contains the origin and direction of a 3D ray.

### Affine and projective transforms

- [SPAffineTransform3D](spatial/affinetransform3d.md): A 3D affine transformation matrix.
- [SPAffineTransform3DFloat](spatial/affinetransform3dfloat.md)
- [SPProjectiveTransform3D](spatial/projectivetransform3d.md): A 3D projective transformation matrix.
- [SPProjectiveTransform3DFloat](spatial/projectivetransform3dfloat.md): A single-precision 3D projective transformation matrix.

### Macros

- [Macros & Global Variables](spatial/spatial-macros.md)
- [SPDefaultToleranceFloat](spatial/spdefaulttolerancefloat.md)

### Structures

- [SPEulerAnglesFloat](spatial/euleranglesfloat.md)

### Variables

- [SPRotation3DFloatIdentity](spatial/rotation3dfloat/identity.md): A single-precision structure that represents a rotation in three dimensions.
- [SPRotationAxis3DFloatZero](spatial/rotationaxis3dfloat/zero.md): A 3D axis.
- [SPAffineTransform3DFloatIdentity](spatial/spaffinetransform3dfloatidentity.md)
- [SPAffineTransform3DFloatInvalid](spatial/spaffinetransform3dfloatinvalid.md)
- [SPAffineTransform3DIdentity](spatial/spaffinetransform3didentity.md): The identity affine transform.
- [SPAngleFloatZero](spatial/spanglefloatzero.md): A single-precision geometric angle whose value you access in either radians or degrees.
- [SPPoint3DFloatInfinity](spatial/sppoint3dfloatinfinity.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [SPPoint3DFloatZero](spatial/sppoint3dfloatzero.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [SPPose3DFloatIdentity](spatial/sppose3dfloatidentity.md): A single-precision structure that contains a position and rotation.
- [SPPose3DFloatInvalid](spatial/sppose3dfloatinvalid.md): A single-precision structure that contains a position and rotation.
- [SPProjectiveTransform3DFloatIdentity](spatial/spprojectivetransform3dfloatidentity.md): A single-precision 3D projective transformation matrix.
- [SPProjectiveTransform3DFloatInvalid](spatial/spprojectivetransform3dfloatinvalid.md): A single-precision 3D projective transformation matrix.
- [SPProjectiveTransform3DIdentity](spatial/spprojectivetransform3didentity.md): The identity projective transform.
- [SPRay3DFloatInfinity](spatial/spray3dfloatinfinity.md)
- [SPRay3DFloatZero](spatial/spray3dfloatzero.md)
- [SPRect3DFloatInfinity](spatial/sprect3dfloatinfinity.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [SPRect3DFloatNull](spatial/sprect3dfloatnull.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [SPRect3DFloatZero](spatial/sprect3dfloatzero.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [SPRotation3DFloatInvalid](spatial/sprotation3dfloatinvalid.md): A single-precision structure that represents a rotation in three dimensions.
- [SPScaledPose3DFloatIdentity](spatial/spscaledpose3dfloatidentity.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DFloatInvalid](spatial/spscaledpose3dfloatinvalid.md): A structure that contains a position, rotation, and scale.
- [SPSize3DFloatInfinity](spatial/spsize3dfloatinfinity.md): A single-precision structure that contains width, height, and depth values.
- [SPSize3DFloatInvalid](spatial/spsize3dfloatinvalid.md): A single-precision structure that contains width, height, and depth values.
- [SPSize3DFloatZero](spatial/spsize3dfloatzero.md): A single-precision structure that contains width, height, and depth values.
- [SPVector3DFloatInfinity](spatial/spvector3dfloatinfinity.md): A single-precision structure that defines a three-element vector
- [SPVector3DFloatZero](spatial/spvector3dfloatzero.md): A single-precision structure that defines a three-element vector

### Functions

- [SPAffineTransform3DFloatMakeWith4x3Matrix](spatial/affinetransform3dfloat/init%28__%29-5ajh4.md)
- [SPAffineTransform3DFloatMakeWithTruncatedProjective](spatial/affinetransform3dfloat/init%28truncating_%29-1jfno.md)
- [SPAffineTransform3DFloatMakeWithTruncated4x4Matrix](spatial/affinetransform3dfloat/init%28truncating_%29-8jfn6.md)
- [SPAffineTransform3DFloatIsInvertible](spatial/affinetransform3dfloat/isinvertible.md)
- [SPAffineTransform3DFloatGet3x3Matrix](spatial/affinetransform3dfloat/matrix3x3.md)
- [SPAffineTransform3DFloatGet4x4Matrix](spatial/affinetransform3dfloat/matrix4x4.md)
- [SPAffineTransform3DFloatGetScale](spatial/affinetransform3dfloat/scale.md)
- [SPAngleFloatMakeWithRadians](spatial/angle2dfloat/init%28radians_%29-4uwyj.md)
- [SPPoint3DFloatRotateByQuaternionAroundPoint](spatial/point3dfloat/rotated%28by_around_%29-1ejmw.md)
- [SPPoint3DFloatRotateAroundPoint](spatial/point3dfloat/rotated%28by_around_%29-5xwwi.md)
- [SPProjectiveTransform3DFloatMakeWith4x4Matrix](spatial/projectivetransform3dfloat/init%28__%29-56itt.md): Returns a new transform from the specified 4 x 4 matrix.
- [SPProjectiveTransform3DFloatMakeWithAffine](spatial/projectivetransform3dfloat/init%28__%29-6ffxa.md): Returns a new transform from the specified affine transform.
- [SPProjectiveTransform3DFloatMakeWithRightHandPerspective](spatial/projectivetransform3dfloat/init%28fovy_aspectratio_nearz_farz_%29.md)
- [SPProjectiveTransform3DFloatMakeWithRightHandPerspective](spatial/projectivetransform3dfloat/init%28fovy_aspectratio_nearz_farz_reversez_%29.md)
- [SPProjectiveTransform3DFloatMakeFromTangents](spatial/projectivetransform3dfloat/init%28lefttangent_righttangent_toptangent_bottomtangent_nearz_farz_reversez_%29.md)
- [SPProjectiveTransform3DFloatIs3DFloatProjection](spatial/projectivetransform3dfloat/is3dfloatprojection%28%29.md)
- [SPProjectiveTransform3DFloatIsAffine](spatial/projectivetransform3dfloat/isaffine.md)
- [SPProjectiveTransform3DFloatIsInvertible](spatial/projectivetransform3dfloat/isinvertible.md)
- [SPRay3DFloatIntersectsSphere](spatial/ray3dfloat/intersects%28sphereorigin_sphereradius_%29.md)
- [SPRect3DFloatGetCenter](spatial/rect3dfloat/center.md)
- [SPRect3DFloatMakeAtCenter](spatial/rect3dfloat/init%28center_size_%29-e8la.md): Creates a rectangle at the specified center with the specified size.
- [SPRect3DFloatMakeAtOrigin](spatial/rect3dfloat/init%28origin_size_%29-8tqau.md)
- [SPRect3DFloatInset](spatial/rect3dfloat/inset%28by_%29.md)
- [SPRect3DFloatIntegral](spatial/rect3dfloat/integral.md)
- [SPRect3DFloatIntersectsRect](spatial/rect3dfloat/intersects%28__%29.md)
- [SPRect3DFloatIsEmpty](spatial/rect3dfloat/isempty.md)
- [SPRect3DFloatIsNull](spatial/rect3dfloat/isnull.md)
- [SPRect3DFloatGetMaximum](spatial/rect3dfloat/max.md)
- [SPRect3DFloatGetMinimum](spatial/rect3dfloat/min.md)
- [SPRect3DFloatRotateAroundPoint](spatial/rect3dfloat/rotated%28by_around_%29-1g90c.md)
- [SPRect3DFloatRotateByQuaternionAroundPoint](spatial/rect3dfloat/rotated%28by_around_%29-9yw64.md)
- [SPRect3DFloatStandardize](spatial/rect3dfloat/standardized.md): Returns a rectangle with a positive width and height.
- [SPRotation3DFloatGetEulerAngles](spatial/rotation3dfloat/eulerangles%28order_%29.md)
- [SPRotation3DFloatMakeWithEulerAngles](spatial/rotation3dfloat/init%28eulerangles_%29.md)
- [SPRotation3DFloatInverse](spatial/rotation3dfloat/inverse.md)
- [SPRotation3DFloatIsIdentity](spatial/rotation3dfloat/isidentity.md)
- [SPRotation3DFloatSwing](spatial/rotation3dfloat/swing%28twistaxis_%29.md)
- [SPRotation3DFloatTwist](spatial/rotation3dfloat/twist%28twistaxis_%29.md)
- [SPAffineTransform3DConcatenation](spatial/spaffinetransform3dconcatenation.md)
- [SPAffineTransform3DFloatAlmostEqualToTransform](spatial/spaffinetransform3dfloatalmostequaltotransform-5b3so.md)
- [SPAffineTransform3DFloatAlmostEqualToTransform](spatial/spaffinetransform3dfloatalmostequaltotransform-5lv5i.md)
- [SPAffineTransform3DFloatChangeBasis](spatial/spaffinetransform3dfloatchangebasis.md)
- [SPAffineTransform3DFloatConcatenation](spatial/spaffinetransform3dfloatconcatenation.md)
- [SPAffineTransform3DFloatFlip](spatial/spaffinetransform3dfloatflip.md)
- [SPAffineTransform3DFloatGetRotation](spatial/spaffinetransform3dfloatgetrotation.md)
- [SPAffineTransform3DFloatGetTranslation](spatial/spaffinetransform3dfloatgettranslation.md)
- [SPAffineTransform3DFloatInverted](spatial/spaffinetransform3dfloatinverted.md)
- [SPAffineTransform3DFloatIsIdentity](spatial/spaffinetransform3dfloatisidentity.md)
- [SPAffineTransform3DFloatIsRectilinear](spatial/spaffinetransform3dfloatisrectilinear.md)
- [SPAffineTransform3DFloatIsTranslation](spatial/spaffinetransform3dfloatistranslation.md)
- [SPAffineTransform3DFloatIsUniform](spatial/spaffinetransform3dfloatisuniform.md)
- [SPAffineTransform3DFloatIsUniformOverDimensions](spatial/spaffinetransform3dfloatisuniformoverdimensions.md)
- [SPAffineTransform3DFloatIsValid](spatial/spaffinetransform3dfloatisvalid.md)
- [SPAffineTransform3DFloatMake](spatial/spaffinetransform3dfloatmake-7vsey.md)
- [SPAffineTransform3DFloatMake](spatial/spaffinetransform3dfloatmake-9aze8.md)
- [SPAffineTransform3DFloatMakeRotation](spatial/spaffinetransform3dfloatmakerotation.md)
- [SPAffineTransform3DFloatMakeScale](spatial/spaffinetransform3dfloatmakescale.md)
- [SPAffineTransform3DFloatMakeShear](spatial/spaffinetransform3dfloatmakeshear.md)
- [SPAffineTransform3DFloatMakeTranslation](spatial/spaffinetransform3dfloatmaketranslation.md)
- [SPAffineTransform3DFloatMakeWithPose](spatial/spaffinetransform3dfloatmakewithpose.md)
- [SPAffineTransform3DFloatMakeWithScaledPose](spatial/spaffinetransform3dfloatmakewithscaledpose.md)
- [SPAffineTransform3DFloatRotate](spatial/spaffinetransform3dfloatrotate.md)
- [SPAffineTransform3DFloatRotateByQuaternion](spatial/spaffinetransform3dfloatrotatebyquaternion.md)
- [SPAffineTransform3DFloatScaleBy](spatial/spaffinetransform3dfloatscaleby.md)
- [SPAffineTransform3DFloatScaleBySize](spatial/spaffinetransform3dfloatscalebysize.md)
- [SPAffineTransform3DFloatScaleUniform](spatial/spaffinetransform3dfloatscaleuniform.md)
- [SPAffineTransform3DFloatSetTranslation](spatial/spaffinetransform3dfloatsettranslation.md)
- [SPAffineTransform3DFloatShear](spatial/spaffinetransform3dfloatshear.md)
- [SPAffineTransform3DFloatTranslate](spatial/spaffinetransform3dfloattranslate.md)
- [SPAffineTransform3DIsIdentity](spatial/spaffinetransform3disidentity.md)
- [SPAffineTransform3DIsRectilinear](spatial/spaffinetransform3disrectilinear.md)
- [SPAffineTransform3DIsTranslation](spatial/spaffinetransform3distranslation.md)
- [SPAffineTransform3DIsUniform](spatial/spaffinetransform3disuniform.md)
- [SPAffineTransform3DMake](spatial/spaffinetransform3dmake-5pau5.md)
- [SPAffineTransform3DMakeRotation](spatial/spaffinetransform3dmakerotation.md)
- [SPAffineTransform3DMakeScale](spatial/spaffinetransform3dmakescale.md)
- [SPAffineTransform3DMakeTranslation](spatial/spaffinetransform3dmaketranslation-9czpj.md)
- [SPAngleFloatAcos](spatial/spanglefloatacos.md)
- [SPAngleFloatAcosh](spatial/spanglefloatacosh.md)
- [SPAngleFloatAsin](spatial/spanglefloatasin.md)
- [SPAngleFloatAsinh](spatial/spanglefloatasinh.md)
- [SPAngleFloatAtan](spatial/spanglefloatatan.md)
- [SPAngleFloatAtan2](spatial/spanglefloatatan2.md)
- [SPAngleFloatAtanh](spatial/spanglefloatatanh.md)
- [SPAngleFloatCos](spatial/spanglefloatcos.md)
- [SPAngleFloatCosh](spatial/spanglefloatcosh.md)
- [SPAngleFloatEqualToAngle](spatial/spanglefloatequaltoangle.md): Returns @p true if both rotation angles are equal.
- [SPAngleFloatGetDegrees](spatial/spanglefloatgetdegrees.md)
- [SPAngleFloatMake](spatial/spanglefloatmake.md)
- [SPAngleFloatMakeWithDegrees](spatial/spanglefloatmakewithdegrees.md)
- [SPAngleFloatNegate](spatial/spanglefloatnegate.md)
- [SPAngleFloatNormalize](spatial/spanglefloatnormalize.md)
- [SPAngleFloatSin](spatial/spanglefloatsin.md)
- [SPAngleFloatSinh](spatial/spanglefloatsinh.md)
- [SPAngleFloatTan](spatial/spanglefloattan.md)
- [SPAngleFloatTanh](spatial/spanglefloattanh.md)
- [SPAngleMake](spatial/spanglemake.md)
- [SPPoint3DClampToRect](spatial/sppoint3dclamptorect.md)
- [SPPoint3DFloatAlmostEqualToPoint](spatial/sppoint3dfloatalmostequaltopoint-6aviz.md)
- [SPPoint3DFloatAlmostEqualToPoint](spatial/sppoint3dfloatalmostequaltopoint-8lazd.md)
- [SPPoint3DFloatApplyAffineTransform](spatial/sppoint3dfloatapplyaffinetransform.md)
- [SPPoint3DFloatApplyPose](spatial/sppoint3dfloatapplypose.md)
- [SPPoint3DFloatApplyProjectiveTransform](spatial/sppoint3dfloatapplyprojectivetransform.md)
- [SPPoint3DFloatApplyScaledPose](spatial/sppoint3dfloatapplyscaledpose.md)
- [SPPoint3DFloatClampToRect](spatial/sppoint3dfloatclamptorect.md)
- [SPPoint3DFloatDistanceToPoint](spatial/sppoint3dfloatdistancetopoint.md)
- [SPPoint3DFloatEqualToPoint](spatial/sppoint3dfloatequaltopoint.md): Returns @p true if both points are equal.
- [SPPoint3DFloatGetPackedVector](spatial/sppoint3dfloatgetpackedvector.md)
- [SPPoint3DFloatGetVector](spatial/sppoint3dfloatgetvector.md)
- [SPPoint3DFloatIsFinite](spatial/sppoint3dfloatisfinite.md)
- [SPPoint3DFloatIsNaN](spatial/sppoint3dfloatisnan.md)
- [SPPoint3DFloatIsZero](spatial/sppoint3dfloatiszero.md)
- [SPPoint3DFloatMake](spatial/sppoint3dfloatmake-15os1.md)
- [SPPoint3DFloatMake](spatial/sppoint3dfloatmake-ik8n.md)
- [SPPoint3DFloatMakeWithPackedVector](spatial/sppoint3dfloatmakewithpackedvector.md)
- [SPPoint3DFloatMakeWithSize](spatial/sppoint3dfloatmakewithsize.md)
- [SPPoint3DFloatMakeWithSphericalCoordinates](spatial/sppoint3dfloatmakewithsphericalcoordinates.md)
- [SPPoint3DFloatMakeWithVector](spatial/sppoint3dfloatmakewithvector-3j0i4.md)
- [SPPoint3DFloatMakeWithVector](spatial/sppoint3dfloatmakewithvector-3kq7r.md)
- [SPPoint3DFloatRotate](spatial/sppoint3dfloatrotate.md)
- [SPPoint3DFloatRotateByQuaternion](spatial/sppoint3dfloatrotatebyquaternion.md)
- [SPPoint3DFloatTranslate](spatial/sppoint3dfloattranslate.md)
- [SPPoint3DFloatUnapplyAffineTransform](spatial/sppoint3dfloatunapplyaffinetransform.md)
- [SPPoint3DFloatUnapplyPose](spatial/sppoint3dfloatunapplypose.md)
- [SPPoint3DFloatUnapplyProjectiveTransform](spatial/sppoint3dfloatunapplyprojectivetransform.md)
- [SPPoint3DFloatUnapplyScaledPose](spatial/sppoint3dfloatunapplyscaledpose.md)
- [SPPoint3DGetPackedVector](spatial/sppoint3dgetpackedvector.md)
- [SPPoint3DMake](spatial/sppoint3dmake-2g23y.md)
- [SPPoint3DMake](spatial/sppoint3dmake-55fjd.md)
- [SPPoint3DMakeWithPackedVector](spatial/sppoint3dmakewithpackedvector.md)
- [SPPose3DFloatAlmostEqualToPose](spatial/sppose3dfloatalmostequaltopose-17q2l.md)
- [SPPose3DFloatAlmostEqualToPose](spatial/sppose3dfloatalmostequaltopose-5t5q.md)
- [SPPose3DFloatConcatenation](spatial/sppose3dfloatconcatenation.md)
- [SPPose3DFloatEqualToPose](spatial/sppose3dfloatequaltopose.md): Returns @p true if both rays are equal.
- [SPPose3DFloatFlip](spatial/sppose3dfloatflip.md)
- [SPPose3DFloatGet4x4Matrix](spatial/sppose3dfloatget4x4matrix.md)
- [SPPose3DFloatGetInverse](spatial/sppose3dfloatgetinverse.md)
- [SPPose3DFloatIsIdentity](spatial/sppose3dfloatisidentity.md)
- [SPPose3DFloatIsValid](spatial/sppose3dfloatisvalid.md)
- [SPPose3DFloatMake](spatial/sppose3dfloatmake-2rx9m.md)
- [SPPose3DFloatMake](spatial/sppose3dfloatmake-6wx8e.md)
- [SPPose3DFloatMakeLookAt](spatial/sppose3dfloatmakelookat-3sv3j.md)
- [SPPose3DFloatMakeLookAt](spatial/sppose3dfloatmakelookat-5v9ru.md)
- [SPPose3DFloatMakeLookAt](spatial/sppose3dfloatmakelookat-8dre6.md)
- [SPPose3DFloatMakeWith4x4Matrix](spatial/sppose3dfloatmakewith4x4matrix.md)
- [SPPose3DFloatMakeWithAffineTransform](spatial/sppose3dfloatmakewithaffinetransform.md)
- [SPPose3DFloatMakeWithProjectiveTransform](spatial/sppose3dfloatmakewithprojectivetransform.md)
- [SPPose3DFloatMakeWithVector](spatial/sppose3dfloatmakewithvector.md)
- [SPPose3DFloatRotate](spatial/sppose3dfloatrotate.md)
- [SPPose3DFloatRotateByQuaternion](spatial/sppose3dfloatrotatebyquaternion.md)
- [SPPose3DFloatTranslate](spatial/sppose3dfloattranslate.md)
- [SPPose3DMake](spatial/sppose3dmake-2l1sq.md)
- [SPPose3DMake](spatial/sppose3dmake-3yjxa.md)
- [SPProjectiveTransform3DConcatenation](spatial/spprojectivetransform3dconcatenation.md): Returns a projective transformation matrix constructed by concatenating two existing Projective transforms.
- [SPProjectiveTransform3DFloatAlmostEqualToTransform](spatial/spprojectivetransform3dfloatalmostequaltotransform-29vcb.md)
- [SPProjectiveTransform3DFloatAlmostEqualToTransform](spatial/spprojectivetransform3dfloatalmostequaltotransform-6ab39.md)
- [SPProjectiveTransform3DFloatConcatenation](spatial/spprojectivetransform3dfloatconcatenation.md): Returns a projective transformation matrix constructed by concatenating two existing Projective transforms.
- [SPProjectiveTransform3DFloatFlip](spatial/spprojectivetransform3dfloatflip.md)
- [SPProjectiveTransform3DFloatGetRotation](spatial/spprojectivetransform3dfloatgetrotation.md)
- [SPProjectiveTransform3DFloatGetScale](spatial/spprojectivetransform3dfloatgetscale.md)
- [SPProjectiveTransform3DFloatGetTranslation](spatial/spprojectivetransform3dfloatgettranslation.md)
- [SPProjectiveTransform3DFloatInverted](spatial/spprojectivetransform3dfloatinverted.md)
- [SPProjectiveTransform3DFloatIsIdentity](spatial/spprojectivetransform3dfloatisidentity.md)
- [SPProjectiveTransform3DFloatIsRectilinear](spatial/spprojectivetransform3dfloatisrectilinear.md)
- [SPProjectiveTransform3DFloatIsTranslation](spatial/spprojectivetransform3dfloatistranslation.md)
- [SPProjectiveTransform3DFloatIsUniform](spatial/spprojectivetransform3dfloatisuniform.md)
- [SPProjectiveTransform3DFloatIsUniformOverDimensions](spatial/spprojectivetransform3dfloatisuniformoverdimensions.md)
- [SPProjectiveTransform3DFloatIsValid](spatial/spprojectivetransform3dfloatisvalid.md)
- [SPProjectiveTransform3DFloatMake](spatial/spprojectivetransform3dfloatmake-1o5dw.md)
- [SPProjectiveTransform3DFloatMake](spatial/spprojectivetransform3dfloatmake-4yoh8.md)
- [SPProjectiveTransform3DFloatMakeRotation](spatial/spprojectivetransform3dfloatmakerotation.md): Returns a new rotation transform.
- [SPProjectiveTransform3DFloatMakeScale](spatial/spprojectivetransform3dfloatmakescale.md): Returns a new scale transform.
- [SPProjectiveTransform3DFloatMakeShear](spatial/spprojectivetransform3dfloatmakeshear.md)
- [SPProjectiveTransform3DFloatMakeTranslation](spatial/spprojectivetransform3dfloatmaketranslation.md): Returns a new translate transform.
- [SPProjectiveTransform3DFloatMakeWithPose](spatial/spprojectivetransform3dfloatmakewithpose.md)
- [SPProjectiveTransform3DFloatMakeWithScaledPose](spatial/spprojectivetransform3dfloatmakewithscaledpose.md)
- [SPProjectiveTransform3DFloatRotate](spatial/spprojectivetransform3dfloatrotate.md)
- [SPProjectiveTransform3DFloatRotateByQuaternion](spatial/spprojectivetransform3dfloatrotatebyquaternion.md)
- [SPProjectiveTransform3DFloatScaleBy](spatial/spprojectivetransform3dfloatscaleby.md)
- [SPProjectiveTransform3DFloatScaleBySize](spatial/spprojectivetransform3dfloatscalebysize.md)
- [SPProjectiveTransform3DFloatScaleUniform](spatial/spprojectivetransform3dfloatscaleuniform.md)
- [SPProjectiveTransform3DFloatSetTranslation](spatial/spprojectivetransform3dfloatsettranslation.md)
- [SPProjectiveTransform3DFloatShear](spatial/spprojectivetransform3dfloatshear.md)
- [SPProjectiveTransform3DFloatTranslate](spatial/spprojectivetransform3dfloattranslate.md)
- [SPProjectiveTransform3DIsIdentity](spatial/spprojectivetransform3disidentity.md)
- [SPProjectiveTransform3DIsRectilinear](spatial/spprojectivetransform3disrectilinear.md)
- [SPProjectiveTransform3DIsTranslation](spatial/spprojectivetransform3distranslation.md)
- [SPProjectiveTransform3DIsUniform](spatial/spprojectivetransform3disuniform.md)
- [SPProjectiveTransform3DMake](spatial/spprojectivetransform3dmake-5qdj3.md)
- [SPProjectiveTransform3DMakeRotation](spatial/spprojectivetransform3dmakerotation.md): Returns a new rotation transform.
- [SPProjectiveTransform3DMakeScale](spatial/spprojectivetransform3dmakescale.md): Returns a new scale transform.
- [SPProjectiveTransform3DMakeTranslation](spatial/spprojectivetransform3dmaketranslation-7l5gj.md): Returns a new translate transform.
- [SPRay3DFloatApplyAffineTransform](spatial/spray3dfloatapplyaffinetransform.md)
- [SPRay3DFloatApplyPose](spatial/spray3dfloatapplypose.md)
- [SPRay3DFloatApplyProjectiveTransform](spatial/spray3dfloatapplyprojectivetransform.md)
- [SPRay3DFloatApplyScaledPose](spatial/spray3dfloatapplyscaledpose.md)
- [SPRay3DFloatEqualToRay](spatial/spray3dfloatequaltoray.md): Returns @p true if both rays are equal.
- [SPRay3DFloatIntersectsRect](spatial/spray3dfloatintersectsrect.md)
- [SPRay3DFloatIsFinite](spatial/spray3dfloatisfinite.md)
- [SPRay3DFloatIsNaN](spatial/spray3dfloatisnan.md)
- [SPRay3DFloatIsZero](spatial/spray3dfloatiszero.md)
- [SPRay3DFloatMake](spatial/spray3dfloatmake-5yjgm.md)
- [SPRay3DFloatMake](spatial/spray3dfloatmake-8d6wq.md)
- [SPRay3DFloatMakeWithVector](spatial/spray3dfloatmakewithvector.md)
- [SPRay3DFloatRotate](spatial/spray3dfloatrotate.md)
- [SPRay3DFloatRotateAroundPoint](spatial/spray3dfloatrotatearoundpoint.md)
- [SPRay3DFloatRotateByQuaternion](spatial/spray3dfloatrotatebyquaternion.md)
- [SPRay3DFloatRotateByQuaternionAroundPoint](spatial/spray3dfloatrotatebyquaternionaroundpoint.md)
- [SPRay3DFloatTranslate](spatial/spray3dfloattranslate.md)
- [SPRay3DFloatUnapplyAffineTransform](spatial/spray3dfloatunapplyaffinetransform.md)
- [SPRay3DFloatUnapplyPose](spatial/spray3dfloatunapplypose.md)
- [SPRay3DFloatUnapplyProjectiveTransform](spatial/spray3dfloatunapplyprojectivetransform.md)
- [SPRay3DFloatUnapplyScaledPose](spatial/spray3dfloatunapplyscaledpose.md)
- [SPRay3DMake](spatial/spray3dmake-3296l.md)
- [SPRay3DMake](spatial/spray3dmake-9x6y7.md)
- [SPRect3DFloatApplyAffineTransform](spatial/sprect3dfloatapplyaffinetransform.md)
- [SPRect3DFloatApplyPose](spatial/sprect3dfloatapplypose.md)
- [SPRect3DFloatApplyProjectiveTransform](spatial/sprect3dfloatapplyprojectivetransform.md)
- [SPRect3DFloatApplyScaledPose](spatial/sprect3dfloatapplyscaledpose.md)
- [SPRect3DFloatContainsAnyPoint](spatial/sprect3dfloatcontainsanypoint.md)
- [SPRect3DFloatContainsPoint](spatial/sprect3dfloatcontainspoint.md)
- [SPRect3DFloatContainsRect](spatial/sprect3dfloatcontainsrect.md)
- [SPRect3DFloatEqualToRect](spatial/sprect3dfloatequaltorect.md): Returns @p true if both rectangles are equal.
- [SPRect3DFloatGetCornerPoints](spatial/sprect3dfloatgetcornerpoints.md)
- [SPRect3DFloatIntersection](spatial/sprect3dfloatintersection.md)
- [SPRect3DFloatIsFinite](spatial/sprect3dfloatisfinite.md)
- [SPRect3DFloatIsNaN](spatial/sprect3dfloatisnan.md)
- [SPRect3DFloatIsZero](spatial/sprect3dfloatiszero.md)
- [SPRect3DFloatMake](spatial/sprect3dfloatmake.md)
- [SPRect3DFloatMakeAtCenterWithVector](spatial/sprect3dfloatmakeatcenterwithvector-70afe.md)
- [SPRect3DFloatMakeAtCenterWithVector](spatial/sprect3dfloatmakeatcenterwithvector-9o2lm.md)
- [SPRect3DFloatMakeAtOriginWithVector](spatial/sprect3dfloatmakeatoriginwithvector-6uu22.md)
- [SPRect3DFloatMakeAtOriginWithVector](spatial/sprect3dfloatmakeatoriginwithvector-72c27.md)
- [SPRect3DFloatMakeBoundingFromPoints](spatial/sprect3dfloatmakeboundingfrompoints.md)
- [SPRect3DFloatRotate](spatial/sprect3dfloatrotate.md)
- [SPRect3DFloatRotateByQuaternion](spatial/sprect3dfloatrotatebyquaternion.md)
- [SPRect3DFloatScaleBy](spatial/sprect3dfloatscaleby.md)
- [SPRect3DFloatScaleBySize](spatial/sprect3dfloatscalebysize.md)
- [SPRect3DFloatScaleUniform](spatial/sprect3dfloatscaleuniform.md)
- [SPRect3DFloatShear](spatial/sprect3dfloatshear.md)
- [SPRect3DFloatTranslate](spatial/sprect3dfloattranslate.md)
- [SPRect3DFloatUnapplyAffineTransform](spatial/sprect3dfloatunapplyaffinetransform.md)
- [SPRect3DFloatUnapplyPose](spatial/sprect3dfloatunapplypose.md)
- [SPRect3DFloatUnapplyProjectiveTransform](spatial/sprect3dfloatunapplyprojectivetransform.md)
- [SPRect3DFloatUnapplyScaledPose](spatial/sprect3dfloatunapplyscaledpose.md)
- [SPRect3DFloatUnion](spatial/sprect3dfloatunion.md)
- [SPRect3DMake](spatial/sprect3dmake.md)
- [SPRotation3DFloatAlmostEqualToRotation](spatial/sprotation3dfloatalmostequaltorotation-2krut.md)
- [SPRotation3DFloatAlmostEqualToRotation](spatial/sprotation3dfloatalmostequaltorotation-9s06b.md)
- [SPRotation3DFloatEqualToRotation](spatial/sprotation3dfloatequaltorotation.md): Returns @p true if both rotations are equal.
- [SPRotation3DFloatGetAngle](spatial/sprotation3dfloatgetangle.md)
- [SPRotation3DFloatGetAxis](spatial/sprotation3dfloatgetaxis.md)
- [SPRotation3DFloatGetPackedVector](spatial/sprotation3dfloatgetpackedvector.md)
- [SPRotation3DFloatGetQuaternion](spatial/sprotation3dfloatgetquaternion.md)
- [SPRotation3DFloatIsValid](spatial/sprotation3dfloatisvalid.md)
- [SPRotation3DFloatMake](spatial/sprotation3dfloatmake-2fg8z.md)
- [SPRotation3DFloatMake](spatial/sprotation3dfloatmake-3pbt1.md)
- [SPRotation3DFloatMakeLookAt](spatial/sprotation3dfloatmakelookat-2pvrg.md)
- [SPRotation3DFloatMakeLookAt](spatial/sprotation3dfloatmakelookat-3zivr.md)
- [SPRotation3DFloatMakeLookAt](spatial/sprotation3dfloatmakelookat-4d35y.md)
- [SPRotation3DFloatMakeWithPackedVector](spatial/sprotation3dfloatmakewithpackedvector.md)
- [SPRotation3DFloatMakeWithQuaternion](spatial/sprotation3dfloatmakewithquaternion.md)
- [SPRotation3DFloatSetAngle](spatial/sprotation3dfloatsetangle.md)
- [SPRotation3DFloatSetAxis](spatial/sprotation3dfloatsetaxis.md)
- [SPRotation3DFloatSlerp](spatial/sprotation3dfloatslerp.md)
- [SPRotation3DFloatSlerpLongest](spatial/sprotation3dfloatslerplongest.md)
- [SPRotation3DFloatSpline](spatial/sprotation3dfloatspline.md)
- [SPRotation3DGetPackedVector](spatial/sprotation3dgetpackedvector.md)
- [SPRotation3DMake](spatial/sprotation3dmake-35x05.md)
- [SPRotation3DMakeWithPackedVector](spatial/sprotation3dmakewithpackedvector.md)
- [SPRotationAxis3DFloatEqualToRotationAxis](spatial/sprotationaxis3dfloatequaltorotationaxis.md): Returns @p true if both rotation axes are equal.
- [SPRotationAxis3DFloatGetPackedVector](spatial/sprotationaxis3dfloatgetpackedvector.md)
- [SPRotationAxis3DFloatGetVector](spatial/sprotationaxis3dfloatgetvector.md)
- [SPRotationAxis3DFloatIsZero](spatial/sprotationaxis3dfloatiszero.md)
- [SPRotationAxis3DFloatMake](spatial/sprotationaxis3dfloatmake-4qq2.md)
- [SPRotationAxis3DFloatMake](spatial/sprotationaxis3dfloatmake-5v6mj.md)
- [SPRotationAxis3DFloatMakeWithPackedVector](spatial/sprotationaxis3dfloatmakewithpackedvector.md)
- [SPRotationAxis3DFloatMakeWithVector](spatial/sprotationaxis3dfloatmakewithvector-1xodl.md)
- [SPRotationAxis3DFloatMakeWithVector](spatial/sprotationaxis3dfloatmakewithvector-5rswz.md)
- [SPRotationAxis3DGetPackedVector](spatial/sprotationaxis3dgetpackedvector.md)
- [SPRotationAxis3DMake](spatial/sprotationaxis3dmake-3diey.md)
- [SPRotationAxis3DMake](spatial/sprotationaxis3dmake-6y99b.md)
- [SPRotationAxis3DMakeWithPackedVector](spatial/sprotationaxis3dmakewithpackedvector.md)
- [SPScaledPose3DFloatAlmostEqualToPose](spatial/spscaledpose3dfloatalmostequaltopose-3vziw.md)
- [SPScaledPose3DFloatAlmostEqualToPose](spatial/spscaledpose3dfloatalmostequaltopose-8m831.md)
- [SPScaledPose3DFloatConcatenation](spatial/spscaledpose3dfloatconcatenation-7o06.md)
- [SPScaledPose3DFloatConcatenation](spatial/spscaledpose3dfloatconcatenation-8f0ta.md)
- [SPScaledPose3DFloatConcatenation](spatial/spscaledpose3dfloatconcatenation-9dkwv.md)
- [SPScaledPose3DFloatEqualToPose](spatial/spscaledpose3dfloatequaltopose.md): Returns @p true if both scaled poses are equal.
- [SPScaledPose3DFloatFlip](spatial/spscaledpose3dfloatflip.md)
- [SPScaledPose3DFloatGet4x4Matrix](spatial/spscaledpose3dfloatget4x4matrix.md)
- [SPScaledPose3DFloatGetInverse](spatial/spscaledpose3dfloatgetinverse.md)
- [SPScaledPose3DFloatIsIdentity](spatial/spscaledpose3dfloatisidentity.md)
- [SPScaledPose3DFloatIsValid](spatial/spscaledpose3dfloatisvalid.md)
- [SPScaledPose3DFloatMake](spatial/spscaledpose3dfloatmake-9ihr7.md)
- [SPScaledPose3DFloatMake](spatial/spscaledpose3dfloatmake-9ju0j.md)
- [SPScaledPose3DFloatMake](spatial/spscaledpose3dfloatmake-9nz6v.md)
- [SPScaledPose3DFloatMakeLookAt](spatial/spscaledpose3dfloatmakelookat-4kx9a.md)
- [SPScaledPose3DFloatMakeLookAt](spatial/spscaledpose3dfloatmakelookat-61u16.md)
- [SPScaledPose3DFloatMakeLookAt](spatial/spscaledpose3dfloatmakelookat-625ym.md)
- [SPScaledPose3DFloatMakeWith4x4Matrix](spatial/spscaledpose3dfloatmakewith4x4matrix.md)
- [SPScaledPose3DFloatMakeWithAffineTransform](spatial/spscaledpose3dfloatmakewithaffinetransform.md)
- [SPScaledPose3DFloatMakeWithProjectiveTransform](spatial/spscaledpose3dfloatmakewithprojectivetransform.md)
- [SPScaledPose3DFloatMakeWithVector](spatial/spscaledpose3dfloatmakewithvector.md)
- [SPScaledPose3DFloatRotate](spatial/spscaledpose3dfloatrotate.md)
- [SPScaledPose3DFloatRotateByQuaternion](spatial/spscaledpose3dfloatrotatebyquaternion.md)
- [SPScaledPose3DFloatTranslate](spatial/spscaledpose3dfloattranslate.md)
- [SPScaledPose3DMake](spatial/spscaledpose3dmake-88h4b.md)
- [SPSize3DFloatApplyAffineTransform](spatial/spsize3dfloatapplyaffinetransform.md)
- [SPSize3DFloatApplyPose](spatial/spsize3dfloatapplypose.md)
- [SPSize3DFloatApplyProjectiveTransform](spatial/spsize3dfloatapplyprojectivetransform.md)
- [SPSize3DFloatApplyScaledPose](spatial/spsize3dfloatapplyscaledpose.md)
- [SPSize3DFloatContainsAnyPoint](spatial/spsize3dfloatcontainsanypoint.md)
- [SPSize3DFloatContainsPoint](spatial/spsize3dfloatcontainspoint.md)
- [SPSize3DFloatContainsSize](spatial/spsize3dfloatcontainssize.md)
- [SPSize3DFloatEqualToSize](spatial/spsize3dfloatequaltosize.md): Returns @p true if both sizes are equal.
- [SPSize3DFloatGetPackedVector](spatial/spsize3dfloatgetpackedvector.md)
- [SPSize3DFloatGetVector](spatial/spsize3dfloatgetvector.md)
- [SPSize3DFloatIntersection](spatial/spsize3dfloatintersection.md)
- [SPSize3DFloatIsFinite](spatial/spsize3dfloatisfinite.md)
- [SPSize3DFloatIsNaN](spatial/spsize3dfloatisnan.md)
- [SPSize3DFloatIsValid](spatial/spsize3dfloatisvalid.md)
- [SPSize3DFloatIsZero](spatial/spsize3dfloatiszero.md)
- [SPSize3DFloatMake](spatial/spsize3dfloatmake-391r4.md)
- [SPSize3DFloatMake](spatial/spsize3dfloatmake-9onwa.md)
- [SPSize3DFloatMakeWithPackedVector](spatial/spsize3dfloatmakewithpackedvector.md)
- [SPSize3DFloatMakeWithPoint](spatial/spsize3dfloatmakewithpoint.md)
- [SPSize3DFloatMakeWithVector](spatial/spsize3dfloatmakewithvector-4vmp5.md)
- [SPSize3DFloatMakeWithVector](spatial/spsize3dfloatmakewithvector-7j8ez.md)
- [SPSize3DFloatRotate](spatial/spsize3dfloatrotate.md)
- [SPSize3DFloatRotateByQuaternion](spatial/spsize3dfloatrotatebyquaternion.md)
- [SPSize3DFloatScaleBy](spatial/spsize3dfloatscaleby.md)
- [SPSize3DFloatScaleBySize](spatial/spsize3dfloatscalebysize.md)
- [SPSize3DFloatScaleUniform](spatial/spsize3dfloatscaleuniform.md)
- [SPSize3DFloatShear](spatial/spsize3dfloatshear.md)
- [SPSize3DFloatUnapplyAffineTransform](spatial/spsize3dfloatunapplyaffinetransform.md)
- [SPSize3DFloatUnapplyPose](spatial/spsize3dfloatunapplypose.md)
- [SPSize3DFloatUnapplyProjectiveTransform](spatial/spsize3dfloatunapplyprojectivetransform.md)
- [SPSize3DFloatUnapplyScaledPose](spatial/spsize3dfloatunapplyscaledpose.md)
- [SPSize3DFloatUnion](spatial/spsize3dfloatunion.md)
- [SPSize3DGetPackedVector](spatial/spsize3dgetpackedvector.md)
- [SPSize3DMake](spatial/spsize3dmake-7u1jt.md)
- [SPSize3DMake](spatial/spsize3dmake-ft60.md)
- [SPSize3DMakeWithPackedVector](spatial/spsize3dmakewithpackedvector.md)
- [SPSphericalCoordinates3DFloatGetPackedVector](spatial/spsphericalcoordinates3dfloatgetpackedvector.md)
- [SPSphericalCoordinates3DFloatMake](spatial/spsphericalcoordinates3dfloatmake-hl8u.md)
- [SPSphericalCoordinates3DFloatMakeWithCartesianPoint](spatial/spsphericalcoordinates3dfloatmakewithcartesianpoint.md)
- [SPSphericalCoordinates3DFloatMakeWithCartesianVector](spatial/spsphericalcoordinates3dfloatmakewithcartesianvector-5vuvy.md)
- [SPSphericalCoordinates3DFloatMakeWithCartesianVector](spatial/spsphericalcoordinates3dfloatmakewithcartesianvector-7mbkj.md)
- [SPSphericalCoordinates3DFloatMakeWithPackedVector](spatial/spsphericalcoordinates3dfloatmakewithpackedvector.md)
- [SPSphericalCoordinates3DGetPackedVector](spatial/spsphericalcoordinates3dgetpackedvector.md)
- [SPSphericalCoordinates3DMake](spatial/spsphericalcoordinates3dmake-9dqz0.md)
- [SPSphericalCoordinates3DMakeWithPackedVector](spatial/spsphericalcoordinates3dmakewithpackedvector.md)
- [SPVector3DFloatApplyAffineTransform](spatial/spvector3dfloatapplyaffinetransform.md)
- [SPVector3DFloatApplyPose](spatial/spvector3dfloatapplypose.md)
- [SPVector3DFloatApplyProjectiveTransform](spatial/spvector3dfloatapplyprojectivetransform.md)
- [SPVector3DFloatApplyScaledPose](spatial/spvector3dfloatapplyscaledpose.md)
- [SPVector3DFloatCrossProduct](spatial/spvector3dfloatcrossproduct.md)
- [SPVector3DFloatDotProduct](spatial/spvector3dfloatdotproduct.md)
- [SPVector3DFloatEqualToVector](spatial/spvector3dfloatequaltovector.md): Returns @p true if both points are equal.
- [SPVector3DFloatGetPackedVector](spatial/spvector3dfloatgetpackedvector.md)
- [SPVector3DFloatIsFinite](spatial/spvector3dfloatisfinite.md)
- [SPVector3DFloatIsNaN](spatial/spvector3dfloatisnan.md)
- [SPVector3DFloatIsZero](spatial/spvector3dfloatiszero.md)
- [SPVector3DFloatLength](spatial/spvector3dfloatlength.md)
- [SPVector3DFloatLengthSquared](spatial/spvector3dfloatlengthsquared.md)
- [SPVector3DFloatLerp](spatial/spvector3dfloatlerp.md)
- [SPVector3DFloatMake](spatial/spvector3dfloatmake-345rz.md)
- [SPVector3DFloatMake](spatial/spvector3dfloatmake-41xdv.md)
- [SPVector3DFloatMakeWithPackedVector](spatial/spvector3dfloatmakewithpackedvector.md)
- [SPVector3DFloatMakeWithPoint](spatial/spvector3dfloatmakewithpoint.md)
- [SPVector3DFloatMakeWithRotationAxis](spatial/spvector3dfloatmakewithrotationaxis.md)
- [SPVector3DFloatMakeWithSize](spatial/spvector3dfloatmakewithsize.md)
- [SPVector3DFloatMakeWithSphericalCoordinates](spatial/spvector3dfloatmakewithsphericalcoordinates.md)
- [SPVector3DFloatMakeWithVector](spatial/spvector3dfloatmakewithvector.md)
- [SPVector3DFloatNormalize](spatial/spvector3dfloatnormalize.md)
- [SPVector3DFloatProject](spatial/spvector3dfloatproject.md)
- [SPVector3DFloatReflect](spatial/spvector3dfloatreflect.md)
- [SPVector3DFloatRotate](spatial/spvector3dfloatrotate.md)
- [SPVector3DFloatRotateByQuaternion](spatial/spvector3dfloatrotatebyquaternion.md)
- [SPVector3DFloatRotationToVector](spatial/spvector3dfloatrotationtovector.md)
- [SPVector3DFloatScaleBy](spatial/spvector3dfloatscaleby.md)
- [SPVector3DFloatScaleBySize](spatial/spvector3dfloatscalebysize.md)
- [SPVector3DFloatScaleUniform](spatial/spvector3dfloatscaleuniform.md)
- [SPVector3DFloatShear](spatial/spvector3dfloatshear.md)
- [SPVector3DFloatSmoothstep](spatial/spvector3dfloatsmoothstep.md)
- [SPVector3DFloatUnapplyAffineTransform](spatial/spvector3dfloatunapplyaffinetransform.md)
- [SPVector3DFloatUnapplyPose](spatial/spvector3dfloatunapplypose.md)
- [SPVector3DFloatUnapplyProjectiveTransform](spatial/spvector3dfloatunapplyprojectivetransform.md)
- [SPVector3DFloatUnapplyScaledPose](spatial/spvector3dfloatunapplyscaledpose.md)
- [SPVector3DGetPackedVector](spatial/spvector3dgetpackedvector.md)
- [SPVector3DLerp](spatial/spvector3dlerp.md)
- [SPVector3DMake](spatial/spvector3dmake-60yox.md)
- [SPVector3DMake](spatial/spvector3dmake-6biur.md)
- [SPVector3DMakeWithPackedVector](spatial/spvector3dmakewithpackedvector.md)
- [SPVector3DSmoothstep](spatial/spvector3dsmoothstep.md)
- [SPSphericalCoordinates3DFloatMake](spatial/sphericalcoordinates3dfloat/init%28radius_inclination_azimuth_%29.md)
