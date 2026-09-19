> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spsize3dfloatcontainsanypoint

# SPSize3DFloatContainsAnyPoint

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPSize3DFloatContainsAnyPoint(SPSize3DFloat size, const SPPoint3DFloat *points, int pointCount);
```

## Parameters

- `size`: The size.
- `points`: The points.
- `pointCount`: The number of points.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the size contains any of the specified points.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the size contains any of the specified points.
