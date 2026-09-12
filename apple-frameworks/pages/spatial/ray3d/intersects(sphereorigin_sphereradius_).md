> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3d/intersects(sphereorigin:sphereradius:)](https://developer.apple.com/documentation/spatial/ray3d/intersects(sphereorigin:sphereradius:))

# intersects(sphereOrigin:sphereRadius:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a Boolean value that indicates whether the ray intersects a specified sphere.

## Declaration

```swift
func intersects(sphereOrigin: Point3D, sphereRadius: Double) -> Bool
```

## See Also

### Checking characteristics

- [isFinite](isfinite.md): A Boolean value that indicates whether all of the values of the ray are finite.
- [isNaN](isnan.md): A Boolean value that indicates whether the ray contains any NaN values.
- [isZero](iszero.md): A Boolean value that indicates whether all of the values of the ray are zero.
- [intersects(\_:)](intersects%28__%29.md): Returns a Boolean value that indicates whether a ray intersects a rectangle.

# SPRay3DIntersectsSphere (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a Boolean value that indicates whether the ray intersects a specified sphere.

## Declaration

```objectivec
static bool SPRay3DIntersectsSphere(SPRay3D ray, SPPoint3D sphereOrigin, double sphereRadius);
```

## See Also

### Checking characteristics

- [SPRay3DIsFinite](../spray3disfinite.md): A Boolean value that indicates whether all of the values of the ray are finite.
- [SPRay3DIsNaN](../spray3disnan.md): A Boolean value that indicates whether the ray contains any NaN values.
- [SPRay3DIsZero](../spray3diszero.md): A Boolean value that indicates whether all of the values of the ray are zero.
- [SPRay3DIntersectsRect](../spray3dintersectsrect.md): Returns a Boolean value that indicates whether a ray intersects a rectangle.
