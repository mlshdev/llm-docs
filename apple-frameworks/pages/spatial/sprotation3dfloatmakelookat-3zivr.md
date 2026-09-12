> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dfloatmakelookat-3zivr](https://developer.apple.com/documentation/spatial/sprotation3dfloatmakelookat-3zivr)

# SPRotation3DFloatMakeLookAt

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotation3DFloat SPRotation3DFloatMakeLookAt(SPVector3DFloat forward, SPVector3DFloat up);
```

## Parameters

- `forward`: The forward direction.
- `up`: The up direction.

<a id="return-value"></a>

## Return Value

A new rotation stucture.

<a id="discussion"></a>

## Discussion

Returns a rotation with the specified forward and up vectors.

> **Note**

> This function creates a rotation where @p +z is forward.
