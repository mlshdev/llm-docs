> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/unprojectpoint(_:ontoplane:viewrotationangle:viewportsize:)](https://developer.apple.com/documentation/arkit/arcamera/unprojectpoint(_:ontoplane:viewrotationangle:viewportsize:))

# unprojectPoint(\_:ontoPlane:viewRotationAngle:viewportSize:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Unprojects a 2D point in image space onto a 3D plane in world space.

## Declaration

```swift
@nonobjc func unprojectPoint(_ point: CGPoint, ontoPlane planeTransform: simd_float4x4, viewRotationAngle: CGFloat, viewportSize: CGSize) -> simd_float3?
```

## Parameters

- `point`: The 2D point in the image to unproject.
- `planeTransform`: The 4x4 matrix representing the plane in world space.
- `viewRotationAngle`: The view rotation angle, in degrees. Prefer it over an interface orientation, whose reported value cannot always be relied upon. Obtain it from `ARSession.viewRotationAngle`.
- `viewportSize`: The size of the viewport.

<a id="return-value"></a>

## Return Value

The 3D point in world space, or `nil` if the point cannot be unprojected.
