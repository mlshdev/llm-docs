> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d](https://developer.apple.com/documentation/spatial/rect3d)

# Rect3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A rectangle in a 3D coordinate system.

## Declaration

```swift
struct Rect3D
```

## Topics

### Creating a 3D rectangle structure

- [init()](rect3d/init%28%29.md): Creates a rectangle structure.
- [init(center:size:)](rect3d/init%28center_size_%29-133fy.md): Creates a rectangle with the specified center and the specified size from Spatial structures.
- [init(center:size:)](rect3d/init%28center_size_%29-77l0z.md): Creates a rectangle with the specified center and the specified size from double-precision vectors.
- [init(center:size:)](rect3d/init%28center_size_%29-9cfq7.md): Creates a rectangle with the specified center and the specified size from Spatial vectors.
- [init(center:size:)](rect3d/init%28center_size_%29-zr2x.md): Creates a rectangle with the specified center and the specified size from single-precision vectors.
- [init(origin:size:)](rect3d/init%28origin_size_%29-5xyrs.md): Creates a rectangle at the specified origin with the specified size from double-precision vectors.
- [init(origin:size:)](rect3d/init%28origin_size_%29-7fnuf.md): Creates a rectangle at the specified origin with the specified size from single-precision vectors.
- [init(origin:size:)](rect3d/init%28origin_size_%29-7o8ad.md): Creates a rectangle with the specified origin and the specified size from Spatial vectors.
- [init(origin:size:)](rect3d/init%28origin_size_%29-7v73.md): Creates a rectangle at the specified origin and the specified size from Spatial structures.
- [init(origin:size:)](rect3d/init%28origin_size_%29-9a089.md): Creates a rectangle structure.
- [init(points:)](rect3d/init%28points_%29.md): Creates a rectangle that’s the bounding box of the specified points.

### Inspecting a 3D rectangle’s properties

- [center](rect3d/center.md): The center of the rectangle.
- [cornerPoints](rect3d/cornerpoints.md): The corner points of the rectangle.
- [max](rect3d/max.md): A point that represents the corner of the rectangle with the largest x-, y-, and z-coordinates.
- [min](rect3d/min.md): A point that represents the corner of the rectangle with the smallest x-, y-, and z-coordinates.
- [origin](rect3d/origin.md): The origin of the rectangle.

### Transforming a 3D rectangle structure

- [applying(\_:)](rect3d/applying%28__%29-3qdiy.md): Returns a rectangle that results from applying the specified pose.
- [applying(\_:)](rect3d/applying%28__%29-5hnif.md): Returns a rectangle that’s transformed by the specified scaled pose.
- [applying(\_:)](rect3d/applying%28__%29-5hnif.md): Returns a rectangle that’s transformed by the specified scaled pose.
- [rotated(by:around:)](rect3d/rotated%28by_around_%29-3ih62.md): Returns a rectangle that results from applying the specified rotation around a pivot point.
- [rotated(by:around:)](rect3d/rotated%28by_around_%29-8g1c9.md): Returns a rectangle that results from rotating with the specified quaternion around a pivot point.
- [scaledBy(x:y:z:)](rect3d/scaledby%28x_y_z_%29.md): Returns a rectangle that results from scaling with the specified double-precision values.
- [sheared(\_:)](rect3d/sheared%28__%29.md): Returns a rectangle that results from shearing over an axis by shear factors for the other two axes.
- [unapplying(\_:)](rect3d/unapplying%28__%29-1j6g7.md): Returns a rectangle that results from unapplying the specified projective transform.
- [unapplying(\_:)](rect3d/unapplying%28__%29-1pbfn.md): Returns a rectangle that’s transformed by the inverse of the specified scaled pose.
- [unapplying(\_:)](rect3d/unapplying%28__%29-2he5i.md): Returns a rectangle that results from unapplying the specified pose.
- [unapplying(\_:)](rect3d/unapplying%28__%29-7eglq.md): Returns a rectangle that results from unapplying the specified affine transform.

### Checking characteristics

- [contains(anyOf:)](rect3d/contains%28anyof_%29.md): Returns a Boolean value that indicates whether the rectangle contains any of the specified points.
- [intersects(\_:)](rect3d/intersects%28__%29.md): Returns a Boolean value that indicates whether two rectangles intersect.
- [isEmpty](rect3d/isempty.md): A Boolean value that indicates whether two or three of the dimensions are zero.

### Creating derived 3D rectangles

- [integral](rect3d/integral.md): Returns the smallest rectangle after converting the source rectangle values to integers.
- [formInset(by:)](rect3d/forminset%28by_%29.md): Insets the rectangle by the specified size.
- [inset(by:)](rect3d/inset%28by_%29.md): Returns a new rectangle with the same center point after applying the specified inset amount.
- [intersection(\_:)](rect3d/intersection%28__%29.md): Returns the intersection of two rectangles.
- [standardized](rect3d/standardized.md): A rectangle with positive dimensions.

### Comparing values

- [==(\_:\_:)](rect3d/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

### Applying arithmetic operations

- [\*(\_:\_:)](rect3d/_%28____%29-8710d.md): Returns the rectangle that results from applying the affine transform to the rectangle.
- [\*(\_:\_:)](rect3d/_%28____%29-8vu0.md): Returns the rectangle that results from applying the projective transform to the rectangle.
- [\*(\_:\_:)](rect3d/_%28____%29-5lqdv.md): Returns a new rectangle after applying the pose to the rectangle.

### Deprecated symbols

- [distance(to:)](rect3d/distance%28to_%29.md): Deprecated. Returns the distance between the origins of two rectangle.
- [containsAny(of:)](rect3d/containsany%28of_%29.md): Deprecated. Returns a Boolean value that indicates whether the rectangle contains any of the specified points.
- [rotation(to:)](rect3d/rotation%28to_%29.md): Deprecated. Returns the rotation around @p (0,0,0) from the first rectangle to the second rectangle.
- [maxX](rect3d/maxx.md): Deprecated.
- [maxY](rect3d/maxy.md): Deprecated.
- [maxZ](rect3d/maxz.md): Deprecated.
- [midX](rect3d/midx.md): Deprecated.
- [midY](rect3d/midy.md): Deprecated.
- [midZ](rect3d/midz.md): Deprecated.
- [minX](rect3d/minx.md): Deprecated.
- [minY](rect3d/miny.md): Deprecated.
- [minZ](rect3d/minz.md): Deprecated.

### Initializers

- [init(\_:)](rect3d/init%28__%29-3wm4y.md): Returns a double-precision rectangle from a single-precision rectangle.
- [init(\_:)](rect3d/init%28__%29-b16k.md)

### Default Implementations

- [CustomReflectable Implementations](rect3d/customreflectable-implementations.md)
- [Decodable Implementations](rect3d/decodable-implementations.md)
- [Encodable Implementations](rect3d/encodable-implementations.md)
- [Equatable Implementations](rect3d/equatable-implementations.md)
- [Hashable Implementations](rect3d/hashable-implementations.md)
- [Primitive3DProtocol Implementations](rect3d/primitive3dprotocol-implementations.md)
- [Scalable3DProtocol Implementations](rect3d/scalable3dprotocol-implementations.md)
- [Shearable3D Implementations](rect3d/shearable3d-implementations.md)
- [Volumetric Implementations](rect3d/volumetric-implementations.md)
- [VolumetricProtocol Implementations](rect3d/volumetricprotocol-implementations.md)

## Relationships

### Conforms To

- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Primitive3D](primitive3d.md)
- [Primitive3DProtocol](primitive3dprotocol.md)
- [ProjectiveTransformable3D](projectivetransformable3d.md)
- [Rotatable3D](rotatable3d.md)
- [Rotatable3DProtocol](rotatable3dprotocol.md)
- [Scalable3D](scalable3d.md)
- [Scalable3DProtocol](scalable3dprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shearable3D](shearable3d.md)
- [SpatialTypeProtocol](spatialtypeprotocol.md)
- [Translatable3D](translatable3d.md)
- [Translatable3DProtocol](translatable3dprotocol.md)
- [Volumetric](volumetric.md)
- [VolumetricProtocol](volumetricprotocol.md)

## See Also

### 3D primitives

- [Point3D](point3d.md): A point in a 3D coordinate system.
- [Point3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [Size3D](size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
- [Size3DFloat](size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [Rect3DFloat](rect3dfloat.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [Rotation3D](rotation3d.md): A rotation in three dimensions.
- [Rotation3DFloat](rotation3dfloat.md): A single-precision structure that represents a rotation in three dimensions.
- [RotationAxis3D](rotationaxis3d.md): A 3D rotation axis.
- [RotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [Pose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [Pose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [ScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [ScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.

# SPRect3D (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rectangle in a 3D coordinate system.

## Declaration

```objectivec
typedef struct { ... } SPRect3D;
```

## Topics

### Creating a 3D rectangle structure

- [SPRect3DMakeAtCenter](rect3d/init%28center_size_%29-133fy.md): Creates a rectangle with the specified center and the specified size from Spatial structures.
- [SPRect3DMakeAtOrigin](rect3d/init%28origin_size_%29-9a089.md): Creates a rectangle structure.
- [SPRect3DMakeAtCenterWithVector](sprect3dmakeatcenterwithvector-9118a.md): Creates a rectangle with the specified center and the specified size from double-precision vectors.
- [SPRect3DMakeAtCenterWithVector](sprect3dmakeatcenterwithvector-9doe4.md)
- [SPRect3DMakeAtOriginWithVector](sprect3dmakeatoriginwithvector-36awh.md): Creates a rectangle at the specified origin and the specified size from double-precision vectors.
- [SPRect3DMakeAtOriginWithVector](sprect3dmakeatoriginwithvector-7m66h.md)
- [SPRect3DMakeBoundingFromPoints](sprect3dmakeboundingfrompoints.md): Creates a rectangle that’s the bounding box of the specified points.

### Constants

- [SPRect3DNull](sprect3dnull.md): The null rectangle that represents an invalid value.
- [SPRect3DInfinity](sprect3dinfinity.md): The rectangle structure with infinite origin and size.
- [SPRect3DZero](sprect3dzero.md): The rectangle structure with the zero value.

### Inspecting a 3D rectangle’s properties

- [SPRect3DGetCenter](rect3d/center.md): The center of the rectangle.
- [SPRect3DGetMaximum](rect3d/max.md): A point that represents the corner of the rectangle with the largest x-, y-, and z-coordinates.
- [SPRect3DGetMinimum](rect3d/min.md): A point that represents the corner of the rectangle with the smallest x-, y-, and z-coordinates.
- [origin](rect3d/origin.md): The origin of the rectangle.
- [size](sprect3d/size.md): The size of the rectangle.
- [SPRect3DGetCornerPoints](sprect3dgetcornerpoints.md): Returns the corner points of the rectangle.

### Transforming a 3D rectangle structure

- [SPRect3DRotateAroundPoint](rect3d/rotated%28by_around_%29-3ih62.md): Returns a rectangle that results from applying the specified rotation around a pivot point.
- [SPRect3DRotateByQuaternionAroundPoint](rect3d/rotated%28by_around_%29-8g1c9.md): Returns a rectangle that results from rotating with the specified quaternion around a pivot point.
- [SPRect3DApplyAffineTransform](sprect3dapplyaffinetransform.md): Returns a rectangle that results from applying the specified affine transform.
- [SPRect3DApplyPose](sprect3dapplypose.md): Returns a rectangle that results from applying the specified pose.
- [SPRect3DApplyProjectiveTransform](sprect3dapplyprojectivetransform.md)
- [SPRect3DApplyScaledPose](sprect3dapplyscaledpose.md): Returns a rectangle that’s transformed by the specified scaled pose.
- [SPRect3DRotate](sprect3drotate.md): Returns a rectangle that results from applying the specified rotation.
- [SPRect3DRotateByQuaternion](sprect3drotatebyquaternion.md): Returns a rectangle that results from rotating with the specified quaternion.
- [SPRect3DScaleBy](sprect3dscaleby.md): Returns a rectangle that results from scaling with the specified double-precision values.
- [SPRect3DScaleBySize](sprect3dscalebysize.md): Returns a rectangle that results from scaling with the specified size structure.
- [SPRect3DScaleUniform](sprect3dscaleuniform.md): Returns a rectangle that results from uniformly scaling with the specified double-precision value.
- [SPRect3DShear](sprect3dshear.md): Returns a rectangle that results from shearing over an axis by shear factors for the other two axes.
- [SPRect3DTranslate](sprect3dtranslate-88ujj.md): Returns a rectangle with an origin that’s offset by the specified vector.
- [SPRect3DTranslate](sprect3dtranslate-8amf1.md): Deprecated. Returns a rectangle with an origin that’s offset by the specified size.
- [SPRect3DUnapplyAffineTransform](sprect3dunapplyaffinetransform.md): Returns a rectangle that results from unapplying the specified affine transform.
- [SPRect3DUnapplyPose](sprect3dunapplypose.md): Returns a rectangle that results from unapplying the specified pose.
- [SPRect3DUnapplyProjectiveTransform](sprect3dunapplyprojectivetransform.md): Returns a rectangle that results from applying the specified projective transform.
- [SPRect3DUnapplyScaledPose](sprect3dunapplyscaledpose.md): Returns a rectangle that’s transformed by the inverse of the specified scaled pose.

### Checking characteristics

- [SPRect3DIntersectsRect](rect3d/intersects%28__%29.md): Returns a Boolean value that indicates whether two rectangles intersect.
- [SPRect3DIsEmpty](rect3d/isempty.md): A Boolean value that indicates whether two or three of the dimensions are zero.
- [SPRect3DContainsAnyPoint](sprect3dcontainsanypoint.md): Returns a Boolean value that indicates whether the rectangle contains any of the specified points.
- [SPRect3DContainsPoint](sprect3dcontainspoint.md): Returns a Boolean value that indicates whether the rectangle contains the specified point.
- [SPRect3DContainsRect](sprect3dcontainsrect.md): Returns a Boolean value that indicates whether the rectangle contains the specified rectangle.
- [SPRect3DDistanceToRect](sprect3ddistancetorect.md): Deprecated.
- [SPRect3DIsFinite](sprect3disfinite.md): A Boolean value that indicates whether all of the coordinates and dimensions of the rectangle are finite.
- [SPRect3DIsNaN](sprect3disnan.md): A Boolean value that indicates whether any of the coordinates and dimensions of the rectangle are NaN.
- [SPRect3DIsNull](sprect3disnull.md): A Boolean value that indicates whether the rectangle is equal to the null rectangle.
- [SPRect3DIsZero](sprect3diszero.md): A Boolean value that indicates whether the rectangle’s origin and size are zero.

### Creating derived 3D rectangles

- [SPRect3DIntegral](rect3d/integral.md): Returns the smallest rectangle after converting the source rectangle values to integers.
- [SPRect3DInset](rect3d/inset%28by_%29.md): Returns a new rectangle with the same center point after applying the specified inset amount.
- [SPRect3DStandardize](rect3d/standardized.md): A rectangle with positive dimensions.
- [SPRect3DIntersection](sprect3dintersection.md): Returns the intersection of two rectangles.
- [SPRect3DUnion](sprect3dunion.md): Returns the smallest rectangle that contains two rectangles.

### Comparing values

- [SPRect3DEqualToRect](sprect3dequaltorect.md): Returns a Boolean value that indicates whether two values are equal.

### Deprecated symbols

- [SPRect3DTranslate](sprect3dtranslate-8amf1.md): Deprecated. Returns a rectangle with an origin that’s offset by the specified size.
- [SPRect3DDistanceBetweenOrigins](sprect3ddistancebetweenorigins.md): Deprecated. Returns the distance between the origins of two rectangles.
- [SPRect3DRotationToRect](sprect3drotationtorect.md): Deprecated. Returns the rotation around the origin from the first rectangle to the second rectangle.

## Relationships

### Conforms To

- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### 3D primitives

- [SPPoint3D](point3d.md): A point in a 3D coordinate system.
- [SPPoint3DFloat](point3dfloat.md): A single-precision structure that contains a point in a three-dimensional coordinate system.
- [SPSize3D](size3d.md): A size that describes width, height, and depth in a 3D coordinate system.
- [SPSize3DFloat](size3dfloat.md): A single-precision structure that contains width, height, and depth values.
- [SPRect3DFloat](rect3dfloat.md): A single-precision structure that contains the location and dimensions of a 3D rectangle.
- [SPRotation3D](rotation3d.md): A rotation in three dimensions.
- [SPRotation3DFloat](rotation3dfloat.md): A single-precision structure that represents a rotation in three dimensions.
- [SPRotationAxis3D](rotationaxis3d.md): A 3D rotation axis.
- [SPRotationAxis3DFloat](rotationaxis3dfloat.md): A 3D axis.
- [SPPose3D](pose3d.md): A structure that contains a 3D position and a 3D rotation.
- [SPPose3DFloat](pose3dfloat.md): A single-precision structure that contains a position and rotation.
- [SPScaledPose3D](scaledpose3d.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DFloat](scaledpose3dfloat.md): A structure that contains a position, rotation, and scale.
- [SPSphericalCoordinates3D](sphericalcoordinates3d.md): A structure that defines spherical coordinates in radial, inclination, azimuthal order.
- [SPSphericalCoordinates3DFloat](sphericalcoordinates3dfloat.md): A single-precision structure that defines spherical coordinates in radial, inclination, azimuthal order.
