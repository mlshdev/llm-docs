> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dfloatmake-3pbt1](https://developer.apple.com/documentation/spatial/sprotation3dfloatmake-3pbt1)

# SPRotation3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotation3DFloat SPRotation3DFloatMake(SPAngleFloat angle, SPRotationAxis3DFloat axis);
```

## Parameters

- `angle`: The angle of the rotation.
- `axis`: The axis of the rotation.

<a id="return-value"></a>

## Return Value

A new rotation stucture.

<a id="discussion"></a>

## Discussion

Returns a rotation over the specified axis with the specified angle.
