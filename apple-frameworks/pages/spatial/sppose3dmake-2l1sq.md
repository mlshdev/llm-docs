> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dmake-2l1sq](https://developer.apple.com/documentation/spatial/sppose3dmake-2l1sq)

# SPPose3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPPose3D SPPose3DMake(SPPoint3D position, SPRotation3D rotation);
```

## Parameters

- `position`: A point structure that specifies the position of the pose.
- `rotation`: A rotation structure that specifies the rotation of the pose.

<a id="return-value"></a>

## Return Value

A new pose structure.

<a id="discussion"></a>

## Discussion

Returns a pose with the specified position and rotation.
