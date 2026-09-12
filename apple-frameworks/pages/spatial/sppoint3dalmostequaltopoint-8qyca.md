> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dalmostequaltopoint-8qyca](https://developer.apple.com/documentation/spatial/sppoint3dalmostequaltopoint-8qyca)

# SPPoint3DAlmostEqualToPoint

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
static bool SPPoint3DAlmostEqualToPoint(SPPoint3D p1, SPPoint3D p2);
```

## Parameters

- `p1`: The first point.
- `p2`: The first point.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the two points are equal within the specified default absolute tolerance.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the two points are equal within the specified default absolute tolerance.

> **Note**

> The Spatial default tolerance is @p sqrt(**DBL_EPSILON**) .

## See Also

### Comparing values

- [SPPoint3DAlmostEqualToPoint](sppoint3dalmostequaltopoint-9vk02.md): Returns a Boolean value that indicates whether the two points are equal within the specified default absolute tolerance.
- [SPPoint3DEqualToPoint](sppoint3dequaltopoint.md): Returns a Boolean value that indicates whether two values are equal.
