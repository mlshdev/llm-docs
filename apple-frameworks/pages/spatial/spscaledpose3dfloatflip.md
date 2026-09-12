> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloatflip](https://developer.apple.com/documentation/spatial/spscaledpose3dfloatflip)

# SPScaledPose3DFloatFlip

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatFlip(SPScaledPose3DFloat scaledPose, SPAxis flipAxis);
```

## Parameters

- `scaledPose`: The source scaled pose.
- `flipAxis`: The flip axis.

<a id="return-value"></a>

## Return Value

A new scaled pose flipped along the specified axis.

<a id="discussion"></a>

## Discussion

Returns a scaled pose that’s flipped along the specified axis.

If you pass a flip axis that’s not @p x , @p y , or @p z , the function returns @p scaled pose unmodified.

> **Note**

> The flipped scaled pose that this function returns has the same scale as the specified pose.
