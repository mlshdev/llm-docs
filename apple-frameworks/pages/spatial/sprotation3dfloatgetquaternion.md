> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dfloatgetquaternion](https://developer.apple.com/documentation/spatial/sprotation3dfloatgetquaternion)

# SPRotation3DFloatGetQuaternion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_quatf SPRotation3DFloatGetQuaternion(SPRotation3DFloat rotation);
```

## Parameters

- `rotation`: The source rotation.

<a id="return-value"></a>

## Return Value

A quaternion with an axis and angle derived from the source rotation.

<a id="discussion"></a>

## Discussion

Returns the rotation represented as a normalized quaternion.
