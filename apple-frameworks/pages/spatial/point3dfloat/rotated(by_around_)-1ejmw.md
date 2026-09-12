> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/point3dfloat/rotated(by:around:)-1ejmw](https://developer.apple.com/documentation/spatial/point3dfloat/rotated(by:around:)-1ejmw)

# rotated(by:around:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func rotated(by quaternion: simd_quatf, around pivot: Point3DFloat) -> Point3DFloat
```

## Parameters

- `quaternion`: The quaternion that defines the rotation.
- `pivot`: The center of rotation.

<a id="return-value"></a>

## Return Value

A point that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a point that’s rotated by a quaternion around a specified pivot.

# SPPoint3DFloatRotateByQuaternionAroundPoint (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPoint3DFloat SPPoint3DFloatRotateByQuaternionAroundPoint(SPPoint3DFloat point, simd_quatf quaternion, SPPoint3DFloat pivot);
```

## Parameters

- `point`: The source point.
- `quaternion`: The quaternion that defines the rotation.
- `pivot`: The center of rotation.

<a id="return-value"></a>

## Return Value

A point that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a point that’s rotated by a quaternion around a specified pivot.
