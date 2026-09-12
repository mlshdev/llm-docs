> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dfloatmakewithpose](https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatmakewithpose)

# SPProjectiveTransform3DFloatMakeWithPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatMakeWithPose(SPPose3DFloat pose);
```

## Parameters

- `pose`: The source pose.

<a id="return-value"></a>

## Return Value

A new projective transform structure.

<a id="discussion"></a>

## Discussion

Returns a new projective transform structure from the specified pose structure.
