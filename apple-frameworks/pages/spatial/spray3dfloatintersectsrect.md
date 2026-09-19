> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spray3dfloatintersectsrect

# SPRay3DFloatIntersectsRect

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPRay3DFloatIntersectsRect(SPRay3DFloat ray, SPRect3DFloat rect);
```

## Parameters

- `ray`: The ray.
- `rect`: The rectangle.

<a id="return-value"></a>

## Return Value

A  Boolean value that indicates whether the ray intersects a specified rectangle.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the ray intersects a specified rectangle.
