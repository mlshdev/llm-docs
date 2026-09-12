> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dalmostequaltopose-9hr1m](https://developer.apple.com/documentation/spatial/sppose3dalmostequaltopose-9hr1m)

# SPPose3DAlmostEqualToPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static bool SPPose3DAlmostEqualToPose(SPPose3D p1, SPPose3D p2);
```

## Parameters

- `p1`: The first pose.
- `p2`: The first pose.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the two pose’s matrices are equal within the Spatial default absolute tolerance.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the two poses’s matrices are equal within the Spatial default absolute tolerance.

> **Note**

> The Spatial default tolerance is @p sqrt(**DBL_EPSILON**) .

## See Also

### Comparing values

- [SPPose3DEqualToPose](sppose3dequaltopose.md): Returns a Boolean value that indicates whether two values are equal.
- [SPPose3DAlmostEqualToPose](sppose3dalmostequaltopose-21t5f.md): Returns a Boolean value that indicates whether two poses are equal within a specified tolerance.
