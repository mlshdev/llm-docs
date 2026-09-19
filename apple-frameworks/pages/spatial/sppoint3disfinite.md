> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sppoint3disfinite

# SPPoint3DIsFinite

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static bool SPPoint3DIsFinite(SPPoint3D point);
```

## Parameters

- `point`: The source point.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether all of the coordinates of the point are finite.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether all of the coordinates of the point are finite.

## See Also

### Checking characteristics

- [SPPoint3DDistanceToPoint](point3d/distance%28to_%29.md): Returns the distance between two points.
- [SPPoint3DIsNaN](sppoint3disnan.md)
- [SPPoint3DIsZero](sppoint3diszero.md)
