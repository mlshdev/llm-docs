> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dfloatapplypose](https://developer.apple.com/documentation/spatial/sprect3dfloatapplypose)

# SPRect3DFloatApplyPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatApplyPose(SPRect3DFloat rect, SPPose3DFloat pose);
```

## Parameters

- `rect`: The source rectangle.
- `pose`: The pose that the function applies to the size.

<a id="return-value"></a>

## Return Value

The transformed rectangle.

<a id="discussion"></a>

## Discussion

Returns a rectangle that’s transformed by the specified pose.
