> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewlayoutregion/layoutregionforbarondirectionaledge:extent:

# layoutRegionForBarOnDirectionalEdge:extent:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

Returns a bar layout region of a given extent on a given directional edge.

## Declaration

```objectivec
+ (UIViewLayoutRegion *) layoutRegionForBarOnDirectionalEdge:(NSDirectionalRectEdge) edge extent:(CGFloat) extent;
```

<a id="discussion"></a>

## Discussion

> **Note**

> Only a single edge is allowed per region.
