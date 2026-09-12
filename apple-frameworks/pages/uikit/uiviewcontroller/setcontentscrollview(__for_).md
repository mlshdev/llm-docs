> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/setcontentscrollview(_:for:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/setcontentscrollview(_:for:))

# setContentScrollView(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Sets the scroll view that bars observe for the specified edge.

## Declaration

```swift
func setContentScrollView(_ scrollView: UIScrollView?, for edge: NSDirectionalRectEdge)
```

## Parameters

- `scrollView`: The scroll view to observe. If `nil`, the view controller determines a scroll view automatically.
- `edge`: The edge to observe for scroll view content alignment. Pass [top](../nsdirectionalrectedge/top.md) or [bottom](../nsdirectionalrectedge/bottom.md) to set the scroll view for a specific edge, or pass [all](../nsdirectionalrectedge/all.md) to set the scroll view for all edges.

<a id="Discussion"></a>

## Discussion

Toolbars, navigation bars, and tab bars adjust their appearance when the edge of a scroll view’s content aligns with the edge of the bar. The view controller identifies a scroll view to observe by analyzing the view hierarchy to select a scroll view. If the view hierarchy is complex, the view controller might not select the appropriate scroll view to observe. Use this method to indicate a specific scroll view for the view controller to observe.

To disable the scroll edge appearance for one or more edges, override [contentScrollView(for:)](contentscrollview%28for_%29.md).

## See Also

### Working with scrolling content

- [setContentScrollView(\_:)](setcontentscrollview%28__%29.md): Sets the scroll view that bars observe for all edges of the view.
- [contentScrollView(for:)](contentscrollview%28for_%29.md): Returns the scroll view the view controller observes for the specified edge.

# setContentScrollView:forEdge: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Sets the scroll view that bars observe for the specified edge.

## Declaration

```objectivec
- (void) setContentScrollView:(UIScrollView *) scrollView forEdge:(NSDirectionalRectEdge) edge;
```

## Parameters

- `scrollView`: The scroll view to observe. If `nil`, the view controller determines a scroll view automatically.
- `edge`: The edge to observe for scroll view content alignment. Pass [NSDirectionalRectEdgeTop](../nsdirectionalrectedge/top.md) or [NSDirectionalRectEdgeBottom](../nsdirectionalrectedge/bottom.md) to set the scroll view for a specific edge, or pass [NSDirectionalRectEdgeAll](../nsdirectionalrectedge/all.md) to set the scroll view for all edges.

<a id="Discussion"></a>

## Discussion

Toolbars, navigation bars, and tab bars adjust their appearance when the edge of a scroll view’s content aligns with the edge of the bar. The view controller identifies a scroll view to observe by analyzing the view hierarchy to select a scroll view. If the view hierarchy is complex, the view controller might not select the appropriate scroll view to observe. Use this method to indicate a specific scroll view for the view controller to observe.

To disable the scroll edge appearance for one or more edges, override [contentScrollViewForEdge:](contentscrollview%28for_%29.md).

## See Also

### Working with scrolling content

- [contentScrollViewForEdge:](contentscrollview%28for_%29.md): Returns the scroll view the view controller observes for the specified edge.
