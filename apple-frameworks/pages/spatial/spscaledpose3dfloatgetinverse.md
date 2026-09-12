> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloatgetinverse](https://developer.apple.com/documentation/spatial/spscaledpose3dfloatgetinverse)

# SPScaledPose3DFloatGetInverse

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatGetInverse(SPScaledPose3DFloat scaledPose);
```

## Parameters

- `scaledPose`: The source scaled pose.

<a id="return-value"></a>

## Return Value

A new scaled pose structure.

<a id="discussion"></a>

## Discussion

Returns a new scaled pose with the inverse matrix of the specified scaled pose.
