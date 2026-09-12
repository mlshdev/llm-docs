> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dfloatslerplongest](https://developer.apple.com/documentation/spatial/sprotation3dfloatslerplongest)

# SPRotation3DFloatSlerpLongest

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotation3DFloat SPRotation3DFloatSlerpLongest(SPRotation3DFloat from, SPRotation3DFloat to, float t);
```

## Parameters

- `from`: The starting rotation.
- `to`: The ending rotation.
- `t`: The value, between @p 0 and @p 1, that the function interpolates at.

<a id="return-value"></a>

## Return Value

A new rotation. When @p t=0, the result is the @p from rotation. When @p t=1.0, the result is the @p to rotation. For any other value of @p t, the result is a spherical linear interpolation between the two rotations.

<a id="discussion"></a>

## Discussion

Returns the spherical linear interpolation along the longest arc between two rotations.
