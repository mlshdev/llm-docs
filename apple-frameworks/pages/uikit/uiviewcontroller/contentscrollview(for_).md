> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/contentscrollview(for:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/contentscrollview(for:))

# contentScrollView(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the scroll view the view controller observes for the specified edge.

## Declaration

```swift
func contentScrollView(for edge: NSDirectionalRectEdge) -> UIScrollView?
```

## Parameters

- `edge`: The edge the scroll view observes for alignment, [top](../nsdirectionalrectedge/top.md) or [bottom](../nsdirectionalrectedge/bottom.md). Passing any other value raises an exception.

<a id="return-value"></a>

## Return Value

The scroll view the view controller observes for the edge.

<a id="Discussion"></a>

## Discussion

Toolbars, navigation bars, and tab bars adjust their appearance when the edge of a scroll view’s content aligns with the edge of the bar. If you want to disable this behavior for one or more edges, override this method and return `nil` for the appropriate edge. If you don’t set a scroll view with [setContentScrollView(\_:for:)](setcontentscrollview%28__for_%29.md) or [setContentScrollView(\_:)](setcontentscrollview%28__%29.md), the default implementation of this method returns `nil`.

The following example disables the scroll edge view for the top edge only. This example disables the appearance changes of the navigation bar at the top edge, but not the toolbar at the bottom edge.

```swift
override func contentScrollView(for edge: NSDirectionalRectEdge) -> UIScrollView? {
    if edge == .top {
        return nil
    } else {
        return super.contentScrollView(for: edge)
    }
}
```

## See Also

### Working with scrolling content

- [setContentScrollView(\_:for:)](setcontentscrollview%28__for_%29.md): Sets the scroll view that bars observe for the specified edge.
- [setContentScrollView(\_:)](setcontentscrollview%28__%29.md): Sets the scroll view that bars observe for all edges of the view.

# contentScrollViewForEdge: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the scroll view the view controller observes for the specified edge.

## Declaration

```objectivec
- (UIScrollView *) contentScrollViewForEdge:(NSDirectionalRectEdge) edge;
```

## Parameters

- `edge`: The edge the scroll view observes for alignment, [NSDirectionalRectEdgeTop](../nsdirectionalrectedge/top.md) or [NSDirectionalRectEdgeBottom](../nsdirectionalrectedge/bottom.md). Passing any other value raises an exception.

<a id="return-value"></a>

## Return Value

The scroll view the view controller observes for the edge.

<a id="Discussion"></a>

## Discussion

Toolbars, navigation bars, and tab bars adjust their appearance when the edge of a scroll view’s content aligns with the edge of the bar. If you want to disable this behavior for one or more edges, override this method and return `nil` for the appropriate edge. If you don’t set a scroll view with [setContentScrollView:forEdge:](setcontentscrollview%28__for_%29.md) or [setContentScrollView(\_:)](setcontentscrollview%28__%29.md), the default implementation of this method returns `nil`.

The following example disables the scroll edge view for the top edge only. This example disables the appearance changes of the navigation bar at the top edge, but not the toolbar at the bottom edge.

```swift
override func contentScrollView(for edge: NSDirectionalRectEdge) -> UIScrollView? {
    if edge == .top {
        return nil
    } else {
        return super.contentScrollView(for: edge)
    }
}
```

## See Also

### Working with scrolling content

- [setContentScrollView:forEdge:](setcontentscrollview%28__for_%29.md): Sets the scroll view that bars observe for the specified edge.
