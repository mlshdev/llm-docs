> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatmake-6wx8e](https://developer.apple.com/documentation/spatial/sppose3dfloatmake-6wx8e)

# SPPose3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPose3DFloat SPPose3DFloatMake(SPPose3D pose);
```

## Parameters

- `pose`: The pose.

<a id="return-value"></a>

## Return Value

A new pose.

<a id="discussion"></a>

## Discussion

Returns a single-precision pose from a double-precision pose.
