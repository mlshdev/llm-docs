> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloatmakelookat-61u16](https://developer.apple.com/documentation/spatial/spscaledpose3dfloatmakelookat-61u16)

# SPScaledPose3DFloatMakeLookAt

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatMakeLookAt(SPPoint3DFloat position, SPPoint3DFloat target, float scale, SPVector3DFloat up);
```

## Parameters

- `position`: A point structure that specifies the position of the scaled pose.
- `target`: The point that the scaled pose orients towards.
- `scale`: The uniform scale of the pose.
- `up`: The up direction.

<a id="return-value"></a>

## Return Value

A new scaled pose structure.

<a id="discussion"></a>

## Discussion

Returns a scaled pose at the specified position with the rotation towards the target.
