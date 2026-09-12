> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dfloatunapplyscaledpose](https://developer.apple.com/documentation/spatial/sppoint3dfloatunapplyscaledpose)

# SPPoint3DFloatUnapplyScaledPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPoint3DFloat SPPoint3DFloatUnapplyScaledPose(SPPoint3DFloat point, SPScaledPose3DFloat pose);
```

## Parameters

- `point`: The source point.
- `pose`: The pose that the function unapplies to the point.

<a id="return-value"></a>

## Return Value

The transformed point.

<a id="discussion"></a>

## Discussion

Returns a point that’s transformed by the inverse of the specified scaled pose.
