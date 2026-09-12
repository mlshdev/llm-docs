> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatmakelookat-5v9ru](https://developer.apple.com/documentation/spatial/sppose3dfloatmakelookat-5v9ru)

# SPPose3DFloatMakeLookAt

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPose3DFloat SPPose3DFloatMakeLookAt(SPVector3DFloat forward, SPVector3DFloat up);
```

## Parameters

- `forward`: The forward direction.
- `up`: The up direction.

<a id="return-value"></a>

## Return Value

A new pose stucture.

<a id="discussion"></a>

## Discussion

Returns a pose with the specified forward and up vectors.

> **Note**

> This function creates a pose where @p +z is forward.
