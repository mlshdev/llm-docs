> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloatmake-9ihr7](https://developer.apple.com/documentation/spatial/spscaledpose3dfloatmake-9ihr7)

# SPScaledPose3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatMake(SPPoint3DFloat position, SPRotation3DFloat rotation, float scale);
```

## Parameters

- `position`: A point structure that specifies the position of the scaled pose.
- `rotation`: A rotation structure that specifies the rotation of the scaled pose.
- `scale`: The uniform scale of the pose.

<a id="return-value"></a>

## Return Value

A new scaled pose structure.

<a id="discussion"></a>

## Discussion

Returns a scaled pose with the specified position, rotation, and scale.
