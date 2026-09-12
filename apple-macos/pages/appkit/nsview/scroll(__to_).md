> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/scroll(_:to:)](https://developer.apple.com/documentation/appkit/nsview/scroll(_:to:))

# scroll(\_:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.

## Declaration

```swift
func scroll(_ clipView: NSClipView, to point: NSPoint)
```

## Parameters

- `clipView`: The [NSClipView](../nsclipview.md) object whose superview is to be notified.
- `point`: A point that specifies the new origin of the clip view’s bounds rectangle.

<a id="Discussion"></a>

## Discussion

The superview of `clipView` should then send a [scroll(to:)](../nsclipview/scroll%28to_%29.md) message to `clipView` with `point` as the argument. This mechanism is provided so the `NSClipView` object’s superview can coordinate scrolling of multiple tiled clip views.

## See Also

### Related Documentation

- [scroll(to:)](../nsclipview/scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.

### Scrolling the View

- [prepareContent(in:)](preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scroll(\_:)](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollToVisible(\_:)](scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll(with:)](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll(\_:)](adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [reflectScrolledClipView(\_:)](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [isCompatibleWithResponsiveScrolling](iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.

# scrollClipView:toPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.

## Declaration

```objectivec
- (void) scrollClipView:(NSClipView *) clipView toPoint:(NSPoint) point;
```

## Parameters

- `clipView`: The [NSClipView](../nsclipview.md) object whose superview is to be notified.
- `point`: A point that specifies the new origin of the clip view’s bounds rectangle.

<a id="Discussion"></a>

## Discussion

The superview of `clipView` should then send a [scrollToPoint:](../nsclipview/scroll%28to_%29.md) message to `clipView` with `point` as the argument. This mechanism is provided so the `NSClipView` object’s superview can coordinate scrolling of multiple tiled clip views.

## See Also

### Related Documentation

- [scrollToPoint:](../nsclipview/scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.

### Scrolling the View

- [prepareContentInRect:](preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scrollPoint:](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollRectToVisible:](scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll:](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll:](adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [reflectScrolledClipView:](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [compatibleWithResponsiveScrolling](iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.
