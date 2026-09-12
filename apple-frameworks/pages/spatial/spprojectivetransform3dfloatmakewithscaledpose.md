> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dfloatmakewithscaledpose](https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatmakewithscaledpose)

# SPProjectiveTransform3DFloatMakeWithScaledPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatMakeWithScaledPose(SPScaledPose3DFloat pose);
```

## Parameters

- `pose`: The source scaled pose.

<a id="return-value"></a>

## Return Value

A new projective transform structure.

<a id="discussion"></a>

## Discussion

Returns a new projective transform structure from the specified scaled pose structure.
