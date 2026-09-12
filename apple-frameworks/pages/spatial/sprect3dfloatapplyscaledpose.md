> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dfloatapplyscaledpose](https://developer.apple.com/documentation/spatial/sprect3dfloatapplyscaledpose)

# SPRect3DFloatApplyScaledPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatApplyScaledPose(SPRect3DFloat rect, SPScaledPose3DFloat pose);
```

## Parameters

- `rect`: The source rectangle.
- `pose`: The scaled pose that the function applies to the rectangle.

<a id="return-value"></a>

## Return Value

The transformed rectangle.

<a id="discussion"></a>

## Discussion

Returns a rectangle that’s transformed by the specified scaled pose.
