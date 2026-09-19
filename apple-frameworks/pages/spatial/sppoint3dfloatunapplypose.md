> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sppoint3dfloatunapplypose

# SPPoint3DFloatUnapplyPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPoint3DFloat SPPoint3DFloatUnapplyPose(SPPoint3DFloat point, SPPose3DFloat pose);
```

## Parameters

- `point`: The source point.
- `pose`: The pose that the function unapplies to the point.

<a id="return-value"></a>

## Return Value

The transformed point.

<a id="discussion"></a>

## Discussion

Returns a point that’s transformed by the inverse of the specified pose.
