> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewlayoutregion/layoutregionforbarondirectionaledge:extent:

# layoutRegionForBarOnDirectionalEdge:extent:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Returns a bar layout region of a given extent on a given directional edge.

## Declaration

```objectivec
+ (UIViewLayoutRegion *) layoutRegionForBarOnDirectionalEdge:(NSDirectionalRectEdge) edge extent:(CGFloat) extent;
```

<a id="discussion"></a>

## Discussion

> **Note**

> Only a single edge is allowed per region.
