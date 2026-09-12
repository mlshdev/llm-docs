> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dfloatgetangle](https://developer.apple.com/documentation/spatial/sprotation3dfloatgetangle)

# SPRotation3DFloatGetAngle

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAngleFloat SPRotation3DFloatGetAngle(SPRotation3DFloat rotation);
```

## Parameters

- `rotation`: The source rotation.

<a id="return-value"></a>

## Return Value

An angle structure.

<a id="discussion"></a>

## Discussion

Returns the angle, in radians, of the normalized underlying quaternion.
