> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatflip](https://developer.apple.com/documentation/spatial/sppose3dfloatflip)

# SPPose3DFloatFlip

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPose3DFloat SPPose3DFloatFlip(SPPose3DFloat pose, SPAxis flipAxis);
```

## Parameters

- `pose`: The source pose.
- `flipAxis`: The flip axis.

<a id="return-value"></a>

## Return Value

A new pose flipped along the specified axis.

<a id="discussion"></a>

## Discussion

Returns a pose that’s flipped along the specified axis.

If you pass a flip axis that’s not @p x , @p y , or @p z , the function returns @p pose unmodified.
