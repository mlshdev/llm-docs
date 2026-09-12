> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/adjustscroll(_:)](https://developer.apple.com/documentation/appkit/nsview/adjustscroll(_:))

# adjustScroll(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to modify a given rectangle, returning the altered rectangle.

## Declaration

```swift
func adjustScroll(_ newVisible: NSRect) -> NSRect
```

## Parameters

- `newVisible`: A rectangle that defines a region of the view.

<a id="Discussion"></a>

## Discussion

[NSClipView](../nsclipview.md) invokes this method to allow its document view to adjust its position during scrolling. For example, a custom view object that displays a table of data can adjust the origin of `newVisible` so rows or columns aren’t cut off by the edge of the enclosing [NSClipView](../nsclipview.md). The [NSView](../nsview.md) implementation simply returns `newVisible`.

[NSClipView](../nsclipview.md) only invokes this method during automatic or user controlled scrolling. Its [scroll(to:)](../nsclipview/scroll%28to_%29.md) method doesn’t invoke this method, so you can still force a scroll to an arbitrary point.

## See Also

### Scrolling the View

- [prepareContent(in:)](preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scroll(\_:)](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollToVisible(\_:)](scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll(with:)](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [scroll(\_:to:)](scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView(\_:)](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [isCompatibleWithResponsiveScrolling](iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.

# adjustScroll: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to modify a given rectangle, returning the altered rectangle.

## Declaration

```objectivec
- (NSRect) adjustScroll:(NSRect) newVisible;
```

## Parameters

- `newVisible`: A rectangle that defines a region of the view.

<a id="Discussion"></a>

## Discussion

[NSClipView](../nsclipview.md) invokes this method to allow its document view to adjust its position during scrolling. For example, a custom view object that displays a table of data can adjust the origin of `newVisible` so rows or columns aren’t cut off by the edge of the enclosing [NSClipView](../nsclipview.md). The [NSView](../nsview.md) implementation simply returns `newVisible`.

[NSClipView](../nsclipview.md) only invokes this method during automatic or user controlled scrolling. Its [scrollToPoint:](../nsclipview/scroll%28to_%29.md) method doesn’t invoke this method, so you can still force a scroll to an arbitrary point.

## See Also

### Scrolling the View

- [prepareContentInRect:](preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scrollPoint:](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollRectToVisible:](scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll:](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [scrollClipView:toPoint:](scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView:](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [compatibleWithResponsiveScrolling](iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.
