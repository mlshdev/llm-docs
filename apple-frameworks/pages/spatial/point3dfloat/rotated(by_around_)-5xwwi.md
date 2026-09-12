> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/point3dfloat/rotated(by:around:)-5xwwi](https://developer.apple.com/documentation/spatial/point3dfloat/rotated(by:around:)-5xwwi)

# rotated(by:around:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func rotated(by rotation: Rotation3DFloat, around pivot: Point3DFloat) -> Point3DFloat
```

## Parameters

- `rotation`: The rotation.
- `pivot`: The center of rotation.

<a id="return-value"></a>

## Return Value

A point that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a point that’s rotated by a rotation around a specified pivot.

# SPPoint3DFloatRotateAroundPoint (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPPoint3DFloat SPPoint3DFloatRotateAroundPoint(SPPoint3DFloat point, SPRotation3DFloat rotation, SPPoint3DFloat pivot);
```

## Parameters

- `point`: The source point.
- `rotation`: The rotation.
- `pivot`: The center of rotation.

<a id="return-value"></a>

## Return Value

A point that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a point that’s rotated by a rotation around a specified pivot.
