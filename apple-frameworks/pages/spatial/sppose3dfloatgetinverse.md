> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatgetinverse](https://developer.apple.com/documentation/spatial/sppose3dfloatgetinverse)

# SPPose3DFloatGetInverse

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPose3DFloat SPPose3DFloatGetInverse(SPPose3DFloat pose);
```

## Parameters

- `pose`: The source pose.

<a id="return-value"></a>

## Return Value

A new pose structure.

<a id="discussion"></a>

## Discussion

Returns a new pose with the inverse matrix of the specified pose.
