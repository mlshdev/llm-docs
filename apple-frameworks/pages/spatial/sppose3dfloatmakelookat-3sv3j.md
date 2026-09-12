> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatmakelookat-3sv3j](https://developer.apple.com/documentation/spatial/sppose3dfloatmakelookat-3sv3j)

# SPPose3DFloatMakeLookAt

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPose3DFloat SPPose3DFloatMakeLookAt(SPPoint3DFloat position, SPPoint3DFloat target, SPVector3DFloat up);
```

## Parameters

- `position`: A point structure that specifies the position of the pose.
- `target`: The point that the pose orients towards.
- `up`: The up direction.

<a id="return-value"></a>

## Return Value

A new pose structure.

<a id="discussion"></a>

## Discussion

Returns a pose at the specified position with the rotation towards the target.
