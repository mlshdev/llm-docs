> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatmakewithprojectivetransform](https://developer.apple.com/documentation/spatial/sppose3dfloatmakewithprojectivetransform)

# SPPose3DFloatMakeWithProjectiveTransform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPose3DFloat SPPose3DFloatMakeWithProjectiveTransform(SPProjectiveTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform. The function only considers the transform’s rotation and translation components.

<a id="return-value"></a>

## Return Value

A pose with a position and rotation that are defined by a projective transform.

<a id="discussion"></a>

## Discussion

Returns a pose with with a position and rotation that are defined by a projective transform.

> **Note**

> This function can’t extract rotation from a non-scale-rotate-translate projective transform. In that case, the function returns @p SPPose3DFloatInvalid.
