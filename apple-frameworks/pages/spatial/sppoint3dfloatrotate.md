> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dfloatrotate](https://developer.apple.com/documentation/spatial/sppoint3dfloatrotate)

# SPPoint3DFloatRotate

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPoint3DFloat SPPoint3DFloatRotate(SPPoint3DFloat point, SPRotation3DFloat rotation);
```

## Parameters

- `point`: The source point.
- `rotation`: The rotation.

<a id="return-value"></a>

## Return Value

A point that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a point that’s rotated by the specified rotation around the origin.

This function is equivalent to calling @p SPPoint3DRotateAroundPoint with a zero vector for the pivot.
