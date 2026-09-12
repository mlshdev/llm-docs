> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/scrolltovisible(_:)](https://developer.apple.com/documentation/appkit/nsview/scrolltovisible(_:))

# scrollToVisible(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.

## Declaration

```swift
func scrollToVisible(_ rect: NSRect) -> Bool
```

## Parameters

- `rect`: The rectangle to be made visible in the clip view.

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if any scrolling is performed; otherwise returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [scroll(to:)](../nsclipview/scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.
- [isDescendant(of:)](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.

### Scrolling the View

- [prepareContent(in:)](preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scroll(\_:)](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [autoscroll(with:)](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll(\_:)](adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [scroll(\_:to:)](scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView(\_:)](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [isCompatibleWithResponsiveScrolling](iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.

# scrollRectToVisible: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.

## Declaration

```objectivec
- (BOOL) scrollRectToVisible:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle to be made visible in the clip view.

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if any scrolling is performed; otherwise returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [scrollToPoint:](../nsclipview/scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.
- [isDescendantOf:](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.

### Scrolling the View

- [prepareContentInRect:](preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scrollPoint:](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [autoscroll:](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll:](adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [scrollClipView:toPoint:](scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView:](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [compatibleWithResponsiveScrolling](iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.
