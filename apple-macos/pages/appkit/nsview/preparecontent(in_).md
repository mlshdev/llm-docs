> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/preparecontent(in:)](https://developer.apple.com/documentation/appkit/nsview/preparecontent(in:))

# prepareContent(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Prepares the overdraw region for drawing.

## Declaration

```swift
func prepareContent(in rect: NSRect)
```

## Parameters

- `rect`: The current overdraw region, specified in the view’s coordinate system. This rectangle includes the view’s visible rectangle plus any space surrounding the visible rectangle that represents the overdraw region.

<a id="Discussion"></a>

## Discussion

During responsive scrolling, AppKit calls this method before asking your view to draw any content in the overdraw region. You can override this method in your own views and use it to prepare the content that is about to be drawn. For example, if your app defers the creation of subviews until they are scrolled into view, you would use this method to create them and add them to your view hierarchy.

Your implementation of this method must call `super` at some point. When calling `super`, you can extend the overdraw rectangle by passing a different rectangle for the `rect` parameter. For example, if you add a subview whose frame falls outside the current rectangle, you can grow the rectangle to include the entire frame of the subview.

AppKit may call this method multiple times to build up the current overdraw region slowly. Each time it calls the method, it extends the overdraw rectangle passed in the `rect` parameter. If you pass the same rectangle to `super` twice in succession, AppKit stops generating additional overdraw content. You can use this behavior to avoid generating more overdraw content than makes sense for your app. If the user scrolls the content, AppKit resets the current overdraw region and starts asking your app for content again. You can also reset the current overdraw region by assigning a value to the [preparedContentRect](preparedcontentrect.md) property.

## See Also

### Scrolling the View

- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scroll(\_:)](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollToVisible(\_:)](scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll(with:)](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll(\_:)](adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [scroll(\_:to:)](scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView(\_:)](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [isCompatibleWithResponsiveScrolling](iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.

# prepareContentInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Prepares the overdraw region for drawing.

## Declaration

```objectivec
- (void) prepareContentInRect:(NSRect) rect;
```

## Parameters

- `rect`: The current overdraw region, specified in the view’s coordinate system. This rectangle includes the view’s visible rectangle plus any space surrounding the visible rectangle that represents the overdraw region.

<a id="Discussion"></a>

## Discussion

During responsive scrolling, AppKit calls this method before asking your view to draw any content in the overdraw region. You can override this method in your own views and use it to prepare the content that is about to be drawn. For example, if your app defers the creation of subviews until they are scrolled into view, you would use this method to create them and add them to your view hierarchy.

Your implementation of this method must call `super` at some point. When calling `super`, you can extend the overdraw rectangle by passing a different rectangle for the `rect` parameter. For example, if you add a subview whose frame falls outside the current rectangle, you can grow the rectangle to include the entire frame of the subview.

AppKit may call this method multiple times to build up the current overdraw region slowly. Each time it calls the method, it extends the overdraw rectangle passed in the `rect` parameter. If you pass the same rectangle to `super` twice in succession, AppKit stops generating additional overdraw content. You can use this behavior to avoid generating more overdraw content than makes sense for your app. If the user scrolls the content, AppKit resets the current overdraw region and starts asking your app for content again. You can also reset the current overdraw region by assigning a value to the [preparedContentRect](preparedcontentrect.md) property.

## See Also

### Scrolling the View

- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scrollPoint:](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollRectToVisible:](scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll:](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll:](adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [scrollClipView:toPoint:](scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView:](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [compatibleWithResponsiveScrolling](iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.
