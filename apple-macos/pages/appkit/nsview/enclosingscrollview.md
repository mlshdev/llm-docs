> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/enclosingscrollview](https://developer.apple.com/documentation/appkit/nsview/enclosingscrollview)

# enclosingScrollView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The nearest ancestor scroll view that contains the current view.

## Declaration

```swift
var enclosingScrollView: NSScrollView? { get }
```

<a id="Discussion"></a>

## Discussion

If the current view is not embedded inside a scroll view, the value of this property is `nil`. This property does not contain the current view if the current view is itself a scroll view. It always contains an ancestor scroll view.

## See Also

### Scrolling the View

- [prepareContent(in:)](preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scroll(\_:)](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollToVisible(\_:)](scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll(with:)](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll(\_:)](adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [scroll(\_:to:)](scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView(\_:)](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [isCompatibleWithResponsiveScrolling](iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.

# enclosingScrollView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The nearest ancestor scroll view that contains the current view.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSScrollView * enclosingScrollView;
```

<a id="Discussion"></a>

## Discussion

If the current view is not embedded inside a scroll view, the value of this property is `nil`. This property does not contain the current view if the current view is itself a scroll view. It always contains an ancestor scroll view.

## See Also

### Scrolling the View

- [prepareContentInRect:](preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scrollPoint:](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollRectToVisible:](scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll:](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll:](adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [scrollClipView:toPoint:](scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView:](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [compatibleWithResponsiveScrolling](iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.
