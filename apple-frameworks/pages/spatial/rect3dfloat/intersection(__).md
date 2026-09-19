> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/rect3dfloat/intersection(_:)

# intersection(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the intersection of two rectangles.

## Declaration

```swift
func intersection(_ other: Rect3DFloat) -> Rect3DFloat?
```

## Parameters

- `other`: The second rectangle.

<a id="discussion"></a>

## Discussion

- Returns The intersection of `self` and `other`.
