> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dalmostequaltorotation-3deix](https://developer.apple.com/documentation/spatial/sprotation3dalmostequaltorotation-3deix)

# SPRotation3DAlmostEqualToRotation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
static bool SPRotation3DAlmostEqualToRotation(SPRotation3D r1, SPRotation3D r2, double tolerance);
```

## Parameters

- `r1`: The first rotation.
- `r2`: The second rotation.
- `tolerance`: How close the two rotations must be to be considered “almost equal”.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the two rotations are equal within the specified absolute tolerance.

## See Also

### Comparing values

- [SPRotation3DEqualToRotation](sprotation3dequaltorotation.md): Returns a Boolean value that indicates whether two values are equal.
- [SPRotation3DAlmostEqualToRotation](sprotation3dalmostequaltorotation-53c20.md)
