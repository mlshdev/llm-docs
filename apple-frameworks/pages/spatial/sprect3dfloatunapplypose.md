> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dfloatunapplypose](https://developer.apple.com/documentation/spatial/sprect3dfloatunapplypose)

# SPRect3DFloatUnapplyPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatUnapplyPose(SPRect3DFloat rect, SPPose3DFloat pose);
```

## Parameters

- `rect`: The source rectangle.
- `pose`: The pose that the function unapplies to the size.

<a id="return-value"></a>

## Return Value

The transformed rectangle.

<a id="discussion"></a>

## Discussion

Returns a rectangle that’s transformed by the inverse of the specified pose.

> **Note**

> The pose’s rotation angle must be zero, otherwise this function returns @p SPRect3DFloatNull .
