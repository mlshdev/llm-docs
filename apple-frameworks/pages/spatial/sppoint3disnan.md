> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3disnan](https://developer.apple.com/documentation/spatial/sppoint3disnan)

# SPPoint3DIsNaN

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static bool SPPoint3DIsNaN(SPPoint3D point);
```

## Parameters

- `point`: The source point.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the point contains any NaN values.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the point contains any NaN values.

## See Also

### Checking characteristics

- [SPPoint3DDistanceToPoint](point3d/distance%28to_%29.md): Returns the distance between two points.
- [SPPoint3DIsFinite](sppoint3disfinite.md)
- [SPPoint3DIsZero](sppoint3diszero.md)
