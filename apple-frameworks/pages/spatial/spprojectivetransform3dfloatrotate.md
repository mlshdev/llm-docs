> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dfloatrotate](https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatrotate)

# SPProjectiveTransform3DFloatRotate

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatRotate(SPProjectiveTransform3DFloat transform, SPRotation3DFloat rotation);
```

## Parameters

- `transform`: The source transform.
- `rotation`: The rotation.

<a id="return-value"></a>

## Return Value

A transform that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a projective transform that’s constructed by concatenating an existing projective transform and a rotation.
