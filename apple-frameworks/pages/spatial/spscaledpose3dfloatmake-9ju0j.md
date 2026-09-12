> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloatmake-9ju0j](https://developer.apple.com/documentation/spatial/spscaledpose3dfloatmake-9ju0j)

# SPScaledPose3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatMake(SPPose3DFloat pose, float scale);
```

## Parameters

- `pose`: The pose structure.
- `scale`: The uniform scale.

<a id="return-value"></a>

## Return Value

A new scaled pose structure.

<a id="discussion"></a>

## Discussion

Returns a scaled pose with the specified pose and uniform scale.
