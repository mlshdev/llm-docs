> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dalmostequaltopose-1qgpl](https://developer.apple.com/documentation/spatial/spscaledpose3dalmostequaltopose-1qgpl)

# SPScaledPose3DAlmostEqualToPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
static bool SPScaledPose3DAlmostEqualToPose(SPScaledPose3D p1, SPScaledPose3D p2);
```

## Parameters

- `p1`: The first scaled pose.
- `p2`: The first scaled pose.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the two scaled poses are equal within the Spatial default absolute tolerance.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the two scaled poses are equal within the Spatial default absolute tolerance.

> **Note**

> The Spatial default tolerance is @p sqrt(**DBL_EPSILON**) .

## See Also

### Comparing values

- [SPScaledPose3DAlmostEqualToPose](spscaledpose3dalmostequaltopose-4ahe1.md): Returns a Boolean value that indicates whether the two scaled poses are equal within the specified absolute tolerance.
- [SPScaledPose3DEqualToPose](spscaledpose3dequaltopose.md): Returns a Boolean value that indicates whether two values are equal.
