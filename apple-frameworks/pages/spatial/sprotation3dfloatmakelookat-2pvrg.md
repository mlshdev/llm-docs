> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dfloatmakelookat-2pvrg](https://developer.apple.com/documentation/spatial/sprotation3dfloatmakelookat-2pvrg)

# SPRotation3DFloatMakeLookAt

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotation3DFloat SPRotation3DFloatMakeLookAt(SPPoint3DFloat position, SPPoint3DFloat target, SPVector3DFloat up);
```

## Parameters

- `position`: The eye position.
- `target`: The point that the rotation looks at.
- `up`: The up direction.

<a id="return-value"></a>

## Return Value

A new rotation stucture.

<a id="discussion"></a>

## Discussion

Returns a rotation that’s the look at direction from the position position to the target.

> **Note**

> This function creates a rotation where @p +z is forward.
