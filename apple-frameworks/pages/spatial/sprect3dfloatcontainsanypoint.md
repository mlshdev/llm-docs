> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sprect3dfloatcontainsanypoint

# SPRect3DFloatContainsAnyPoint

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPRect3DFloatContainsAnyPoint(SPRect3DFloat rect, const SPPoint3DFloat *points, int pointCount);
```

## Parameters

- `rect`: The rectangle.
- `points`: The points.
- `pointCount`: The number of points.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the rectangle contains any of the specified points.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the rectangle contains any of the specified points.
