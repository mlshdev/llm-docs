> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloatmakelookat-4kx9a](https://developer.apple.com/documentation/spatial/spscaledpose3dfloatmakelookat-4kx9a)

# SPScaledPose3DFloatMakeLookAt

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatMakeLookAt(SPVector3DFloat forward, float scale, SPVector3DFloat up);
```

## Parameters

- `forward`: The forward direction.
- `scale`: The uniform scale of the pose.
- `up`: The up direction.

<a id="return-value"></a>

## Return Value

A new scaled pose stucture.

<a id="discussion"></a>

## Discussion

Returns a scaled pose with the specified forward and up vectors.

> **Note**

> This function creates a scaled pose where @p +z is forward.
