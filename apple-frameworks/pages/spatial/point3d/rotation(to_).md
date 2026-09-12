> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/point3d/rotation(to:)](https://developer.apple.com/documentation/spatial/point3d/rotation(to:))

# rotation(to:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 17.0) · iPadOS 16.0+ (deprecated in 17.0) · Mac Catalyst 16.0+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0) · tvOS 16.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 10.0)

Returns the rotation around the origin from the first point to the second point.

> Use `SPVector3DRotationToVector`.

## Declaration

```swift
func rotation(to other: Point3D) -> Rotation3D
```

## Parameters

- `other`: The second point that the function computes the rotation to.

<a id="return-value"></a>

## Return Value

The rotation between two points.

## See Also

### Deprecated symbols

- [origin](origin.md): Deprecated.
- [simd](simd.md): Deprecated. A simd three-element vector that contains the x-, y-, and z-coordinate values.

# SPPoint3DRotationToPoint (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 17.0) · iPadOS 16.0+ (deprecated in 17.0) · Mac Catalyst 16.0+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0) · tvOS 16.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 10.0)

Returns the rotation around the origin from the first point to the second point.

> Use `SPVector3DRotationToVector`.

## Declaration

```objectivec
static SPRotation3D SPPoint3DRotationToPoint(SPPoint3D point, SPPoint3D other);
```

## Parameters

- `point`: The point to rotate.
- `other`: The second point that the function computes the rotation to.

<a id="return-value"></a>

## Return Value

The rotation between two points.

## See Also

### Deprecated symbols

- [SPPoint3DGetOrigin](../sppoint3dgetorigin.md): Deprecated. The location of the point.
- [SPPoint3DTranslate](../sppoint3dtranslate-8xo6b.md): Deprecated. Returns a point with an origin that’s offset by the specified size.
