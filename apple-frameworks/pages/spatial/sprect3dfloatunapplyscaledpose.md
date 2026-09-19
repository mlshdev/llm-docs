> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sprect3dfloatunapplyscaledpose

# SPRect3DFloatUnapplyScaledPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatUnapplyScaledPose(SPRect3DFloat rect, SPScaledPose3DFloat pose);
```

## Parameters

- `rect`: The source rectangle.
- `pose`: The scaled pose that the function unapplies to the rectangle.

<a id="return-value"></a>

## Return Value

The transformed rectangle.

<a id="discussion"></a>

## Discussion

Returns a rectangle that’s transformed by the inverse of the specified scaled pose.

> **Note**

> The pose’s rotation angle must be zero, otherwise this function returns @p SPRect3DFloatNull .
