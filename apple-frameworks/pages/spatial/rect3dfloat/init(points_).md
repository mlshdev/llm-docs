> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/rect3dfloat/init(points:)

# init(points:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle that’s the bounding box of the specified points.

## Declaration

```swift
init(points: [Point3DFloat])
```

## Parameters

- `points`: The array of points.

<a id="discussion"></a>

## Discussion

> **Precondition**

> The `points` array must contain at least one element.
